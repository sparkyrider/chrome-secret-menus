# Contributing

Thanks for helping keep this guide current. Chrome's internal pages change
quickly, and the same release can expose different hosts by operating system,
build configuration, account, policy, feature rollout, and profile state.

## What a useful change includes

For every addition, removal, rename, or status change, include:

- Chrome product, channel, full version, operating system, and architecture
- the group in `chrome://chrome-urls`:
  - List of Chrome URLs
  - Internal Debugging Page URLs
  - Command URLs for Debug
- whether the entry was enabled, disabled, or absent
- whether an internal-debugging master toggle or another feature was required
- a pinned Chromium source link or official Chrome documentation
- a short explanation of what changed and the replacement, if any

Screenshots are welcome when they clarify behavior, but redact account details,
visited origins, local paths, tokens, policy values, and diagnostic data.

## Verification workflow

1. Identify desktop Stable from the [Chrome Releases blog](https://chromereleases.googleblog.com/)
   and cross-check the platform in [VersionHistory](https://developer.chrome.com/docs/web-platform/versionhistory/guide).
   Record the announced Mac, Windows, and Linux patch numbers separately from
   the binary used for capture. Rollouts can leave a local install one version
   behind. Check the milestone's [Chrome Status release notes](https://chromestatus.com/release-notes)
   and [Chrome Enterprise release notes](https://chromeenterprise.google/resources/release-notes/).
2. Use a new temporary profile in the latest official Chrome or
   [Chrome for Testing](https://googlechromelabs.github.io/chrome-for-testing/).
   Do not sign in, load a normal profile, or copy a variations seed.
3. From `chrome://version`, record the full version, OS, architecture, and
   Chromium revision. Keep machine-specific paths out of the snapshot.
4. Capture `chrome://chrome-urls` before changing flags or the internal-page
   toggle.
5. Record the master-toggle state separately from each WebUI's feature state.
   With the toggle off, the rendered internal entries all appear as plain
   text. Read their configuration state from the WebUI model, or compare the
   list before and after enabling debugging in the disposable profile. Check
   old bookmarks directly when documenting a rename or redirect.
6. Compare the runtime list with the matching Chromium release tag:
   - `chrome/browser/ui/webui/chrome_web_ui_configs.cc`
   - `content/browser/webui/content_web_ui_configs.cc`
   - `chrome/common/webui_url_constants.cc`
   - `third_party/blink/public/common/chrome_debug_urls.h`
7. Check current Chromium main separately. Label main-only hosts **Upstream
   only**; do not describe them as available in Stable.
8. Add the new dated capture in `data/` and keep earlier captures as history.
   Update the README's date, counts, internal debugging table, and source
   links. Check that each row in the complete table matches an entry and
   feature state in the new snapshot.
9. Run the repository checks:

   ```sh
   node scripts/validate-snapshots.mjs
   npx --yes markdownlint-cli2 README.md CONTRIBUTING.md
   ```

10. Verify changed external links and render the Markdown tables before
    opening a pull request.
11. When the refresh reaches `main`, update the month and year in the GitHub
    repository description to match the published verification date.

## Safety rules

- Never automate navigation to any entry under Command URLs for Debug, even
  if it also appears in another group.
- Do not run crash, kill, hang, restart, memory-pressure, or corruption URLs in
  a normal session.
- Treat logs, exports, screenshots, preference pages, and support bundles as
  sensitive.
- Do not describe a page as “removed” just because it is gated or absent on one
  platform. Confirm the matching release source.
- Do not describe a registered host as a normal menu until direct-navigation
  behavior is understood; many hosts are dialogs, side panels, or subframes.

## Snapshot conventions

Snapshots preserve Chrome's order within each recorded array. The `enabled`/`disabled`
arrays describe each WebUI configuration's own availability in the capture.
Internal debugging pages still require their separate master toggle even when
listed under `internalDebugging.enabled`.

Keep platform captures separate rather than merging them into an imaginary
universal list. A filename should include the Chrome version, operating system,
and architecture.
