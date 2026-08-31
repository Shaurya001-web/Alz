// ============================================================
// ALVI — Morphing Multi-Scene Network Graph with Collapse & Boom Transitions
// and Neural Network (NN) Transmission Mode
// Matches Langware Reference:
// - Scene 0: Wide open signals web
// - Scene 1: Voice-Cognitive Fabric (Open constellation)
// - Scene 2: Voice Ingest / Neural Network (3 columns on right + flowing data pulses)
// - Scene 3: Cognitive Profile Constellation
// - Scene 4: Dual-Stream Left/Right Convergence
// - Scene 5: Responsibility Governance
// - Scene 6: Future Astronomical Constellation
// ============================================================
import { multiSceneNodes, multiSceneConnections } from './data.js';

export class AnimatedGraph {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.nodes = [];
    this.connections = [];
    this.pulses = []; // Animated data packets flowing along neural lines
    this.theme = 'light';
    this.scrollProgress = 0; // 0.0 to 6.0 (continuous scene float)
    this.time = 0;
    this.dpr = window.devicePixelRatio || 1;
    this.isMobile = window.innerWidth < 768;
    this._raf = null;

    this._initNodes();
    this._initConnections();
    this._initPulses();
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
      curScale: 1.0,
      phase: Math.random() * Math.PI * 2,
      pulsePhase: Math.random() * Math.PI * 2,
      driftRadius: 0.008 + Math.random() * 0.015,
      driftSpeed: 0.7 + Math.random() * 0.7,
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

