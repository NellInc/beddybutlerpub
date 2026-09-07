# Beddy Butler experience improvements

## Authority and scope
Nell approved the September 7 app and website recommendations. Implementation is local. No push, deployment, upload, production service, or new support operator is approved. Preserve historical clones.

## Acceptance criteria
- Tonight communicates next reminder and pause timing even with a pending badge.
- Snooze has a validated, remembered duration, a clear boundary, and persistence tests.
- Finish tonight leaves recurring settings unchanged and clears pending visual reminders.
- Progressive reminders respect the user's maximum personality.
- The next seven days explain actual schedule selection and overnight endings.
- Website leads with clear copy, requirements, native app imagery, voluntary audio samples, and troubleshooting-first support.
- Audio samples never autoplay and only one plays at a time; descriptions are distinct from transcripts.
- Source tests, metadata, website integrity, native captures, and desktop/mobile rendering have current evidence.

## Pre-check and deviations
The existing product already has onboarding, one-night adjustments, pause/resume, notification permission recovery, and accessibility adaptations. Extend these rather than replacing them.
There was only 5.3 GiB free at the start. Use one reusable Xcode derived-data directory and record actual results.
Full transcripts require authoritative listening/editorial review. Sample descriptions must not be labelled as transcripts.
The existing night palette is explicitly hardcoded throughout. A system-following appearance requires a separately verified complete light palette; toggling the native control appearance alone would create unreadable combinations.
Native screenshot capture must use the new executable. Store screenshots from earlier candidates are not new-candidate visual evidence.

## Implementation ledger
- Implemented, source-tested: readability, dated reminder times, badge/state coexistence, remembered snooze, finish tonight, progressive ceiling, weekly preview.
- Implemented, integrity-tested; browser rendering still blocked: homepage copy/CTA/requirements/order, native screenshot slot, original local sample audio, single-player policy, FAQ, support navigation, terminology, App Store description.
- Remaining implementation: complete adaptive light palette, first-launch simplification beyond existing guide, further motion choreography, localisation/String Catalog and pseudolocalisation, Shortcuts.
- Remaining acceptance: reviewed full transcripts, human VoiceOver/keyboard/display/audio-route/time-change/usability sessions, updated full App Store screenshot set, Figma reconciliation.
- Requires an operator decision: private non-GitHub support route and its retention/response policy.
- Publication remains separate and unauthorised.

## Completion signal
Working if every item is tied to current source/test/render evidence or explicitly remains open here, and no local result is presented as a public release.

## Verification, September 7
Self-review: this implementation was produced by Codex in this session. Claims below come from the commands and captured outputs, not an independent design review.

- Final current-source xcodebuild test succeeded: 76 tests, zero failures. Result: /tmp/BeddyButler-September07/Logs/Test/Test-Beddy Butler-2026.09.07_10-22-32-+0100.xcresult.
- Swift formatting lint and git diff --check passed.
- Native capture harness passed the original six states (12 images), then eight expanded states (16 images), adding an active evening and simultaneous paused/pending reminders. Both added Tonight captures were visually inspected: the finish-tonight action, remembered 20-minute snooze, Insistent ceiling, and dated paused-state message are visible without clipping. The combined-mode Tonight panel was inspected and copied unchanged to Website/assets/tonight-panel.png. Preferences captures contain the documented unsupported offscreen AppKit placeholders, so they do not establish live-window acceptance.
- Website integrity passed: six pages, all local links/assets resolved. All three audio assets match release sources by SHA-256. Node controller check proved exclusive playback, initial volume, and pause on page exit.
- Audio validation passed: 91 preserved recordings and 103 decoded release clips.
- App Store metadata validation passed: eleven text files and six existing image dimensions. The existing store images remain older-candidate assets and require refresh before publication.
- CI validation, large-file checks, app-bundle negative controls (16), evidence negative controls (7), publication approval tests (5), publication controls, security negative controls (14), security posture, and live-destination negative controls (11) passed.
- The monolithic release script was not run. Its constituent checks above were run separately using reusable derived data; no aggregate release approval is claimed.
- Impeccable was unavailable locally. The no-install invocation failed; no package was installed.
- In-app browser and Chrome control both reported unavailable. Desktop/mobile website screenshots, keyboard browser flow, and zoom/contrast acceptance remain blocked, despite local HTTP 200 verification for the new HTML, native PNG, JavaScript, support page, and sample MP3.
- The first preview port was occupied. Its server exited without taking ownership; no existing process was stopped. The corrected server used an OS-assigned port and its served bytes were verified.

