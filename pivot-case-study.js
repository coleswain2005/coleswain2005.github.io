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
    <div class="pivot-principle-card">
      <div class="pivot-principle-equation">
        <span class="pivot-principle-overline">Governing relationship</span>
        <strong>τ = F × r = m × g × r</strong>
        <span>Applied load translated into pivot torque</span>
      </div>
      <div class="pivot-principle-details">
        <div><strong>m</strong><span>Incremental hanging mass</span></div>
        <div><strong>g</strong><span>9.81 m/s² gravitational acceleration</span></div>
        <div><strong>r</strong><span>≈ 88 mm nominal moment arm</span></div>
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
  <figure class="pivot-story-media"><img src="img/projects/pivot-test-stand/test-stand-detail.png" alt="SolidWorks full test stand layout showing the cutter, mounting base, and pulley positioning fixtures" loading="lazy"><figcaption>Overall SolidWorks assembly: cutter mount, baseplate, and pulley fixture locations</figcaption></figure>
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
    <figure class="pivot-story-media"><img src="img/projects/pivot-test-stand/media/final-stand.jpg" alt="Initial functional single-position wire-cutter test stand with pulley and hanging mass" loading="lazy"><figcaption>Initial working stand — before the multi-angle fixture and movable pulley redesign</figcaption></figure>
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
    <figure class="pivot-story-media"><img src="img/projects/pivot-test-stand/media/final-comparison.jpg" alt="SolidWorks final multi-angle test stand design shown beside the completed physical apparatus with added pulley track" loading="lazy"><figcaption>Multi-angle redesigned assembly — CAD and fabricated hardware, including repositionable pulley track</figcaption></figure>
  </div>
  <div class="pivot-results-grid">
    <div><h3>Mechanical design</h3><p>SolidWorks CAD, adjustable fixture geometry, component integration, and DfAM.</p></div>
    <div><h3>Experimental engineering</h3><p>Moment-arm physics, controlled loading, repeatability, and diagnosis of angle sensitivity.</p></div>
    <div><h3>Quality engineering</h3><p>Measured torque data compared against the QC team's qualitative acceptance categories.</p></div>
  </div>
</section>
<section class="pivot-panel pivot-evidence" id="pivot-measurements">
 <p class="pivot-label">07 / Experimental evidence — 15 cutters, four opening angles</p>
 <h2>The measurements demonstrate why an angle-adjustable test matters.</h2>
 <p>I recorded the hanging mass needed to initiate cutter opening at 0°, 10°, 20°, and 30° for 15 cutters, then converted each reading to force and pivot torque in Excel. The original worksheet also records inspectors' qualitative classifications.</p>
 <div class="pivot-evidence-stats"><div><strong>15</strong><span>Cutters evaluated</span></div><div><strong>4</strong><span>Angles per cutter</span></div><div><strong>60</strong><span>Recorded measurements</span></div></div>
 <div class="pivot-measurement-head"><div><h3>Angle-dependent opening resistance</h3><p>Mass required to initiate motion, kg · select a cutter to trace its measurements against the cohort.</p></div><label for="pivot-cutter-select">Cutter <select id="pivot-cutter-select" aria-label="Choose cutter number"></select></label></div>
 <div class="pivot-chart-outer"><svg id="pivot-results-chart" role="img" aria-label="Mass required to initiate cutter opening at zero, ten, twenty, and thirty degrees for fifteen cutters" viewBox="0 0 760 350" preserveAspectRatio="xMidYMid meet"></svg></div>
 <p class="pivot-chart-caption">Measured hanging mass, not torque. Force is calculated as F = mg; torque is then calculated using the nominal 88 mm lever arm. All 15 cutter profiles are shown faintly, with the selected cutter highlighted.</p>
 <div class="pivot-evidence-findings">
  <div><strong>Variation within a single cutter</strong><p>Some cutters showed substantially changing opening resistance as the handle moved. For example, cutter 5 decreased from 0.125 kg at 0° to 0.020 kg at 30°.</p></div>
  <div><strong>Differences between cutters</strong><p>Measurements varied considerably across cutters at the same opening angle. This shows why a single tactile assessment or one-angle reading is an incomplete description.</p></div>
 </div>
