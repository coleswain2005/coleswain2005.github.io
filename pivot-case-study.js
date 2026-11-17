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
 <p class="pivot-label">01 / Concept and measurement principle</p>
 <h2>Turning subjective cutter tightness into a measurable torque.</h2>
 <div class="pivot-story-split pivot-process-step pivot-concept-layout">
  <div class="pivot-story-copy">
   <h3>From operator feel to pivot-friction torque</h3>
   <p>At Excelta, wire-cutter tightness was primarily judged by how much resistance an inspector felt while opening and closing the handles. I wanted a repeatable way to quantify that resistance and compare cutters objectively.</p>
   <p>The starting concept was simple: hold one handle fixed, apply an increasing force at a known distance from the pivot, and record the load required to initiate motion.</p>
   <div class="pivot-decision"><span>Engineering objective</span><p>Measure the static friction torque at the cutter pivot rather than relying on subjective feel alone.</p></div>
  </div>
  <figure class="pivot-story-media pivot-sketch-upright"><img src="img/projects/pivot-test-stand/media/torque-sketch.jpg" alt="Hand-drawn wire-cutter pivot friction torque derivation and physical cutter" loading="lazy"><figcaption>Original concept sketch: cutter pivot, applied force and moment arm</figcaption></figure>
 </div>
 <div class="pivot-theory-follow">
  <h3>Translating force into pivot friction torque</h3>
  <p>A hanging mass produces a known gravitational force through a cord and pulley system. With the force perpendicular to the moving handle, the torque is the force multiplied by the pivot-to-attachment moment arm.</p>
  <div class="pivot-principle-card">
 <div class="pivot-principle-equation"><span class="pivot-principle-overline">Governing relationship</span><strong>τ = F × r = m × g × r</strong><span>Force applied perpendicular to the cutter handle</span></div>
 <div class="pivot-principle-details"><div><strong>m</strong><span>Incremental hanging mass</span></div><div><strong>g</strong><span>9.81 m/s²</span></div><div><strong>r</strong><span>≈ 88 mm moment arm</span></div></div>
</div>
  <p class="pivot-method-summary"><strong>Measurement procedure:</strong> increase the suspended mass until the cutter begins to open, record the mass, and calculate initiation torque using the nominal 88 mm moment arm.</p>
 </div>
</section>

<section class="pivot-panel" id="pivot-prototype">
 <p class="pivot-label">02 / Early CAD and rapid development</p>
 <h2>From physics concept to a buildable, testable assembly.</h2>
 <div class="pivot-story-split pivot-process-step">
  <div class="pivot-story-copy">
   <p class="pivot-substep">02A / SolidWorks design and hardware sourcing</p>
   <h3>Design around real components.</h3>
   <p>I modeled the cutter support, baseplate, pulley mounts, and load path in SolidWorks. Integrating McMaster-Carr hardware models and sourcing pulleys, fasteners, and other standard components helped turn the concept into a practical assembly rather than a CAD-only exercise.</p>
   <p>The cutter fixture constrained the lower handle while allowing the upper handle to rotate under a controlled pull. The initial layout targeted an initiation-torque measurement from the closed position.</p>
  </div>
  <figure class="pivot-story-media"><img src="img/projects/pivot-test-stand/test-stand-detail.png" alt="Early SolidWorks overall wire-cutter torque test fixture layout" loading="lazy"><figcaption>Early SolidWorks system layout — cutter mounting and pulley hardware placement</figcaption></figure>
 </div>
 <div class="pivot-story-split pivot-process-step pivot-alternate">
  <figure class="pivot-story-media "><img src="img/projects/pivot-test-stand/media/print-layout.jpg" alt="Print preparation and additive manufacturing planning for custom fixture components" loading="lazy"><figcaption>Print preparation and additive manufacturing planning for custom fixture components</figcaption></figure>
  <div class="pivot-story-copy">
   <p class="pivot-substep">02B / Rapid prototyping</p>
   <h3>Quick physical iterations to verify fit and alignment.</h3>
   <p>Custom 3D-printed fixtures enabled rapid fit checks and adjustments without machining every prototype. I refined mounting details and added cutouts and fillets to improve print efficiency and usability.</p>
   <figure class="pivot-story-media "><img src="img/projects/pivot-test-stand/media/printed-fixtures.jpg" alt="Printed locating and mounting components ready for integration" loading="lazy"><figcaption>Printed locating and mounting components ready for integration</figcaption></figure>
   <figure class="pivot-video-inline"><video controls playsinline preload="metadata"><source src="img/projects/pivot-test-stand/media/IMG_1475.mp4" type="video/mp4"></video><figcaption>Additive fabrication of fixture components</figcaption></figure>
  </div>
 </div>
