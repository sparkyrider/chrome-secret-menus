# Chrome Secret Menus

[![GitHub stars](https://img.shields.io/github/stars/sparkyrider/chrome-secret-menus?style=social)](https://github.com/sparkyrider/chrome-secret-menus)
[![GitHub forks](https://img.shields.io/github/forks/sparkyrider/chrome-secret-menus?style=social)](https://github.com/sparkyrider/chrome-secret-menus/network/members)
[![License](https://img.shields.io/github/license/sparkyrider/chrome-secret-menus)](LICENSE)

An evidence-backed guide to Chrome's `chrome://` diagnostic pages, internal
WebUIs, settings routes, and destructive debug commands.

> **Verified July 30, 2026.** The current desktop Stable line is Chrome
> **151.0.7922.71/.72**, as published in the
> [Stable desktop release announcement](https://chromereleases.googleblog.com/2026/07/stable-channel-update-for-desktop_0887107924.html).
> This guide was checked in a clean macOS arm64
> **Chrome for Testing 151.0.7922.71** profile, against the matching Chromium
> 151 source, and against Chromium main at commit
> [`96dfd842`](https://chromium.googlesource.com/chromium/src/+/96dfd842b1413173623925072864a326d629577d)
> (Chrome 153 development).

The captured Chrome 151 inventory contains **130 registered WebUI entries**
(113 enabled and 17 disabled in that capture), **40 internal-debugging
entries** (37 configuration-enabled and 3 feature-disabled, all behind the
master toggle), and **31 destructive or process-control commands**. See the
[complete machine-readable snapshot](data/chrome-151.0.7922.71-macos-arm64.json);
the tables below intentionally emphasize pages that are useful when opened
directly.

## Start with Chrome's own list

Paste `chrome://chrome-urls` into the address bar. `chrome://about` is an
alias. This runtime list is the authority for the browser, OS, profile,
policies, feature configuration, and variations seed you are actually using.

Current Chrome divides the page into three groups:

1. **Chrome URLs** — registered WebUIs. Some are ordinary pages; others are
   embedded dialogs, side panels, setup flows, or disabled feature surfaces.
2. **Internal Debugging URLs** — developer diagnostics disabled behind a
   master toggle. Chrome warns that enabling these pages can expose sensitive
   state and that the pages may break or disappear.
3. **Commands for Debug** — URLs that deliberately crash, hang, kill, restart,
   or stress browser processes.

Registration is not a promise that direct navigation will work. A page may
require a particular OS, build flag, feature, profile state, account, policy,
region, or parent UI.

### Status terms

| Status | Meaning |
| --- | --- |
| **Available** | Observed enabled in the clean Chrome 151 macOS capture. |
| **Internal toggle** | Listed under Internal Debugging URLs and unavailable until that master toggle is enabled. |
| **Feature/profile** | Registered, but usefulness or availability depends on a feature, account, region, policy, or profile state. |
| **Platform/build** | Compiled or registered only on certain operating systems or build configurations. |
| **Flow/embedded** | Intended for a Chrome-owned dialog, side panel, setup flow, or embedded frame rather than direct use. |
| **Partially legacy** | The page remains useful, but a major older function has been removed. |
| **Legacy alias** | Still resolves, but another host is canonical. |
| **Removed** | No longer registered in the stated Chrome release. |
| **Upstream only** | Present in current Chromium source but not in Chrome 151 Stable. |

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
| `chrome://settings/performance` | Available | Memory Saver, Energy Saver, performance alerts, and site exceptions, subject to device support and policy. |
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
| `chrome://app-service-internals` | Available | App Service registry and publisher/subscriber state; relevance varies by OS and installed apps. |
| `chrome://credits` | Available | Open-source notices and licenses. |
| `chrome://device-log` | Available | Events from Bluetooth, USB, networking, and other device subsystems. |
| `chrome://histograms` | Available | In-memory UMA histogram samples. |
| `chrome://metrics-internals` | Available | Metrics-service state and logs. |
| `chrome://prefs-internals` | Available | Effective preference values and stores. Treat the output as sensitive. |
| `chrome://process-internals` | Available | Site-isolation and process-model diagnostics. |
| `chrome://profile-internals` | Available / Internal toggle | Profile attributes and state. Chrome 151 reports this host in both runtime groups. |
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
| `chrome://memory-internals` | Internal toggle | Browser memory diagnostics and instrumentation. |
| `chrome://quota-internals` | Available | Storage quota usage and buckets by origin. |
| `chrome://tracing` | Internal toggle | Low-level tracing UI; separate from the newer Local Traces page. |
| `chrome://traces-internals` | Legacy alias | Temporary compatibility alias for `chrome://traces`. |
| `chrome://webnn-internals` | Available | WebNN graph creation and transformation records, with JSON export. |

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
| `chrome://content-annotator-internals` | Internal toggle | Content-annotation model status and results. |
| `chrome://context-hub` | Internal toggle | Experimental Context Hub diagnostics. |
| `chrome://contextual-cueing-internals` | Internal toggle | Generated contextual cues, decisions, and debug feedback. |
| `chrome://on-device-internals` | Internal toggle | Built-in AI model-service status, model state, and diagnostic tools. |
| `chrome://optimization-guide-internals` | Internal toggle | Optimization Guide hints, models, downloads, and decisions. |
| `chrome://personal-context-internals` | Internal toggle | Personal-context service state for gated AI features. |
| `chrome://private-ai-internals` | Internal toggle | Private AI service diagnostics; this replaced the former `chrome://legion-internals` name. |
| `chrome://indigo-internals` | Internal toggle + Feature/profile | Indigo eligibility/service diagnostics; requires its feature in addition to the debug-page toggle. |

## Complete Internal Debugging URL set

In the Chrome 151 capture, the master toggle is off by default. An entry marked
“+ feature” was registered but its own feature check was false in the clean
profile.

| URL | Gate | Purpose |
| --- | --- | --- |
| `chrome://actor-internals` | Internal toggle | Actor/task event diagnostics and trace export. |
| `chrome://autofill-ml-internals` | Internal toggle | Autofill ML diagnostics. |
| `chrome://chrome-finds-internals` | Internal toggle + feature | Chrome Finds diagnostics. |
| `chrome://color-pipeline-internals` | Internal toggle | Color-pipeline configuration and experiments. |
| `chrome://commerce-internals` | Internal toggle | Shopping and commerce service state. |
| `chrome://content-annotator-internals` | Internal toggle | Content annotation and classification state. |
| `chrome://context-hub` | Internal toggle | Experimental Context Hub diagnostics. |
| `chrome://contextual-cueing-internals` | Internal toggle | Contextual cue generation and feedback. |
| `chrome://data-sharing-internals` | Internal toggle | Data-sharing and shared-tab-group service state. |
| `chrome://discards` | Internal toggle | Tab lifecycle and discard controls. |
| `chrome://download-internals` | Internal toggle | Download service tasks and state. |
| `chrome://family-link-user-internals` | Internal toggle | Supervised-user and Family Link state. |
| `chrome://history-clusters-internals` | Internal toggle | History clustering/Journeys diagnostics. |
| `chrome://indigo-internals` | Internal toggle + feature | Indigo eligibility and service diagnostics. |
| `chrome://infobar-internals` | Internal toggle | Infobar creation and state diagnostics. |
| `chrome://interstitials` | Internal toggle | Test and preview security/warning interstitials. |
| `chrome://local-state` | Internal toggle | Browser-wide Local State preference viewer. |
| `chrome://location-internals` | Internal toggle | Location service state. |
| `chrome://media-router-internals` | Internal toggle | Cast/media-router diagnostics. |
| `chrome://memory-internals` | Internal toggle | Memory instrumentation. |
| `chrome://multistep-filter-internals` | Internal toggle + feature | Multi-step filtering diagnostics. |
| `chrome://network-errors` | Internal toggle | Catalog and preview of network error pages. |
| `chrome://omnibox` | Internal toggle | Omnibox autocomplete input, providers, and scoring. |
| `chrome://on-device-internals` | Internal toggle | On-device AI model-service diagnostics. |
| `chrome://optimization-guide-internals` | Internal toggle | Hints, model downloads, and optimization decisions. |
| `chrome://personal-context-internals` | Internal toggle | Personal-context service state. |
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
| `chrome://traces-internals` | Legacy alias | Compatibility alias for `chrome://traces`. |
| `*.top-chrome` hosts | Flow/embedded | Side panels, toolbar surfaces, bubbles, and other browser-owned UI. |
| `chrome-untrusted://...` hosts | Flow/embedded | Isolated subframes used by trusted Chrome UI. They are captured in the snapshot but generally are not standalone menus. |

The snapshot preserves all registered flow and embedded hosts, including sign-in
dialogs, profile setup, tab/search surfaces, Lens, print, data sharing, and GLIC.
They are not duplicated into the main guide because direct navigation often
produces an empty or incomplete surface.

## Platform and build differences

The included snapshot is macOS arm64. Chromium source confirms additional
desktop registrations under platform/build guards:

| URL | Where/when |
| --- | --- |
| `chrome://conflicts` | Windows module/conflict diagnostics. |
| `chrome://sandbox` | Windows, Linux, ChromeOS, and Android; not macOS. |
| `chrome://linux-proxy-config` | Linux, ChromeOS, and OpenBSD. |
| `chrome://unexportable-keys-internals` | macOS in Chrome 151. |
| `chrome://webxr-internals` | Builds with WebXR/VR support. |
| `chrome://print`, extension pages, certificate UI | Depend on their corresponding build features. |

Android and ChromeOS have substantial additional host sets. Always use the
device's own master list instead of mechanically replacing `chrome://` in this
desktop inventory.

## Removed, renamed, and easily misunderstood pages

| URL or area | Chrome 151 status | Current guidance |
| --- | --- | --- |
| `chrome://privacy-sandbox-internals` | **Removed** | The page and its subpages were removed before Chrome 151 ([post-removal cleanup confirmation](https://chromium.googlesource.com/chromium/src/testing/+/25a9c6b7f82c06fb46abc59eaf2fa684b2cb556d)). Do not list it as a current menu. |
| `chrome://net-internals/#events` | **Removed functionality** | The old Events viewer is gone. Other `net-internals` tabs remain; capture logs with `chrome://net-export`. |
| `chrome://internals` | **Not a hub** | Use the implemented `chrome://internals/session-service` subpath. |
| `chrome://traces-internals` | **Legacy alias** | Prefer `chrome://traces`; `chrome://tracing` remains a separate internal-debug UI. |
| `chrome://legion-internals` | **Renamed** | Current name: `chrome://private-ai-internals` ([rename change](https://chromium.googlesource.com/chromium/src/+/302fb77ae999a6cc3fa256d88d005f55402852bb)). |
| `chrome://topics-internals` | Registered but disabled in the Chrome 151 capture | Chrome 151-only/outgoing; removed from Chrome 152 Beta and current Chromium. |
| `chrome://attribution-internals` | Registered but disabled in the Chrome 151 capture | Chrome 151-only/outgoing; removed from Chrome 152 Beta and current Chromium. |
| `chrome://private-aggregation-internals` | Available in the Chrome 151 capture | Chrome 151-only/outgoing; removed from Chrome 152 Beta and current Chromium. |

`chrome://apps` remains an app-home WebUI. Legacy packaged Chrome Apps have a
separate, phased ChromeOS retirement schedule; see Google's
[Chrome Apps support timeline](https://support.google.com/chrome/a/answer/15950395)
instead of treating the whole page as removed.

## Commands for Debug — do not run casually

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
| `chrome://webuijserror` | Raise a WebUI JavaScript error. |
| `chrome://quit`, `chrome://restart` | Quit or restart the entire browser. |

Other commands exist only on particular platforms/builds. For example, current
source has additional Windows heap-corruption/CFG crash paths. Trust the
Commands for Debug section shown by your own installation.

## Chromium main: upcoming, not Chrome 151

The July 30 Chromium main checkout identifies itself as Chrome 153 and includes
hosts not present in the Stable 151 capture:

| URL | Status | Note |
| --- | --- | --- |
| `chrome://notebooks-internals` | Upstream only | New internal Notebooks diagnostics; initial implementation is still minimal. |
| `chrome://iwa-dev` | Upstream only | Isolated Web Apps developer dashboard, subject to feature/dev-mode support. |
| `chrome://organizer-panel.top-chrome` | Upstream only / Flow | Browser-owned organizer panel surface, not a general diagnostic page. |

This section is informational. Upstream registrations can change before they
reach Stable. These hosts were verified in the pinned
[Chromium main WebUI registrations](https://chromium.googlesource.com/chromium/src/+/96dfd842b1413173623925072864a326d629577d/chrome/browser/ui/webui/chrome_web_ui_configs.cc).

## Edge and Brave

- **Microsoft Edge:** use `edge://edge-urls`.
- **Brave:** use `brave://chrome-urls` or its browser-provided alias.

Chromium derivatives add, remove, rename, and gate their own pages. A Chrome
status in this guide must not be treated as an Edge or Brave guarantee.

## Verification and primary sources

The update process uses runtime observation first, then pinned source and
official documentation:

- [Chrome Releases](https://chromereleases.googleblog.com/) and
  [Chromium Dash](https://chromiumdash.appspot.com/releases?platform=Mac) for
  current channel/version data.
- [Chrome for Testing availability](https://googlechromelabs.github.io/chrome-for-testing/)
  for official versioned test binaries and channel metadata.
- [Chrome for Developers release notes](https://developer.chrome.com/release-notes)
  and [Chrome 151 beta notes](https://developer.chrome.com/blog/chrome-151-beta)
  for official release documentation.
- [Chrome flags documentation](https://developer.chrome.com/docs/web-platform/chrome-flags)
  and [Chrome Help's flags warning](https://support.google.com/chrome/answer/16552482).
- Chrome Help for
  [performance features](https://support.google.com/chrome/answer/12929150)
  and Chrome for Developers on
  [debugging built-in AI models](https://developer.chrome.com/docs/ai/debug-built-in-model).
- Chrome 151
  [WebUI registrations](https://chromium.googlesource.com/chromium/src/+/refs/tags/151.0.7922.71/chrome/browser/ui/webui/chrome_web_ui_configs.cc),
  [content registrations](https://chromium.googlesource.com/chromium/src/+/refs/tags/151.0.7922.71/content/browser/webui/content_web_ui_configs.cc),
  [URL constants](https://chromium.googlesource.com/chromium/src/+/refs/tags/151.0.7922.71/chrome/common/webui_url_constants.cc),
  and [debug URL definitions](https://chromium.googlesource.com/chromium/src/+/refs/tags/151.0.7922.71/third_party/blink/public/common/chrome_debug_urls.h).
- The
  [`chrome://chrome-urls` handler](https://chromium.googlesource.com/chromium/src/+/refs/tags/151.0.7922.71/chrome/browser/ui/webui/chrome_urls/chrome_urls_handler.cc),
  which builds the runtime groups from active WebUI configurations.
- The Chrome 151
  [`internals` implementation](https://chromium.googlesource.com/chromium/src/+/refs/tags/151.0.7922.71/chrome/browser/ui/webui/internals/internals_ui.cc)
  and
  [Local Traces alias documentation](https://chromium.googlesource.com/chromium/src/+/refs/tags/151.0.7922.71/content/browser/tracing/traces_internals/traces_internals_ui.h).
- Chromium's
  [InternalWebUIConfig contract](https://chromium.googlesource.com/chromium/src/+/refs/tags/151.0.7922.71/content/public/browser/internal_webui_config.h)
  and [WebUI guidance](https://chromium.googlesource.com/website/+/HEAD/site/developers/webui/index.md).
- The Privacy Sandbox Internals removal sequence:
  [handler cleanup](https://chromium.googlesource.com/chromium/src/+/3ca8d4ce090241400a1d54d49cbd2ea0477f9c10)
  and
  [post-removal flag cleanup](https://chromium.googlesource.com/chromium/src/testing/+/25a9c6b7f82c06fb46abc59eaf2fa684b2cb556d).
- The
  [Topics removal](https://chromium.googlesource.com/chromium/src/+/a99ca4de8389ef68b9c8acd247517c4fa659738a),
  [Attribution removal](https://chromium.googlesource.com/chromium/src/+/de212a08955ad79b0d64edfb9cb2edf6ad5428d0),
  and
  [Private Aggregation removal](https://chromium.googlesource.com/chromium/src/+/063a5015ed40740a35d8bc1d726eaeaf86f74247)
  for version-sensitive removals.
- [NetLog documentation](https://chromium.googlesource.com/website/+/HEAD/site/developers/design-documents/network-stack/netlog/index.md)
  and the Chrome 151
  [`net-internals` implementation](https://chromium.googlesource.com/chromium/src/+/refs/tags/151.0.7922.71/chrome/browser/ui/webui/net_internals/net_internals_ui.cc).

Contributions should include reproducible version, platform, runtime-group, and
source evidence. See [CONTRIBUTING.md](CONTRIBUTING.md).
