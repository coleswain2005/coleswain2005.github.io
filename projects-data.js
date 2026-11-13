const projects = {
  'disk-weapon': {
    title: 'Combat Disk Weapon — FEA-Driven Design',
    tags: ['Design & FEA', 'Robotics'],
    description: 'Designed and optimized a rotating disk weapon for the Skull Crusher 30 lb combat robot using iterative SolidWorks FEA. Applied rotational dynamics, mass cutout optimization, and stress concentration analysis over dozens of simulation runs to maximize impact energy within a 2.5 lb weight budget.',
    specs: [['MOI', '4,500+ kg/mm²'], ['Energy', '3.5+ kJ'], ['Tip Speed', '60 mph'], ['Weight', '<2.5 lb']],
    tools: 'SolidWorks · FEA · DFM · Rotational Dynamics',
    heroImage: {
      src: 'img/projects/disk-weapon/dual-disk-assembly-dark.png',
      alt: 'Rendered dual-disk combat robot weapon assembly',
    },
    gallery: [
      { src: 'img/projects/disk-weapon/dual-disk-assembly-dark.png', alt: 'Dark rendered dual-disk weapon assembly', caption: 'Dual-disk weapon assembly render' },
      { src: 'img/projects/disk-weapon/disk-front.png', alt: 'Front view of the combat robot weapon disk', caption: 'Weapon disk front profile' },
      { src: 'img/projects/disk-weapon/dual-disk-assembly.png', alt: 'Rendered dual-disk weapon assembly', caption: 'Dual-disk assembly iteration' },
      { src: 'img/projects/disk-weapon/weapon-assembly-angle.png', alt: 'Angled view of the weapon assembly', caption: 'Weapon assembly angled view' },
      { src: 'img/projects/disk-weapon/weapon-assembly-side.png', alt: 'Side view of the weapon assembly', caption: 'Weapon assembly side view' },
      { src: 'img/projects/disk-weapon/disk-hub-assembly-render.png', alt: 'CAD rendering of the disk weapon and hub assembly', caption: 'Disk weapon and hub assembly' },
      { src: 'img/projects/disk-weapon/chassis-assembly.png', alt: 'CAD model of the combat robot chassis', caption: 'Combat robot chassis context' },
      { src: 'img/projects/disk-weapon/wheel-test-stand.png', alt: 'CAD rendering of the combat robot wheel test stand', caption: 'Combat robot drivetrain test stand' },
      { src: 'img/projects/collections/combat-robot.jpg', alt: 'Cole Swain holding the completed combat robot', caption: 'Completed combat robot' },
    ],
  },
  'qc-fixture': {
    title: 'QC Inspection Fixture & Automation — 8× Throughput',
    tags: ['Manufacturing', 'Programming'],
    description: "Identified a throughput bottleneck in Excelta's Keyence profilometer QC workflow. Designed and 3D-printed a batch fixture for 8 consecutive scans, then developed an automation program to classify parts using circularity, channel width, and blade length.",
    specs: [['Throughput', '8× improvement'], ['Batch Size', '8 tools/scan'], ['Context', 'Excelta Corp · 2024']],
    tools: 'SolidWorks · 3D Printing · Keyence · Process Improvement',
    heroImage: {
      src: 'img/projects/collections/optical-inspection.jpg',
      alt: 'Keyence inspection workflow and batch fixture',
    },
    gallery: [
      { src: 'img/projects/collections/optical-inspection.jpg', alt: 'Keyence inspection workflow and batch fixture', caption: 'Automated inspection workflow and batch fixture' },
    ],
  },
  'drone-payload': {
    title: 'Autonomous Drone Payload Delivery System',
    tags: ['Aerospace', 'Programming'],
    description: 'Developed an autonomous payload delivery system integrating standard drone electronics with a Raspberry Pi, OpenCV vision pipeline, and servo-actuated release mechanism. The system detects a ground target, autonomously aligns over it, and triggers payload deployment.',
    specs: [['Result', 'Successful flight demo'], ['Vision', 'OpenCV target detection'], ['Context', 'UCLA Class Project']],
    tools: 'Raspberry Pi · OpenCV · Python · Servo Actuation · Drone Electronics',
    heroImage: {
      src: 'img/projects/collections/vision-uav.jpg',
      alt: 'Cole Swain holding the autonomous payload delivery drone',
    },
    gallery: [
      { src: 'img/projects/collections/vision-uav.jpg', alt: 'Cole Swain holding the autonomous payload delivery drone', caption: 'Autonomous payload delivery drone' },
    ],
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
    heroImage: {
      src: 'img/projects/press-fit/fixture-render-revised.png',
      alt: 'Rendered press-fit assembly fixture with locating blocks and pins',
    },
    gallery: [
      { src: 'img/projects/press-fit/fixture-render.png', alt: 'Initial rendered press-fit assembly fixture', caption: 'Initial press-fit fixture concept' },
      { src: 'img/projects/press-fit/fixture-render-revised.png', alt: 'Revised rendered press-fit assembly fixture', caption: 'Revised press-fit fixture assembly' },
    ],
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
      {
        src: 'img/projects/weapon-hub/disk-hub-assembly-render.png',
        alt: 'Alternate CAD rendering of the disk weapon and spline hub assembly',
        caption: 'Alternate disk weapon and spline hub assembly render',
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
    heroImage: {
      src: 'img/projects/pivot-test-stand/test-stand-top.png',
      alt: 'Top view rendering of the wire-cutter pivot test stand',
    },
    gallery: [
      { src: 'img/projects/pivot-test-stand/test-stand-top.png', alt: 'Top view of the wire-cutter pivot test stand', caption: 'Test stand top view' },
      { src: 'img/projects/pivot-test-stand/test-stand-front.png', alt: 'Front view of the wire-cutter pivot test stand', caption: 'Test stand front view' },
      { src: 'img/projects/pivot-test-stand/test-stand-detail.png', alt: 'Detailed view of the test stand locating hardware', caption: 'Locating hardware detail' },
      { src: 'img/projects/pivot-test-stand/print-layout.png', alt: 'Print layout for test stand fixture components', caption: '3D-print layout for fixture components' },
    ],
  },
  'legacy-reverse-engineering': {
    title: 'Legacy Tool Reverse Engineering',
    tags: ['Reverse Engineering', 'Manufacturing'],
    description: 'Reverse-engineered 20 legacy tools from 3D scans into manufacturing-ready engineering drawings, supporting continued production of existing tool designs.',
    specs: [['Tools', '20 legacy designs'], ['Input', '3D scans'], ['Output', 'Engineering drawings']],
    tools: '3D Scan to CAD · Reverse Engineering · Engineering Drawings',
    heroImage: {
      src: 'img/projects/legacy-reverse-engineering/scissors-photo-cad-comparison.jpg',
      alt: 'Comparison of a physical precision scissors and its reverse-engineered CAD model',
    },
    gallery: [
      { src: 'img/projects/legacy-reverse-engineering/scissors-photo-cad-comparison.jpg', alt: 'Physical precision scissors beside a reverse-engineered CAD model', caption: 'Physical tool and reverse-engineered CAD comparison' },
      { src: 'img/projects/legacy-reverse-engineering/tool-comparison.jpg', alt: 'Three reverse-engineered precision tool models', caption: 'Legacy tool model comparison' },
      { src: 'img/projects/legacy-reverse-engineering/scissors-closed.png', alt: 'Closed scissors CAD rendering', caption: 'Closed scissors assembly' },
      { src: 'img/projects/legacy-reverse-engineering/scissors-open.png', alt: 'Open scissors CAD rendering', caption: 'Open scissors assembly' },
      { src: 'img/projects/legacy-reverse-engineering/tweezers-green.png', alt: 'Green precision tweezers CAD rendering', caption: 'Precision tweezers CAD model' },
      { src: 'img/projects/legacy-reverse-engineering/tweezers-dark-green.png', alt: 'Dark green precision tweezers CAD rendering', caption: 'Tweezers material study' },
      { src: 'img/projects/legacy-reverse-engineering/tweezers-open.png', alt: 'Open precision tweezers CAD rendering', caption: 'Tweezers open position' },
      { src: 'img/projects/legacy-reverse-engineering/tweezers-side.png', alt: 'Side profile of precision tweezers', caption: 'Tweezers side profile' },
      { src: 'img/projects/legacy-reverse-engineering/tweezers-side-render.png', alt: 'Rendered side profile of precision tweezers', caption: 'Tweezers side-profile render' },
      { src: 'img/projects/legacy-reverse-engineering/scan-reference-01.png', alt: 'Close-up reference image of a legacy tool cable', caption: 'Legacy tool scan reference 01' },
      { src: 'img/projects/legacy-reverse-engineering/scan-reference-02.png', alt: 'Close-up reference image of a legacy tool cable connection', caption: 'Legacy tool scan reference 02' },
      { src: 'img/projects/legacy-reverse-engineering/scan-reference-03.png', alt: 'Dimensioned reference image of a legacy brush tool', caption: 'Dimensioned legacy tool reference 03' },
      { src: 'img/projects/legacy-reverse-engineering/scan-reference-04.png', alt: 'Dimensioned reference image of a legacy brush tool', caption: 'Dimensioned legacy tool reference 04' },
      { src: 'img/projects/legacy-reverse-engineering/scan-reference-05.png', alt: 'Dimensioned reference image of a legacy brush tool', caption: 'Dimensioned legacy tool reference 05' },
      { src: 'img/projects/legacy-reverse-engineering/scan-reference-06.png', alt: 'Dimensioned reference image of a green legacy tool', caption: 'Dimensioned legacy tool reference 06' },
      { src: 'img/projects/legacy-reverse-engineering/scan-reference-07.png', alt: 'Dimensioned reference image of a green legacy tool', caption: 'Dimensioned legacy tool reference 07' },
      { src: 'img/projects/legacy-reverse-engineering/scan-reference-08.png', alt: 'Dimensioned reference image of a green legacy tool', caption: 'Dimensioned legacy tool reference 08' },
      { src: 'img/projects/legacy-reverse-engineering/scan-reference-09.png', alt: 'Dimensioned reference image of a curved legacy brush tool', caption: 'Dimensioned legacy tool reference 09' },
      { src: 'img/projects/legacy-reverse-engineering/scan-reference-10.png', alt: 'Dimensioned reference image of a curved legacy brush tool', caption: 'Dimensioned legacy tool reference 10' },
    ],
  },
};


const collections = [
  {
    "id": "combat-robotics",
    "title": "Combat Robotics",
    "organization": "ASME Flagship \u00b7 UCLA",
    "description": "Skull Crusher: weapon development, drivetrain engineering, and validation for a 30 lb competitive combat robot.",
    "tags": [
      "Mechanical Design & FEA",
      "Manufacturing",
      "Testing & Validation",
      "Robotics & Embedded Systems"
    ],
    "filters": "design-fea manufacturing testing robotics",
    "image": "img/projects/collections/combat-robot.jpg",
    "alt": "Cole Swain with the Skull Crusher combat robot",
    "count": "Weapon systems \u00b7 Drivetrain \u00b7 Testing"
  },
  {
    "id": "precision-tools",
    "title": "Precision Tool Engineering",
    "organization": "Excelta Corporation \u00b7 Professional work",
    "description": "Test fixtures, assembly processes, optical inspection, and manufacturing automation for precision hand tools.",
    "tags": [
      "Manufacturing",
      "Testing & Validation"
    ],
    "filters": "design-fea manufacturing testing",
    "image": "img/projects/collections/optical-inspection.jpg",
    "alt": "KEYENCE optical inspection machine with a multi-tool fixture",
    "count": "5 engineering contributions"
  },
  {
    "id": "drone-payload",
    "title": "Vision-Guided UAV",
    "organization": "UCLA Engineering",
    "description": "One integrated payload-delivery system combining a custom airframe, embedded electronics, and vision-triggered release.",
    "tags": [
      "Mechanical Design & FEA",
      "Robotics & Embedded Systems"
    ],
    "filters": "design-fea manufacturing robotics",
    "image": "img/projects/collections/vision-uav.jpg",
    "alt": "Cole Swain holding the UAV project",
    "count": "Airframe \u00b7 Electronics \u00b7 Computer vision"
  },
  {
    "id": "aluminum-chair",
    "title": "Machined Aluminum Chair",
    "organization": "Manufacturing & Mechanical Design",
    "description": "From aluminum stock to a functional scaled chair: CAD, manual machining, CNC toolpaths, and assembly.",
    "tags": [
      "Mechanical Design & FEA",
      "Manufacturing"
    ],
    "filters": "design-fea manufacturing",
    "count": "Standalone manufacturing case study"
  },
  {
    "id": "embedded-sensing",
    "title": "Embedded Sensing & Instrumentation",
    "organization": "UCLA Engineering",
    "description": "Physical experiments connecting embedded sensors, position telemetry, frequency analysis, and Python.",
    "tags": [
      "Testing & Validation",
      "Robotics & Embedded Systems"
    ],
    "filters": "testing robotics",
    "count": "Fan propulsion \u00b7 Doppler sensing"
  },
  {
    "id": "additional-projects",
    "title": "Additional Engineering Projects",
    "organization": "Academic & Personal Work",
    "description": "Smaller explorations in energy conversion, structural simulation, parametric CAD, and fabrication.",
    "tags": [
      "Mechanical Design & FEA",
      "Manufacturing"
    ],
    "filters": "design-fea manufacturing testing",
    "count": "4 concise project notes"
  }
];

// Parent relationships retain every original project.html?project= URL.
const parentProjects = {
  'disk-weapon': 'combat-robotics', 'weapon-hub': 'combat-robotics',
  'qc-fixture': 'precision-tools', 'press-fit': 'precision-tools',
  'pivot-test-stand': 'precision-tools', 'legacy-reverse-engineering': 'precision-tools',
  'python-workflow': 'precision-tools', 'fan-propulsion': 'embedded-sensing',
};
const section = (title, text) => ({ title, text });
const media = (src, alt, caption = alt) => ({src, alt, caption});

// Replace unsupported headline metrics with design context; original claims are
// recorded in PROJECTS-NOTES.md for owner verification.
Object.assign(projects['disk-weapon'], {
  title: 'Weapon System Design & Optimization',
  description: 'I developed the rotating-disk weapon for Skull Crusher through SolidWorks modeling, rotational-dynamics calculations, structural FEA, and mass optimization. The design work balanced a roughly 2.5 lb weapon budget against energy storage, load paths, and assembly constraints.',
  specs: [['Weapon budget', 'Approximately 2.5 lb'], ['Speed target', 'Approximately 10,000 RPM'], ['Analysis', '15+ structural FEA studies'], ['Design iteration', 'Approximately 25% mass reduction reported']],
  story: [
    section('Objective & constraints', 'Develop a disk weapon within the robot’s 30 lb system limit. Weapon mass, rotational inertia, hub fit, and chassis packaging all constrained the design; removing material required reevaluating the remaining load paths.'),
    section('Design & analysis', 'I used SolidWorks to iterate the disk geometry and evaluate structural stresses. Rotational inertia and kinetic energy informed the design alongside FEA, rather than judging the weapon by mass alone. The available media document CAD iterations, but do not include solver plots or boundary-condition records.'),
    section('Energy estimate & validation', 'Rotational energy follows E = ½Iω². The historical 3–3.5 kJ estimate at 10,000 RPM would require an inertia of approximately 0.0055–0.0064 kg·m². This is a consistency calculation, not a verified CAD mass property or a measured spin-test result. The recorded mass reduction also needs its baseline and final revision confirmed.'),
  ],
});
projects['disk-weapon'].gallery = projects['disk-weapon'].gallery.filter(x => !/wheel-test-stand|chassis-assembly|about-combat/.test(x.src));
projects['qc-fixture'].title = 'KEYENCE Optical Metrology Automation';
projects['qc-fixture'].specs = [['Fixture capacity', '8 tools'], ['Inspection', 'Circularity · Channel width · Blade length'], ['Platform', 'KEYENCE VR-6200']];
projects['qc-fixture'].story = [
  section('Problem & role', 'The optical inspection workflow required repeated part handling. I designed and 3D-printed a multi-part fixture, then developed pass/fail classification for tool geometry.'),
  section('Method', 'The fixture positions eight tools for consecutive optical measurements. Inspection criteria included circularity, channel width, and blade length, connecting the measurement workflow to quality-control decisions.'),
  section('Outcome & evidence', 'The existing photograph documents the multi-tool fixture on the KEYENCE system. Eight-part capacity is documented; a timed before-and-after study is not included here, so capacity is not presented as a measured throughput multiplier.'),
];
projects['press-fit'].story = [
  section('Problem & diagnosis', 'I traced reported 5× cutter variability to the press-fit assembly process. The objective was a more repeatable assembly method, using controlled fixturing to reduce variation between parts.'),
  section('Fixture & instrumentation', 'I designed and prototyped 3D-printed fixtures and worked with an instrumented arbor press, a Mark-10 force gauge, and torque-wrench integration to evaluate assembly forces and tool behavior.'),
  section('Outcome', 'The existing project record reports a 25% improvement in part consistency. The underlying sample size and definition of consistency are not included in the portfolio, so this remains a reported process outcome rather than a fully documented statistical result.'),
];
projects['press-fit'].specs[0] = ['Reported outcome', '25% improvement in consistency'];
const pivotGallery = projects['pivot-test-stand'].gallery;
projects['pivot-test-stand'].heroImage = media('img/projects/pivot-test-stand/test-stand-detail.png', 'CAD layout of wire-cutter test fixtures and locating hardware');
projects['pivot-test-stand'].gallery = pivotGallery.filter(x => /detail|print-layout/.test(x.src));
projects['pivot-test-stand'].gallery[0].alt = 'Wire cutter mounted in a fixture with adjacent locating components';
projects['pivot-test-stand'].gallery[0].caption = 'Wire-cutter fixture and locating hardware';
projects['pivot-test-stand'].story = [
  section('Objective', 'Quantify pivot resistance in wire cutters to support repeatable tool evaluation and performance tolerances. My contribution was designing and building the instrumented fixture.'),
  section('Test method', 'The setup used mechanical loading and an approximately 88 mm lever arm, with measurements across several cutter opening angles. Converting force to torque requires the perpendicular lever arm at each angle; opening geometry therefore matters when comparing measurements.'),
  section('Validation scope', 'Fixture repeatability, friction, and changes in opening angle affect the measured resistance. The available CAD and print-layout images document the fixture design; raw torque curves, uncertainty estimates, and final tolerance values are not available here.'),
];
projects['legacy-reverse-engineering'].story = [
  section('Objective & contribution', 'Convert legacy physical tools into usable manufacturing documentation. I reverse-engineered 20 tool designs from optical 3D scans into CAD and engineering drawings.'),
  section('Scan to CAD', 'I reconstructed tool geometry in SolidWorks and prepared engineering drawings and GD&T documentation. The side-by-side physical-tool and CAD image shows how the reconstructed assembly relates to its source hardware.'),
  section('Manufacturing handoff', 'The output supported continued production of existing designs. Images show assembly states, profiles, and scan references; no dimensional accuracy or tolerance capability is claimed without inspection records.'),
];
projects['python-workflow'].story = [
  section('Manufacturing problem', 'Historical quoting information needed to be connected to CNC requirements and manufacturing procedures. Manual retrieval made that planning workflow cumbersome.'),
  section('My implementation', 'I developed a Python workflow using JupyterLab and Pandas to process more than 30,000 data points across more than 11,000 quotes and map them to manufacturing requirements.'),
  section('Outcome', 'The tool automated manufacturing-planning retrieval. Source code, customer quoting data, and internal records are not reproduced in this public case study; no unrecorded time-saving estimate is assigned.'),
];
Object.assign(projects['drone-payload'], {
  title: 'Vision-Guided UAV', organization: 'UCLA Engineering',
  description: 'An integrated UAV developed for vision-guided precision payload delivery. My work combined mechanical airframe design and FEA, electronics packaging, and a Python/OpenCV pipeline for target detection and servo-actuated payload release. Target detection and release were automated; autonomous flight navigation is not claimed.',
  tags: ['Mechanical Design & FEA', 'Robotics', 'Embedded Systems'],
  specs: [['System', 'Integrated quadcopter & payload mechanism'], ['Compute', 'Raspberry Pi 4 · Camera Module 3'], ['Demonstration', 'Successful flight demo reported']],
  story: [
    section('Mechanical airframe & FEA', 'I modeled a multi-level chassis in SolidWorks, used structural FEA, and designed for additive manufacturing. Battery, avionics, and payload mounts brought component packaging into the mechanical design.'),
    section('Electronics & actuation', 'The system integrated the Raspberry Pi and camera with the battery, ESCs, motors, power distribution, and a servo-actuated payload mechanism. Mechanical mounts supported the electronics and release hardware as one assembly.'),
    section('Computer vision & release', 'Python and OpenCV supported HSV target detection, image filtering, detection thresholds, target confirmation, and release timing. Servo control translated a confirmed detection into payload actuation. The record reports a flight demonstration but provides no release-accuracy dataset.'),
  ],
});
projects['drone-payload'].heroImage.alt = 'Cole Swain holding the vision-guided payload delivery UAV';
projects['drone-payload'].gallery[0].alt = projects['drone-payload'].heroImage.alt;
projects['drone-payload'].gallery[0].caption = 'Integrated UAV and payload hardware';
Object.assign(projects['aluminum-chair'], {
 title: 'Machined Aluminum Chair', organization: 'Manufacturing & Mechanical Design',
 story: [
   section('Objective & CAD', 'Build a functional scaled chair from aluminum stock. SolidWorks CAD defined the multi-part assembly and connected the intended form to the machining and assembly work.'),
   section('Manufacturing', 'I used turning, milling, drilling, and tapping, combining manual lathe and mill operations with CNC machining. SolidWorks CAM supported CNC toolpath programming.'),
   section('Assembly & result', 'I assembled the machined parts into the final scaled chair. This project documents translating a CAD assembly into physical hardware. Setup photographs, chair CAD images, and dimensional inspection records are not available in the current portfolio assets.'),
 ],
});
projects['fan-propulsion'].story = [
 section('Experiment', 'Measure position on a low-friction air track while varying fan thrust and incline angle, then use the measurements to evaluate the platform’s dynamics.'),
 section('Acquisition & analysis', 'I used dual ESP32 microcontrollers and an ultrasonic sensor to acquire position-time telemetry. Python, NumPy, Pandas, and Matplotlib supported processing the measurements, estimating acceleration, and calculating fan thrust.'),
 section('Reported result', 'The existing lab record reports approximately 0.06 N of fan thrust. Raw telemetry, plots, cart mass, and uncertainty estimates are not included here, so the value is identified as a reported result.'),
];
projects['fan-propulsion'].specs[0] = ['Reported thrust', 'Approximately 0.06 N'];
projects['fan-propulsion'].title = 'Fan Propulsion & Data Acquisition';

const collectionContent = {
 'combat-robotics': {
   role: 'My contributions span weapon and chassis engineering, drivetrain redesign, experimental testing, manufacturing, subsystem integration, and technical team leadership within the Skull Crusher team.',
   specs: [['Robot class', '30 lb'], ['Team result', '3rd · Carnage at the Cube 2026']],
   children: ['disk-weapon', 'weapon-hub'],
   story: [
    section('Drivetrain redesign', 'My work included drivetrain layout, wheel and drive-component selection, CAD modeling, power transmission, and packaging within the chassis. The available assembly media show system context; comparative drivetrain performance data are not included.'),
    section('Wheel traction test stand', 'I developed a stand for evaluating wheel traction with adjustable loading and encoder instrumentation. Comparing wheel speeds supports investigation of slip. CAD documents the wheel-contact setup; no traction coefficient or measured improvement is claimed without the test data.'),
    section('Mechanical integration & manufacturing', 'My work included chassis integration, subsystem mounts, mechanical interfaces, machining, CNC toolpaths, and assembly. These contributions connected the individual designs to the physical robot rather than representing separate standalone projects.'),
   ],
   gallery: [media('img/projects/collections/combat-robot.jpg','Cole Swain with Skull Crusher','Completed Skull Crusher robot with Cole Swain'), media('img/projects/disk-weapon/chassis-assembly.png','CAD assembly of the Skull Crusher chassis'), media('img/projects/disk-weapon/wheel-test-stand.png','CAD of a wheel traction test stand'), ...pivotGallery.filter(x => /top|front/.test(x.src)).map(x => media(x.src, 'Wheel traction test rig CAD with rollers, shafts, and loading guides', 'Wheel traction rig: roller and loading-guide assembly'))],
 },
 'precision-tools': {
   role: 'Across my 2024 and 2025 Excelta internships, I developed fixtures and test methods, reconstructed tool geometry, and automated inspection and manufacturing-planning workflows. These are company engineering projects.',
   specs: [], children: ['pivot-test-stand','press-fit','qc-fixture','legacy-reverse-engineering','python-workflow'],
   story: [], gallery: [],
 },
 'embedded-sensing': {
   role: 'Academic experiments combining sensor acquisition, embedded programming, mechanics, and Python analysis. Each experiment investigates a separate physical measurement problem.',
   specs: [], children: [],
   story: [
    section('Fan propulsion & data acquisition', projects['fan-propulsion'].description + ' The lab record reports approximately 0.06 N of fan thrust. Raw readings and uncertainty estimates are not available in the current assets.'),
    section('Doppler sensing & signal processing', 'This experiment involved embedded sensor acquisition, Python frequency analysis, FFT, and interpretation using the Doppler effect. Sensor photographs, code screenshots, measured spectra, and numerical outcomes are not currently available, so no performance result is claimed.'),
   ], gallery: [],
 },
 'additional-projects': {
   role: 'A compact collection of academic and personal engineering work. These notes preserve the available scope without creating separate case studies unsupported by media or results.',
   specs: [], children: [],
   story: [
    section('Rubber band-powered vehicle', 'CAD, 3D printing, mechanical energy conversion, propulsion, design iteration, and distance testing. No distance record or test photographs are currently available.'),
    section('Desk design & structural FEA', 'SolidWorks assembly modeling, structural loading, meshing, displacement analysis, and design evaluation. Solver plots and boundary-condition records are not available in the current assets.'),
    section('Custom tool heads & parametric CAD', 'Custom mechanical interfaces, equation-driven geometry, parametric modeling, tool design, and additive manufacturing. No separate tool-head media or measured outcomes are included.'),
    section('ASME FADE design & fabrication', 'Introductory CAD, mechanical design, fabrication, and engineering training exercises. Individual deliverables are not documented sufficiently here for separate case-study pages.'),
   ], gallery: [],
 },
};
for (const collection of collections) {
 if (collectionContent[collection.id]) {
  const content = collectionContent[collection.id];
  projects[collection.id] = {...collection, ...content, tags: collection.tags,
   tools: collection.tags.join(' · '),
   heroImage: collection.image ? media(collection.image, collection.alt) : null};
 }
}
for (const [id, parent] of Object.entries(parentProjects)) projects[id].parent = parent;
// Fan propulsion remains directly addressable, while the collection provides a
// single-page reading experience for the two compact experiments.
