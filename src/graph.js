// ============================================================
// ALVI — Persistent Animated Network Graph (Canvas)
// Matches Langware reference: large visible nodes, clear lines,
// continuous drift motion, labels with small text
// ============================================================
import { graphNodes, graphConnections } from './data.js';

export class AnimatedGraph {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.nodes = [];
    this.connections = [];
    this.theme = 'light'; // 'light' | 'blue' | 'dark'
    this.scrollProgress = 0;
    this.time = 0;
    this.dpr = window.devicePixelRatio || 1;
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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
    const srcNodes = this.isMobile
      ? graphNodes.filter((n, i) => n.accent || n.label || i < 22)
      : graphNodes;

    this.nodes = srcNodes.map(n => ({
      ...n,
      baseX: n.x,
      baseY: n.y,
      cx: n.x,
      cy: n.y,
      // Each node gets its own slow velocity for organic drift
      vx: (Math.random() - 0.5) * 0.0003,
      vy: (Math.random() - 0.5) * 0.0003,
      // Each node gets active speed and range for lively organic drift
      phase: Math.random() * Math.PI * 2,
      pulsePhase: Math.random() * Math.PI * 2,
      driftRadius: 0.018 + Math.random() * 0.032, // larger drift distance
      driftSpeed: 0.7 + Math.random() * 0.9,      // ~4x-5x faster motion
    }));
  }

  _initConnections() {
    const nodeIds = new Set(this.nodes.map(n => n.id));
    this.connections = graphConnections
      .filter(([a, b]) => nodeIds.has(a) && nodeIds.has(b))
      .map(([a, b]) => ({
        from: a,
        to: b,
        opacity: 0.25 + Math.random() * 0.35,
        baseOpacity: 0.25 + Math.random() * 0.35,
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

  setScroll(progress) {
    this.scrollProgress = Math.max(0, Math.min(1, progress));
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

    for (const node of this.nodes) {
      // Continuous organic drift — nodes actively float around their base position
      const driftX = Math.sin(t * node.driftSpeed + node.phase) * node.driftRadius;
      const driftY = Math.cos(t * (node.driftSpeed * 1.15) + node.phase + 1.2) * node.driftRadius;

      // Secondary oscillation for fluid organic movement
      const microX = Math.sin(t * 1.6 + node.phase * 2.1) * 0.007;
      const microY = Math.cos(t * 1.4 + node.phase * 1.7) * 0.007;

      // Scroll-based global shift
      const scrollShiftX = sp * 0.04 * (node.baseX - 0.5);
      const scrollShiftY = sp * 0.03 * (node.baseY - 0.5);

      node.cx = node.baseX + driftX + microX + scrollShiftX;
      node.cy = node.baseY + driftY + microY + scrollShiftY;

      // Pulse for accent nodes (smooth breathing)
      node.pulse = node.accent
        ? 0.5 + 0.5 * Math.sin(t * 1.8 + node.pulsePhase)
        : 0;

      // Highlight flash
      node.highlighted = Math.sin(t * 0.5 + node.phase * 3) > 0.82;
    }

    // Connection opacity breathing
    for (const conn of this.connections) {
      conn.opacity = conn.baseOpacity + Math.sin(t * 0.9 + conn.phase) * 0.15;
    }
  }

  _getColors() {
    switch (this.theme) {
      case 'blue':
        return {
          line: 'rgba(255,255,255,0.18)',
          lineHighlight: 'rgba(255,255,255,0.4)',
          node: 'rgba(255,255,255,0.35)',
          nodeAccent: 'rgba(100,150,255,0.85)',
          nodeHighlight: 'rgba(255,255,255,0.6)',
          label: 'rgba(255,255,255,0.45)',
        };
      case 'dark':
        return {
          line: 'rgba(255,255,255,0.12)',
          lineHighlight: 'rgba(255,255,255,0.28)',
          node: 'rgba(255,255,255,0.25)',
          nodeAccent: 'rgba(80,140,255,0.75)',
          nodeHighlight: 'rgba(255,255,255,0.45)',
          label: 'rgba(255,255,255,0.4)',
        };
      default: // light
        return {
          line: 'rgba(0,0,0,0.10)',
          lineHighlight: 'rgba(0,0,0,0.22)',
          node: 'rgba(0,0,0,0.25)',
          nodeAccent: 'rgba(50,90,210,0.75)',
          nodeHighlight: 'rgba(50,90,210,0.45)',
          label: 'rgba(0,0,0,0.35)',
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
    const scale = this.isMobile ? 0.7 : 1;

    ctx.clearRect(0, 0, w, h);

    // Draw connections — thin lines between nodes
    for (const conn of this.connections) {
      const a = this._nodeById(conn.from);
      const b = this._nodeById(conn.to);
      if (!a || !b) continue;

      const ax = a.cx * w, ay = a.cy * h;
      const bx = b.cx * w, by = b.cy * h;
      const isHighlight = a.accent || b.accent || a.highlighted || b.highlighted;

      ctx.beginPath();
      ctx.moveTo(ax, ay);
      ctx.lineTo(bx, by);
      ctx.strokeStyle = isHighlight ? colors.lineHighlight : colors.line;
      ctx.lineWidth = isHighlight ? 1.0 : 0.6;
      ctx.globalAlpha = conn.opacity;
      ctx.stroke();
      ctx.globalAlpha = 1;
    }

    // Draw nodes — clearly visible dots
    for (const node of this.nodes) {
      const x = node.cx * w;
      const y = node.cy * h;
      const s = node.size * scale;

      let fillColor = colors.node;
      if (node.accent) fillColor = colors.nodeAccent;
      else if (node.highlighted) fillColor = colors.nodeHighlight;

      ctx.fillStyle = fillColor;

      if (node.type === 'circle') {
        ctx.beginPath();
        ctx.arc(x, y, s, 0, Math.PI * 2);
        ctx.fill();
      } else if (node.type === 'square') {
        ctx.fillRect(x - s, y - s, s * 2, s * 2);
      } else if (node.type === 'diamond') {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(Math.PI / 4);
        ctx.fillRect(-s * 0.75, -s * 0.75, s * 1.5, s * 1.5);
        ctx.restore();
      }

      // Accent pulse ring — visible breathing ring
      if (node.accent && node.pulse > 0.2) {
        ctx.beginPath();
        ctx.arc(x, y, s + 5 + node.pulse * 6, 0, Math.PI * 2);
        ctx.strokeStyle = colors.nodeAccent;
        ctx.lineWidth = 0.8;
        ctx.globalAlpha = (1 - node.pulse) * 0.5;
        ctx.stroke();
        ctx.globalAlpha = 1;
      }

      // Label — small technical text near nodes
      if (node.label) {
        ctx.font = `500 ${this.isMobile ? 8 : 10}px 'IBM Plex Mono', monospace`;
        ctx.fillStyle = colors.label;
        ctx.textAlign = 'center';
        ctx.fillText(node.label, x, y - s - 8);
      }
    }
  }
}
