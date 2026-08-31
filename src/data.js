// ============================================================
// ALVI — Multi-Scene Mock Data & Graph Configuration
// ============================================================

export const sections = [
  { id: 'signals', num: '01', label: 'SIGNALS' },
  { id: 'voice', num: '02', label: 'VOICE' },
  { id: 'ingest', num: '02.2', label: 'INGEST' },
  { id: 'cognition', num: '03', label: 'COGNITION' },
  { id: 'insight', num: '04', label: 'INSIGHT' },
  { id: 'responsibility', num: '05', label: 'RESPONSIBILITY' },
  { id: 'future', num: '06', label: 'FUTURE' },
];

export const topNav = ['DISCOVER', 'SIGNALS', 'ANALYSIS', 'INSIGHT'];

export const voiceTabs = ['FABRIC', 'INGEST', 'GOVERN', 'LEARN'];

export const metrics = {
  voiceSimilarity: { label: 'VOICE SIMILARITY', value: '−3.28%' },
  patternConfidence: { label: 'PATTERN CONFIDENCE', value: '78%' },
  memoryIndicator: { label: 'MEMORY INDICATOR', value: '01' },
  signalStability: { label: 'SIGNAL STABILITY', value: 'STABLE' },
  cognitiveVariation: { label: 'COGNITIVE VARIATION', value: 'MODERATE' },
  overallSignal: { label: 'OVERALL SIGNAL', value: 'PATTERNS WORTH MONITORING' },
};

export const voiceMetrics = {
  sampleLength: { label: 'SAMPLE LENGTH', value: '42.8 s' },
  voiceStability: { label: 'VOICE STABILITY', value: 'STABLE' },
  tempo: { label: 'TEMPO', value: 'MODERATE' },
  pauseDensity: { label: 'PAUSE DENSITY', value: 'LOW' },
  voiceSimilarity: { label: 'VOICE SIMILARITY', value: '−3.28%' },
};

export const cognitiveMetrics = {
  memorySignal: { label: 'MEMORY SIGNAL', value: '01' },
  languagePattern: { label: 'LANGUAGE PATTERN', value: 'STABLE' },
  cognitiveVariation: { label: 'COGNITIVE VARIATION', value: 'MODERATE' },
  patternConfidence: { label: 'PATTERN CONFIDENCE', value: '78%' },
};

export const responsibilityPrinciples = [
  {
    num: '01',
    title: 'EARLY AWARENESS',
    desc: 'Highlight subtle patterns that may otherwise be difficult to notice.',
  },
  {
    num: '02',
    title: 'MULTISIGNAL CONTEXT',
    desc: 'Bring multiple signal categories into one coherent visual framework.',
  },
  {
    num: '03',
    title: 'HUMAN OVERSIGHT',
    desc: 'Keep clinical professionals at the center of interpretation.',
  },
  {
    num: '04',
    title: 'RESPONSIBLE AI',
    desc: 'Distinguish research and experimentation from clinical diagnosis.',
  },
];

export const menuItems = [
  { num: '01', label: 'SIGNALS', id: 'signals' },
  { num: '02', label: 'VOICE FABRIC', id: 'voice' },
  { num: '02.2', label: 'VOICE INGEST', id: 'ingest' },
  { num: '03', label: 'COGNITION', id: 'cognition' },
  { num: '04', label: 'INSIGHT', id: 'insight' },
  { num: '05', label: 'RESPONSIBILITY', id: 'responsibility' },
  { num: '06', label: 'FUTURE', id: 'future' },
];

// ============================================================
// Multi-Scene Graph Node Layouts
// Scene 0: 01 SIGNALS (Wide open constellation)
// Scene 1: 02.1 VOICE FABRIC (Person badges, Blue Greek agent squares, Diamond skills)
// Scene 2: 02.2 INGEST / NEURAL NETWORK (3 columns shifted to right with dense NN links & flowing pulses)
// Scene 3: 03 COGNITION (Multi-signal cognitive network)
// Scene 4: 04 INSIGHT (Left-Right Convergence stream)
// Scene 5: 05 RESPONSIBILITY (Governance pillars)
// Scene 6: 06 FUTURE (Deep cosmic awareness)
// ============================================================