  _initPulses() {
    // Generate streaming photon / data pulses across connections
    this.pulses = [];
    for (let i = 0; i < 18; i++) {
      const conn = this.connections[Math.floor(Math.random() * this.connections.length)];
      this.pulses.push({
        from: conn.from,
        to: conn.to,
        progress: Math.random(),
        speed: 0.25 + Math.random() * 0.45,
        size: 1.8 + Math.random() * 1.5,
      });
    }
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

  setSceneProgress(progress) {
    this.scrollProgress = Math.max(0, Math.min(6, progress));
  }

  start() {
    let lastTime = performance.now() * 0.001;
    const loop = (ts) => {
      const now = ts * 0.001;
      const dt = Math.min(0.1, now - lastTime);
      lastTime = now;
      this.time = now;
      this._update(dt);
      this._draw();
      this._raf = requestAnimationFrame(loop);
    };
    this._raf = requestAnimationFrame(loop);
  }

  stop() {
    if (this._raf) cancelAnimationFrame(this._raf);
  }

  _update(dt) {
    const t = this.time;
    const sp = this.scrollProgress;

    // Determine current scene index and fractional progress
    const sceneIndex = Math.min(5, Math.floor(sp));
    const nextSceneIndex = Math.min(6, sceneIndex + 1);
    const frac = sp - sceneIndex; // 0.0 to 1.0

    // ============================================================
    // COLLAPSE & BOOM INTERPOLATION MATH:
    // When frac < 0.46: Collapses inward to focal point (scale 1.0 -> 0.18)
    // When frac >= 0.46: Explodes outward ("Boom!") to new scene (scale 0.18 -> 1.06 -> 1.0)
    // ============================================================
    let scale = 1.0;
    let collapseFactor = 0;

    // Dynamic focal collapse center
    const collapseX = sceneIndex === 1 ? 0.72 : 0.58;
    const collapseY = 0.48;

    if (frac < 0.46) {
      // Collapse Phase: 0 -> 1
      const c = frac / 0.46;
      const easeC = c * c * c;
      scale = 1.0 - easeC * 0.82; // shrinks down to 0.18
      collapseFactor = easeC;
    } else {
      // Boom Phase: 0 -> 1
      const b = (frac - 0.46) / 0.54;
      const easeB = Math.sin(b * Math.PI * 0.5);
      const overshoot = b === 1 ? 1 : Math.pow(2, -10 * b) * Math.sin((b - 0.075) * (2 * Math.PI) / 0.3) + 1;
      scale = 0.18 + (Math.max(0, overshoot) * 0.82);
      collapseFactor = 1.0 - easeB;
    }

    for (const node of this.nodes) {
      const pFrom = node.pos[sceneIndex] || node.pos[0];
      const pTo = node.pos[nextSceneIndex] || node.pos[0];

      // Interpolate base coordinate with collapse bias
      let targetX, targetY;
      if (frac < 0.46) {
        targetX = pFrom[0] + (collapseX - pFrom[0]) * collapseFactor;
        targetY = pFrom[1] + (collapseY - pFrom[1]) * collapseFactor;
      } else {
        targetX = pTo[0] + (collapseX - pTo[0]) * collapseFactor;
        targetY = pTo[1] + (collapseY - pTo[1]) * collapseFactor;
      }

      // Continuous subtle organic drift (reduced in NN mode for crisp alignment)
      const inNN = sp >= 1.4 && sp <= 2.6;
      const driftMult = inNN ? 0.35 : 1.0;

      const driftX = Math.sin(t * node.driftSpeed + node.phase) * (node.driftRadius * scale * driftMult);
      const driftY = Math.cos(t * (node.driftSpeed * 1.15) + node.phase + 1.2) * (node.driftRadius * scale * driftMult);

      node.curX = targetX + driftX;
      node.curY = targetY + driftY;
      node.curScale = scale;

      node.pulse = 0.5 + 0.5 * Math.sin(t * 1.8 + node.pulsePhase);
    }

    // Update data transmission pulses
    for (const pulse of this.pulses) {
      pulse.progress += pulse.speed * dt;
      if (pulse.progress >= 1.0) {
        pulse.progress = 0;
        const conn = this.connections[Math.floor(Math.random() * this.connections.length)];
        pulse.from = conn.from;
        pulse.to = conn.to;
      }
    }
  }

  _getColors() {
    switch (this.theme) {
      case 'blue':
        return {
          bg: '#1a2744',
          line: 'rgba(255,255,255,0.22)',
          lineHighlight: 'rgba(255,255,255,0.6)',
          pulseColor: 'rgba(255,255,255,0.95)',
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
          lineHighlight: 'rgba(255,255,255,0.45)',
          pulseColor: 'rgba(100,160,255,0.9)',
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
          line: 'rgba(0,0,0,0.12)',
          lineHighlight: 'rgba(0,0,0,0.32)',
          pulseColor: 'rgba(60,100,200,0.9)',
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

    ctx.clearRect(0, 0, w, h);

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
      ctx.lineWidth = Math.max(0.4, 0.75 * avgScale);
      ctx.globalAlpha = conn.baseOpacity * avgScale;
      ctx.stroke();
      ctx.globalAlpha = 1;
    }

    // ============================================================
    // Draw Animated Flowing Pulses (Data transmission packets)
    // ============================================================
    if (sp >= 0.4) {
      for (const pulse of this.pulses) {
        const a = this._nodeById(pulse.from);
        const b = this._nodeById(pulse.to);
        if (!a || !b) continue;

        const p = pulse.progress;
        const px = (a.curX + (b.curX - a.curX) * p) * w;
        const py = (a.curY + (b.curY - a.curY) * p) * h;
        const pulseAlpha = Math.sin(p * Math.PI) * Math.min(a.curScale, b.curScale);

        if (pulseAlpha > 0.05) {
          ctx.beginPath();
          ctx.arc(px, py, pulse.size * a.curScale, 0, Math.PI * 2);
          ctx.fillStyle = colors.pulseColor;
          ctx.globalAlpha = pulseAlpha * 0.85;
          ctx.fill();
          ctx.globalAlpha = 1;
        }
      }
    }

    // ============================================================
    // Draw Nodes (Badges in Scene 1 & 2, Geometrics in others)
    // ============================================================
    for (const node of this.nodes) {
      const x = node.curX * w;
      const y = node.curY * h;
      const scale = node.curScale;
      if (scale <= 0.05) continue;

      const isBadgeScene = sp >= 0.45 && sp <= 2.6;

      if (isBadgeScene && node.type === 'personBadge') {
        // ----------------------------------------------------
        // PERSON AVATAR BADGE
        // ----------------------------------------------------
        const radius = node.size * scale;
        this._drawPersonBadge(x, y, radius, colors);

        if (scale > 0.4) {
          ctx.font = `600 ${Math.max(7, Math.round(9 * scale))}px 'IBM Plex Mono', monospace`;
          ctx.fillStyle = colors.label;
          ctx.textAlign = 'center';
          ctx.fillText(node.label, x, y + radius + 13 * scale);

          if (node.sublabel && sp < 1.6) {
            ctx.font = `400 ${Math.max(6, Math.round(7.5 * scale))}px 'IBM Plex Mono', monospace`;
            ctx.fillStyle = colors.sublabel;
            ctx.fillText(node.sublabel, x, y + radius + 23 * scale);
          }
        }
      } else if (isBadgeScene && node.type === 'agentBadge') {
        // ----------------------------------------------------
        // AGENT SQUARE BADGE with Greek Letter
        // ----------------------------------------------------
        const size = node.size * scale;
        this._drawAgentBadge(x, y, size, node.symbol, colors);

        if (scale > 0.4 && node.label) {
          ctx.font = `500 ${Math.max(7, Math.round(8.5 * scale))}px 'IBM Plex Mono', monospace`;
          ctx.fillStyle = colors.label;
          ctx.textAlign = 'center';
          ctx.fillText(node.label, x, y + size + 13 * scale);
        }
      } else if (isBadgeScene && node.type === 'skillBadge') {
        // ----------------------------------------------------
        // SKILL DIAMOND BADGE with Symbol
        // ----------------------------------------------------
        const size = node.size * scale;
        this._drawSkillBadge(x, y, size, node.symbol, colors);

        if (scale > 0.4 && node.label) {
          ctx.font = `500 ${Math.max(7, Math.round(8.5 * scale))}px 'IBM Plex Mono', monospace`;
          ctx.fillStyle = colors.label;
          ctx.textAlign = 'center';
          ctx.fillText(node.label, x, y + size + 13 * scale);
        }
      } else {
        // ----------------------------------------------------
        // STANDARD GEOMETRIC NODE (Scene 0, 3, 4, 5, 6)
        // ----------------------------------------------------
        const s = (node.size || 6) * scale;
        const type = node.type || 'circle';

        ctx.fillStyle = colors.nodeAccent;

        if (type === 'circle' || type === 'personBadge') {
          ctx.beginPath();
          ctx.arc(x, y, s, 0, Math.PI * 2);
          ctx.fill();
        } else if (type === 'agentBadge') {
          ctx.fillRect(x - s, y - s, s * 2, s * 2);
        } else {
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(Math.PI / 4);
          ctx.fillRect(-s * 0.75, -s * 0.75, s * 1.5, s * 1.5);
          ctx.restore();
        }

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
  // Vector Drawing Helpers for Badges
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

    // Head silhouette
    ctx.beginPath();
    ctx.arc(x, y - radius * 0.22, radius * 0.28, 0, Math.PI * 2);
    ctx.fillStyle = colors.badgeIcon;
    ctx.fill();

    // Shoulder silhouette
    ctx.beginPath();
    ctx.arc(x, y + radius * 0.58, radius * 0.54, Math.PI * 1.18, Math.PI * 1.82, false);
    ctx.strokeStyle = colors.badgeIcon;
    ctx.lineWidth = Math.max(1.2, radius * 0.14);
    ctx.stroke();
  }

  _drawAgentBadge(x, y, size, symbol, colors) {
    const ctx = this.ctx;

    // Blue square box
    ctx.fillStyle = '#4a7cdb';
    ctx.fillRect(x - size, y - size, size * 2, size * 2);

    // Greek letter
    ctx.fillStyle = '#ffffff';
    ctx.font = `600 ${Math.max(8, Math.round(size * 1.1))}px 'Hanken Grotesk', sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(symbol || 'α', x, y);
    ctx.textBaseline = 'alphabetic';
  }

  _drawSkillBadge(x, y, size, symbol, colors) {
    const ctx = this.ctx;

    // Diamond box
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(Math.PI / 4);
    ctx.fillStyle = colors.badgeBg;
    ctx.fillRect(-size * 0.75, -size * 0.75, size * 1.5, size * 1.5);
    ctx.strokeStyle = '#5b8def';
    ctx.lineWidth = Math.max(1, size * 0.12);
    ctx.strokeRect(-size * 0.75, -size * 0.75, size * 1.5, size * 1.5);
    ctx.restore();

    // Symbol
    ctx.fillStyle = '#5b8def';
    ctx.font = `600 ${Math.max(8, Math.round(size * 0.95))}px 'Hanken Grotesk', sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(symbol || 'μ', x, y);
    ctx.textBaseline = 'alphabetic';
  }
}
