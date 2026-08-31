// ============================================================
// ALVI — Multi-Scene Mock Data & Graph Configuration
// ============================================================

export const sections = [
  { id: 'signals', num: '01', label: 'SIGNALS' },
  { id: 'voice', num: '02', label: 'VOICE' },
  { id: 'cognition', num: '03', label: 'COGNITION' },
  { id: 'insight', num: '04', label: 'INSIGHT' },
  { id: 'responsibility', num: '05', label: 'RESPONSIBILITY' },
  { id: 'future', num: '06', label: 'FUTURE' },
];

export const topNav = ['DISCOVER', 'SIGNALS', 'ANALYSIS', 'INSIGHT'];

export const voiceTabs = ['ACOUSTIC', 'TEMPO', 'SPEECH', 'HARMONICS'];

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
  { num: '02', label: 'VOICE', id: 'voice' },
  { num: '03', label: 'COGNITION', id: 'cognition' },
  { num: '04', label: 'INSIGHT', id: 'insight' },
  { num: '05', label: 'RESPONSIBILITY', id: 'responsibility' },
  { num: '06', label: 'FUTURE', id: 'future' },
];

// ============================================================
// Multi-Scene Graph Node Layouts
// Scene 0: 01 SIGNALS (Wide open constellation)
// Scene 1: 02 VOICE FABRIC (Exact match to reference photo: Person avatars, Greek Agent squares, Diamond skills)
// Scene 2: 03 COGNITION (Multi-signal cognitive network)
// Scene 3: 04 INSIGHT (Left-Right Convergence stream)
// Scene 4: 05 RESPONSIBILITY (Governance pillars)
// Scene 5: 06 FUTURE (Deep cosmic awareness)
// ============================================================