</section>

<section class="pivot-panel" id="pivot-first-build">
 <p class="pivot-label">03 / Initial physical build and testing</p>
 <h2>The first stand proved the loading method—at one opening position.</h2>
 <div class="pivot-story-split pivot-process-step">
  <div class="pivot-story-copy">
   <p>I mounted the cutter in the printed fixture, routed a cord over the pulleys, and applied incremental hanging masses. This established a practical way to quantify the force required to overcome static pivot friction.</p>
   <p>Early adjustments addressed hardware alignment, cord elasticity, attachment points, and ease of applying successive loads.</p>
   <div class="pivot-decision"><span>What worked</span><p>The apparatus translated cutter opening resistance into a measurable applied mass and calculated torque.</p></div>
   <figure class="pivot-video-inline"><video controls playsinline preload="metadata"><source src="img/projects/pivot-test-stand/media/IMG_1134.mp4" type="video/mp4"></video><figcaption>Initial mass-and-pulley measurement setup</figcaption></figure>
  </div>
  <figure class="pivot-story-media "><img src="img/projects/pivot-test-stand/media/final-stand.jpg" alt="Early wire-cutter torque apparatus with fixed cutter positioning and hanging weights" loading="lazy"><figcaption>Functional first stand — before the later angle-adjustable pulley and cutter fixtures</figcaption></figure>
 </div>
</section>

<section class="pivot-panel pivot-discovery-panel" id="pivot-discovery">
 <p class="pivot-label">04 / The limitation revealed by testing</p>
 <h2>Pivot resistance changed with cutter opening angle.</h2>
 <div class="pivot-story-split pivot-process-step">
  <div class="pivot-story-copy">
   <p>Initial measurements did not always align with inspectors' perceptions of which cutter felt tighter. Investigating these differences revealed that friction was not constant during the opening motion: the same tool could require a different load at another handle angle.</p>
   <p>This meant a single closed-position reading could not fully characterize cutter feel or fairly compare tools.</p>
   <div class="pivot-decision"><span>Finding → requirement</span><p>Measure at several defined handle angles and maintain a consistent perpendicular force direction at each position.</p></div>
  </div>
  <figure class="pivot-story-media "><img src="img/projects/pivot-test-stand/media/initial-prototype.jpg" alt="Earlier fixed-position apparatus used to investigate the measurement limitation" loading="lazy"><figcaption>Earlier fixed-position apparatus used to investigate the measurement limitation</figcaption></figure>
 </div>
</section>

<section class="pivot-panel" id="pivot-redesign">
 <p class="pivot-label">05 / Multi-angle redesign and fabrication</p>
 <h2>Control both cutter opening angle and force application geometry.</h2>
 <div class="pivot-story-split pivot-process-step">
  <div class="pivot-story-copy">
   <p class="pivot-substep">05A / Indexed cutter positioning</p>
   <h3>Configure repeatable measurements at four angles.</h3>
   <p>I redesigned the cutter locating fixture and evaluated configurations in SolidWorks at <strong>0°, 10°, 20°, and 30°</strong>. Indexed positions reduced ambiguity in how each tool was mounted and tested.</p>
   <figure class="pivot-video-inline"><video controls playsinline preload="metadata"><source src="img/projects/pivot-test-stand/media/IMG_1484.mp4" type="video/mp4"></video><figcaption>Adjustment mechanism for repeatable cutter positioning</figcaption></figure>
  </div>
  <figure class="pivot-story-media "><img src="img/projects/pivot-test-stand/media/multi-angle-cad.jpg" alt="Multi-angle SolidWorks layout showing cutter and pulley geometry" loading="lazy"><figcaption>Multi-angle SolidWorks layout showing cutter and pulley geometry</figcaption></figure>
 </div>
 <div class="pivot-story-split pivot-process-step pivot-alternate">
  <figure class="pivot-story-media "><img src="img/projects/pivot-test-stand/media/pulley-hardware.jpg" alt="Physical pulley hardware and adjustable mounting features" loading="lazy"><figcaption>Physical pulley hardware and adjustable mounting features</figcaption></figure>
  <div class="pivot-story-copy">
   <p class="pivot-substep">05B / Adjustable force vector</p>
   <h3>Keep the loading direction perpendicular to the moving handle.</h3>
   <p>Changing handle angle required the pulley location to move as well. I developed a slotted pulley track and used CAD construction geometry to establish compatible pulley positions, then refined the physical fixtures through additional prints and fit checks.</p>
   <figure class="pivot-video-inline"><video controls playsinline preload="metadata"><source src="img/projects/pivot-test-stand/media/IMG_1584.mp4" type="video/mp4"></video><figcaption>Movable pulley track used for multi-angle testing</figcaption></figure>
  </div>
 </div>
 <p class="pivot-method-summary"><strong>Design progression:</strong> initial fixed-position loading → discovery of angle dependence → indexed cutter angles and movable pulley hardware.</p>
