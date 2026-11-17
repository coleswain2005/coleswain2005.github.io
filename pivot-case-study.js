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
  <p class="pivot-label">01 / Problem and measurement concept</p>
  <h2>Quantifying cutter pivot friction.</h2>
  <div class="pivot-story-split"><div class="pivot-story-copy">
    <p>At Excelta, pivot tightness was evaluated by opening and closing wire cutters and judging the resistance by feel. That made comparisons between tools difficult to standardize.</p>
    <p><strong>Objective:</strong> develop an intuitive, repeatable fixture that measures the torque required to initiate cutter opening, then relate those readings to the QC team's existing classifications.</p>
    <div class="pivot-decision"><span>Design requirement</span><p>Constrain the cutter, apply a controlled load, and quantify resistance without relying solely on an operator's perception.</p></div>
  </div><figure class="pivot-story-media pivot-sketch-figure"><div class="pivot-sketch-image"><img src="img/projects/pivot-test-stand/media/torque-sketch.jpg" alt="Upright hand sketch of wire-cutter pivot friction, applied force and moment arm" loading="lazy"></div><figcaption>Initial concept sketch — force, pivot, and 88 mm lever arm</figcaption></figure></div>
</section>

  <section class="pivot-panel" id="pivot-prototype">
 <p class="pivot-label">02 / Design, source, prototype</p>
 <h2>From SolidWorks to a working test stand.</h2>
 <div class="pivot-story-split pivot-process-step">
  <div class="pivot-story-copy">
    <p class="pivot-substep">02A / SolidWorks and hardware sourcing</p>
    <h3>Model the fixture and source the hardware.</h3>
    <p>I designed the baseplate, cutter clamp, and pulley layout in SolidWorks, integrating McMaster-Carr components with custom fixtures to create a buildable force-loading assembly.</p>
  </div>
  <figure class="pivot-story-media"><img src="img/projects/pivot-test-stand/test-stand-detail.png" alt="SolidWorks full test stand layout showing the cutter, mounting base, and pulley positioning fixtures" loading="lazy"><figcaption>Overall SolidWorks assembly: cutter mount, baseplate, and pulley fixture locations</figcaption></figure>
 </div>
 <div class="pivot-story-split pivot-process-step pivot-alternate">
  <figure class="pivot-story-media"><img src="img/projects/pivot-test-stand/media/printed-fixtures.jpg" alt="3D-printed fixture components after fabrication" loading="lazy"><figcaption>3D-printed fixture components after fabrication</figcaption></figure>
  <div class="pivot-story-copy">
    <p class="pivot-substep">02B / Rapid prototyping and first build</p>
    <h3>Print, fit, and assemble.</h3>
    <p>3D-printed fixtures enabled fast fit and alignment iterations. I assembled the first stand using purchased pulleys, cord, and incremental masses, then refined mounting and load-path details during testing.</p>
    
  </div>
 </div>
 <div class="pivot-story-split pivot-process-step">
  <div class="pivot-story-copy"><h3>Initial single-position apparatus</h3><p>The first prototype demonstrated controlled loading from the closed position. It also exposed alignment and cord-routing details that needed refinement.</p>
  <figure class="pivot-video-inline"><video controls playsinline preload="metadata"><source src="img/projects/pivot-test-stand/media/IMG_1134.mp4" type="video/mp4"></video><figcaption>First test setup with pulleys and hanging masses</figcaption></figure></div>
  <figure class="pivot-story-media"><img src="img/projects/pivot-test-stand/media/final-stand.jpg" alt="Initial wire cutter torque test stand before angle adjustment redesign" loading="lazy"><figcaption>First functional build — before the multi-angle redesign</figcaption></figure>
 </div>
</section>
<section class="pivot-panel pivot-discovery-panel" id="pivot-discovery">
  <p class="pivot-label">03 / Test finding</p>
  <h2>Testing revealed angle-dependent friction.</h2>
  <div class="pivot-story-split">
    <div class="pivot-story-copy">
      <p>I measured resistance on multiple cutters and compared the readings with the QC team's judgments. Sometimes a cutter perceived as looser registered higher friction torque than another.</p>
      <p>Further testing showed why: <strong>the same cutter's pivot resistance varied with its opening angle.</strong> Measuring only at the closed position did not fully characterize its behavior.</p>
      <div class="pivot-decision"><span>Finding → design change</span><p>The fixture needed to hold cutters at known opening angles while maintaining a controlled force direction.</p></div>
    </div>

  </div>
