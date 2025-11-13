# ⚙️🕵️‍♂️ Hidden/Secret Browser Menus & Settings (Updated Oct 2025)

[![GitHub stars](https://img.shields.io/github/stars/sparkyrider/chrome-secret-menus?style=social)](https://github.com/sparkyrider/chrome-secret-menus/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/sparkyrider/chrome-secret-menus?style=social)](https://github.com/sparkyrider/chrome-secret-menus/network/members)
[![GitHub watchers](https://img.shields.io/github/watchers/sparkyrider/chrome-secret-menus?style=social)](https://github.com/sparkyrider/chrome-secret-menus/watchers)
[![License](https://img.shields.io/github/license/sparkyrider/chrome-secret-menus)](https://github.com/sparkyrider/chrome-secret-menus/blob/main/LICENSE)

Secret/hidden internal pages exist across Chromium-based browsers and are accessed with `chrome://` (Chrome/Brave) or `edge://` (Microsoft Edge). These pages expose diagnostics, experiments, performance tools, and troubleshooting utilities that aren't always visible in standard settings.

> **Authoritative Lists:**  
> - Chrome/Brave: `chrome://chrome-urls` (alias: `chrome://about`)  
> - Edge: `edge://edge-urls`

---

## Legend / Notes

- **[Stable]**: Generally available in current desktop builds.
- **[Legacy]**: Still present, but tied to features being deprecated.
- **[Build/Flag-gated]**: May require a specific OS/build/channel or a feature flag; may be hidden by enterprise policy.
- **[Deprecated]**: Removed or non-functional in current Chrome; keep for historical context with a pointer to replacements.

> ⚠️ **Enterprise**: Admin policies can hide or disable some internal URLs.  
> 🧭 **Per-version variability**: Items can move, be renamed, or vanish between releases. Always verify on your installed version via `chrome://chrome-urls` / `edge://edge-urls`.

---

## Quick Updates Since 2023

- **New:** `chrome://settings/performance` (Memory Saver modes, performance alerts).  
- **New-ish:** `chrome://privacy-sandbox-internals` (diagnostics for Privacy Sandbox features).  
- **Clarified:** `chrome://site-engagement` description (engagement scores influence certain heuristics like autoplay).  
- **GCM → FCM:** `chrome://gcm-internals` now references Firebase Cloud Messaging.  
- **Deprecated:** `chrome://net-internals` (use `chrome://net-export` + DevTools Network).

---

## Core Menus & Diagnostics (Chrome/Brave unless noted)

| URL | Status | Description |
|---|---|---|
| `chrome://chrome-urls` | [Stable] | Master list of internal pages (alias: `chrome://about`). |
| `chrome://version` | [Stable] | Full build/channel/OS, JavaScript & user agent info, command-line switches. |
| `chrome://settings` | [Stable] | Main settings hub. |
| `chrome://settings/performance` | **[Stable]** | Performance settings: Memory Saver (modes), performance issue alerts, keep-active site list. |
| `chrome://flags` | [Stable] | Experimental features (per-version; flags change frequently). |
| `chrome://gpu` | [Stable] | GPU capabilities, feature status, driver workarounds. |
| `chrome://components` | [Stable] | Installed components (Widevine, CRLSets, etc.) with update controls. |
| `chrome://crashes` | [Stable] | Local crash history (requires crash reporting). |
| `chrome://histograms` | [Stable] | Internal metrics histograms. |
| `chrome://system` | [Stable] | OS/Chrome system info snapshot. |
| `chrome://tracing` | [Build/Flag-gated] | Low-level performance tracing (record/view traces). |
| `chrome://webrtc-internals` | [Stable] | WebRTC session stats, getUserMedia info, event logs. |
| `chrome://webrtc-logs` | [Stable] | Access collected WebRTC logs. |
| `chrome://media-internals` | [Stable] | Media pipeline details, playback events/errors. |
| `chrome://media-engagement` | [Stable] | Media engagement scores per origin. |
| `chrome://site-engagement` | **[Stable]** | Overall site engagement scores (0–100) per origin; used by some heuristics (e.g., autoplay). |
| `chrome://password-manager` | [Stable] | Password Manager UI. |
| `chrome://password-manager-internals` | [Stable] | Diagnostics for credential storage/filling. |
| `chrome://sync-internals` | [Stable] | Sync transport status, types, errors. |
| `chrome://signin-internals` | [Stable] | Account and token diagnostics. |
| `chrome://policy` | [Stable] | Active enterprise/user policies. |
| `chrome://management` | [Stable] | Shows if the browser is managed and by whom. |
| `chrome://safe-browsing` | [Stable] | Safe Browsing state and diagnostics. |
| `chrome://translate-internals` | [Stable] | Translate language packs, events, decisions. |
| `chrome://bluetooth-internals` | [Stable] | BLE device scanning, GATT info. |
| `chrome://usb-internals` | [Stable] | USB discovery, permissions, test transfers. |
| `chrome://indexeddb-internals` | [Stable] | Origin DB enumeration and details. |
| `chrome://quota-internals` | [Stable] | Storage quotas and usage by origin. |
| `chrome://ntp-tiles-internals` | [Stable] | New Tab Page tile diagnostics. |
| `chrome://omnibox` | [Stable] | Autocomplete prediction/debug UI. |
| `chrome://predictors` | [Stable] | Resource prediction, preconnect hints. |
| `chrome://prefs-internals` | [Stable] | Pref store debug view (policy/sync/local). |
| `chrome://metrics-internals` | [Stable] | UMA/UKM metrics info and logs. |
| `chrome://ukm` | [Stable] | Usage Keyed Metrics details. |
| `chrome://history` | [Stable] | History UI. |
| `chrome://downloads` | [Stable] | Downloads UI. |
| `chrome://download-internals` | [Stable] | Download service tasks, states, history. |
| `chrome://device-log` | [Stable] | Device (USB/Bluetooth/etc.) event logs. |
| `chrome://process-internals` | [Stable] | Process model debugging overview. |
| `chrome://profile-internals` | [Stable] | Active profile diagnostics. |
| `chrome://interstitials` | [Stable] | Lists warning interstitials (SSL, lookalike, etc.). |
| `chrome://network-errors` | [Stable] | Catalog of network error pages. |
| `chrome://net-export` | **[Stable]** | Capture NetLog to file for offline analysis (replacement for `net-internals` live view). |
| `chrome://privacy-sandbox-internals` | **[Stable]** | Diagnostics for Privacy Sandbox features (may show subpages like Private State Tokens, Topics, Related Website Sets, etc.). |
| `chrome://optimization-guide-internals` | [Stable] | Optimization hints (Lite pages, performance hints). |
| `chrome://gcm-internals` | **[Stable]** | Messaging diagnostics for extensions; **uses FCM** (Firebase Cloud Messaging) under `chrome.gcm`. |
| `chrome://extensions` | [Stable] | Extension manager. |
| `chrome://extensions-internals` | [Stable] | Extension service diagnostics. |
| `chrome://serviceworker-internals` | [Stable] | Service worker registrations, states. |
| `chrome://translate-internals` | [Stable] | (Listed above—kept here for completeness.) |
| `chrome://web-app-internals` | [Stable] | Installed Web App (PWA) diagnostics. |
| `chrome://app-service-internals` | **[Legacy]** | App service plumbing (relevant mostly on ChromeOS; Chrome Apps are being sunset—see deprecation note). |
| `chrome://apps` | **[Legacy]** | Legacy Chrome Apps launcher page (Chrome Apps EOL in stages; mostly ChromeOS-only in the long term). |
| `chrome://bookmarks` | [Stable] | Bookmarks UI. |
| `chrome://help` | [Stable] | About Chrome (update channel, updates). |
| `chrome://whats-new` | [Stable] | Recently shipped features tour. |
| `chrome://dino` | [Stable] | T-Rex offline game. |

### Hidden Debug Pages (Dangerous — can crash/kill/hang)

> For debugging only; **do not** run on production sessions.

| URL | Status | Action |
|---|---|---|
| `chrome://crash/` | [Stable] | Crash the renderer/tab. |
| `chrome://kill/` | [Stable] | Kill the current tab. |
| `chrome://hang/`, `chrome://shorthang/` | [Stable] | Induce hangs to test UI/UX. |
| `chrome://gpuclean/`, `chrome://gpucrash/`, `chrome://gpuhang/` | [Stable] | GPU reset/crash/hang scenarios. |
| `chrome://memory-exhaust/` | [Stable] | Attempt to exhaust memory. |
| `chrome://memory-pressure-moderate/`, `chrome://memory-pressure-critical/` | [Stable] | Simulate memory pressure signals. |
| `chrome://quit/`, `chrome://restart/` | [Stable] | Exit or restart the browser. |
| `chrome://badcastcrash/`, `chrome://inducebrowsercrashforrealz/`, `chrome://inducebrowserdcheckforrealz/` | [Stable] | Force hard browser crashes / DCHECKs. |

---

## Deprecated / Removed (with Replacements)

| URL | Status | Replacement / Note |
|---|---|---|
| `chrome://net-internals` | **[Deprecated]** | Use `chrome://net-export` (to record NetLogs) and **DevTools → Network** for live capture/inspection. Some workflows: start/stop a NetLog dump, then open with the NetLog viewer. |

---

## Privacy & Experiments

| URL | Status | Description |
|---|---|---|
| `chrome://privacy-sandbox-internals` | **[Stable]** | Live status and diagnostics for Privacy Sandbox APIs (e.g., Topics, Protected/Private State Tokens, Attribution Reporting). |
| `chrome://flags` | [Stable] | Switchboard for experiments (per-version). |
| `chrome://topics-internals` | [Build/Flag-gated] | Topics API internals (appears only when enabled). |
| `chrome://attribution-internals` | [Build/Flag-gated] | Attribution Reporting diagnostics. |
| `chrome://private-aggregation-internals` | [Build/Flag-gated] | Private Aggregation diagnostics. |

---

## Notes for Edge & Brave

- **Microsoft Edge**: `edge://edge-urls` lists internal pages. Many `edge://…` pages mirror Chrome’s (`flags`, `gpu`, `net-export`, etc.). Some legacy pages like `edge://net-internals` may still exist but are in the same deprecation path as Chrome’s.  
- **Brave**: Use `brave://chrome-urls`. The list often displays `chrome://` links but they map to Brave’s internals.

---

## Chrome Apps Deprecation (Context for “Legacy” rows)

Chrome Apps are being phased out: deprecation phases began in 2025 with **end-of-life in 2028** (on managed ChromeOS timelines). Keep `chrome://apps` / `chrome://app-service-internals` rows labeled **[Legacy]**; they’re largely irrelevant off-ChromeOS and will diminish over time.

---

## Handy Dev Workflows

- **Network debugging (modern):**  
  1) Live capture in **DevTools → Network**  
  2) Long-running or background capture: **`chrome://net-export`** → save NetLog → open in NetLog Viewer.  
- **Performance investigations:**  
  - **`chrome://settings/performance`** to tune Memory Saver modes and set always-active site exceptions.  
  - **`chrome://tracing`** (when available) for low-level traces; or use DevTools Performance panel.
