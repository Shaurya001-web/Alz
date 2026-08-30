// ============================================================
// ALVI — Mock Data & Graph Configuration
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

// Graph nodes with types: circle, square, diamond
// Sizes match Langware reference: large clearly visible dots
export const graphNodes = [
  // Primary labeled nodes — large and prominent
  { id: 'alvi', label: 'ALVI', x: 0.50, y: 0.48, type: 'square', accent: true, size: 12 },
  { id: 'voice', label: 'VOICE', x: 0.20, y: 0.25, type: 'circle', accent: false, size: 8 },
  { id: 'speech', label: 'SPEECH', x: 0.35, y: 0.15, type: 'circle', accent: false, size: 6 },
  { id: 'pitch', label: 'PITCH', x: 0.13, y: 0.50, type: 'diamond', accent: false, size: 6 },
  { id: 'tempo', label: 'TEMPO', x: 0.26, y: 0.60, type: 'circle', accent: false, size: 7 },
  { id: 'pause', label: 'PAUSE', x: 0.10, y: 0.70, type: 'square', accent: false, size: 5 },
  { id: 'rhythm', label: 'RHYTHM', x: 0.30, y: 0.78, type: 'diamond', accent: true, size: 7 },
  { id: 'memory', label: 'MEMORY', x: 0.73, y: 0.20, type: 'circle', accent: false, size: 8 },
  { id: 'language', label: 'LANGUAGE', x: 0.84, y: 0.36, type: 'square', accent: false, size: 6 },
  { id: 'attention', label: 'ATTENTION', x: 0.80, y: 0.56, type: 'diamond', accent: false, size: 7 },
  { id: 'cognition', label: 'COGNITION', x: 0.70, y: 0.72, type: 'circle', accent: true, size: 9 },
  { id: 'pattern', label: 'PATTERN', x: 0.42, y: 0.36, type: 'diamond', accent: false, size: 6 },
  { id: 'insight', label: 'INSIGHT', x: 0.58, y: 0.82, type: 'square', accent: false, size: 7 },
  // Secondary nodes — smaller but still clearly visible
  { id: 'n1', label: '', x: 0.07, y: 0.33, type: 'circle', accent: false, size: 4 },
  { id: 'n2', label: '', x: 0.16, y: 0.12, type: 'square', accent: true, size: 5 },
  { id: 'n3', label: '', x: 0.46, y: 0.08, type: 'circle', accent: false, size: 4 },
  { id: 'n4', label: '', x: 0.63, y: 0.12, type: 'diamond', accent: false, size: 5 },
  { id: 'n5', label: '', x: 0.90, y: 0.22, type: 'circle', accent: false, size: 4 },
  { id: 'n6', label: '', x: 0.93, y: 0.50, type: 'square', accent: false, size: 4 },
  { id: 'n7', label: '', x: 0.87, y: 0.74, type: 'circle', accent: false, size: 5 },
  { id: 'n8', label: '', x: 0.55, y: 0.93, type: 'diamond', accent: false, size: 4 },
  { id: 'n9', label: '', x: 0.23, y: 0.90, type: 'circle', accent: false, size: 4 },
  { id: 'n10', label: '', x: 0.04, y: 0.60, type: 'square', accent: false, size: 3 },
  { id: 'n11', label: '', x: 0.36, y: 0.50, type: 'circle', accent: false, size: 4 },
  { id: 'n12', label: '', x: 0.64, y: 0.40, type: 'diamond', accent: false, size: 4 },
  { id: 'n13', label: '', x: 0.47, y: 0.67, type: 'circle', accent: false, size: 3 },
  { id: 'n14', label: '', x: 0.74, y: 0.88, type: 'square', accent: false, size: 4 },
  { id: 'n15', label: '', x: 0.33, y: 0.40, type: 'circle', accent: false, size: 3 },
  { id: 'n16', label: '', x: 0.93, y: 0.83, type: 'diamond', accent: false, size: 4 },
  { id: 'n17', label: '', x: 0.04, y: 0.88, type: 'circle', accent: false, size: 3 },
  { id: 'n18', label: '', x: 0.56, y: 0.26, type: 'square', accent: false, size: 4 },
  // Extra density nodes — small dots to fill space like Langware
  { id: 'n19', label: '', x: 0.30, y: 0.06, type: 'circle', accent: false, size: 3 },
  { id: 'n20', label: '', x: 0.78, y: 0.08, type: 'circle', accent: true, size: 4 },
  { id: 'n21', label: '', x: 0.96, y: 0.38, type: 'circle', accent: false, size: 3 },
  { id: 'n22', label: '', x: 0.60, y: 0.60, type: 'circle', accent: false, size: 3 },
  { id: 'n23', label: '', x: 0.15, y: 0.40, type: 'circle', accent: false, size: 3 },
  { id: 'n24', label: '', x: 0.40, y: 0.90, type: 'circle', accent: false, size: 3 },
  { id: 'n25', label: '', x: 0.85, y: 0.92, type: 'circle', accent: false, size: 3 },
  { id: 'n26', label: '', x: 0.03, y: 0.15, type: 'circle', accent: false, size: 3 },
  { id: 'n27', label: '', x: 0.95, y: 0.12, type: 'circle', accent: false, size: 3 },
  { id: 'n28', label: '', x: 0.50, y: 0.05, type: 'circle', accent: false, size: 3 },
];

