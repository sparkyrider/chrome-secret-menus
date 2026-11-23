# Chrome Secret Menus

[![GitHub stars](https://img.shields.io/github/stars/sparkyrider/chrome-secret-menus?style=social)](https://github.com/sparkyrider/chrome-secret-menus)
[![GitHub forks](https://img.shields.io/github/forks/sparkyrider/chrome-secret-menus?style=social)](https://github.com/sparkyrider/chrome-secret-menus/network/members)
[![License](https://img.shields.io/github/license/sparkyrider/chrome-secret-menus)](LICENSE)

Paste `chrome://chrome-urls` into Google Chrome's address bar to see its hidden
menus. `chrome://about` opens the same list. This guide explains which pages
help you check settings, troubleshoot a problem, or inspect how Chrome works.

> **Verified November 23, 2026 · Chrome 158 Stable.** Google announced
> **158.0.8127.36/.37** for Windows and macOS and **158.0.8127.36** for Linux.
> The rollout is staged. Check your installed build at `chrome://version`.
> [Google's desktop release announcement](https://chromereleases.googleblog.com/2026/11/stable-channel-update-for-desktop_01699533288.html).

In a fresh **Chrome for Testing 158.0.8127.36** profile on macOS arm64, Chrome
listed **127 Chrome URLs** (115 enabled, 12 disabled), **41 internal debugging
entries** (39 configuration-enabled, 2 disabled), and **34 debug commands**.
The [complete November snapshot](data/chrome-158.0.8127.36-macos-arm64.json)
preserves all three lists. For the changes since July, see
[renamed and retired pages](#removed-renamed-and-easily-misunderstood-pages).

## Start with Chrome's own list

Your browser builds its own list from the platform, profile, policies, and
features it has enabled. Chrome 158 groups entries under three headings.

1. **List of Chrome URLs** includes ordinary settings and diagnostic pages,
   embedded dialogs, side panels, and registered features. Disabled entries
   appear as plain text.
2. **Internal Debugging Page URLs** has an **Enable internal debugging pages**
   button. In a disposable profile, use it to inspect a diagnostic page, then
   disable it when finished. A page with its own unmet feature or profile
   requirement stays unavailable.
3. **Command URLs for Debug** lists commands that can crash, hang, quit, or
   restart Chrome. Chrome shows these as plain text.

### Status terms

| Status | Meaning |
| --- | --- |
| **Available** | Enabled in the Chrome 158 macOS capture, or directly verified for a subpage. |
| **Internal toggle** | Requires the master toggle under Internal Debugging Page URLs. |
| **Feature/profile** | Registered, but usefulness or availability depends on a feature, account, region, policy, or profile state. |
| **Platform/build** | Compiled or registered only on certain operating systems or build configurations. |
| **Flow/embedded** | Intended for a Chrome-owned dialog, side panel, setup flow, or embedded frame rather than direct use. |
| **Partially legacy** | The page remains useful, but a major older function has been removed. |
| **Legacy alias** | Still resolves, but another host is canonical. |
| **Removed** | No longer registered in the stated Chrome release. |
| **Upstream only** | Found in the pinned Chromium development source and absent from the Chrome 158 release source. |

> [!CAUTION]
> Internal pages can reveal visited origins, account identifiers, device
> details, local paths, policy values, tokens, model state, and diagnostic
> logs. Redact exports and screenshots before sharing them. Never try the
> debug commands in a normal browsing session.

## High-value menus

These are the pages most likely to be useful for routine inspection and
troubleshooting.

| URL | Status | What it is for |
| --- | --- | --- |
| `chrome://chrome-urls` | Available | The installation's dynamically generated master list. |
| `chrome://version` | Available | Version, revision, OS, user agent, executable/profile paths, and command line. |
| `chrome://settings` | Available | Main settings UI. |
| `chrome://settings/help` | Available | About Chrome. Shows the installed version and, in regular Google Chrome, checks for updates. |
| `chrome://settings/performance` | Available | Memory Saver, Energy Saver, performance alerts, and site exceptions, subject to device support and policy. |
| `chrome://settings/content` | Available | View and change site permissions. Use `chrome://settings/content/all` to look up one site's permissions and stored data. |
| `chrome://flags` | Available | Temporary experiments. Flags change or disappear without notice and are not production configuration. |
| `chrome://components` | Available | Installed component versions and update controls. |
| `chrome://policy` | Available | Loaded enterprise policies, their sources, scope, and status. |
| `chrome://management` | Available | Whether Chrome/profile is managed and which management capabilities are active. |
| `chrome://system` | Available | Browser and operating-system diagnostic data. |
| `chrome://support-tool` | Feature/profile | Guided collection of selected diagnostic data for support cases. Review and redact any export. |
| `chrome://crashes` | Available | Local crash records; upload information depends on crash-reporting settings. |
| `chrome://gpu` | Available | Graphics feature status, driver information, workarounds, and diagnostics. |
| `chrome://traces` | Available | Current Local Traces UI for scenarios, reports, and trace recording. |
| `chrome://net-export` | Available | Capture a NetLog for later analysis. Captures can contain sensitive browsing data. |
| `chrome://webrtc-internals` | Available | Live WebRTC peer-connection, media, and `getUserMedia` diagnostics. |
| `chrome://media-internals` | Available | Media pipeline players, events, properties, and errors. |
| `chrome://inspect` | Available | Inspect pages, extensions, workers, and configured remote targets. |
| `chrome://extensions` | Available | Extension management UI. |
| `chrome://extensions-internals` | Available | Extension registry and service diagnostics. |
| `chrome://certificate-manager` | Available | Certificate management backed by Chrome's certificate stack and platform integration. |
| `chrome://password-manager` | Available | Password Manager UI. |
| `chrome://sync-internals` | Available | Sync transport, data types, events, and errors. |
| `chrome://autofill-internals` | Available | Autofill event log and form-filling diagnostics. |
| `chrome://serviceworker-internals` | Available | Service-worker registrations and state. |
| `chrome://web-app-internals` | Available | Installed web-app/PWA configuration and diagnostics. |
| `chrome://dino` | Available | The offline T-Rex game. |

## Current diagnostic pages by area

### Browser, profiles, metrics, and policy

| URL | Status | What it is for |
| --- | --- | --- |
| `chrome://accessibility` | Available | Inspect accessibility trees, active assistive technology, and Chrome's accessibility mode. |
| `chrome://app-service-internals` | Available | Inspect App Service registrations and publishers. The results depend on the OS and installed apps. |
| `chrome://connectors-internals` | Available | Inspect enterprise connector status, including Device Trust and managed client certificates. |
| `chrome://credits` | Available | Open-source notices and licenses. |
| `chrome://device-log` | Available | Events from Bluetooth, USB, networking, and other device subsystems. |
| `chrome://histograms` | Available | In-memory UMA histogram samples. |
| `chrome://metrics-internals` | Available | Metrics-service state and logs. |
| `chrome://prefs-internals` | Available | Effective preference values and stores. Treat the output as sensitive. |
| `chrome://process-internals` | Available | Site-isolation and process-model diagnostics. |
| `chrome://profile-internals` | Internal toggle | Profile attributes and state. It appears in both URL lists, but opening it with debugging turned off displays Chrome's disabled-pages notice. |
| `chrome://signin-internals` | Available | Sign-in, account, token, and identity diagnostics. |
| `chrome://updater` | Available | Chrome updater state on supported desktop installations. |
| `chrome://user-actions` | Internal toggle | Live user-action metric names. |
| `chrome://ukm` | Internal toggle | URL-keyed metrics state and recorded entries. |

### Performance, storage, and rendering

| URL | Status | What it is for |
| --- | --- | --- |
| `chrome://blob-internals` | Available | Active blob objects and backing storage. |
| `chrome://discards` | Internal toggle | Tab lifecycle/discardability state and manual discard controls. |
| `chrome://indexeddb-internals` | Available | IndexedDB origins, paths, and metadata. |
| `chrome://quota-internals` | Available | Storage quota usage and buckets by origin. |
| `chrome://tracing` | Internal toggle | Low-level tracing UI; separate from the newer Local Traces page. |
| `chrome://traces-internals` | Legacy alias | Temporary compatibility alias for `chrome://traces`. |
| `chrome://webnn-internals` | Available | Inspect active WebNN contexts and recorded machine-learning graphs. |

### Network, media, and hardware

| URL | Status | What it is for |
| --- | --- | --- |
| `chrome://bluetooth-internals` | Available | Bluetooth adapters, devices, services, and GATT inspection. |
| `chrome://gcm-internals` | Available | Chrome messaging/registration diagnostics used by push and extensions. The historical GCM name remains in Chrome source. |
| `chrome://media-engagement` | Available | Per-origin media engagement scores used by browser heuristics. |
| `chrome://net-internals` | Partially legacy | Proxy, DNS, sockets, HSTS/domain-security policy, shared-dictionary, and utility tools remain. The old live Events/NetLog viewer was removed; use `chrome://net-export`. |
| `chrome://predictors` | Available | Navigation, preconnect, and resource-prediction state. |
| `chrome://site-engagement` | Available | Per-origin site engagement scores. |
| `chrome://translate-internals` | Available | Translate decisions, events, language state, and errors. |
| `chrome://usb-internals` | Available | USB devices, descriptors, permissions, and testing controls. |

### Apps, accounts, and content

| URL | Status | What it is for |
| --- | --- | --- |
| `chrome://apps` | Available | Chrome's app home for installed web apps and, where applicable, legacy Chrome Apps. The page itself is not obsolete. |
| `chrome://app-settings` | Flow/embedded | Per-app settings surface, normally opened with an app identifier. |
| `chrome://bookmarks` | Available | Bookmark Manager. |
| `chrome://downloads` | Available | Downloads UI. |
| `chrome://history` | Available | Browsing History UI. |
| `chrome://iwa-dev` | Available / Feature/profile | Isolated Web App Developer Tool. The page opens in a regular profile. Installing or updating development apps requires IWA developer mode. [Chromium's IWA tool documentation](https://chromium.googlesource.com/chromium/src/+/refs/tags/158.0.8127.36/chrome/browser/ui/webui/iwa_dev/README.md). |
| `chrome://ntp-tiles-internals` | Available | See which sites supply the shortcut tiles on the New Tab Page and where Chrome got them. |
| `chrome://password-manager-internals` | Available | Password-manager event diagnostics. Output can be sensitive. |
| `chrome://print` | Platform/build | Print Preview in builds that include it; normally opened as part of a print flow. |
| `chrome://view-cert` | Platform/build / Flow/embedded | Certificate viewer host used from certificate-related UI; direct navigation may be empty or unsupported. |

### AI, ML, suggestions, and experiments

These surfaces are especially volatile. “Available” means the WebUI was
enabled in the clean test build, not that every underlying model or service was
eligible.

| URL | Status | What it is for |
| --- | --- | --- |
| `chrome://on-device-translation-internals` | Available | On-device Translation API language-pack status and install/uninstall controls. |
| `chrome://skills` | Feature/profile | Chrome Skills UI; functionality can depend on account, region, rollout, and feature configuration. |
| `chrome://suggest-internals` | Available | Suggest service configuration, requests, and responses. |
| `chrome://actor-internals` | Internal toggle | Actor/task execution events and trace export for experimental agentic features. |
| `chrome://autofill-ml-internals` | Internal toggle | Autofill machine-learning model diagnostics. |
| `chrome://context-hub` | Internal toggle | Experimental Context Hub diagnostics. |
| `chrome://contextual-cueing-internals` | Internal toggle | Generated contextual cues, decisions, and debug feedback. |
| `chrome://on-device-internals` | Internal toggle | Built-in AI model-service status, model state, and diagnostic tools. |
| `chrome://optimization-guide-internals` | Internal toggle | Optimization Guide hints, models, downloads, and decisions. |
| `chrome://notebooks-internals` | Internal toggle | Shows Notebooks eligibility and feature configuration for the current profile. |
| `chrome://private-ai-internals` | Internal toggle | Private AI service diagnostics; this replaced the former `chrome://legion-internals` name. |
| `chrome://indigo-internals` | Internal toggle | Shows Indigo service status, Gemini in Chrome integration, and loaded prompts. Its configuration was enabled in the test profile. |

## Complete Internal Debugging URL set

The Chrome 158 macOS capture started with the master toggle off. Turning it on
made 39 of these 41 entries clickable. The two marked “+ feature” still had
an unmet feature check.

| URL | Gate | Purpose |
| --- | --- | --- |
| `chrome://actor-internals` | Internal toggle | Actor/task event diagnostics and trace export. |
| `chrome://autofill-ml-internals` | Internal toggle | Autofill ML diagnostics. |
| `chrome://browser-actuator-internals` | Internal toggle + feature | Browser Actuator diagnostics. Both the actuator and its internal UI have separate feature checks. |
| `chrome://color-pipeline-internals` | Internal toggle | Color-pipeline configuration and experiments. |
| `chrome://commerce-internals` | Internal toggle | Shopping and commerce service state. |
| `chrome://content-settings` | Internal toggle | Inspect Chrome's content-setting rules, patterns, and sources. Use `chrome://settings/content` to change site permissions. |
| `chrome://context-hub` | Internal toggle | Experimental Context Hub diagnostics. |
| `chrome://contextual-cueing-internals` | Internal toggle | Contextual cue generation and feedback. |
| `chrome://critical-actions-internals` | Internal toggle | Inspect recorded critical actions. The page opens even when action logging is inactive. [Chromium's page documentation](https://chromium.googlesource.com/chromium/src/+/refs/tags/158.0.8127.36/chrome/browser/ui/webui/critical_actions/README.md). |
| `chrome://data-sharing-internals` | Internal toggle | Data-sharing and shared-tab-group service state. |
| `chrome://discards` | Internal toggle | Tab lifecycle and discard controls. |
| `chrome://download-internals` | Internal toggle | Download service tasks and state. |
| `chrome://family-link-user-internals` | Internal toggle | Supervised-user and Family Link state. |
| `chrome://history-clusters-internals` | Internal toggle | History clustering/Journeys diagnostics. |
| `chrome://indigo-internals` | Internal toggle | Indigo service status and integration diagnostics. |
| `chrome://infobar-internals` | Internal toggle | Infobar creation and state diagnostics. |
| `chrome://interstitials` | Internal toggle | Test and preview security/warning interstitials. |
| `chrome://local-state` | Internal toggle | Browser-wide Local State preference viewer. |
| `chrome://location-internals` | Internal toggle | Location service state. |
| `chrome://media-router-internals` | Internal toggle | Cast/media-router diagnostics. |
| `chrome://multistep-filter-internals` | Internal toggle + feature | Multi-step filtering diagnostics. |
| `chrome://network-errors` | Internal toggle | Catalog and preview of network error pages. |
| `chrome://notebooks-internals` | Internal toggle | Notebooks eligibility and configuration. |
| `chrome://omnibox-internals` | Internal toggle | Inspect address-bar autocomplete providers, suggestions, and scores. The old `chrome://omnibox` address redirects here. |
| `chrome://on-device-internals` | Internal toggle | On-device AI model-service diagnostics. |
| `chrome://optimization-guide-internals` | Internal toggle | Hints, model downloads, and optimization decisions. |
| `chrome://page-action-internals` | Internal toggle | Preview address-bar action icons, chips, and their anchored messages. |
| `chrome://private-ai-internals` | Internal toggle | Private AI service diagnostics. |
| `chrome://profile-internals` | Internal toggle | Profile attributes and state. |
| `chrome://regional-capabilities-internals` | Internal toggle | Region-dependent capability state. |
| `chrome://safe-browsing` | Internal toggle | Safe Browsing databases, logs, and diagnostics. |
| `chrome://subresource-filter-internals` | Internal toggle | Subresource-filter rules and activation state. |
| `chrome://tab-strip-internals` | Internal toggle | Tab-strip implementation and state diagnostics. |
| `chrome://tracing` | Internal toggle | Low-level trace recording/viewing UI. |
| `chrome://ukm` | Internal toggle | URL-keyed metrics state. |
| `chrome://unexportable-keys-internals` | Internal toggle | Hardware-backed/unexportable key service state. |
| `chrome://user-actions` | Internal toggle | Live user-action metric events. |
| `chrome://user-education-internals` | Internal toggle | Feature promos, tutorials, and user-education state. |
| `chrome://webrtc-logs` | Internal toggle | Stored WebRTC diagnostic logs. |
| `chrome://webui-gallery` | Internal toggle | Chrome WebUI component gallery. |
| `chrome://webuijserror` | Internal toggle | Intentionally raises a WebUI JavaScript error for testing. |

## Special routes, aliases, and embedded surfaces

| URL | Status | Note |
| --- | --- | --- |
| `chrome://about` | Legacy alias | Alias for `chrome://chrome-urls`. |
| `chrome://help` | Settings route | Opens About Chrome/update UI through Settings. |
| `chrome://internals/session-service` | Available | The implemented Session Service diagnostic page. The bare `chrome://internals` host is registered but is not a general-purpose hub. |
| `chrome://newtab` | Special route | The New Tab Page is selected by Chrome configuration; the runtime registration can appear disabled even though opening a new tab works. |
| `chrome://organizer-panel.top-chrome` | Flow/embedded | Chrome's organizer panel. The host appears in the Stable list as a browser-owned panel. |
| `chrome://traces-internals` | Legacy alias | Compatibility alias for `chrome://traces`. |
| `*.top-chrome` hosts | Flow/embedded | Side panels, toolbar surfaces, bubbles, and other browser-owned UI. |
| `chrome-untrusted://...` hosts | Flow/embedded | Isolated subframes used by trusted Chrome UI. They are captured in the snapshot but generally are not standalone menus. |

The snapshot preserves all registered flow and embedded hosts, including sign-in
dialogs, profile setup, tab/search surfaces, Lens, print, data sharing, and GLIC.
They are not duplicated into the main guide because direct navigation often
produces an empty or incomplete surface.

## Platform and build differences

Both dated snapshots cover macOS arm64. The Chrome 158 source also identifies
pages compiled for other operating systems and builds.

| URL | Where/when |
| --- | --- |
| `chrome://conflicts` | Windows module/conflict diagnostics. |
| `chrome://sandbox` | Windows, Linux, ChromeOS, and Android; not macOS. |
| `chrome://linux-proxy-config` | Linux, ChromeOS, and OpenBSD. |
| `chrome://unexportable-keys-internals` | macOS in Chrome 158. |
| `chrome://chrome-finds-internals` | Chrome 158 registers this diagnostic under its Android build guard. It was also listed in the July desktop capture. [Registration in Chrome 158](https://chromium.googlesource.com/chromium/src/+/refs/tags/158.0.8127.36/chrome/browser/ui/webui/chrome_web_ui_configs.cc#353). |
| `chrome://webxr-internals` | Builds with WebXR/VR support. |
| `chrome://print`, extension pages, certificate UI | Depend on their corresponding build features. |

Android and ChromeOS have substantial additional host sets. Always use the
device's own master list instead of mechanically replacing `chrome://` in this
desktop inventory.

## Removed, renamed, and easily misunderstood pages

The July guide listed `chrome://iwa-dev`, `chrome://notebooks-internals`, and
`chrome://organizer-panel.top-chrome` as development-only. All three appear in
Chrome 158 Stable. The table tracks older addresses that changed or often cause
confusion. [July Chrome 151 snapshot](data/chrome-151.0.7922.71-macos-arm64.json).

| URL or area | Chrome 158 status | Current guidance |
| --- | --- | --- |
| `chrome://omnibox` | **Legacy alias** | Redirects to `chrome://omnibox-internals`, which requires the internal debugging toggle. Paths, queries, and fragments survive the redirect. [Chromium rename](https://chromium.googlesource.com/chromium/src/+/dc45e295ff43587775c85e7183c509f47e662bfc). |
| `chrome://memory-internals` | **Removed** | Chromium retired its old heap-profiling UI. For trace recording, use `chrome://traces`. [Heap-profiler removal](https://chromium.googlesource.com/chromium/src/+/a96d6bdf29f85803872faee47f723d7ff48bda58). |
| `chrome://content-annotator-internals` | **Removed** | The content-annotation diagnostic page and its logging backend were deleted. [Chromium removal](https://chromium.googlesource.com/chromium/src/+/b097414df3afcaab1a7a24a3c3768a568b050f34). |
| `chrome://personal-context-internals` | **Removed** | Chromium deleted this unused personal-context diagnostic page. [Chromium removal](https://chromium.googlesource.com/chromium/src/+/6e9684ef2b63a6073ba4a94b0d741e617f5fc006). |
| `chrome://personal-context-notice`, `chrome://signin-qrcode-bar` | **Removed** | These embedded desktop surfaces were retired. See the [personal-context notice cleanup](https://chromium.googlesource.com/chromium/src/+/c7d83e95379913d05e8ca54c899bf728ae193144) and [sign-in QR banner removal](https://chromium.googlesource.com/chromium/src/+/9430be7e664e9b20e752cd331fa7bf49d166c914). |
| `chrome://privacy-sandbox-internals` | **Removed** | The page and its subpages were retired before the July capture. [WebUI removal](https://chromium.googlesource.com/chromium/src/+/cd4f2ebcd9198ca2dbbd799906b4706b23a46424). |
| `chrome://topics-internals`, `chrome://attribution-internals`, `chrome://private-aggregation-internals` | **Removed** | July's snapshot still listed these Privacy Sandbox diagnostics. Chromium removed the [Topics](https://chromium.googlesource.com/chromium/src/+/a99ca4de8389ef68b9c8acd247517c4fa659738a), [Attribution Reporting](https://chromium.googlesource.com/chromium/src/+/de212a08955ad79b0d64edfb9cb2edf6ad5428d0), and [Private Aggregation](https://chromium.googlesource.com/chromium/src/+/063a5015ed40740a35d8bc1d726eaeaf86f74247) pages. |
| `chrome://net-internals/#events` | **Live viewer retired** | The Events tab shows a removal notice. Other `net-internals` tabs remain available. Use `chrome://net-export` to capture a NetLog. |
| `chrome://internals` | **Not a hub** | Use the implemented `chrome://internals/session-service` subpath. |
| `chrome://traces-internals` | **Legacy alias** | Prefer `chrome://traces`; `chrome://tracing` remains a separate internal-debug UI. |
| `chrome://legion-internals` | **Renamed** | Current name: `chrome://private-ai-internals` ([rename change](https://chromium.googlesource.com/chromium/src/+/302fb77ae999a6cc3fa256d88d005f55402852bb)). |

`chrome://apps` remains an app-home WebUI. Legacy packaged Chrome Apps have a
separate, phased ChromeOS retirement schedule; see Google's
[Chrome Apps support timeline](https://support.google.com/chrome/a/answer/15950395)
instead of treating the whole page as removed.

## Command URLs for Debug

> [!WARNING]
> The commands below deliberately crash, kill, hang, restart, or apply memory
> pressure to Chrome processes. This repository records the strings for audit
> purposes. It does not test them.

| Commands | Effect |
| --- | --- |
| `chrome://badcastcrash`, `chrome://inducebrowsercrashforrealz`, `chrome://inducebrowserdcheckforrealz` | Force browser-process crash/check paths. |
| `chrome://uithreadhang` | Hang the browser UI thread. |
| `chrome://crash`, `chrome://crash/rust`, `chrome://crashdump`, `chrome://kill` | Crash/kill the current renderer or request a crash dump. |
| `chrome://crash/browser/member-dereference-after-free`, `chrome://crash/browser/heap-overflow`, `chrome://crash/browser/use-after-free`, `chrome://crash/browser/heap-underflow` | Inject specific browser-process memory faults. |
| `chrome://crash/gpu/member-dereference-after-free`, `chrome://crash/gpu/heap-overflow`, `chrome://crash/gpu/use-after-free`, `chrome://crash/gpu/heap-underflow` | Inject specific GPU-process memory faults. |
| `chrome://crash/renderer/member-dereference-after-free`, `chrome://crash/renderer/heap-overflow`, `chrome://crash/renderer/use-after-free`, `chrome://crash/renderer/heap-underflow` | Inject specific renderer-process memory faults. |
| `chrome://hang`, `chrome://shorthang` | Induce renderer hangs. |
| `chrome://gpuclean`, `chrome://gpucrash`, `chrome://gpuhang` | Exercise GPU reset/crash/hang paths. |
| `chrome://memory-exhaust`, `chrome://memory-pressure-critical`, `chrome://memory-pressure-moderate` | Exhaust memory or simulate memory-pressure levels. |
| `chrome://blink-oom`, `chrome://blink-oom/worker`, `chrome://v8-oom` | Out-of-memory diagnostics listed for Blink and V8. |
| `chrome://webuijserror` | Raise a WebUI JavaScript error. |
| `chrome://quit`, `chrome://restart` | Quit or restart the entire browser. |

The command list varies by platform and build. Your installation shows its
own set under **Command URLs for Debug**.

## Chromium development preview

`chrome://craft` is **upstream only**. The November 23 Chromium main revision
(Chrome 160 development) registers this desktop page behind the Craft feature.
Chrome 158 has no corresponding registration.
[Pinned development registration](https://chromium.googlesource.com/chromium/src/+/567b985b342dbd46faf32b83d25accbf287259dd/chrome/browser/ui/webui/chrome_web_ui_configs.cc#375) ·
[Craft feature check](https://chromium.googlesource.com/chromium/src/+/567b985b342dbd46faf32b83d25accbf287259dd/chrome/browser/ui/webui/craft/craft_ui.cc).

## Edge and Brave

- **Microsoft Edge** lists its pages at `edge://edge-urls`.
- **Brave** lists its pages at `brave://chrome-urls`. [Brave's list implementation](https://github.com/brave/brave-core/blob/89d7419b40e907125dc4713e81cd4af4211beb71/chromium_src/components/webui/chrome_urls/resources/app.html.ts.lit_mangler.ts).

Chromium derivatives add, remove, rename, and gate their own pages. A Chrome
status in this guide must not be treated as an Edge or Brave guarantee.

## Verification and primary sources

Google's release records identify the Stable build. The running browser and
the matching Chromium tag establish which menus it lists.

- [Chrome Releases](https://chromereleases.googleblog.com/),
  [Google's VersionHistory API](https://developer.chrome.com/docs/web-platform/versionhistory/guide),
  and [Chromium Dash](https://chromiumdash.appspot.com/releases?platform=Mac)
  for desktop versions and staged rollouts.
- [Chrome for Testing availability](https://googlechromelabs.github.io/chrome-for-testing/)
  for official versioned test binaries and channel metadata.
- [Chrome 158 release notes](https://chromestatus.com/release-notes/158)
  and [Chrome Enterprise 158 release notes](https://chromeenterprise.google/resources/release-notes/?ver=158)
  for platform changes and enterprise rollout details.
- [Chrome flags documentation](https://developer.chrome.com/docs/web-platform/chrome-flags)
  and [Chrome Help's flags warning](https://support.google.com/chrome/answer/16552482).
- Chrome Help for [checking for updates](https://support.google.com/chrome/answer/95414),
  [performance features](https://support.google.com/chrome/answer/12929150)
  and Chrome for Developers on
  [debugging built-in AI models](https://developer.chrome.com/docs/ai/debug-built-in-model).
- The Chrome 158 [browser registrations](https://chromium.googlesource.com/chromium/src/+/refs/tags/158.0.8127.36/chrome/browser/ui/webui/chrome_web_ui_configs.cc),
  [content registrations](https://chromium.googlesource.com/chromium/src/+/refs/tags/158.0.8127.36/content/browser/webui/content_web_ui_configs.cc),
  [command list](https://chromium.googlesource.com/chromium/src/+/refs/tags/158.0.8127.36/chrome/common/webui_url_constants.cc),
  and [debug URL definitions](https://chromium.googlesource.com/chromium/src/+/refs/tags/158.0.8127.36/third_party/blink/public/common/chrome_debug_urls.h).
- The [list handler](https://chromium.googlesource.com/chromium/src/+/refs/tags/158.0.8127.36/chrome/browser/ui/webui/chrome_urls/chrome_urls_handler.cc)
  and [list UI](https://chromium.googlesource.com/chromium/src/+/refs/tags/158.0.8127.36/components/webui/chrome_urls/resources/app.ts)
  show how Chrome groups entries and applies the master toggle.
- The [Session Service route](https://chromium.googlesource.com/chromium/src/+/refs/tags/158.0.8127.36/chrome/browser/ui/webui/internals/internals_ui.cc),
  [Local Traces alias](https://chromium.googlesource.com/chromium/src/+/refs/tags/158.0.8127.36/content/browser/tracing/traces_internals/traces_internals_ui.h),
  and [network diagnostics](https://chromium.googlesource.com/chromium/src/+/refs/tags/158.0.8127.36/chrome/browser/ui/webui/net_internals/net_internals_ui.cc)
  document the special routes in this guide.

Contributions should include reproducible version, platform, runtime-group, and
source evidence. See [CONTRIBUTING.md](CONTRIBUTING.md).
