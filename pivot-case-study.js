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
    <p>Excelta inspectors assessed wire-cutter pivot tightness by feel. I developed a test stand to quantify the force required to initiate opening and make cutter comparisons repeatable.</p>
    <h3>Translating force into pivot friction torque</h3>
    <p>With one handle fixed, incremental hanging masses supplied the pulling force through a pulley. A nominal <strong>88 mm moment arm</strong> converts that load into pivot torque.</p>
    <div class="pivot-principle-card">
      <div class="pivot-principle-equation"><span class="pivot-principle-overline">Measurement principle</span><strong>τ = m × g × r</strong><span>Force perpendicular to the moving handle</span></div>
      <div class="pivot-principle-details"><div><strong>m</strong><span>Hanging mass</span></div><div><strong>g</strong><span>9.81 m/s²</span></div><div><strong>r</strong><span>≈ 88 mm</span></div></div>
    </div>
    <p class="pivot-method-summary">Add mass until the cutter starts opening, then calculate the initiation torque.</p>
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
<section class="pivot-panel pivot-discovery-panel pivot-test-redesign" id="pivot-discovery">
  <p class="pivot-label">03 / Test finding → mechanical redesign</p>
  <h2>A hidden variable changed the design.</h2>
  <div class="pivot-story-split pivot-process-step pivot-finding-row">
    <div class="pivot-story-copy">
      <p class="pivot-substep">03A / Experimental finding</p>
      <h3>Opening resistance depends on handle angle.</h3>
      <p>Early measurements did not always agree with inspectors' assessments. Testing revealed that resistance changed as the same cutter opened—so a single closed-position reading could not characterize its behavior.</p>
      <div class="pivot-decision"><span>Finding → new requirement</span><p>Measure at defined handle angles while keeping the applied force perpendicular to the handle.</p></div>
    </div>
    <figure class="pivot-story-media">
      <img src="img/projects/pivot-test-stand/media/multi-angle-cad.jpg" alt="SolidWorks multi-angle cutter fixture with construction geometry for pulley positions" loading="lazy">
      <figcaption>SolidWorks redesign — indexed cutter positions and force-path geometry</figcaption>
    </figure>
  </div>
  <div class="pivot-story-split pivot-process-step pivot-alternate pivot-redesign-row" id="pivot-redesign">
    <figure class="pivot-story-media">
      <img src="img/projects/pivot-test-stand/media/pulley-hardware.jpg" alt="Adjustable pulley hardware for multi-angle cutter friction tests" loading="lazy">
      <figcaption>Adjustable pulley mount developed for the redesigned test stand</figcaption>
    </figure>
    <div class="pivot-story-copy">
      <p class="pivot-substep">03B / Design response</p>
      <h3>Index the cutter. Reposition the pulley.</h3>
      <p>I developed locating features for <strong>0°, 10°, 20°, and 30°</strong> opening positions and a movable pulley track to maintain the loading direction. SolidWorks configurations guided the geometry; printed iterations refined the physical hardware.</p>
      <figure class="pivot-video-inline">
        <video controls playsinline preload="metadata"><source src="img/projects/pivot-test-stand/media/IMG_1584.mp4" type="video/mp4"></video>
        <figcaption>Movable pulley track — physical mechanism demonstration</figcaption>
      </figure>
    </div>
  </div>
</section>
<section class="pivot-panel pivot-results" id="pivot-result">
  <p class="pivot-label">04 / Final apparatus and measured outcomes</p>
  <h2>Final stand and 60 experimental measurements.</h2>
  <div class="pivot-story-split">
    <div class="pivot-story-copy">
      <p>The fourth iteration combined multi-angle cutter positioning with an adjustable pulley track. I measured 15 cutters at four opening angles and cross-referenced results to QC assessments.</p>
<div class="pivot-decision"><span>Outcome</span><p>The stand captured both cutter-to-cutter differences and variation across opening angles, informing quantitative QC reference limits.</p></div>
    </div>
    <figure class="pivot-story-media"><img src="img/projects/pivot-test-stand/media/final-comparison.jpg" alt="SolidWorks final multi-angle test stand design shown beside the completed physical apparatus with added pulley track" loading="lazy"><figcaption>Multi-angle redesigned assembly — CAD and fabricated hardware, including repositionable pulley track</figcaption></figure>
  </div>
<div class="pivot-results-data"><div class="pivot-evidence-stats"><div><strong>15</strong><span>Cutters evaluated</span></div><div><strong>4</strong><span>Angles per cutter</span></div><div><strong>60</strong><span>Recorded measurements</span></div></div>
 <div class="pivot-measurement-head"><div><h3>Angle-dependent opening resistance</h3><p>Mass required to initiate motion, kg · select a cutter to trace its measurements against the cohort.</p></div><label for="pivot-cutter-select">Cutter <select id="pivot-cutter-select" aria-label="Choose cutter number"></select></label></div>
 <div class="pivot-chart-outer"><svg id="pivot-results-chart" role="img" aria-label="Mass required to initiate cutter opening at zero, ten, twenty, and thirty degrees for fifteen cutters" viewBox="0 0 760 350" preserveAspectRatio="xMidYMid meet"></svg></div>
 <p class="pivot-chart-caption">Measured hanging mass (kg), not calculated torque. Selected cutter highlighted; others shown in gray.</p>
<p class="pivot-chart-caption"><strong>Key finding:</strong> Cutter 5 decreased from 0.125 kg at 0° to 0.020 kg at 30°, a 6.25× difference in initiation load.</p>
</div>
</section>
<section class="pivot-panel pivot-next" id="pivot-next">
 <p class="pivot-label">05 / Root-cause investigation</p>
 <h2>From measuring variation to controlling its source.</h2>
 <p>After quantifying the differences between cutters, I shifted upstream to the press-fit assembly process. Two follow-on projects addressed cutter positioning and applied assembly force.</p>
 <div class="pivot-follow-on-grid">
  <article class="pivot-follow-on-card">
   <img src="img/projects/press-fit/press-fit-fixture-photo.webp" alt="Wire cutter positioned within a press-fit locating fixture beneath an arbor press" loading="lazy">
   <div class="pivot-follow-on-copy"><p class="pivot-substep">Follow-on project 01</p><h3>Press-fit locating fixtures</h3><p>Designed custom fixtures to standardize cutter alignment during press-fit assembly and isolate positioning-related variation.</p></div>
  </article>
  <article class="pivot-follow-on-card">
   <img src="img/projects/press-fit/arbor-press-photo.webp" alt="Arbor press fitted with a torque wrench for measuring and controlling assembly input" loading="lazy">
   <div class="pivot-follow-on-copy"><p class="pivot-substep">Follow-on project 02</p><h3>Arbor press instrumentation</h3><p>Modified the press with controlled input and force measurement to investigate assembly loading and improve process consistency.</p></div>
  </article>
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