export const multiSceneNodes = [
  {
    id: 'lead',
    label: 'LEAD',
    sublabel: 'PITCH',
    symbol: '',
    type0: 'circle', accent0: true, size0: 9,
    type1: 'personBadge', size1: 14,
    type2: 'circle', size2: 8,
    type3: 'circle', size3: 7,
    type4: 'circle', size4: 7,
    type5: 'circle', size5: 8,
    // coordinates per scene [x, y]
    pos: [
      [0.20, 0.25], // Scene 0
      [0.37, 0.16], // Scene 1 (LEAD top-left in photo)
      [0.22, 0.28], // Scene 2
      [0.18, 0.22], // Scene 3
      [0.30, 0.25], // Scene 4
      [0.22, 0.30], // Scene 5
    ]
  },
  {
    id: 'pm',
    label: 'PM',
    sublabel: 'TEMPO',
    symbol: '',
    type0: 'circle', accent0: false, size0: 7,
    type1: 'personBadge', size1: 12,
    type2: 'circle', size2: 7,
    type3: 'circle', size3: 7,
    type4: 'circle', size4: 6,
    type5: 'circle', size5: 7,
    pos: [
      [0.35, 0.15], // Scene 0
      [0.53, 0.19], // Scene 1 (PM top-mid in photo)
      [0.35, 0.18], // Scene 2
      [0.18, 0.38], // Scene 3
      [0.30, 0.45], // Scene 4
      [0.38, 0.18], // Scene 5
    ]
  },
  {
    id: 'fde',
    label: 'FDE',
    sublabel: 'ARTICULATION',
    symbol: '',
    type0: 'circle', accent0: true, size0: 8,
    type1: 'personBadge', size1: 13,
    type2: 'circle', size2: 8,
    type3: 'circle', size3: 7,
    type4: 'circle', size4: 7,
    type5: 'circle', size5: 7,
    pos: [
      [0.73, 0.20], // Scene 0
      [0.72, 0.16], // Scene 1 (FDE top-right in photo)
      [0.70, 0.22], // Scene 2
      [0.18, 0.56], // Scene 3
      [0.30, 0.65], // Scene 4
      [0.72, 0.25], // Scene 5
    ]
  },
  {
    id: 'analyst',
    label: 'ANALYST',
    sublabel: 'PROSODY',
    symbol: '',
    type0: 'circle', accent0: false, size0: 7,
    type1: 'personBadge', size1: 12,
    type2: 'circle', size2: 7,
    type3: 'circle', size3: 7,
    type4: 'circle', size4: 6,
    type5: 'circle', size5: 6,
    pos: [
      [0.84, 0.36], // Scene 0
      [0.80, 0.46], // Scene 1 (ANALYST mid-right in photo)
      [0.82, 0.38], // Scene 2
      [0.18, 0.74], // Scene 3
      [0.30, 0.85], // Scene 4
      [0.85, 0.40], // Scene 5
    ]
  },
  {
    id: 'customer',
    label: 'CLINICAL',
    sublabel: 'ACOUSTICS',
    symbol: '',
    type0: 'circle', accent0: false, size0: 7,
    type1: 'personBadge', size1: 12,
    type2: 'circle', size2: 7,
    type3: 'circle', size3: 7,
    type4: 'circle', size4: 6,
    type5: 'circle', size5: 6,
    pos: [
      [0.87, 0.74], // Scene 0
      [0.83, 0.70], // Scene 1 (CUSTOMER bottom-right in photo)
      [0.78, 0.68], // Scene 2
      [0.82, 0.22], // Scene 3
      [0.70, 0.25], // Scene 4
      [0.82, 0.75], // Scene 5
    ]
  },
  {
    id: 'design',
    label: 'DESIGN',
    sublabel: 'CADENCE',
    symbol: '',
    type0: 'circle', accent0: true, size0: 8,
    type1: 'personBadge', size1: 13,
    type2: 'circle', size2: 7,
    type3: 'circle', size3: 7,
    type4: 'circle', size4: 7,
    type5: 'circle', size5: 7,
    pos: [
      [0.70, 0.72], // Scene 0
      [0.64, 0.72], // Scene 1 (DESIGN lower-mid in photo)
      [0.55, 0.75], // Scene 2
      [0.82, 0.40], // Scene 3
      [0.70, 0.45], // Scene 4
      [0.65, 0.78], // Scene 5
    ]
  },
  {
    id: 'ops',
    label: 'OPS',
    sublabel: 'PAUSES',
    symbol: '',
    type0: 'circle', accent0: false, size0: 7,
    type1: 'personBadge', size1: 12,
    type2: 'circle', size2: 7,
    type3: 'circle', size3: 7,
    type4: 'circle', size4: 6,
    type5: 'circle', size5: 7,
    pos: [
      [0.23, 0.90], // Scene 0
      [0.29, 0.81], // Scene 1 (OPS lower-left in photo)
      [0.25, 0.82], // Scene 2
      [0.82, 0.60], // Scene 3
      [0.70, 0.65], // Scene 4
      [0.28, 0.85], // Scene 5
    ]
  },
  // Square Agent nodes with Greek letters
  {
    id: 'agent_a',
    label: 'SIGNAL A',
    sublabel: '',
    symbol: 'α',
    type0: 'square', accent0: true, size0: 9,
    type1: 'agentBadge', size1: 11,
    type2: 'square', size2: 7,
    type3: 'square', size3: 7,
    type4: 'square', size4: 7,
    type5: 'square', size5: 7,
    pos: [
      [0.50, 0.48], // Scene 0
      [0.52, 0.36], // Scene 1 (AGENT A center-left in photo)
      [0.48, 0.46], // Scene 2
      [0.50, 0.48], // Scene 3 (ALVI Center)
      [0.50, 0.40], // Scene 4
      [0.50, 0.48], // Scene 5
    ]
  },
  {
    id: 'agent_h',
    label: 'SIGNAL H',
    sublabel: '',
    symbol: 'η',
    type0: 'square', accent0: true, size0: 8,
    type1: 'agentBadge', size1: 10,
    type2: 'square', size2: 6,
    type3: 'circle', size3: 6,
    type4: 'square', size4: 6,
    type5: 'circle', size5: 6,
    pos: [
      [0.63, 0.12], // Scene 0
      [0.69, 0.25], // Scene 1 (AGENT H upper-right in photo)
      [0.62, 0.32], // Scene 2
      [0.35, 0.32], // Scene 3
      [0.50, 0.25], // Scene 4
      [0.60, 0.20], // Scene 5
    ]
  },
  {
    id: 'agent_b',
    label: 'SIGNAL B',
    sublabel: '',
    symbol: 'β',
    type0: 'square', accent0: false, size0: 8,
    type1: 'agentBadge', size1: 11,
    type2: 'square', size2: 7,
    type3: 'circle', size3: 6,
    type4: 'square', size4: 6,
    type5: 'square', size5: 6,
    pos: [
      [0.76, 0.42], // Scene 0
      [0.76, 0.38], // Scene 1 (AGENT B mid-right in photo)
      [0.68, 0.50], // Scene 2
      [0.65, 0.32], // Scene 3
      [0.50, 0.55], // Scene 4
      [0.78, 0.38], // Scene 5
    ]
  },
  {
    id: 'agent_k',
    label: 'SIGNAL K',
    sublabel: '',
    symbol: 'κ',
    type0: 'square', accent0: true, size0: 8,
    type1: 'agentBadge', size1: 11,
    type2: 'square', size2: 7,
    type3: 'circle', size3: 6,
    type4: 'square', size4: 6,
    type5: 'square', size5: 6,
    pos: [
      [0.58, 0.82], // Scene 0
      [0.58, 0.82], // Scene 1 (AGENT K lower-mid in photo)
      [0.52, 0.65], // Scene 2
      [0.50, 0.72], // Scene 3
      [0.50, 0.70], // Scene 4
      [0.55, 0.82], // Scene 5
    ]
  },
  // Diamond Skill nodes with symbols
  {
    id: 'skill_m',
    label: 'MARKER M',
    sublabel: '',
    symbol: 'μ',
    type0: 'diamond', accent0: true, size0: 8,
    type1: 'skillBadge', size1: 11,
    type2: 'diamond', size2: 7,
    type3: 'diamond', size3: 7,
    type4: 'diamond', size4: 6,
    type5: 'diamond', size5: 7,
    pos: [
      [0.64, 0.40], // Scene 0
      [0.72, 0.51], // Scene 1 (SKILL M center-right in photo)
      [0.40, 0.38], // Scene 2
      [0.35, 0.62], // Scene 3
      [0.50, 0.85], // Scene 4
      [0.48, 0.60], // Scene 5
    ]
  },
  {
    id: 'skill_g',
    label: 'MARKER Γ',
    sublabel: '',
    symbol: 'γ',
    type0: 'diamond', accent0: false, size0: 7,
    type1: 'skillBadge', size1: 12,
    type2: 'diamond', size2: 7,
    type3: 'diamond', size3: 6,
    type4: 'diamond', size4: 6,
    type5: 'diamond', size5: 6,
    pos: [
      [0.30, 0.78], // Scene 0
      [0.66, 0.88], // Scene 1 (SKILL Γ bottom in photo)
      [0.32, 0.60], // Scene 2
      [0.65, 0.62], // Scene 3
      [0.70, 0.85], // Scene 4
      [0.35, 0.72], // Scene 5
    ]
  },
  {
    id: 'skill_s',
    label: 'MARKER Σ',
    sublabel: '',
    symbol: 'σ',
    type0: 'diamond', accent0: false, size0: 7,
    type1: 'skillBadge', size1: 12,
    type2: 'diamond', size2: 7,
    type3: 'diamond', size3: 6,
    type4: 'diamond', size4: 6,
    type5: 'diamond', size5: 6,
    pos: [
      [0.93, 0.83], // Scene 0
      [0.80, 0.82], // Scene 1 (SKILL Σ bottom-right in photo)
      [0.75, 0.82], // Scene 2
      [0.82, 0.80], // Scene 3
      [0.30, 0.08], // Scene 4
      [0.88, 0.85], // Scene 5
    ]
  },
  // Extra network mesh nodes
  {
    id: 'n1', label: '', sublabel: '', symbol: '',
    type0: 'circle', accent0: false, size0: 4,
    type1: 'circle', size1: 4,
    type2: 'circle', size2: 4,
    type3: 'circle', size3: 3,
    type4: 'circle', size4: 3,
    type5: 'circle', size5: 4,
    pos: [
      [0.07, 0.33], [0.12, 0.22], [0.10, 0.40], [0.10, 0.25], [0.15, 0.30], [0.08, 0.35]
    ]
  },
  {
    id: 'n2', label: '', sublabel: '', symbol: '',
    type0: 'square', accent0: true, size0: 5,
    type1: 'circle', size1: 4,
    type2: 'circle', size2: 4,
    type3: 'circle', size3: 3,
    type4: 'circle', size4: 3,
    type5: 'circle', size5: 4,
    pos: [
      [0.16, 0.12], [0.24, 0.10], [0.18, 0.15], [0.10, 0.48], [0.15, 0.50], [0.15, 0.15]
    ]
  },
  {
    id: 'n3', label: '', sublabel: '', symbol: '',
    type0: 'circle', accent0: false, size0: 4,
    type1: 'circle', size1: 4,
    type2: 'circle', size2: 4,
    type3: 'circle', size3: 3,
    type4: 'circle', size4: 3,
    type5: 'circle', size5: 4,
    pos: [
      [0.46, 0.08], [0.44, 0.09], [0.45, 0.12], [0.10, 0.70], [0.15, 0.70], [0.45, 0.10]
    ]
  },
  {
    id: 'n4', label: '', sublabel: '', symbol: '',
    type0: 'diamond', accent0: false, size0: 5,
    type1: 'circle', size1: 4,
    type2: 'circle', size2: 4,
    type3: 'circle', size3: 3,
    type4: 'circle', size4: 3,
    type5: 'circle', size5: 4,
    pos: [
      [0.90, 0.22], [0.88, 0.14], [0.88, 0.25], [0.90, 0.25], [0.85, 0.30], [0.92, 0.20]
    ]
  },
  {
    id: 'n5', label: '', sublabel: '', symbol: '',
    type0: 'circle', accent0: false, size0: 4,
    type1: 'circle', size1: 4,
    type2: 'circle', size2: 4,
    type3: 'circle', size3: 3,
    type4: 'circle', size4: 3,
    type5: 'circle', size5: 4,
    pos: [
      [0.93, 0.50], [0.92, 0.42], [0.92, 0.55], [0.90, 0.48], [0.85, 0.50], [0.95, 0.52]
    ]
  },
  {
    id: 'n6', label: '', sublabel: '', symbol: '',
    type0: 'square', accent0: false, size0: 4,
    type1: 'circle', size1: 4,
    type2: 'circle', size2: 4,
    type3: 'circle', size3: 3,
    type4: 'circle', size4: 3,
    type5: 'circle', size5: 4,
    pos: [
      [0.04, 0.60], [0.15, 0.62], [0.08, 0.65], [0.90, 0.70], [0.85, 0.70], [0.05, 0.60]
    ]
  },
  {
    id: 'n7', label: '', sublabel: '', symbol: '',
    type0: 'circle', accent0: false, size0: 4,
    type1: 'circle', size1: 4,
    type2: 'circle', size2: 4,
    type3: 'circle', size3: 3,
    type4: 'circle', size4: 3,
    type5: 'circle', size5: 4,
    pos: [
      [0.36, 0.50], [0.42, 0.60], [0.38, 0.50], [0.50, 0.20], [0.50, 0.10], [0.35, 0.50]
    ]
  },
  {
    id: 'n8', label: '', sublabel: '', symbol: '',
    type0: 'diamond', accent0: false, size0: 4,
    type1: 'circle', size1: 4,
    type2: 'circle', size2: 4,
    type3: 'circle', size3: 3,
    type4: 'circle', size4: 3,
    type5: 'circle', size5: 4,
    pos: [
      [0.47, 0.67], [0.48, 0.74], [0.48, 0.68], [0.50, 0.88], [0.50, 0.95], [0.50, 0.68]
    ]
  },
];

