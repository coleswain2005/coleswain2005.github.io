# Projects redesign: content map and maintenance

The site remains buildless HTML/CSS/JavaScript on GitHub Pages. Nothing was committed, pushed, or deployed. The working tree was clean before implementation. Homepage content outside the Projects section is unchanged.

## Hierarchy

- Combat Robotics (`project.html?project=combat-robotics`)
  - Weapon System Design & Optimization (`disk-weapon`)
  - Parametric Weapon Hub Spline Design (`weapon-hub`)
  - Inline: drivetrain redesign, wheel traction testing, integration/manufacturing
- Precision Tool Engineering (`precision-tools`), Excelta professional work
  - Wire-cutter pivot/torque test stand (`pivot-test-stand`)
  - Press-fit standardization (`press-fit`)
  - KEYENCE optical metrology automation (`qc-fixture`)
  - Precision tool reverse engineering (`legacy-reverse-engineering`)
  - Python manufacturing automation (`python-workflow`)
- Vision-Guided UAV (`drone-payload`): airframe/FEA, electronics/actuation, vision/release on one page
- Machined Aluminum Chair (`aluminum-chair`): standalone case study
- Embedded Sensing & Instrumentation (`embedded-sensing`): fan propulsion and Doppler experiment notes
  - The previous `fan-propulsion` URL remains accessible with its full existing description, tools, and reported thrust.
- Additional Engineering Projects (`additional-projects`): concise inline notes for rubber band vehicle, desk FEA, custom tool heads, and ASME FADE. No separate placeholder pages.

Existing case-study query URLs remain valid and support direct loading/refresh on GitHub Pages. Experience's existing `#project-*` fragments resolve to their original case studies via script.js, including direct fragment visits. Experience HTML has not been edited.

## Audit and retained content

The original gallery had ten static div cards. Detail pages used a JavaScript object with ten entries. Existing filtering matched space-delimited tags and cards used simulated link handlers. The replacement gallery uses six native links, multiple discipline tags, pressed-state filter buttons, and a live result count. Detail content and collection relationships now live in projects-data.js; project-detail.js renders the common template. No framework, build step, dependency, global palette, or typography change was introduced.

All original source images remain. Existing detailed hub narrative, original technical descriptions, tools, dates, and galleries were retained except where claims or image associations needed correction. The original ambiguous claims are recorded below rather than silently discarded. The ten scan-reference assets and reverse-engineering CAD images remain accessible in the original gallery; review company approval before public deployment.

Image inspection found:

- Chair card incorrectly used a wire-test-stand-labeled image; removed the association. No actual chair media found.
- Wire-cutter test-stand card incorrectly used the scissors reverse-engineering comparison; corrected.
- `pivot-test-stand/test-stand-top.png` and `test-stand-front.png` depict wheel/roller rigs; moved to Combat Robotics without renaming source assets.
- `pivot-test-stand/test-stand-detail.png` depicts the cutter fixture; retained with Excelta alongside `print-layout.png`.
- Press-fit renders depict cutters in fixtures; retained. The KEYENCE photograph shows the multi-tool inspection fixture.
- Robot and UAV photographs retained; technical CAD images use contain sizing rather than destructive cropping.

## Facts requiring owner verification

- Original disk headline: `MOI 4,500+ kg/mm²`, `Energy 3.5+ kJ`, `Tip Speed 60 mph`, `Weight <2.5 lb`. Inertia must have mass × length² units; the original unit is invalid. Those headline claims are replaced with qualified design context. No CAD mass-property report, radius, or measured spin data is available. At 10,000 RPM, 3–3.5 kJ implies approximately 0.0055–0.0064 kg·m², using E = ½Iω²; this checks consistency, not actual performance. Verify inertia, speed, energy, tip speed, and whether the mass budget is for one disk or the complete assembly.
- Original description said “dozens” of FEA runs; the user's brief documents 15+. The page uses the more conservative count. Confirm analysis revisions, boundary conditions, and the baseline for the reported ~25% mass reduction.
- QC detail claimed 8× throughput; Experience claims 10× efficiency. Eight tools per fixture is preserved, but no multiplier is asserted without a timed baseline and measurement definition. Experience wording remains untouched per scope.
- Press-fit: 5× variability and 25% consistency improvement remain qualified as reported; sample size, statistic, and baseline need confirmation.
- Fan thrust ~0.06 N is retained as a reported lab result; raw telemetry, cart mass, incline correction, and uncertainty are absent.
- UAV: removed the unsupported statement that it autonomously aligned over the target. Automated target detection/release and the previously reported flight demo remain, without navigation or accuracy claims.
- Competition placement, 2026 event, ~88 mm lever arm, Mark-10 setup, and newer project scopes come from the supplied brief. Supporting competition/test records are not in the repository.

## Missing documentation

No chair photo/CAD, embedded experiment media/data/code, Doppler spectra, desk FEA plots, rubber-band vehicle media/results, separate tool-head or FADE deliverables, weapon solver plots, or detailed drivetrain results were found. These use text layouts; no placeholder image or invented result is shown. DZYNE and X1 remain outside the Projects gallery. Existing Excelta media were already in the public-facing code; internal approval cannot be established from the repository. Confirm publication clearance before deployment, especially dimensioned scan references.

## Maintenance

- Edit case-study content, collection metadata, parent relationships, inline narratives, and galleries in `projects-data.js`.
- Homepage cards are semantic static HTML in the Projects section of `index.html`, so the gallery remains usable without JavaScript. Update the matching card when changing top-level metadata or adding a collection.
- Add a technical child to `projects`, assign its `parent`, and add its ID to the parent's `children` list. Smaller contributions can remain in `story` instead.
- Use existing image paths with descriptive alt text/captions. Preserve source assets. Image links open a native modal with Escape/close support and return focus to the trigger; they still link directly to the original image without modal support.
- Optimized display derivatives for the three collection photographs live in `img/projects/collections/`; originals are preserved. Their combined size fell from about 13.8 MB to 0.94 MB.
- The project CSS appended to `styles.css` is scoped to `#projects` and `.project-detail-page`.

## Verification

- Headless Chrome: 194 assertions passed across all six collections, all ten legacy case-study URLs, invalid/prototype-key URLs, breadcrumb navigation, native image-dialog open/close, discipline-filter membership/pressed states, legacy fragment redirects, alt attributes, and actual image decoding.
- 390 px iframe checks found no horizontal overflow for the gallery or case studies. Desktop and mobile screenshots were reviewed; a hero image sizing issue was corrected using a fixed visual frame with contained images.
- Byte comparison against Git HEAD confirms homepage content outside Projects is unchanged. Existing navigation/reveal/section-observer code and the original CSS prefix are unchanged.
- Static asset checks and `git diff --check` passed. No source assets were removed.
- Browser QA used local files. Production GitHub Pages hosting, touch hardware, and a screen-reader session were not tested. Project detail pages continue to require JavaScript, as in the original implementation; a noscript explanation links to the usable static gallery.
