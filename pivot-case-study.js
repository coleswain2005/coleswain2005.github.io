/* Wire-cutter pivot-friction test stand case study. */
(() => {
  if(new URLSearchParams(location.search).get('project')!=='pivot-test-stand')return;
  const folder='img/projects/pivot-test-stand/media/';
  const description='Designed and fabricated a wire-cutter pivot-friction test stand to replace subjective tightness inspection with repeatable torque measurements. Testing revealed that resistance varied with cutter opening angle, driving a four-iteration redesign with an adjustable cutter fixture and sliding pulley track.';
  document.getElementById('projectDescription').textContent=description;
  const specs=document.getElementById('projectSpecs');specs.replaceChildren();
  [['Iterations','4'],['Opening angles','0° · 10° · 20° · 30°'],['Nominal lever arm','≈ 88 mm'],['Application','Manufacturing quality control']].forEach(([name,value])=>{
    const box=document.createElement('div');box.className='project-detail-spec';
    const label=document.createElement('span');label.textContent=name;
    const strong=document.createElement('strong');strong.textContent=value;
    box.append(label,strong);specs.append(box);
  });
  document.getElementById('projectTools').textContent='SolidWorks · CAD Assemblies · Design for Additive Manufacturing · Markforged 3D Printing · Mechanical Testing · Experimental Design · Excel · Quality Engineering';
  document.getElementById('projectStory').hidden=true;
  document.getElementById('projectGallery').hidden=true;
  const root=document.createElement('div');root.className='pivot-case-study';
  root.innerHTML=`
  <section class="pivot-panel pivot-intro" id="pivot-problem">
  <p class="pivot-label">01 / Identify the QC problem</p>
  <h2>Replacing subjective cutter-tightness inspection with a measurement.</h2>
  <div class="pivot-story-split"><div class="pivot-story-copy">
    <p>At Excelta, pivot tightness was evaluated by opening and closing wire cutters and judging the resistance by feel. That made comparisons between tools difficult to standardize.</p>
    <p><strong>Objective:</strong> develop an intuitive, repeatable fixture that measures the torque required to initiate cutter opening, then relate those readings to the QC team's existing classifications.</p>
    <div class="pivot-decision"><span>Design requirement</span><p>Constrain the cutter, apply a controlled load, and quantify resistance without relying solely on an operator's perception.</p></div>
  </div><figure class="pivot-story-media"><img src="img/projects/pivot-test-stand/media/torque-sketch.jpg" alt="Original wire-cutter friction torque hand sketch and physical cutter" loading="lazy"><figcaption>Initial concept: applied force and approximately 88 mm lever arm</figcaption></figure></div>
</section>

  <section class="pivot-panel" id="pivot-method-section" aria-labelledby="pivot-method">
    <p class="pivot-label">02 / Measurement principle</p>
    <h2 id="pivot-method">Translating force into pivot friction torque</h2>
    <p>With the cutter's lower handle constrained, a cord pulled the upper handle through a pulley system. Incremental hanging masses provided a known gravitational load. The approximately 88 mm moment arm was measured from the pivot to the force application point. Keeping the cord perpendicular to the handle makes the torque comparison consistent across positions.</p>
    <div class="pivot-method-grid">
      <div class="pivot-method-diagram">
        <div class="pivot-equation">τ = F × r = (m · g) × r</div>
        <svg id="pivot-geometry" viewBox="0 0 560 315" role="img" aria-label="Mechanical schematic showing the pivot, fixed handle, moving handle and perpendicular pulling force">
          <defs><marker id="pivot-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L8 4L0 8" stroke="#4B9CD3" stroke-width="1.8" fill="none"/></marker></defs>
          <path d="M100 199 L366 276" stroke="#8995A0" stroke-linecap="round" stroke-width="17"/>
          <line id="pivot-handle" x1="100" y1="199" x2="325" y2="199" stroke="#E8EAE6" stroke-width="17" stroke-linecap="round"/>
          <line id="pivot-radius" x1="100" y1="199" x2="325" y2="199" stroke="#4B9CD3" stroke-width="2" stroke-dasharray="6 5"/>
          <circle cx="100" cy="199" r="12" fill="#12161B" stroke="#4B9CD3" stroke-width="4"/>
          <line id="pivot-force" x1="325" y1="199" x2="325" y2="79" stroke="#4B9CD3" stroke-width="3" marker-end="url(#pivot-arrow)"/>
          <text x="44" y="171" font-family="monospace" font-size="16" fill="#CED8DF">Pivot</text>
          <text id="pivot-force-label" x="340" y="70" font-family="monospace" font-size="17" fill="#4B9CD3">F = mg</text>
          <text id="pivot-r-label" x="187" y="170" font-family="monospace" font-size="15" fill="#E8EAE6">r ≈ 88 mm</text>
          <text x="335" y="302" font-family="monospace" font-size="13" fill="#A0A8B0">Fixed handle</text>
        </svg>
        <div class="pivot-angles"><span>Opening angle</span><button type="button" data-angle="0" aria-pressed="true">0°</button><button type="button" data-angle="10" aria-pressed="false">10°</button><button type="button" data-angle="20" aria-pressed="false">20°</button><button type="button" data-angle="30" aria-pressed="false">30°</button></div>
        <p class="pivot-footnote">Illustrative mechanical diagram; the direction of applied force is maintained perpendicular to the moving handle.</p>
      </div>
      <div class="pivot-torque-calc">
        <p class="pivot-label">Interactive physics</p><h3>Torque from hanging mass</h3>
        <label for="pivot-mass">Hanging mass <strong id="pivot-mass-display">100 g</strong></label>
        <input id="pivot-mass" type="range" min="20" max="500" step="10" value="100"/>
        <div class="pivot-calc-stat"><span>Applied force</span><strong id="pivot-calc-force">0.981 N</strong></div>
        <div class="pivot-calc-stat"><span>Ideal applied torque</span><strong id="pivot-calc-torque">0.0863 N·m</strong></div>
        <p class="pivot-calc-formula">τ = (mass / 1000) × 9.81 × 0.088</p>
        <p class="pivot-footnote">Calculated demonstration, not recorded test results. Assumes perpendicular loading and neglects pulley friction and system losses.</p>
      </div>
    </div>
    <p class="pivot-method-summary"><strong>Procedure:</strong> Add hanging mass incrementally until the cutter begins opening, record the initiation load, and calculate the torque at the selected cutter position.</p>
  </section>

<section class="pivot-panel" id="pivot-prototype">
 <p class="pivot-label">03 / Prototype — CAD, fabrication and first test</p>
 <h2>Build the measurement system, then test the assumptions.</h2>
 <div class="pivot-story-split pivot-process-step">
  <div class="pivot-story-copy">
    <p class="pivot-substep">03A / Mechanical design</p>
    <h3>Lay out the cutter fixture and loading path.</h3>
    <p>I developed the cutter support, baseplate arrangement and pulley positions in SolidWorks. The fixture constrained the lower handle while leaving the upper handle free to rotate under a known force.</p>
    <p>I included removable locating components and mounting features to accommodate alignment changes during prototyping.</p>
  </div>
  <figure class="pivot-story-media"><img src="img/projects/pivot-test-stand/media/assembly-layout-cad.jpg" alt="SolidWorks assembly layout defining cutter fixture and pulley positioning" loading="lazy"><figcaption>SolidWorks assembly layout defining cutter fixture and pulley positioning</figcaption></figure>
 </div>
 <div class="pivot-story-split pivot-process-step pivot-alternate">
  <figure class="pivot-story-media"><img src="img/projects/pivot-test-stand/media/printed-fixtures.jpg" alt="3D-printed fixture components after fabrication" loading="lazy"><figcaption>3D-printed fixture components after fabrication</figcaption></figure>
  <div class="pivot-story-copy">
    <p class="pivot-substep">03B / Rapid prototyping</p>
    <h3>Manufacture and refine the custom supports.</h3>
    <p>I used additive manufacturing to produce the locating fixtures and hardware mounts, iterating cutouts, fillets and clearances to reduce print requirements and support assembly.</p>
    <figure class="pivot-video-inline"><video controls playsinline preload="metadata"><source src="img/projects/pivot-test-stand/media/IMG_1475.mp4" type="video/mp4"></video><figcaption>Fixture components during additive manufacturing</figcaption></figure>
  </div>
 </div>
 <div class="pivot-story-split pivot-process-step">
  <div class="pivot-story-copy">
    <p class="pivot-substep">03C / Physical integration</p>
    <h3>Assemble the first controlled-loading apparatus.</h3>
    <p>Combining the printed supports with purchased pulleys, cord and incremental hanging masses produced a functional first prototype. Initial use highlighted cord elasticity, alignment and mass-loading details requiring further refinement.</p>
    <figure class="pivot-video-inline"><video controls playsinline preload="metadata"><source src="img/projects/pivot-test-stand/media/IMG_1134.mp4" type="video/mp4"></video><figcaption>Physical test setup with cord, pulleys and hanging mass</figcaption></figure>
  </div>
  <figure class="pivot-story-media"><img src="img/projects/pivot-test-stand/media/initial-prototype.jpg" alt="Initial assembled cutter test stand with pulley routing and fixed cutter" loading="lazy"><figcaption>Initial assembled cutter test stand with pulley routing and fixed cutter</figcaption></figure>
 </div>
</section>
<section class="pivot-panel pivot-discovery-panel" id="pivot-discovery">
  <p class="pivot-label">04 / Experiment and investigate</p>
  <h2>The first test exposed a missing variable: opening angle.</h2>
  <div class="pivot-story-split">
    <div class="pivot-story-copy">
      <p>I measured resistance on multiple cutters and compared the readings with the QC team's judgments. Sometimes a cutter perceived as looser registered higher friction torque than another.</p>
      <p>Further testing showed why: <strong>the same cutter's pivot resistance varied with its opening angle.</strong> Measuring only at the closed position did not fully characterize its behavior.</p>
      <div class="pivot-decision"><span>Finding → design change</span><p>The fixture needed to hold cutters at known opening angles while maintaining a controlled force direction.</p></div>
    </div>
    <figure class="pivot-story-media"><img src="img/projects/pivot-test-stand/media/prototype.jpg" alt="Early test fixture used to investigate pivot resistance" loading="lazy"><figcaption>Early test fixture used to investigate pivot resistance</figcaption></figure>
  </div>
</section>
<section class="pivot-panel" id="pivot-redesign">
 <p class="pivot-label">05 / Mechanical redesign</p>
 <h2>Make angle-dependent torque measurements possible.</h2>
 <p>To account for the variation identified during testing, I redesigned the fixture around repeatable cutter positioning at 0°, 10°, 20°, and 30° and a movable pulley location that maintains an approximately perpendicular pulling direction.</p>
 <div class="pivot-story-split pivot-process-step">
  <div class="pivot-story-copy">
   <p class="pivot-substep">05A / Indexed positioning</p>
   <h3>Control the cutter's opening angle.</h3>
   <p>The multi-position locating geometry fixes the handle configuration rather than relying on a manually estimated angle. I used SolidWorks assembly configurations to inspect the geometry before printing revised fixtures.</p>
   <figure class="pivot-video-inline"><video controls playsinline preload="metadata"><source src="img/projects/pivot-test-stand/media/IMG_1484.mp4" type="video/mp4"></video><figcaption>Adjustable cutter-positioning mechanism</figcaption></figure>
  </div>
  <figure class="pivot-story-media"><img src="img/projects/pivot-test-stand/media/multi-angle-cad.jpg" alt="SolidWorks CAD layout of indexed cutter angles and force-path design" loading="lazy"><figcaption>SolidWorks CAD layout of indexed cutter angles and force-path design</figcaption></figure>
 </div>
 <div class="pivot-story-split pivot-process-step pivot-alternate">
  <figure class="pivot-story-media"><img src="img/projects/pivot-test-stand/media/pulley-hardware.jpg" alt="Physical adjustable pulley mounting hardware" loading="lazy"><figcaption>Physical adjustable pulley mounting hardware</figcaption></figure>
  <div class="pivot-story-copy">
   <p class="pivot-substep">05B / Force-vector alignment</p>
   <h3>Move the pulley as the handle angle changes.</h3>
   <p>Repositioning the pulley preserves the intended perpendicular force direction so measured torque remains comparable across angles. Sliding track geometry, printed mounts and hardware were refined together.</p>
   <figure class="pivot-video-inline"><video controls playsinline preload="metadata"><source src="img/projects/pivot-test-stand/media/IMG_1584.mp4" type="video/mp4"></video><figcaption>Sliding pulley track and indexed position demonstration</figcaption></figure>
  </div>
 </div>
</section>
<section class="pivot-panel pivot-results" id="pivot-result">
  <p class="pivot-label">06 / Final assembly, testing, and QC application</p>
  <h2>From operator feel to a repeatable measurement reference.</h2>
  <div class="pivot-story-split">
    <div class="pivot-story-copy">
      <p>The fourth and final iteration brought together the adjustable cutter fixture, pulley path, and incremental mass loading to measure pivot friction across multiple handle angles.</p>
      <p>I documented friction measurements in Excel and compared them with five QC classifications to support the development of numerical acceptance limits. The outcome was a working test stand and a more systematic inspection method.</p>
      <div class="pivot-qc"><span>Too loose</span><span>Loose — pass</span><span>Preferred</span><span>Tight — pass</span><span>Too tight</span></div>
      <div class="pivot-decision"><span>Engineering outcome</span><p>Experimental findings directly informed the redesign; the completed apparatus enabled angle-dependent friction measurements and more consistent tool comparisons.</p></div>
    </div>
    <figure class="pivot-story-media"><img src="img/projects/pivot-test-stand/media/final-stand.jpg" alt="Final assembled wire-cutter pivot test stand with hanging masses" loading="lazy"><figcaption>Final assembled wire-cutter pivot test stand with hanging masses</figcaption></figure>
  </div>
  <div class="pivot-results-grid">
    <div><h3>Mechanical design</h3><p>SolidWorks CAD, adjustable fixture geometry, component integration, and DfAM.</p></div>
    <div><h3>Experimental engineering</h3><p>Moment-arm physics, controlled loading, repeatability, and diagnosis of angle sensitivity.</p></div>
    <div><h3>Quality engineering</h3><p>Measured torque data compared against the QC team's qualitative acceptance categories.</p></div>
  </div>
</section>
  `;
  document.getElementById('projectReturn').before(root);
  const setAngle=(angle)=>{
    const rad=-angle*Math.PI/180,pivotX=100,pivotY=199;
    const hx=pivotX+225*Math.cos(rad),hy=pivotY+225*Math.sin(rad);
    const fx=hx+120*Math.sin(rad),fy=hy-120*Math.cos(rad);
    for(const id of ['pivot-handle','pivot-radius']){const el=root.querySelector('#'+id);el.setAttribute('x2',hx);el.setAttribute('y2',hy);}
    const force=root.querySelector('#pivot-force');force.setAttribute('x1',hx);force.setAttribute('y1',hy);force.setAttribute('x2',fx);force.setAttribute('y2',fy);
    const label=root.querySelector('#pivot-force-label');label.setAttribute('x',fx+13);label.setAttribute('y',fy);
    const radius=root.querySelector('#pivot-r-label');radius.setAttribute('x',(pivotX+hx)/2-32);radius.setAttribute('y',(pivotY+hy)/2-25);
    root.querySelectorAll('[data-angle]').forEach(b=>b.setAttribute('aria-pressed',String(+b.dataset.angle===angle)));
  };
  root.querySelectorAll('[data-angle]').forEach(b=>b.addEventListener('click',()=>setAngle(+b.dataset.angle)));
  const updateMass=()=>{
    const grams=+root.querySelector('#pivot-mass').value,force=grams/1000*9.81;
    root.querySelector('#pivot-mass-display').textContent=grams+' g';
    root.querySelector('#pivot-calc-force').textContent=force.toFixed(3)+' N';
    root.querySelector('#pivot-calc-torque').textContent=(force*.088).toFixed(4)+' N·m';
  };
  root.querySelector('#pivot-mass').addEventListener('input',updateMass);
  setAngle(0);updateMass();
  const preferred=new Image();
  preferred.onload=()=>{const img=document.querySelector('#projectVisual img');if(img){img.src=preferred.src;img.alt='Completed instrumented wire-cutter pivot-friction test stand';}};
  preferred.src=folder+'final-stand.jpg';
})();