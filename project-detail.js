const projects = {
  'disk-weapon': {
    title: 'Combat Disk Weapon — FEA-Driven Design',
    tags: ['Design & FEA', 'Robotics'],
    description: 'Designed and optimized a rotating disk weapon for the Skull Crusher 30 lb combat robot using iterative SolidWorks FEA. Applied rotational dynamics, mass cutout optimization, and stress concentration analysis over dozens of simulation runs to maximize impact energy within a 2.5 lb weight budget.',
    specs: [['MOI', '4,500+ kg/mm²'], ['Energy', '3.5+ kJ'], ['Tip Speed', '60 mph'], ['Weight', '<2.5 lb']],
    tools: 'SolidWorks · FEA · DFM · Rotational Dynamics',
  },
  'qc-fixture': {
    title: 'QC Inspection Fixture & Automation — 8× Throughput',
    tags: ['Manufacturing', 'Programming'],
    description: "Identified a throughput bottleneck in Excelta's Keyence profilometer QC workflow. Designed and 3D-printed a batch fixture for 8 consecutive scans, then developed an automation program to classify parts using circularity, channel width, and blade length.",
    specs: [['Throughput', '8× improvement'], ['Batch Size', '8 tools/scan'], ['Context', 'Excelta Corp · 2024']],
    tools: 'SolidWorks · 3D Printing · Keyence · Process Improvement',
  },
  'drone-payload': {
    title: 'Autonomous Drone Payload Delivery System',
    tags: ['Aerospace', 'Programming'],
    description: 'Developed an autonomous payload delivery system integrating standard drone electronics with a Raspberry Pi, OpenCV vision pipeline, and servo-actuated release mechanism. The system detects a ground target, autonomously aligns over it, and triggers payload deployment.',
    specs: [['Result', 'Successful flight demo'], ['Vision', 'OpenCV target detection'], ['Context', 'UCLA Class Project']],
    tools: 'Raspberry Pi · OpenCV · Python · Servo Actuation · Drone Electronics',
  },
  'python-workflow': {
    title: 'Python Manufacturing Workflow Automation',
    tags: ['Programming', 'Manufacturing'],
    description: 'Developed a Python tool that mapped 30,000+ data points across 11,000+ quotes to CNC requirements, automating manufacturing planning and enabling rapid retrieval of required manufacturing procedures.',
    specs: [['Data', '30,000+ points'], ['Quotes', '11,000+'], ['Context', 'Excelta Corp · 2025']],
    tools: 'Python · JupyterLab · Pandas · Workflow Automation',
  },
  'fan-propulsion': {
    title: 'Fan Propulsion: Arduino DAQ & Python Analysis',
    tags: ['Programming', 'Aerospace'],
    description: 'Built an embedded data acquisition system using dual ESP32 microcontrollers and an ultrasonic sensor to measure cart position on a frictionless air track under varying fan thrust and incline angles. Processed position-time data in Python to derive acceleration and calculate fan thrust force.',
    specs: [['Thrust Measured', '~0.06 N'], ['Stack', 'ESP32 · Arduino · Python'], ['Context', 'UCLA Physics Lab · 2025']],
    tools: 'Arduino IDE · ESP32 · Python · NumPy · Pandas · Matplotlib',
  },
  'press-fit': {
    title: 'Press-Fit Assembly Standardization — Excelta',
    tags: ['Manufacturing', 'Design & FEA'],
    description: 'Performed root cause analysis that traced 5× cutter variability to press-fit assembly. Designed and prototyped a custom 3D-printed fixture that improved consistency by 25%.',
    specs: [['Result', '25% consistency improvement'], ['Finding', '5× cutter variability'], ['Context', 'Excelta Corp · 2025']],
    tools: 'SolidWorks · 3D Printing · DfAM · Root Cause Analysis',
  },
  'weapon-hub': {
    title: 'Parametric Weapon Hub — Equation-Driven Spline Design',
    tags: ['Design & FEA', 'Robotics'],
    description: 'Created a parametric spline hub enabling rapid iteration of tooth count, assembly fit, and manufacturability for the Skull Crusher combat robot weapon system.',
    specs: [['Method', 'Equation-driven curves'], ['Design', 'Fully parametric'], ['Context', 'ASME Skull Crusher']],
    tools: 'SolidWorks · Parametric CAD · DFM · Shaft Design',
  },
  'aluminum-chair': {
    title: 'Machining & Assembling a Chair from Aluminum Stock',
    tags: ['Manufacturing'],
    description: 'Machined a functional scaled chair from aluminum stock using manual and CNC operations including turning, milling, drilling, and tapping. Applied SolidWorks CAM for CNC toolpath programming and assembled the final multi-part structure.',
    specs: [['Operations', 'Turning · Milling · Drilling · Tapping'], ['Material', 'Aluminum Stock']],
    tools: 'Manual Lathe · Mill · CNC · SolidWorks CAM',
  },
  'pivot-test-stand': {
    title: 'Instrumented Wire-Cutter Pivot Test Stand',
    tags: ['Test & Analysis', 'Manufacturing'],
    description: 'Designed and built an instrumented test stand to quantify wire-cutter pivot friction and establish new performance tolerances for precision tools.',
    specs: [['Measured', 'Pivot friction'], ['Output', 'Performance tolerances'], ['Context', 'Excelta Corp · 2025']],
    tools: 'Test Stand Design · Instrumentation · Mechanical Testing',
  },
  'legacy-reverse-engineering': {
    title: 'Legacy Tool Reverse Engineering',
    tags: ['Reverse Engineering', 'Manufacturing'],
    description: 'Reverse-engineered 20 legacy tools from 3D scans into manufacturing-ready engineering drawings, supporting continued production of existing tool designs.',
    specs: [['Tools', '20 legacy designs'], ['Input', '3D scans'], ['Output', 'Engineering drawings']],
    tools: '3D Scan to CAD · Reverse Engineering · Engineering Drawings',
  },
};

const slug = new URLSearchParams(window.location.search).get('project');
const project = projects[slug];

if (!project) {
  document.title = 'Project Not Found — Cole Swain';
  document.querySelector('#projectTitle').textContent = 'Project Not Found';
  document.querySelector('#projectDescription').textContent = 'Return to the portfolio to select a project.';
} else {
  document.title = `${project.title} — Cole Swain`;
  document.querySelector('#projectTitle').textContent = project.title;
  document.querySelector('#projectDescription').textContent = project.description;
  document.querySelector('#projectTools').textContent = project.tools;

  document.querySelector('#projectTags').replaceChildren(
    ...project.tags.map((tag) => {
      const item = document.createElement('span');
      item.className = 'tag';
      item.textContent = tag;
      return item;
    })
  );

  document.querySelector('#projectSpecs').replaceChildren(
    ...project.specs.map(([key, value]) => {
      const item = document.createElement('div');
      item.className = 'project-detail-spec';

      const label = document.createElement('span');
      label.textContent = key;

      const detail = document.createElement('strong');
      detail.textContent = value;

      item.append(label, detail);
      return item;
    })
  );
}
