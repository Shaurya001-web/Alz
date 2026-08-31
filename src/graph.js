// ============================================================
// ALVI — Morphing Multi-Scene Network Graph with Collapse & Boom Transitions
// Exact match to Langware Reference:
// - Scene 0: Wide open signals web
// - Scene 1: Voice-Cognitive Fabric (Person avatar circles, Blue Greek agent squares, Diamond skill badges)
// - Scene 2: Cognitive Profile Constellation
// - Scene 3: Dual-Stream Left/Right Convergence
// - Scene 4: Responsibility Governance
// - Scene 5: Future Astronomical Constellation
// - Scroll Physics: Collapse inward -> burst outward ("Boom!")
// ============================================================
import { multiSceneNodes, multiSceneConnections } from './data.js';

export class AnimatedGraph {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.nodes = [];
    this.connections = [];
    this.theme = 'light';
    this.scrollProgress = 0; // 0.0 to 5.0 (continuous scene float)
    this.time = 0;
    this.dpr = window.devicePixelRatio || 1;
    this.isMobile = window.innerWidth < 768;
    this._raf = null;

    this._initNodes();
    this._initConnections();
    this._resize();
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 768;
      this._resize();
    });
  }

  _initNodes() {
    this.nodes = multiSceneNodes.map(n => ({
      ...n,
      curX: n.pos[0][0],
      curY: n.pos[0][1],
      curSize: n.size0,
      curScale: 1.0,
      phase: Math.random() * Math.PI * 2,
      pulsePhase: Math.random() * Math.PI * 2,
      driftRadius: 0.012 + Math.random() * 0.02,
      driftSpeed: 0.8 + Math.random() * 0.8,
    }));
  }

  _initConnections() {
    const nodeIds = new Set(this.nodes.map(n => n.id));
    this.connections = multiSceneConnections
      .filter(([a, b]) => nodeIds.has(a) && nodeIds.has(b))
      .map(([a, b]) => ({
        from: a,
        to: b,
        baseOpacity: 0.22 + Math.random() * 0.25,
        phase: Math.random() * Math.PI * 2,
      }));
  }

  _resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.w = rect.width;
    this.h = rect.height;
    this.canvas.width = this.w * this.dpr;
    this.canvas.height = this.h * this.dpr;
    this.canvas.style.width = this.w + 'px';
    this.canvas.style.height = this.h + 'px';
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
  }

  setTheme(theme) {
    this.theme = theme;
  }

  // Set continuous scene progress (e.g. 0.0 for Hero/Signals, 1.0 for Voice, 2.0 for Cognition, etc.)
  setSceneProgress(progress) {
    this.scrollProgress = Math.max(0, Math.min(5, progress));
  }

  start() {
    const loop = (ts) => {
      this.time = ts * 0.001;
      this._update();
      this._draw();
      this._raf = requestAnimationFrame(loop);
    };
    this._raf = requestAnimationFrame(loop);
  }

  stop() {
    if (this._raf) cancelAnimationFrame(this._raf);
  }

  _update() {
    const t = this.time;
    const sp = this.scrollProgress;

    // Determine current scene index and fractional progress between scenes
    const sceneIndex = Math.min(4, Math.floor(sp));
    const nextSceneIndex = Math.min(5, sceneIndex + 1);
    const frac = sp - sceneIndex; // 0.0 to 1.0

    // ============================================================
    // COLLAPSE & BOOM INTERPOLATION MATH:
    // When frac < 0.48: Collapses inward to focal point (scale 1.0 -> 0.20)
    // When frac >= 0.48: Explodes outward ("Boom!") to new scene (scale 0.20 -> 1.08 -> 1.0)
    // ============================================================
    let scale = 1.0;
    let collapseFactor = 0; // 0 = at origin scene, 1 = fully collapsed, 0 = at next scene

    // Focal collapse center in normalized coordinates
    const collapseX = 0.58;
    const collapseY = 0.50;

    if (frac < 0.48) {
      // Collapse Phase: 0 -> 1
      const c = frac / 0.48;
      // Ease in cubic for sharp sudden collapse
      const easeC = c * c * c;
      scale = 1.0 - easeC * 0.80; // shrinks from 1.0 down to 0.20
      collapseFactor = easeC;
    } else {
      // Boom Phase: 0 -> 1
      const b = (frac - 0.48) / 0.52;
      // Elastic / overshoot ease out for "BOOM!" expansion
      const s = 1.6;
      const easeB = Math.sin(b * Math.PI * 0.5);
      const overshoot = b === 1 ? 1 : Math.pow(2, -10 * b) * Math.sin((b - 0.075) * (2 * Math.PI) / 0.3) + 1;
      scale = 0.20 + (Math.max(0, overshoot) * 0.80);
      collapseFactor = 1.0 - easeB;
    }

    for (const node of this.nodes) {
      const pFrom = node.pos[sceneIndex];
      const pTo = node.pos[nextSceneIndex];

      // Interpolate base coordinate with collapse bias
      let targetX, targetY;
      if (frac < 0.48) {
        // Pull towards collapse center
        targetX = pFrom[0] + (collapseX - pFrom[0]) * collapseFactor;
        targetY = pFrom[1] + (collapseY - pFrom[1]) * collapseFactor;
      } else {
        // Expand from collapse center to pTo
        targetX = pTo[0] + (collapseX - pTo[0]) * collapseFactor;
        targetY = pTo[1] + (collapseY - pTo[1]) * collapseFactor;
      }

      // Continuous lively organic drift
      const driftX = Math.sin(t * node.driftSpeed + node.phase) * (node.driftRadius * scale);
      const driftY = Math.cos(t * (node.driftSpeed * 1.15) + node.phase + 1.2) * (node.driftRadius * scale);

      // Micro fluid oscillation
      const microX = Math.sin(t * 1.6 + node.phase * 2.1) * (0.006 * scale);
      const microY = Math.cos(t * 1.4 + node.phase * 1.7) * (0.006 * scale);

      node.curX = targetX + driftX + microX;
      node.curY = targetY + driftY + microY;
      node.curScale = scale;

      // Pulse for accent breathing
      node.pulse = 0.5 + 0.5 * Math.sin(t * 1.8 + node.pulsePhase);
    }
  }

  _getColors() {
    switch (this.theme) {
      case 'blue':
        return {
          bg: '#1a2744',
          line: 'rgba(255,255,255,0.18)',
          lineHighlight: 'rgba(255,255,255,0.45)',
          node: 'rgba(255,255,255,0.4)',
          nodeAccent: '#5b8def',
          badgeBg: '#1a2744',
          badgeStroke: '#ffffff',
          badgeIcon: '#ffffff',
          label: 'rgba(255,255,255,0.85)',
          sublabel: 'rgba(255,255,255,0.45)',
          watermark: 'rgba(255,255,255,0.06)',
        };
      case 'dark':
        return {
          bg: '#0c0e14',
          line: 'rgba(255,255,255,0.14)',
          lineHighlight: 'rgba(255,255,255,0.35)',
          node: 'rgba(255,255,255,0.3)',
          nodeAccent: '#4a7cdb',
          badgeBg: '#0c0e14',
          badgeStroke: '#e8e6e2',
          badgeIcon: '#e8e6e2',
          label: 'rgba(255,255,255,0.8)',
          sublabel: 'rgba(255,255,255,0.4)',
          watermark: 'rgba(255,255,255,0.04)',
        };
      default: // light
        return {
          bg: '#f5f2ed',
          line: 'rgba(0,0,0,0.11)',
          lineHighlight: 'rgba(0,0,0,0.28)',
          node: 'rgba(0,0,0,0.35)',
          nodeAccent: '#3c64c8',
          badgeBg: '#f5f2ed',
          badgeStroke: '#1a1a1a',
          badgeIcon: '#1a1a1a',
          label: 'rgba(0,0,0,0.85)',
          sublabel: 'rgba(0,0,0,0.45)',
          watermark: 'rgba(0,0,0,0.04)',
        };
    }
  }

  _nodeById(id) {
    return this.nodes.find(n => n.id === id);
  }

  _draw() {
    const ctx = this.ctx;
    const w = this.w;
    const h = this.h;
    const colors = this._getColors();
    const sp = this.scrollProgress;
    const isScene1OrNear = sp >= 0.45 && sp <= 1.6;

    ctx.clearRect(0, 0, w, h);

    // ============================================================
    // Background Watermark Labels in Section 02 (Fabric view)
    // Matches "AGENTS", "SKILLS", "YOUR FABRIC" in Langware
    // ============================================================
    if (isScene1OrNear) {
      const watermarkOpacity = Math.sin(Math.min(1, Math.max(0, (sp - 0.45) / 0.55)) * Math.PI);
      ctx.save();
      ctx.font = `600 11px 'IBM Plex Mono', monospace`;
      ctx.letterSpacing = '3px';
      ctx.fillStyle = colors.label;
      ctx.globalAlpha = watermarkOpacity * 0.12;

      ctx.fillText('ACOUSTICS', w * 0.45, h * 0.12);
      ctx.fillText('AGENTS', w * 0.82, h * 0.16);
      ctx.fillText('SKILLS', w * 0.65, h * 0.62);
      ctx.restore();
    }

    // ============================================================
    // Draw Connection Lines
    // ============================================================
    for (const conn of this.connections) {
      const a = this._nodeById(conn.from);
      const b = this._nodeById(conn.to);
      if (!a || !b) continue;

      const ax = a.curX * w, ay = a.curY * h;
      const bx = b.curX * w, by = b.curY * h;
      const avgScale = (a.curScale + b.curScale) * 0.5;

      ctx.beginPath();
      ctx.moveTo(ax, ay);
      ctx.lineTo(bx, by);
      ctx.strokeStyle = colors.line;
      ctx.lineWidth = Math.max(0.4, 0.7 * avgScale);
      ctx.globalAlpha = conn.baseOpacity * avgScale;
      ctx.stroke();
      ctx.globalAlpha = 1;
    }

    // ============================================================
    // Draw Nodes
    // ============================================================
    for (const node of this.nodes) {
      const x = node.curX * w;
      const y = node.curY * h;
      const scale = node.curScale;
      if (scale <= 0.05) continue;

      // Determine active rendering mode based on scroll progress
      // If sp is around 1 (Section 02), use the Fabric Avatar/Badge styles!
      const inFabricMode = sp >= 0.45 && sp <= 1.55;

      if (inFabricMode && node.type1 === 'personBadge') {
        // ----------------------------------------------------
        // PERSON AVATAR BADGE (Matches LEAD, PM, FDE, etc. in photo)
        // ----------------------------------------------------
        const radius = node.size1 * scale;
        this._drawPersonBadge(x, y, radius, colors);

        // Label below avatar
        if (scale > 0.4) {
          ctx.font = `600 ${Math.max(7, Math.round(9 * scale))}px 'IBM Plex Mono', monospace`;
          ctx.fillStyle = colors.label;
          ctx.textAlign = 'center';
          ctx.fillText(node.label, x, y + radius + 14 * scale);

          if (node.sublabel) {
            ctx.font = `400 ${Math.max(6, Math.round(7.5 * scale))}px 'IBM Plex Mono', monospace`;
            ctx.fillStyle = colors.sublabel;
            ctx.fillText(node.sublabel, x, y + radius + 24 * scale);
          }
        }
      } else if (inFabricMode && node.type1 === 'agentBadge') {
        // ----------------------------------------------------
        // AGENT SQUARE BADGE with Greek Letter (Matches α AGENT A in photo)
        // ----------------------------------------------------
        const size = node.size1 * scale;
        this._drawAgentBadge(x, y, size, node.symbol, colors);

        if (scale > 0.4 && node.label) {
          ctx.font = `500 ${Math.max(7, Math.round(8.5 * scale))}px 'IBM Plex Mono', monospace`;
          ctx.fillStyle = colors.label;
          ctx.textAlign = 'center';
          ctx.fillText(node.label, x, y + size + 13 * scale);
        }
      } else if (inFabricMode && node.type1 === 'skillBadge') {
        // ----------------------------------------------------
        // SKILL DIAMOND BADGE with Symbol (Matches μ SKILL M in photo)
        // ----------------------------------------------------
        const size = node.size1 * scale;
        this._drawSkillBadge(x, y, size, node.symbol, colors);

        if (scale > 0.4 && node.label) {
          ctx.font = `500 ${Math.max(7, Math.round(8.5 * scale))}px 'IBM Plex Mono', monospace`;
          ctx.fillStyle = colors.label;
          ctx.textAlign = 'center';
          ctx.fillText(node.label, x, y + size + 13 * scale);
        }
      } else {
        // ----------------------------------------------------
        // STANDARD GEOMETRIC NODE (Scene 0, 2, 3, 4, 5)
        // ----------------------------------------------------
        const s = (node.size0 || 6) * scale;
        const type = node.type0 || 'circle';

        ctx.fillStyle = node.accent0 ? colors.nodeAccent : colors.node;

        if (type === 'circle') {
          ctx.beginPath();
          ctx.arc(x, y, s, 0, Math.PI * 2);
          ctx.fill();
        } else if (type === 'square') {
          ctx.fillRect(x - s, y - s, s * 2, s * 2);
        } else if (type === 'diamond') {
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(Math.PI / 4);
          ctx.fillRect(-s * 0.75, -s * 0.75, s * 1.5, s * 1.5);
          ctx.restore();
        }

        // Pulse ring for accent nodes
        if (node.accent0 && node.pulse > 0.3) {
          ctx.beginPath();
          ctx.arc(x, y, s + 4 + node.pulse * 5, 0, Math.PI * 2);
          ctx.strokeStyle = colors.nodeAccent;
          ctx.lineWidth = 0.8;
          ctx.globalAlpha = (1 - node.pulse) * 0.4;
          ctx.stroke();
          ctx.globalAlpha = 1;
        }

        // Standard text label
        if (scale > 0.45 && node.label) {
          ctx.font = `500 ${Math.max(7, Math.round(9 * scale))}px 'IBM Plex Mono', monospace`;
          ctx.fillStyle = colors.label;
          ctx.textAlign = 'center';
          ctx.fillText(node.label, x, y - s - 8 * scale);
        }
      }
    }
  }

  // ============================================================
  // Vector Drawing Helpers for Fabric Badges
  // ============================================================
  _drawPersonBadge(x, y, radius, colors) {
    const ctx = this.ctx;

    // Base background circle
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = colors.badgeBg;
    ctx.fill();
    ctx.strokeStyle = colors.badgeStroke;
    ctx.lineWidth = Math.max(1, radius * 0.12);
    ctx.stroke();

    // Head circle silhouette
    ctx.beginPath();
    ctx.arc(x, y - radius * 0.22, radius * 0.28, 0, Math.PI * 2);
    ctx.fillStyle = colors.badgeIcon;
    ctx.fill();

    // Shoulder arc silhouette
    ctx.beginPath();
    ctx.arc(x, y + radius * 0.58, radius * 0.54, Math.PI * 1.18, Math.PI * 1.82, false);
    ctx.strokeStyle = colors.badgeIcon;
    ctx.lineWidth = Math.max(1.2, radius * 0.14);
    ctx.stroke();
  }

  _drawAgentBadge(x, y, size, symbol, colors) {
    const ctx = this.ctx;

    // Filled solid blue square
    ctx.fillStyle = '#4a7cdb';
    ctx.fillRect(x - size, y - size, size * 2, size * 2);

    // Greek character centered in white
    ctx.fillStyle = '#ffffff';
    ctx.font = `600 ${Math.max(8, Math.round(size * 1.1))}px 'Hanken Grotesk', sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(symbol || 'α', x, y);
    ctx.textBaseline = 'alphabetic'; // reset
  }

  _drawSkillBadge(x, y, size, symbol, colors) {
    const ctx = this.ctx;

    // Diamond stroke badge
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(Math.PI / 4);
    ctx.fillStyle = colors.badgeBg;
    ctx.fillRect(-size * 0.75, -size * 0.75, size * 1.5, size * 1.5);
    ctx.strokeStyle = '#5b8def';
    ctx.lineWidth = Math.max(1, size * 0.12);
    ctx.strokeRect(-size * 0.75, -size * 0.75, size * 1.5, size * 1.5);
    ctx.restore();

    // Blue symbol inside
    ctx.fillStyle = '#4a7cdb';
    ctx.font = `600 ${Math.max(8, Math.round(size * 0.95))}px 'Hanken Grotesk', sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(symbol || 'μ', x, y);
    ctx.textBaseline = 'alphabetic'; // reset
  }
}
