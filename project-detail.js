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
    title: 'Parametric Weapon Hub Spline Design',
    tags: ['Design & FEA', 'Robotics'],
    description: "Designed a spline shaft hub in SolidWorks to house Skull Crusher's two rotating weapon disks and transmit torque from the drive system. The model is fully parametric so the team can rapidly adapt the hub as the weapon geometry evolves.",
    specs: [['Project Type', 'Weapon Systems'], ['Organization', 'ASME Skull Crusher'], ['Method', 'Equation-driven curves'], ['Date', 'August 2025']],
    tools: 'SolidWorks · Parametric CAD · Global Variables · Equation-Driven Curves · Mechanical Design',
    heroImage: {
      src: 'img/weapon-hub-assembly.png',
      alt: 'CAD rendering of the Skull Crusher dual-disk weapon assembly and spline hub',
    },
    story: [
      {
        label: '01 / Motivation',
        title: 'A reliable interface for an evolving weapon',
        text: "Once the Skull Crusher team selected a rotating-disk weapon, the next step was developing a reliable method to mount and drive both disks. Because the weapon geometry changes frequently during development, the hub needed to transmit torque while remaining easy to adjust.",
      },
      {
        label: '02 / Approach',
        title: 'Drive the geometry with equations',
        text: 'I used SolidWorks Global Variables to control sketch and feature dimensions, then generated the spline profile with equation-driven curves. Important parameters such as spline tooth count can be changed instantly without rebuilding the model.',
      },
      {
        label: '03 / Results',
        title: 'Fast iteration without a ground-up rebuild',
        text: 'The completed spline hub functions as intended and can be rapidly modified through the Global Variables interface. Tooth count and other critical dimensions are easy to change, enabling faster design iteration as the weapon system evolves.',
      },
    ],
    gallery: [
      {
        src: 'img/weapon-hub-spline.png',
        alt: 'Front CAD rendering showing the equation-driven spline profile and circular mounting pattern',
        caption: 'Equation-driven spline profile and mounting pattern',
      },
      {
        src: 'img/weapon-hub-assembly.png',
        alt: 'CAD rendering of the spline hub installed between two rotating weapon disks',
        caption: 'Spline hub integrated into the dual-disk weapon assembly',
      },
    ],
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

  if (project.heroImage) {
    const image = document.createElement('img');
    image.src = project.heroImage.src;
    image.alt = project.heroImage.alt;
    document.querySelector('#projectVisual').replaceChildren(image);
  }

  if (project.story?.length) {
    const story = document.querySelector('#projectStory');
    story.hidden = false;
    story.replaceChildren(
      ...project.story.map((section) => {
        const item = document.createElement('div');
        item.className = 'project-story-item';

        const label = document.createElement('div');
        label.className = 'project-detail-label';
        label.textContent = section.label;

        const title = document.createElement('h2');
        title.textContent = section.title;

        const text = document.createElement('p');
        text.textContent = section.text;

        item.append(label, title, text);
        return item;
      })
    );
  }

  if (project.gallery?.length) {
    const gallery = document.querySelector('#projectGallery');
    gallery.hidden = false;
    gallery.replaceChildren(
      ...project.gallery.map((item) => {
        const figure = document.createElement('figure');
        const image = document.createElement('img');
        const caption = document.createElement('figcaption');

        image.src = item.src;
        image.alt = item.alt;
        caption.textContent = item.caption;
        figure.append(image, caption);
        return figure;
      })
    );
  }
}