The approved programme remains incomplete. The implementation and acceptance items above stay open until performed. All changes remain local and uncommitted.

## Final polish pass, September 7
This section supersedes earlier browser-blocked and 76-test evidence for the touched surfaces. It does not close the wider roadmap above.

- Current native test run: 79 tests, zero failures, TEST SUCCEEDED. Result: /tmp/BeddyButler-September07/Logs/Test/Test-Beddy Butler-2026.09.07_11-05-49-+0100.xcresult. Log: /tmp/beddy-polish-tests.log.
- Tonight now separates the large time from its date, explains Pause versus Finish, increases footer readability, confirms Good night, and offers persistent Undo that restores the prior pending badge. Expiry and superseding-pause behavior are covered by tests.
- Current capture harness passed nine states and 18 images. The active and finished Tonight images were visually inspected. The active image is copied unchanged into the website, with matching 840 by 1004 intrinsic dimensions.
- The attempted native NSView caching path produced no valid Preferences image. Offscreen Preferences images remain insufficient native-control evidence. Existing App Store screenshots have deliberately not been regenerated from unsupported placeholders.
- Website sample controls now announce playback status and provide error/retry feedback. The Node controller test covers no autoplay, exclusive playback, errors, retry rejection, and background/page-exit pause. All three source hashes remain verified.
- The homepage explicitly identifies the next edition as a preview and distinguishes the current App Store release. No claim that these local features are already available is made.
- Browser-specific control recovered local browser access. Final rendered desktop (1280px) and narrow mobile (320px) layouts were visually inspected with no horizontal overflow. Mobile 390px, sample players, FAQ expansion, and support at 320px were also inspected. Keyboard playback, exclusive playback, and FAQ expansion worked in the browser.
- Screenshots are in build/polish-final. The actual browser zoom shortcut did not provide verified zoom evidence; narrow viewport reflow is verified separately. Browser viewport override was reset.
- Website validation (six pages), audio source integrity, Node behavior tests, App Store metadata validation, and git diff --check passed after the final website image and layout edits. Metadata validation establishes dimensions, not current screenshot content.
- Speech Recognition permission is undetermined. On-device transcription permission was requested through a question to Nell, but no answer was received during this pass. No permission prompt was triggered and no audio was uploaded. Full reviewed transcripts remain open.
- Remaining final acceptance: actual browser zoom, live Preferences/VoiceOver and device checks, reviewed transcripts, and refreshed current-candidate App Store screenshots. Wider roadmap items remain as recorded above. Impeccable remains unavailable locally.
- Status: local only, uncommitted, not published. This is a completed bounded polish implementation with explicit acceptance gaps, not a claim of perfection or release approval.

## Copy restoration, user-directed
Nell rejected the added website prose and requested restoration of the original site except styled voice samples. The homepage is byte-identical to HEAD after removing the sample markup/script; support is restored exactly and original CSS is preserved. Playback status chatter is removed.
Nell also approved restoring original app wording and removing added explanatory clutter, retaining Gradually firmer. Original tagline, Acknowledge Badge, No plans, Steady mode and timing explanation are restored. Added finish/pause/snooze and weekly-preview explanatory paragraphs are removed. Functional additions, necessary control labels, accessible help and readability changes remain. Earlier copy proposals in this ledger are superseded by this direction.
