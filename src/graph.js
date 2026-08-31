// ============================================================
// ALVI — Fast Morphing Multi-Scene Network Graph
// Matches Langware Reference:
// - Scene 0: Wide open signals web
// - Scene 1: Voice Ingest / Neural Network (3 columns on right + fast flowing data pulses)
// - Scene 2: Cognitive Profile Constellation
// - Scene 3: Dual-Stream Left/Right Convergence
// - Scene 4: Responsibility Governance
// - Scene 5: Future Astronomical Constellation
// ============================================================
import { multiSceneNodes, multiSceneConnections } from './data.js';

export class AnimatedGraph {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.nodes = [];
    this.connections = [];
    this.pulses = [];
    this.theme = 'light';
    this.scrollProgress = 0; // 0.0 to 5.0 (continuous scene float)
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
      driftRadius: 0.012 + Math.random() * 0.02,
      driftSpeed: 1.4 + Math.random() * 1.6, // Fast & lively animation
    }));
  }

  _initConnections() {
    const nodeIds = new Set(this.nodes.map(n => n.id));
    this.connections = multiSceneConnections
      .filter(([a, b]) => nodeIds.has(a) && nodeIds.has(b))
      .map(([a, b]) => ({
        from: a,
        to: b,
        baseOpacity: 0.25 + Math.random() * 0.3,
        phase: Math.random() * Math.PI * 2,
      }));
  }

  _initPulses() {
    // Generate streaming photon / data pulses across connections
    this.pulses = [];
    for (let i = 0; i < 22; i++) {
      const conn = this.connections[Math.floor(Math.random() * this.connections.length)];
      this.pulses.push({
        from: conn.from,
        to: conn.to,
        progress: Math.random(),
        speed: 0.6 + Math.random() * 0.9, // Fast pulse speed
        size: 2.0 + Math.random() * 1.5,
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
    this.scrollProgress = Math.max(0, Math.min(5, progress));
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
    const sceneIndex = Math.min(4, Math.floor(sp));
    const nextSceneIndex = Math.min(5, sceneIndex + 1);
    const frac = sp - sceneIndex; // 0.0 to 1.0

    // Fast snappy collapse & boom interpolation
    let scale = 1.0;
    let collapseFactor = 0;

    const collapseX = 0.68;
    const collapseY = 0.48;

    if (frac < 0.45) {
      const c = frac / 0.45;
      const easeC = c * c * c;
      scale = 1.0 - easeC * 0.78;
      collapseFactor = easeC;
    } else {
      const b = (frac - 0.45) / 0.55;
      const easeB = Math.sin(b * Math.PI * 0.5);
      const overshoot = b === 1 ? 1 : Math.pow(2, -10 * b) * Math.sin((b - 0.075) * (2 * Math.PI) / 0.3) + 1;
      scale = 0.22 + (Math.max(0, overshoot) * 0.78);
      collapseFactor = 1.0 - easeB;
    }

    for (const node of this.nodes) {
      const pFrom = node.pos[sceneIndex] || node.pos[0];
      const pTo = node.pos[nextSceneIndex] || node.pos[0];

      let targetX, targetY;
      if (frac < 0.45) {
        targetX = pFrom[0] + (collapseX - pFrom[0]) * collapseFactor;
        targetY = pFrom[1] + (collapseY - pFrom[1]) * collapseFactor;
      } else {
        targetX = pTo[0] + (collapseX - pTo[0]) * collapseFactor;
        targetY = pTo[1] + (collapseY - pTo[1]) * collapseFactor;
      }

      // Fast, lively organic drift
      const inNN = sp >= 0.6 && sp <= 1.5;
      const driftMult = inNN ? 0.4 : 1.0;

      const driftX = Math.sin(t * node.driftSpeed + node.phase) * (node.driftRadius * scale * driftMult);
      const driftY = Math.cos(t * (node.driftSpeed * 1.2) + node.phase + 1.2) * (node.driftRadius * scale * driftMult);

      node.curX = targetX + driftX;
      node.curY = targetY + driftY;
      node.curScale = scale;

      node.pulse = 0.5 + 0.5 * Math.sin(t * 2.5 + node.pulsePhase);
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
          bg: '#1d3da8',
          line: 'rgba(255,255,255,0.24)',
          lineHighlight: 'rgba(255,255,255,0.75)',
          pulseColor: '#ffffff',
          node: 'rgba(255,255,255,0.5)',
          nodeAccent: '#78a6ff',
          badgeBg: '#1d3da8',
          badgeStroke: '#ffffff',
          badgeIcon: '#ffffff',
          label: '#ffffff',
          sublabel: 'rgba(255,255,255,0.6)',
          watermark: 'rgba(255,255,255,0.06)',
        };
      case 'dark':
        return {
          bg: '#0c0e14',
          line: 'rgba(255,255,255,0.16)',
          lineHighlight: 'rgba(255,255,255,0.5)',
          pulseColor: 'rgba(120,180,255,0.95)',
          node: 'rgba(255,255,255,0.3)',
          nodeAccent: '#4a7cdb',
          badgeBg: '#0c0e14',
          badgeStroke: '#e8e6e2',
          badgeIcon: '#e8e6e2',
          label: 'rgba(255,255,255,0.85)',
          sublabel: 'rgba(255,255,255,0.45)',
          watermark: 'rgba(255,255,255,0.04)',
        };
      default: // light
        return {
          bg: '#f5f2ed',
          line: 'rgba(0,0,0,0.12)',
          lineHighlight: 'rgba(0,0,0,0.35)',
          pulseColor: '#3c64c8',
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
      ctx.lineWidth = Math.max(0.4, 0.8 * avgScale);
      ctx.globalAlpha = conn.baseOpacity * avgScale;
      ctx.stroke();
      ctx.globalAlpha = 1;
    }

    // ============================================================
    // Draw Animated Flowing Pulses (Data transmission packets)
    // ============================================================
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
        ctx.globalAlpha = pulseAlpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    // ============================================================
    // Draw Nodes (Badges in Scene 1 NN Mode, Geometrics in Others)
    // ============================================================
    for (const node of this.nodes) {
      const x = node.curX * w;
      const y = node.curY * h;
      const scale = node.curScale;
      if (scale <= 0.05) continue;

      const isNNMode = sp >= 0.5 && sp <= 1.6;

      if (isNNMode && node.type === 'personBadge') {
        const radius = node.size * scale;
        this._drawPersonBadge(x, y, radius, colors);

        if (scale > 0.4) {
          ctx.font = `600 ${Math.max(7, Math.round(9 * scale))}px 'IBM Plex Mono', monospace`;
          ctx.fillStyle = colors.label;
          ctx.textAlign = 'center';
          ctx.fillText(node.label, x, y + radius + 13 * scale);
        }
      } else if (isNNMode && node.type === 'agentBadge') {
        const size = node.size * scale;
        this._drawAgentBadge(x, y, size, node.symbol, colors);

        if (scale > 0.4 && node.label) {
          ctx.font = `500 ${Math.max(7, Math.round(8.5 * scale))}px 'IBM Plex Mono', monospace`;
          ctx.fillStyle = colors.label;
          ctx.textAlign = 'center';
          ctx.fillText(node.label, x, y + size + 13 * scale);
        }
      } else if (isNNMode && node.type === 'skillBadge') {
        const size = node.size * scale;
        this._drawSkillBadge(x, y, size, node.symbol, colors);

        if (scale > 0.4 && node.label) {
          ctx.font = `500 ${Math.max(7, Math.round(8.5 * scale))}px 'IBM Plex Mono', monospace`;
          ctx.fillStyle = colors.label;
          ctx.textAlign = 'center';
          ctx.fillText(node.label, x, y + size + 13 * scale);
        }
      } else {
        // Standard geometric nodes (Scene 0, 2, 3, 4, 5)
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