export const multiSceneConnections = [
  ['lead', 'pm'], ['pm', 'fde'], ['fde', 'agent_h'], ['agent_h', 'agent_b'],
  ['agent_b', 'analyst'], ['analyst', 'customer'], ['customer', 'skill_s'],
  ['skill_s', 'skill_g'], ['skill_g', 'design'], ['design', 'agent_k'],
  ['agent_k', 'ops'], ['ops', 'lead'],
  // Cross connections (Fabric structure)
  ['lead', 'agent_a'], ['pm', 'agent_a'], ['agent_a', 'skill_m'],
  ['skill_m', 'analyst'], ['skill_m', 'design'], ['agent_a', 'agent_k'],
  ['agent_h', 'fde'], ['agent_b', 'skill_m'], ['fde', 'analyst'],
  ['agent_k', 'skill_g'], ['design', 'skill_m'], ['ops', 'agent_a'],
  // Structural mesh connections
  ['n1', 'lead'], ['n2', 'lead'], ['n2', 'pm'], ['n3', 'pm'],
  ['n4', 'fde'], ['n4', 'agent_h'], ['n5', 'analyst'], ['n5', 'customer'],
  ['n6', 'ops'], ['n7', 'agent_a'], ['n7', 'ops'], ['n8', 'agent_k'],
  ['n8', 'skill_g'], ['n1', 'n6'], ['n3', 'n4'], ['n5', 'skill_s']
];