export const multiSceneNodes = [
  // 8 Person Avatar Badges (Form the Right Column Arc in Scene 2 NN mode)
  {
    id: 'lead',
    label: 'LEAD',
    sublabel: 'PITCH',
    type: 'personBadge',
    size: 13,
    pos: [
      [0.20, 0.25], // Scene 0
      [0.37, 0.16], // Scene 1 (Fabric)
      [0.82, 0.15], // Scene 2 (NN Right Arc #1)
      [0.22, 0.28], // Scene 3
      [0.18, 0.22], // Scene 4
      [0.30, 0.25], // Scene 5
      [0.22, 0.30], // Scene 6
    ]
  },
  {
    id: 'pm',
    label: 'PM',
    sublabel: 'TEMPO',
    type: 'personBadge',
    size: 12,
    pos: [
      [0.35, 0.15], // Scene 0
      [0.53, 0.19], // Scene 1 (Fabric)
      [0.84, 0.23], // Scene 2 (NN Right Arc #2)
      [0.35, 0.18], // Scene 3
      [0.18, 0.38], // Scene 4
      [0.30, 0.45], // Scene 5
      [0.38, 0.18], // Scene 6
    ]
  },
  {
    id: 'fde',
    label: 'FDE',
    sublabel: 'ARTICULATION',
    type: 'personBadge',
    size: 13,
    pos: [
      [0.73, 0.20], // Scene 0
      [0.72, 0.16], // Scene 1 (Fabric)
      [0.85, 0.32], // Scene 2 (NN Right Arc #3)
      [0.70, 0.22], // Scene 3
      [0.18, 0.56], // Scene 4
      [0.30, 0.65], // Scene 5
      [0.72, 0.25], // Scene 6
    ]
  },
  {
    id: 'dev',
    label: 'DEV',
    sublabel: 'HARMONICS',
    type: 'personBadge',
    size: 12,
    pos: [
      [0.45, 0.30], // Scene 0
      [0.40, 0.40], // Scene 1
      [0.86, 0.40], // Scene 2 (NN Right Arc #4)
      [0.45, 0.30], // Scene 3
      [0.18, 0.66], // Scene 4
      [0.30, 0.75], // Scene 5
      [0.45, 0.30], // Scene 6
    ]
  },
  {
    id: 'design',
    label: 'DESIGN',
    sublabel: 'CADENCE',
    type: 'personBadge',
    size: 13,
    pos: [
      [0.70, 0.72], // Scene 0
      [0.64, 0.72], // Scene 1 (Fabric)
      [0.86, 0.48], // Scene 2 (NN Right Arc #5)
      [0.55, 0.75], // Scene 3
      [0.82, 0.40], // Scene 4
      [0.70, 0.45], // Scene 5
      [0.65, 0.78], // Scene 6
    ]
  },
  {
    id: 'analyst',
    label: 'ANALYST',
    sublabel: 'PROSODY',
    type: 'personBadge',
    size: 12,
    pos: [
      [0.84, 0.36], // Scene 0
      [0.80, 0.46], // Scene 1 (Fabric)
      [0.85, 0.57], // Scene 2 (NN Right Arc #6)
      [0.82, 0.38], // Scene 3
      [0.18, 0.74], // Scene 4
      [0.30, 0.85], // Scene 5
      [0.85, 0.40], // Scene 6
    ]
  },
  {
    id: 'ops',
    label: 'OPS',
    sublabel: 'PAUSES',
    type: 'personBadge',
    size: 12,
    pos: [
      [0.23, 0.90], // Scene 0
      [0.29, 0.81], // Scene 1 (Fabric)
      [0.83, 0.65], // Scene 2 (NN Right Arc #7)
      [0.25, 0.82], // Scene 3
      [0.82, 0.60], // Scene 4
      [0.70, 0.65], // Scene 5
      [0.28, 0.85], // Scene 6
    ]
  },
  {
    id: 'customer',
    label: 'CUSTOMER',
    sublabel: 'ACOUSTICS',
    type: 'personBadge',
    size: 12,
    pos: [
      [0.87, 0.74], // Scene 0
      [0.83, 0.70], // Scene 1 (Fabric)
      [0.80, 0.73], // Scene 2 (NN Right Arc #8)
      [0.78, 0.68], // Scene 3
      [0.82, 0.22], // Scene 4
      [0.70, 0.25], // Scene 5
      [0.82, 0.75], // Scene 6
    ]
  },

  // 4 Diamond Skill Badges (Form the Middle Column in Scene 2 NN mode)
  {
    id: 'skill_l',
    label: 'SKILL L',
    symbol: 'λ',
    type: 'skillBadge',
    size: 11,
    pos: [
      [0.60, 0.12], // Scene 0
      [0.62, 0.12], // Scene 1
      [0.68, 0.18], // Scene 2 (NN Middle Column #1)
      [0.60, 0.15], // Scene 3
      [0.50, 0.20], // Scene 4
      [0.50, 0.15], // Scene 5
      [0.60, 0.15], // Scene 6
    ]
  },
  {
    id: 'skill_m',
    label: 'SKILL M',
    symbol: 'μ',
    type: 'skillBadge',
    size: 11,
    pos: [
      [0.64, 0.40], // Scene 0
      [0.72, 0.51], // Scene 1 (Fabric)
      [0.68, 0.32], // Scene 2 (NN Middle Column #2)
      [0.40, 0.38], // Scene 3
      [0.35, 0.62], // Scene 4
      [0.50, 0.85], // Scene 5
      [0.48, 0.60], // Scene 6
    ]
  },
  {
    id: 'skill_s',
    label: 'SKILL Σ',
    symbol: 'σ',
    type: 'skillBadge',
    size: 11,
    pos: [
      [0.93, 0.83], // Scene 0
      [0.80, 0.82], // Scene 1 (Fabric)
      [0.68, 0.46], // Scene 2 (NN Middle Column #3)
      [0.75, 0.82], // Scene 3
      [0.82, 0.80], // Scene 4
      [0.30, 0.08], // Scene 5
      [0.88, 0.85], // Scene 6
    ]
  },
  {
    id: 'skill_g',
    label: 'SKILL Γ',
    symbol: 'γ',
    type: 'skillBadge',
    size: 11,
    pos: [
      [0.30, 0.78], // Scene 0
      [0.66, 0.88], // Scene 1 (Fabric)
      [0.68, 0.58], // Scene 2 (NN Middle Column #4)
      [0.32, 0.60], // Scene 3
      [0.65, 0.62], // Scene 4
      [0.70, 0.85], // Scene 5
      [0.35, 0.72], // Scene 6
    ]
  },

  // 4 Square Agent Badges (Form the Left Column in Scene 2 NN mode)
  {
    id: 'agent_a',
    label: 'AGENT A',
    symbol: 'α',
    type: 'agentBadge',
    size: 11,
    pos: [
      [0.50, 0.48], // Scene 0
      [0.52, 0.36], // Scene 1 (Fabric)
      [0.57, 0.27], // Scene 2 (NN Left Column #1)
      [0.48, 0.46], // Scene 3
      [0.50, 0.48], // Scene 4
      [0.50, 0.40], // Scene 5
      [0.50, 0.48], // Scene 6
    ]
  },
  {
    id: 'agent_h',
    label: 'AGENT H',
    symbol: 'η',
    type: 'agentBadge',
    size: 10,
    pos: [
      [0.63, 0.12], // Scene 0
      [0.69, 0.25], // Scene 1 (Fabric)
      [0.57, 0.39], // Scene 2 (NN Left Column #2)
      [0.62, 0.32], // Scene 3
      [0.35, 0.32], // Scene 4
      [0.50, 0.25], // Scene 5
      [0.60, 0.20], // Scene 6
    ]
  },
  {
    id: 'agent_b',
    label: 'AGENT B',
    symbol: 'β',
    type: 'agentBadge',
    size: 11,
    pos: [
      [0.76, 0.42], // Scene 0
      [0.76, 0.38], // Scene 1 (Fabric)
      [0.57, 0.52], // Scene 2 (NN Left Column #3)
      [0.68, 0.50], // Scene 3
      [0.65, 0.32], // Scene 4
      [0.50, 0.55], // Scene 5
      [0.78, 0.38], // Scene 6
    ]
  },
  {
    id: 'agent_k',
    label: 'AGENT K',
    symbol: 'κ',
    type: 'agentBadge',
    size: 11,
    pos: [
      [0.58, 0.82], // Scene 0
      [0.58, 0.82], // Scene 1 (Fabric)
      [0.57, 0.65], // Scene 2 (NN Left Column #4)
      [0.52, 0.65], // Scene 3
      [0.50, 0.72], // Scene 4
      [0.50, 0.70], // Scene 5
      [0.55, 0.82], // Scene 6
    ]
  },

  // Supporting background nodes
  {
    id: 'n1', label: '', symbol: '', type: 'circle', size: 3,
    pos: [[0.07, 0.33], [0.12, 0.22], [0.48, 0.20], [0.10, 0.40], [0.10, 0.25], [0.15, 0.30], [0.08, 0.35]]
  },
  {
    id: 'n2', label: '', symbol: '', type: 'circle', size: 3,
    pos: [[0.16, 0.12], [0.24, 0.10], [0.48, 0.42], [0.18, 0.15], [0.10, 0.48], [0.15, 0.50], [0.15, 0.15]]
  },
  {
    id: 'n3', label: '', symbol: '', type: 'circle', size: 3,
    pos: [[0.46, 0.08], [0.44, 0.09], [0.48, 0.60], [0.45, 0.12], [0.10, 0.70], [0.15, 0.70], [0.45, 0.10]]
  },
  {
    id: 'n4', label: '', symbol: '', type: 'circle', size: 3,
    pos: [[0.90, 0.22], [0.88, 0.14], [0.93, 0.20], [0.88, 0.25], [0.90, 0.25], [0.85, 0.30], [0.92, 0.20]]
  },
  {
    id: 'n5', label: '', symbol: '', type: 'circle', size: 3,
    pos: [[0.93, 0.50], [0.92, 0.42], [0.93, 0.48], [0.92, 0.55], [0.90, 0.48], [0.85, 0.50], [0.95, 0.52]]
  },
];