</section>
<section class="pivot-panel pivot-next" id="pivot-next">
 <p class="pivot-label">08 / Follow the variation upstream</p>
 <h2>What in the assembly process was producing inconsistent pivot friction?</h2>
 <p>The stand converted subjective observations into comparable measurements, revealing both tool-to-tool differences and dependence on opening angle. Those results pointed toward a deeper manufacturing question: how were assembly and press-fit conditions contributing to pivot tightness?</p>
 <div class="pivot-story-split">
  <div class="pivot-story-copy">
   <h3>Root-cause investigation</h3>
   <p>I extended the investigation from finished-tool inspection to the manufacturing process itself. The next workstreams focused on holding cutter components consistently during press-fit assembly and measuring the applied assembly forces.</p>
   <div class="pivot-spec-row"><span>01</span><p><strong>Press-fit locating fixtures</strong> — custom 3D-printed supports to standardize cutter alignment and positioning during assembly.</p></div>
   <div class="pivot-spec-row"><span>02</span><p><strong>Arbor press instrumentation</strong> — adding force measurement and controlled input to investigate and standardize press-fit loads.</p></div>
   <a class="pivot-next-link" href="project.html?project=press-fit">Explore the related press-fit standardization project →</a>
  </div>
  <figure class="pivot-story-media"><img src="img/projects/press-fit/fixture-render-revised.png" alt="Press-fit tooling and fixture CAD related to cutter assembly standardization" loading="lazy"><figcaption>Follow-on work: fixtures and instrumentation for the cutter assembly process</figcaption></figure>
 </div>
</section>
  `;
  document.getElementById('projectReturn').before(root);
  // 15 measured cutter profiles from the QC cross-reference worksheet; values are hanging mass in kilograms.
  const measuredMassKg=[
    [0.030,0.0175,0.0175,0.015],
    [0.095,0.0525,0.045,0.020],
    [0.030,0.0275,0.025,0.030],
    [0.045,0.045,0.045,0.045],
    [0.125,0.0625,0.0475,0.020],
    [0.085,0.0525,0.0625,0.030],
    [0.020,0.020,0.055,0.075],
    [0.035,0.0275,0.0325,0.025],
    [0.020,0.020,0.025,0.0375],
    [0.035,0.030,0.035,0.025],
    [0.045,0.0275,0.040,0.020],
    [0.020,0.025,0.025,0.0275],
    [0.0275,0.0175,0.0175,0.015],
    [0.0425,0.045,0.045,0.045],
    [0.085,0.0825,0.085,0.075]
  ];
  const chart=root.querySelector('#pivot-results-chart');
  const cutterSelect=root.querySelector('#pivot-cutter-select');
  measuredMassKg.forEach((_,i)=>{const o=document.createElement('option');o.value=String(i);o.textContent='Cutter '+(i+1);cutterSelect.append(o)});
  cutterSelect.value='4';
  const ns='http://www.w3.org/2000/svg';
  const addSvg=(tag,attrs,parent=chart)=>{const el=document.createElementNS(ns,tag);Object.entries(attrs).forEach(([k,v])=>el.setAttribute(k,String(v)));parent.append(el);return el};
  const chartX=i=>90+i*193,chartY=mass=>282-mass/.13*238;
  const drawChart=()=>{
    chart.replaceChildren();
    const chosen=Number(cutterSelect.value);
    [0,0.025,0.05,0.075,0.1,0.125].forEach(y=>{
      const yy=chartY(y);addSvg('line',{x1:80,y1:yy,x2:684,y2:yy,stroke:'#334352','stroke-width':1});
      const t=addSvg('text',{x:68,y:yy+4,'text-anchor':'end',fill:'#9CAAB5','font-size':12});t.textContent=y.toFixed(3);
    });
    [0,10,20,30].forEach((deg,i)=>{const t=addSvg('text',{x:chartX(i),y:310,'text-anchor':'middle',fill:'#BDCAD2','font-size':13});t.textContent=deg+'°'});
    const xlabel=addSvg('text',{x:382,y:342,'text-anchor':'middle',fill:'#BDCAD2','font-size':13});xlabel.textContent='Cutter opening angle';
    const paths=measuredMassKg.map(row=>row.map((v,i)=>chartX(i)+','+chartY(v)).join(' '));
    paths.forEach((path,i)=>{if(i===chosen)return;addSvg('polyline',{points:path,fill:'none',stroke:'#6F8393','stroke-width':1.5,'stroke-opacity':.22})});
    addSvg('polyline',{points:paths[chosen],fill:'none',stroke:'#65B7F1','stroke-width':3.6,'stroke-linecap':'round','stroke-linejoin':'round'});
    measuredMassKg[chosen].forEach((mass,i)=>{
      addSvg('circle',{cx:chartX(i),cy:chartY(mass),r:5.7,fill:'#65B7F1',stroke:'#10161D','stroke-width':2});
      const yy=chartY(mass);const label=addSvg('text',{x:chartX(i),y:yy<40?yy+22:yy-13,'text-anchor':'middle',fill:'#E5F3FD','font-size':12,'font-weight':600});label.textContent=mass.toFixed(4).replace(/0+$/,'').replace(/\.$/,'')+' kg';
    });
  };
  cutterSelect.addEventListener('change',drawChart);drawChart();

  const preferred=new Image();
  preferred.onload=()=>{const img=document.querySelector('#projectVisual img');if(img){img.src=preferred.src;img.alt='Completed instrumented wire-cutter pivot-friction test stand';}};
  preferred.src=folder+'final-stand.jpg';
})();