</section>

<section class="pivot-panel pivot-results pivot-evidence" id="pivot-result">
 <p class="pivot-label">06 / Final system and measured outcomes</p>
 <h2>Quantifying cutter-to-cutter and angle-dependent variation.</h2>
 <div class="pivot-story-split pivot-process-step">
  <div class="pivot-story-copy">
   <p>The fourth iteration combined the adjustable cutter fixture, repositionable pulley track, and incremental mass loading. I cross-referenced quantitative measurements with the QC team's qualitative assessments in Excel.</p>
   <p>The resulting dataset includes 15 cutters measured at four opening angles, providing evidence of both differences among tools and changing resistance within an individual cutter.</p>
   <div class="pivot-decision"><span>Completed engineering system</span><p>A functional multi-angle test apparatus and a repeatable procedure to support numerical QC acceptance criteria.</p></div>
  </div>
  <figure class="pivot-story-media "><img src="img/projects/pivot-test-stand/media/final-comparison.jpg" alt="CAD-to-physical comparison showing completed multi-angle wire cutter stand" loading="lazy"><figcaption>Redesigned test stand: final CAD arrangement beside the fabricated multi-angle assembly</figcaption></figure>
 </div>
 <div class="pivot-results-data">
  <h3>Measured friction across opening angle</h3>
  <p>Measured hanging mass required to initiate opening, in kilograms. Select an individual cutter to see its profile against the remaining test group.</p>
  <div class="pivot-evidence-stats"><div><strong>15</strong><span>Cutters evaluated</span></div><div><strong>4</strong><span>Angles per cutter</span></div><div><strong>60</strong><span>Recorded measurements</span></div></div>
 <div class="pivot-measurement-head"><div><h3>Angle-dependent opening resistance</h3><p>Mass required to initiate motion, kg · select a cutter to trace its measurements against the cohort.</p></div><label for="pivot-cutter-select">Cutter <select id="pivot-cutter-select" aria-label="Choose cutter number"></select></label></div>
 <div class="pivot-chart-outer"><svg id="pivot-results-chart" role="img" aria-label="Mass required to initiate cutter opening at zero, ten, twenty, and thirty degrees for fifteen cutters" viewBox="0 0 760 350" preserveAspectRatio="xMidYMid meet"></svg></div>
 <p class="pivot-chart-caption">Measured hanging mass, not torque. Force is calculated as F = mg; torque is then calculated using the nominal 88 mm lever arm. All 15 cutter profiles are shown faintly, with the selected cutter highlighted.</p>
 <div class="pivot-evidence-findings">
  <div><strong>Variation within a single cutter</strong><p>Some cutters showed substantially changing opening resistance as the handle moved. For example, cutter 5 decreased from 0.125 kg at 0° to 0.020 kg at 30°.</p></div>
  <div><strong>Differences between cutters</strong><p>Measurements varied considerably across cutters at the same opening angle. This shows why a single tactile assessment or one-angle reading is an incomplete description.</p></div>
 </div>

 </div>
 <div class="pivot-results-grid">
  <div><h3>Mechanical design</h3><p>SolidWorks assemblies, adjustable locating geometry, hardware sourcing, and DfAM.</p></div>
  <div><h3>Experimental validation</h3><p>Controlled force application and comparative measurements across four opening positions.</p></div>
  <div><h3>Manufacturing quality</h3><p>Linking measured pivot resistance to the QC team's qualitative classifications.</p></div>
 </div>
</section>
<section class="pivot-panel pivot-next" id="pivot-next">
 <p class="pivot-label">07 / Root-cause investigation and follow-on projects</p>
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

  `;  document.getElementById('projectReturn').before(root);
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
  preferred.onload=()=>{const img=document.querySelector('#projectVisual img');if(img){img.src=preferred.src;img.alt='Final multi-angle wire-cutter pivot-friction test stand, CAD and completed hardware';}};
  preferred.src=folder+'final-comparison.jpg';
})();