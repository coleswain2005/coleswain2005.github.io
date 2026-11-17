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
  <section class="pivot-panel pivot-intro">
    <p class="pivot-label">01 / Engineering problem</p>
    <h2>Making pivot resistance measurable, repeatable, and actionable.</h2>
    <p>At Excelta, wire-cutter pivot tightness was assessed primarily by how the tool felt when opened and closed. A subjective test could not reliably distinguish acceptable resistance between operators or quantify how a given cutter changed throughout its range of motion. I developed a mass-and-pulley test fixture to measure the friction torque required to initiate opening and compare the results with the quality-control team's assessments.</p>
    <div class="pivot-overview-steps">
      <div><span>01 / INPUT</span><strong>Incremental mass</strong><small>Controlled applied load</small></div>
      <div><span>02 / MEASURE</span><strong>Opening torque</strong><small>Perpendicular lever arm</small></div>
      <div><span>03 / ANALYZE</span><strong>Angle sensitivity</strong><small>Compare cutter positions</small></div>
      <div><span>04 / APPLY</span><strong>QC reference</strong><small>Support acceptance limits</small></div>
    </div>
  </section>

  <section class="pivot-panel" aria-labelledby="pivot-method">
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
  </section>

  <section class="pivot-panel">
    <p class="pivot-label">03 / Design process</p><h2>Four iterations. One critical experimental discovery.</h2>
    <div class="pivot-timeline">
      <article><span>01 / CONCEPT</span><h3>Defined the measurement</h3><p>Established a fixed pivot-to-force distance and selected controlled mass loading with a cord-and-pulley path.</p></article>
      <article><span>02 / FIRST BUILD</span><h3>Fabricated and integrated hardware</h3><p>Created SolidWorks assemblies, designed 3D-printed supports and mounted pulleys, fixtures and purchased hardware to the baseplate.</p></article>
      <article class="pivot-finding"><span>03 / EXPERIMENT</span><h3>Identified angle-dependent resistance</h3><p>Measurements of multiple cutters sometimes disagreed with experienced inspectors' relative rankings. Further testing revealed that resistance changed with the angle of an individual cutter.</p></article>
      <article><span>04 / FINAL REDESIGN</span><h3>Made geometry adjustable</h3><p>Implemented indexed cutter positioning and a sliding pulley track for 0°, 10°, 20° and 30° testing with nearly perpendicular force application.</p></article>
    </div>
  </section>

  <section class="pivot-panel">
    <div class="pivot-heading"><div><p class="pivot-label">04 / Hardware documentation</p><h2>From SolidWorks to a physical test stand</h2></div><span class="pivot-chip">CAD · DfAM · Prototyping</span></div>
    <p>The final layout combines a cutter locating fixture, adjustable force-application mechanism, printed components and pulleys. Cutouts reduced print material and time, while fillets and locating features supported assembly and alignment.</p>
    <div class="pivot-gallery">
      <figure data-new-media="final-stand.jpg"><img src="img/projects/pivot-test-stand/media/final-stand.jpg" alt="Completed wire cutter pivot torque stand with pulleys and loading cord" loading="lazy"/><figcaption>Assembled hardware · final test stand</figcaption></figure>
      <figure data-new-media="multi-angle-cad.jpg"><img src="img/projects/pivot-test-stand/media/multi-angle-cad.jpg" alt="SolidWorks multi-angle pivot test stand design" loading="lazy"/><figcaption>Multi-angle fixture and pulley alignment</figcaption></figure>
      <figure data-new-media="assembly-layout-cad.jpg"><img src="img/projects/pivot-test-stand/media/assembly-layout-cad.jpg" alt="CAD of fixture components arranged on baseplate" loading="lazy"/><figcaption>SolidWorks assembly layout</figcaption></figure>
      <figure data-new-media="initial-prototype.jpg"><img src="img/projects/pivot-test-stand/media/initial-prototype.jpg" alt="Initial physical test stand with wire cutter, mounting plate and pulleys" loading="lazy"/><figcaption>Initial physical assembly</figcaption></figure>
      <figure data-new-media="printed-fixtures.jpg"><img src="img/projects/pivot-test-stand/media/printed-fixtures.jpg" alt="3D printed pulley and locating fixtures" loading="lazy"/><figcaption>Rapid-prototyped components</figcaption></figure>
      <figure data-new-media="torque-sketch.jpg"><img src="img/projects/pivot-test-stand/media/torque-sketch.jpg" alt="Hand drawn torque free body diagram and 88 millimeter lever arm" loading="lazy"/><figcaption>Early torque measurement concept</figcaption></figure>
      <figure class="pivot-existing-media"><img src="img/projects/pivot-test-stand/test-stand-detail.png" alt="SolidWorks wire cutter fixture and locating hardware" loading="lazy"/><figcaption>Locating fixture CAD</figcaption></figure>
      <figure class="pivot-existing-media"><img src="img/projects/pivot-test-stand/print-layout.png" alt="CAD layout of additively manufactured fixture components" loading="lazy"/><figcaption>Fixture print layout</figcaption></figure>
    </div>
  </section>

  <section class="pivot-panel pivot-videos" id="pivot-videos" hidden>
    <p class="pivot-label">05 / Physical demonstrations</p><h2>Testing, adjustment and fabrication</h2>
    <div class="pivot-video-grid">
      <figure data-clip="IMG_1134.mp4"><video controls playsinline preload="metadata" poster="img/projects/pivot-test-stand/media/final-stand.jpg"><source src="img/projects/pivot-test-stand/media/IMG_1134.mp4" type="video/mp4"/></video><figcaption>Assembled pulley and hanging mass apparatus</figcaption></figure>
      <figure data-clip="IMG_1484.mp4"><video controls playsinline preload="metadata"><source src="img/projects/pivot-test-stand/media/IMG_1484.mp4" type="video/mp4"/></video><figcaption>Adjustable positioning fixture</figcaption></figure>
      <figure data-clip="IMG_1584.mp4"><video controls playsinline preload="metadata"><source src="img/projects/pivot-test-stand/media/IMG_1584.mp4" type="video/mp4"/></video><figcaption>Movable pulley track</figcaption></figure>
      <figure data-clip="IMG_1475.mp4"><video controls playsinline preload="metadata"><source src="img/projects/pivot-test-stand/media/IMG_1475.mp4" type="video/mp4"/></video><figcaption>Additive manufacturing footage</figcaption></figure>
    </div>
  </section>

  <section class="pivot-panel pivot-results">
    <p class="pivot-label">06 / Outcome and quality control</p>
    <h2>Connecting measurements with QC acceptance criteria</h2>
    <p>I recorded friction measurements in Excel and associated them with the QC team's qualitative assessments. The resulting dataset provided a basis for evaluating tolerances for pivot tightness rather than relying solely on touch.</p>
    <div class="pivot-qc"><span>Too loose</span><span>Loose — pass</span><span>Preferred</span><span>Tight — pass</span><span>Too tight</span></div>
    <div class="pivot-results-grid">
      <div><h3>Mechanical design</h3><p>Parametric CAD, locating geometry, rapid prototyping and assembly of an adjustable fixture.</p></div>
      <div><h3>Experimental method</h3><p>Controlled loading, moment-arm geometry and investigation of angle-dependent behavior.</p></div>
      <div><h3>Manufacturing impact</h3><p>A repeatable measurement workflow to support more consistent tool inspection and quality standards.</p></div>
    </div>
  </section>
  `;
  document.getElementById('projectReturn').before(root);
  root.querySelectorAll('[data-new-media] img').forEach(img=>{
    img.addEventListener('error',()=>img.closest('figure').remove());
  });
  Promise.all([...root.querySelectorAll('[data-clip]')].map(async figure=>{
    try {const res=await fetch(figure.querySelector('source').src,{method:'HEAD'});if(!res.ok)figure.remove();}
    catch{figure.remove();}
  })).then(()=>{if(root.querySelector('[data-clip]'))root.querySelector('#pivot-videos').hidden=false;});
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