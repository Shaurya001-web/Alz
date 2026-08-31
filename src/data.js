// ============================================================
// ALVI — Multi-Scene Mock Data & Graph Configuration
// ============================================================

export const sections = [
  { id: 'hero', num: '01', label: 'SIGNALS' },
  { id: 'ingest', num: '02', label: 'VOICE & INGEST' },
  { id: 'cognition', num: '03', label: 'COGNITION' },
  { id: 'insight', num: '04', label: 'INSIGHT' },
  { id: 'responsibility', num: '05', label: 'RESPONSIBILITY' },
  { id: 'future', num: '06', label: 'FUTURE' },
];

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

// ============================================================
// Multi-Scene Graph Node Layouts (Fast Morphing)
// Scene 0: 01 SIGNALS (Wide open constellation)
// Scene 1: 02 INGEST / NEURAL NETWORK (3 columns shifted to right with dense NN links & flowing pulses)
// Scene 2: 03 COGNITION (Multi-signal cognitive network)
// Scene 3: 04 INSIGHT (Left-Right Convergence stream)
// Scene 4: 05 RESPONSIBILITY (Governance pillars)
// Scene 5: 06 FUTURE (Deep cosmic awareness)
// ============================================================

export const multiSceneNodes = [
  // 8 Person Avatar Badges (Form the Right Column Arc in Scene 1 NN mode)
  {
    id: 'lead',
    label: 'LEAD',
    type: 'personBadge',
    size: 13,
    pos: [
      [0.20, 0.25], // Scene 0 (Hero)
      [0.82, 0.15], // Scene 1 (NN Right Arc #1)
      [0.22, 0.28], // Scene 2 (Cognition)
      [0.18, 0.22], // Scene 3 (Insight)
      [0.30, 0.25], // Scene 4 (Responsibility)
      [0.22, 0.30], // Scene 5 (Future)
    ]
  },
  {
    id: 'pm',
    label: 'PM',
    type: 'personBadge',
    size: 12,
    pos: [
      [0.35, 0.15], // Scene 0
      [0.84, 0.23], // Scene 1 (NN Right Arc #2)
      [0.35, 0.18], // Scene 2
      [0.18, 0.38], // Scene 3
      [0.30, 0.45], // Scene 4
      [0.38, 0.18], // Scene 5
    ]
  },
  {
    id: 'fde',
    label: 'FDE',
    type: 'personBadge',
    size: 13,
    pos: [
      [0.73, 0.20], // Scene 0
      [0.85, 0.32], // Scene 1 (NN Right Arc #3)
      [0.70, 0.22], // Scene 2
      [0.18, 0.56], // Scene 3
      [0.30, 0.65], // Scene 4
      [0.72, 0.25], // Scene 5
    ]
  },
  {
    id: 'dev',
    label: 'DEV',
    type: 'personBadge',
    size: 12,
    pos: [
      [0.45, 0.30], // Scene 0
      [0.86, 0.40], // Scene 1 (NN Right Arc #4)
      [0.45, 0.30], // Scene 2
      [0.18, 0.66], // Scene 3
      [0.30, 0.75], // Scene 4
      [0.45, 0.30], // Scene 5
    ]
  },
  {
    id: 'design',
    label: 'DESIGN',
    type: 'personBadge',
    size: 13,
    pos: [
      [0.70, 0.72], // Scene 0
      [0.86, 0.48], // Scene 1 (NN Right Arc #5)
      [0.55, 0.75], // Scene 2
      [0.82, 0.40], // Scene 3
      [0.70, 0.45], // Scene 4
      [0.65, 0.78], // Scene 5
    ]
  },
  {
    id: 'analyst',
    label: 'ANALYST',
    type: 'personBadge',
    size: 12,
    pos: [
      [0.84, 0.36], // Scene 0
      [0.85, 0.57], // Scene 1 (NN Right Arc #6)
      [0.82, 0.38], // Scene 2
      [0.18, 0.74], // Scene 3
      [0.30, 0.85], // Scene 4
      [0.85, 0.40], // Scene 5
    ]
  },
  {
    id: 'ops',
    label: 'OPS',
    type: 'personBadge',
    size: 12,
    pos: [
      [0.23, 0.90], // Scene 0
      [0.83, 0.65], // Scene 1 (NN Right Arc #7)
      [0.25, 0.82], // Scene 2
      [0.82, 0.60], // Scene 3
      [0.70, 0.65], // Scene 4
      [0.28, 0.85], // Scene 5
    ]
  },
  {
    id: 'customer',
    label: 'CUSTOMER',
    type: 'personBadge',
    size: 12,
    pos: [
      [0.87, 0.74], // Scene 0
      [0.80, 0.73], // Scene 1 (NN Right Arc #8)
      [0.78, 0.68], // Scene 2
      [0.82, 0.22], // Scene 3
      [0.70, 0.25], // Scene 4
      [0.82, 0.75], // Scene 5
    ]
  },

  // 4 Diamond Skill Badges (Form the Middle Column in Scene 1 NN mode)
  {
    id: 'skill_l',
    label: 'SKILL L',
    symbol: 'λ',
    type: 'skillBadge',
    size: 11,
    pos: [
      [0.60, 0.12], // Scene 0
      [0.68, 0.18], // Scene 1 (NN Middle Column #1)
      [0.60, 0.15], // Scene 2
      [0.50, 0.20], // Scene 3
      [0.50, 0.15], // Scene 4
      [0.60, 0.15], // Scene 5
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
      [0.68, 0.32], // Scene 1 (NN Middle Column #2)
      [0.40, 0.38], // Scene 2
      [0.35, 0.62], // Scene 3
      [0.50, 0.85], // Scene 4
      [0.48, 0.60], // Scene 5
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
      [0.68, 0.46], // Scene 1 (NN Middle Column #3)
      [0.75, 0.82], // Scene 2
      [0.82, 0.80], // Scene 3
      [0.30, 0.08], // Scene 4
      [0.88, 0.85], // Scene 5
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
      [0.68, 0.58], // Scene 1 (NN Middle Column #4)
      [0.32, 0.60], // Scene 2
      [0.65, 0.62], // Scene 3
      [0.70, 0.85], // Scene 4
      [0.35, 0.72], // Scene 5
    ]
  },

  // 4 Square Agent Badges (Form the Left Column in Scene 1 NN mode)
  {
    id: 'agent_a',
    label: 'AGENT A',
    symbol: 'α',
    type: 'agentBadge',
    size: 11,
    pos: [
      [0.50, 0.48], // Scene 0
      [0.56, 0.27], // Scene 1 (NN Left Column #1)
      [0.48, 0.46], // Scene 2
      [0.50, 0.48], // Scene 3
      [0.50, 0.40], // Scene 4
      [0.50, 0.48], // Scene 5
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
      [0.56, 0.39], // Scene 1 (NN Left Column #2)
      [0.62, 0.32], // Scene 2
      [0.35, 0.32], // Scene 3
      [0.50, 0.25], // Scene 4
      [0.60, 0.20], // Scene 5
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
      [0.56, 0.52], // Scene 1 (NN Left Column #3)
      [0.68, 0.50], // Scene 2
      [0.65, 0.32], // Scene 3
      [0.50, 0.55], // Scene 4
      [0.78, 0.38], // Scene 5
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
      [0.56, 0.65], // Scene 1 (NN Left Column #4)
      [0.52, 0.65], // Scene 2
      [0.50, 0.72], // Scene 3
      [0.50, 0.70], // Scene 4
      [0.55, 0.82], // Scene 5
    ]
  },

  // Supporting background nodes
  {
    id: 'n1', label: '', symbol: '', type: 'circle', size: 3,
    pos: [[0.07, 0.33], [0.48, 0.20], [0.10, 0.40], [0.10, 0.25], [0.15, 0.30], [0.08, 0.35]]
  },
  {
    id: 'n2', label: '', symbol: '', type: 'circle', size: 3,
    pos: [[0.16, 0.12], [0.48, 0.42], [0.18, 0.15], [0.10, 0.48], [0.15, 0.50], [0.15, 0.15]]
  },
  {
    id: 'n3', label: '', symbol: '', type: 'circle', size: 3,
    pos: [[0.46, 0.08], [0.48, 0.60], [0.45, 0.12], [0.10, 0.70], [0.15, 0.70], [0.45, 0.10]]
  },
  {
    id: 'n4', label: '', symbol: '', type: 'circle', size: 3,
    pos: [[0.90, 0.22], [0.93, 0.20], [0.88, 0.25], [0.90, 0.25], [0.85, 0.30], [0.92, 0.20]]
  },
  {
    id: 'n5', label: '', symbol: '', type: 'circle', size: 3,
    pos: [[0.93, 0.50], [0.93, 0.48], [0.92, 0.55], [0.90, 0.48], [0.85, 0.50], [0.95, 0.52]]
  },
];

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