</section>
<section class="pivot-panel" id="pivot-redesign">
 <p class="pivot-label">04 / Multi-angle redesign</p>
 <h2>Control angle and force direction.</h2>
 <p>I added indexed cutter positions at 0°, 10°, 20°, and 30°, along with an adjustable pulley track to preserve perpendicular loading as the handle moved.</p>
 <div class="pivot-story-split pivot-process-step">
  <div class="pivot-story-copy">
   <p class="pivot-substep">04A / Angle control</p>
   <h3>Control the cutter's opening angle.</h3>
   <p>SolidWorks configurations and printed locating features enabled repeatable cutter positioning.</p>
   
  </div>
  <figure class="pivot-story-media"><img src="img/projects/pivot-test-stand/media/multi-angle-cad.jpg" alt="SolidWorks CAD layout of indexed cutter angles and force-path design" loading="lazy"><figcaption>SolidWorks CAD layout of indexed cutter angles and force-path design</figcaption></figure>
 </div>
 <div class="pivot-story-split pivot-process-step pivot-alternate">
  <figure class="pivot-story-media"><img src="img/projects/pivot-test-stand/media/pulley-hardware.jpg" alt="Physical adjustable pulley mounting hardware" loading="lazy"><figcaption>Physical adjustable pulley mounting hardware</figcaption></figure>
  <div class="pivot-story-copy">
   <p class="pivot-substep">04B / Perpendicular loading</p>
   <h3>Reposition the pulley with the handle.</h3>
   <p>I used construction geometry to place a movable pulley along the required force path, then refined the slotted track and mounts through printed iterations.</p>
   <figure class="pivot-video-inline"><video controls playsinline preload="metadata"><source src="img/projects/pivot-test-stand/media/IMG_1584.mp4" type="video/mp4"></video><figcaption>Sliding pulley track and indexed position demonstration</figcaption></figure>
  </div>
 </div>
</section>
<section class="pivot-panel pivot-results" id="pivot-result">
  <p class="pivot-label">05 / Final apparatus and measured outcomes</p>
  <h2>Final stand and 60 experimental measurements.</h2>
  <div class="pivot-story-split">
    <div class="pivot-story-copy">
      <p>The fourth iteration combined multi-angle cutter positioning with an adjustable pulley track. I measured 15 cutters at four opening angles and cross-referenced results to QC assessments.</p>
<div class="pivot-decision"><span>Outcome</span><p>The stand captured both cutter-to-cutter differences and variation across opening angles, informing quantitative QC reference limits.</p></div>
    </div>
    <figure class="pivot-story-media"><img src="img/projects/pivot-test-stand/media/final-comparison.jpg" alt="SolidWorks final multi-angle test stand design shown beside the completed physical apparatus with added pulley track" loading="lazy"><figcaption>Multi-angle redesigned assembly — CAD and fabricated hardware, including repositionable pulley track</figcaption></figure>
  </div>
<div class="pivot-results-data"><h3>Measured opening resistance</h3><div class="pivot-evidence-stats"><div><strong>15</strong><span>Cutters evaluated</span></div><div><strong>4</strong><span>Angles per cutter</span></div><div><strong>60</strong><span>Recorded measurements</span></div></div>
 <div class="pivot-measurement-head"><div><h3>Angle-dependent opening resistance</h3><p>Mass required to initiate motion, kg · select a cutter to trace its measurements against the cohort.</p></div><label for="pivot-cutter-select">Cutter <select id="pivot-cutter-select" aria-label="Choose cutter number"></select></label></div>
 <div class="pivot-chart-outer"><svg id="pivot-results-chart" role="img" aria-label="Mass required to initiate cutter opening at zero, ten, twenty, and thirty degrees for fifteen cutters" viewBox="0 0 760 350" preserveAspectRatio="xMidYMid meet"></svg></div>
 <p class="pivot-chart-caption">Measured hanging mass, not torque. Force is calculated as F = mg; torque is then calculated using the nominal 88 mm lever arm. All 15 cutter profiles are shown faintly, with the selected cutter highlighted.</p>
<p class="pivot-chart-caption"><strong>Key finding:</strong> Cutter 5 decreased from 0.125 kg at 0° to 0.020 kg at 30°, a 6.25× difference in initiation load.</p>
</div>
</section>
<section class="pivot-panel pivot-next" id="pivot-next">
 <p class="pivot-label">06 / Root-cause investigation</p>
 <h2>Tracing variation to the assembly process.</h2>
 <p>Quantifying the variation led to a follow-on question: could cutter assembly and press-fit conditions be driving inconsistent pivot friction?</p>
 <div class="pivot-story-split">
  <div class="pivot-story-copy">
<h3>Next: investigate the press-fit process</h3><p>I developed locating fixtures to standardize tool positioning and instrumented an arbor press to measure assembly loads.</p>
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