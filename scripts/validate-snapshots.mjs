#!/usr/bin/env node

import {readdir, readFile} from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dataDirectory = path.join(root, 'data');
const filenames = (await readdir(dataDirectory))
  .filter(filename => filename.endsWith('.json'))
  .sort();

const errors = [];

function requireString(value, location) {
  if (typeof value !== 'string' || value.length === 0) {
    errors.push(`${location} must be a non-empty string`);
  }
}

function filenameToken(value, preservePeriods = false) {
  const disallowedCharacters = preservePeriods
    ? /[^a-z0-9.]+/g
    : /[^a-z0-9]+/g;
  return value
    .toLowerCase()
    .replace(disallowedCharacters, '-')
    .replace(/^-|-$/g, '');
}

function requireUniqueUrlArray(value, location, allowedSchemes) {
  if (!Array.isArray(value)) {
    errors.push(`${location} must be an array`);
    return [];
  }

  const seen = new Set();
  for (const [index, url] of value.entries()) {
    requireString(url, `${location}[${index}]`);
    if (typeof url !== 'string') {
      continue;
    }
    if (!allowedSchemes.some(scheme => url.startsWith(scheme))) {
      errors.push(`${location}[${index}] has an unexpected scheme: ${url}`);
    }
    if (seen.has(url)) {
      errors.push(`${location} contains a duplicate URL: ${url}`);
    }
    seen.add(url);
  }
  return value;
}

function requireNoOverlap(left, right, location) {
  const rightSet = new Set(right);
  for (const url of left) {
    if (rightSet.has(url)) {
      errors.push(`${location} contains URL in both enabled and disabled: ${url}`);
    }
  }
}

for (const filename of filenames) {
  const location = path.join('data', filename);
  let snapshot;

  try {
    snapshot = JSON.parse(await readFile(path.join(dataDirectory, filename), 'utf8'));
  } catch (error) {
    errors.push(`${location} is not valid JSON: ${error.message}`);
    continue;
  }

  if (snapshot.schemaVersion !== 1) {
    errors.push(`${location}.schemaVersion must be 1`);
  }
  requireString(snapshot.verifiedOn, `${location}.verifiedOn`);
  requireString(snapshot.capture?.product, `${location}.capture.product`);
  requireString(snapshot.capture?.channel, `${location}.capture.channel`);
  requireString(snapshot.capture?.version, `${location}.capture.version`);
  requireString(snapshot.capture?.platform, `${location}.capture.platform`);
  requireString(
    snapshot.capture?.architecture,
    `${location}.capture.architecture`,
  );
  requireString(
    snapshot.capture?.chromiumRevision,
    `${location}.capture.chromiumRevision`,
  );

  if (
    typeof snapshot.verifiedOn === 'string' &&
    !/^\d{4}-\d{2}-\d{2}$/.test(snapshot.verifiedOn)
  ) {
    errors.push(`${location}.verifiedOn must use YYYY-MM-DD`);
  }
  if (
    typeof snapshot.capture?.chromiumRevision === 'string' &&
    !/^[0-9a-f]{40}$/.test(snapshot.capture.chromiumRevision)
  ) {
    errors.push(`${location}.capture.chromiumRevision must be a 40-character SHA`);
  }

  if (
    typeof snapshot.capture?.version === 'string' &&
    typeof snapshot.capture?.platform === 'string' &&
    typeof snapshot.capture?.architecture === 'string'
  ) {
    const expectedFilename = [
      'chrome',
      filenameToken(snapshot.capture.version, true),
      filenameToken(snapshot.capture.platform),
      filenameToken(snapshot.capture.architecture),
    ].join('-') + '.json';
    if (filename !== expectedFilename) {
      errors.push(`${location} must be named data/${expectedFilename}`);
    }
  }

  const webuiEnabled = requireUniqueUrlArray(
    snapshot.webui?.enabled,
    `${location}.webui.enabled`,
    ['chrome://', 'chrome-untrusted://'],
  );
  const webuiDisabled = requireUniqueUrlArray(
    snapshot.webui?.disabled,
    `${location}.webui.disabled`,
    ['chrome://', 'chrome-untrusted://'],
  );
  const internalEnabled = requireUniqueUrlArray(
    snapshot.internalDebugging?.enabled,
    `${location}.internalDebugging.enabled`,
    ['chrome://'],
  );
  const internalDisabled = requireUniqueUrlArray(
    snapshot.internalDebugging?.disabled,
    `${location}.internalDebugging.disabled`,
    ['chrome://'],
  );
  const commands = requireUniqueUrlArray(
    snapshot.commands,
    `${location}.commands`,
    ['chrome://'],
  );

  requireNoOverlap(
    webuiEnabled,
    webuiDisabled,
    `${location}.webui`,
  );
  requireNoOverlap(
    internalEnabled,
    internalDisabled,
    `${location}.internalDebugging`,
  );

  const expectedCounts = {
    webui: webuiEnabled.length + webuiDisabled.length,
    webuiEnabled: webuiEnabled.length,
    webuiDisabled: webuiDisabled.length,
    internalDebugging: internalEnabled.length + internalDisabled.length,
    internalDebuggingConfigEnabled: internalEnabled.length,
    internalDebuggingConfigDisabled: internalDisabled.length,
    commands: commands.length,
  };

  for (const [name, expected] of Object.entries(expectedCounts)) {
    if (snapshot.counts?.[name] !== expected) {
      errors.push(
        `${location}.counts.${name} is ${snapshot.counts?.[name]}; expected ${expected}`,
      );
    }
  }
}

if (filenames.length === 0) {
  errors.push('data must contain at least one JSON snapshot');
}

if (errors.length > 0) {
  for (const error of errors) {
    console.error(`ERROR: ${error}`);
  }
  process.exitCode = 1;
} else {
  console.log(`Validated ${filenames.length} Chrome URL snapshot(s).`);
}
