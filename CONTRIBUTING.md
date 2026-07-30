# Contributing

Thanks for helping keep this guide current. Chrome's internal pages change
quickly, and the same release can expose different hosts by operating system,
build configuration, account, policy, feature rollout, and profile state.

## What a useful change includes

For every addition, removal, rename, or status change, include:

- Chrome product, channel, full version, operating system, and architecture
- the group in `chrome://chrome-urls`:
  - Chrome URLs
  - Internal Debugging URLs
  - Commands for Debug
- whether the entry was enabled, disabled, or absent
- whether an internal-debugging master toggle or another feature was required
- a pinned Chromium source link or official Chrome documentation
- a short explanation of what changed and the replacement, if any

Screenshots are welcome when they clarify behavior, but redact account details,
visited origins, local paths, tokens, policy values, and diagnostic data.

## Verification workflow

1. Check the latest Stable versions in
   [Chromium Dash](https://chromiumdash.appspot.com/releases) and the
   [Chrome Releases blog](https://chromereleases.googleblog.com/).
2. Use a new temporary profile in the latest official Chrome or
   [Chrome for Testing](https://googlechromelabs.github.io/chrome-for-testing/).
   Do not sign in, load a normal profile, or copy a variations seed.
3. Record `chrome://version`, including the Chromium revision.
4. Capture `chrome://chrome-urls` before changing flags or the internal-page
   toggle.
5. If needed, enable Internal Debugging URLs only in that disposable profile.
   Record the master-toggle state separately from each WebUI's feature state.
6. Compare the runtime list with the matching Chromium release tag:
   - `chrome/browser/ui/webui/chrome_web_ui_configs.cc`
   - `content/browser/webui/content_web_ui_configs.cc`
   - `chrome/common/webui_url_constants.cc`
   - `third_party/blink/public/common/chrome_debug_urls.h`
7. Check current Chromium main separately. Label main-only hosts **Upstream
   only**; do not describe them as available in Stable.
8. Update the README, the appropriate versioned file in `data/`, its counts,
   and the verification date.
9. Run the repository checks:

   ```sh
   node scripts/validate-snapshots.mjs
   npx --yes markdownlint-cli2 README.md CONTRIBUTING.md
   ```

10. Verify changed external links and render the Markdown tables before
    opening a pull request.

## Safety rules

- Never automate navigation to any entry under Commands for Debug.
- Do not run crash, kill, hang, restart, memory-pressure, or corruption URLs in
  a normal session.
- Treat logs, exports, screenshots, preference pages, and support bundles as
  sensitive.
- Do not describe a page as “removed” just because it is gated or absent on one
  platform. Confirm the matching release source.
- Do not describe a registered host as a normal menu until direct-navigation
  behavior is understood; many hosts are dialogs, side panels, or subframes.

## Snapshot conventions

Snapshots preserve the order returned by Chrome. The `enabled`/`disabled`
arrays describe each WebUI configuration's own availability in the capture.
Internal Debugging URLs still require their separate master toggle even when
listed under `internalDebugging.enabled`.

Keep platform captures separate rather than merging them into an imaginary
universal list. A filename should include the Chrome version, operating system,
and architecture.