export const graphConnections = [
  ['alvi', 'voice'], ['alvi', 'memory'], ['alvi', 'cognition'], ['alvi', 'pattern'],
  ['alvi', 'insight'], ['alvi', 'n11'], ['alvi', 'n12'], ['alvi', 'n13'],
  ['alvi', 'n22'],
  ['voice', 'speech'], ['voice', 'pitch'], ['voice', 'tempo'], ['voice', 'n1'],
  ['voice', 'n2'], ['voice', 'pattern'], ['voice', 'n23'],
  ['speech', 'n3'], ['speech', 'n4'], ['speech', 'pattern'], ['speech', 'n19'],
  ['pitch', 'tempo'], ['pitch', 'pause'], ['pitch', 'n10'], ['pitch', 'n23'],
  ['tempo', 'rhythm'], ['tempo', 'pause'],
  ['pause', 'rhythm'], ['pause', 'n9'], ['pause', 'n17'],
  ['rhythm', 'n9'], ['rhythm', 'n13'], ['rhythm', 'n24'],
  ['memory', 'language'], ['memory', 'attention'], ['memory', 'n4'], ['memory', 'n5'],
  ['memory', 'n20'],
  ['language', 'attention'], ['language', 'n6'], ['language', 'cognition'], ['language', 'n21'],
  ['attention', 'cognition'], ['attention', 'n7'],
  ['cognition', 'insight'], ['cognition', 'n7'], ['cognition', 'n14'],
  ['pattern', 'n11'], ['pattern', 'n15'],
  ['insight', 'n8'], ['insight', 'n14'], ['insight', 'n24'],
  ['n1', 'n10'], ['n3', 'n18'], ['n5', 'n6'], ['n7', 'n16'],
  ['n8', 'n9'], ['n11', 'n15'], ['n12', 'n18'],
  ['n19', 'n3'], ['n19', 'n28'], ['n20', 'n27'], ['n20', 'n4'],
  ['n21', 'n6'], ['n22', 'n12'], ['n22', 'n13'],
  ['n23', 'n1'], ['n24', 'n8'], ['n25', 'n16'], ['n25', 'n14'],
  ['n26', 'n2'], ['n26', 'n1'], ['n27', 'n5'], ['n28', 'n3'], ['n28', 'n4'],
];

export const menuItems = [
  { num: '01', label: 'SIGNALS', id: 'signals' },
  { num: '02', label: 'VOICE', id: 'voice' },
  { num: '03', label: 'COGNITION', id: 'cognition' },
  { num: '04', label: 'INSIGHT', id: 'insight' },
  { num: '05', label: 'RESPONSIBILITY', id: 'responsibility' },
  { num: '06', label: 'FUTURE', id: 'future' },
];