// Neural Network and Fabric connection matrix
export const multiSceneConnections = [
  // Neural Network Dense Layer Connections (Layer 1 Agent -> Layer 2 Skill)
  ['agent_a', 'skill_l'], ['agent_a', 'skill_m'], ['agent_a', 'skill_s'],
  ['agent_h', 'skill_l'], ['agent_h', 'skill_m'], ['agent_h', 'skill_s'], ['agent_h', 'skill_g'],
  ['agent_b', 'skill_m'], ['agent_b', 'skill_s'], ['agent_b', 'skill_g'],
  ['agent_k', 'skill_s'], ['agent_k', 'skill_g'],

  // Neural Network Dense Layer Connections (Layer 2 Skill -> Layer 3 Person)
  ['skill_l', 'lead'], ['skill_l', 'pm'], ['skill_l', 'fde'],
  ['skill_m', 'fde'], ['skill_m', 'dev'], ['skill_m', 'design'], ['skill_m', 'analyst'],
  ['skill_s', 'design'], ['skill_s', 'analyst'], ['skill_s', 'ops'], ['skill_s', 'customer'],
  ['skill_g', 'analyst'], ['skill_g', 'ops'], ['skill_g', 'customer'],

  // Outer Arc connections
  ['lead', 'pm'], ['pm', 'fde'], ['fde', 'dev'], ['dev', 'design'],
  ['design', 'analyst'], ['analyst', 'ops'], ['ops', 'customer'],

  // Vertical Column spines
  ['agent_a', 'agent_h'], ['agent_h', 'agent_b'], ['agent_b', 'agent_k'],
  ['skill_l', 'skill_m'], ['skill_m', 'skill_s'], ['skill_s', 'skill_g'],

  // Structural extras
  ['n1', 'agent_a'], ['n2', 'agent_h'], ['n3', 'agent_k'],
  ['n4', 'lead'], ['n5', 'customer']
];
