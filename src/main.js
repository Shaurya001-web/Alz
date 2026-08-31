// ============================================================
// ALVI — Alzheimer's Voice Intelligence
// Main Application
// ============================================================
import './style.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { AnimatedGraph } from './graph.js';
import {
  sections,
  topNav,
  metrics,
  voiceMetrics,
  cognitiveMetrics,
  responsibilityPrinciples,
  menuItems,
} from './data.js';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// ============================================================
// DOM Construction
// ============================================================
function buildHTML() {
  return `
    <!-- Persistent Graph Canvas -->
    <div id="graph-canvas-wrap" aria-hidden="true">
      <canvas id="graph-canvas"></canvas>
    </div>

    <!-- Header -->
    <header class="alvi-header" id="alvi-header">
      <a class="alvi-header-logo" href="#" aria-label="ALVI Home">
        ALVI
        <span>Alzheimer's Voice Intelligence</span>
      </a>
      <nav class="tech-index" aria-label="Technical navigation">
        ${topNav.map(item => `<a href="#" data-nav="${item.toLowerCase()}">${item}</a>`).join('')}
      </nav>
      <button class="menu-btn" id="menu-open" aria-label="Open menu">MENU</button>
    </header>

    <!-- Right Section Navigation -->
    <nav class="section-nav" id="section-nav" aria-label="Section navigation">
      ${sections
        .map(
          s => `<a href="#section-${s.id}" data-section="${s.id}">
            <span class="nav-line"></span>
            <span>${s.num} ${s.label}</span>
          </a>`
        )
        .join('')}
    </nav>

    <!-- Simulation Indicator -->
    <div class="sim-indicator" id="sim-indicator">
      <span class="sim-dot"></span>
      SIMULATED DATA
    </div>

    <!-- Full Screen Menu -->
    <div class="menu-overlay" id="menu-overlay" role="dialog" aria-label="Navigation menu">
      <button class="menu-overlay-close" id="menu-close" aria-label="Close menu">CLOSE</button>
      ${menuItems
        .map(
          m => `<a href="#section-${m.id}" class="menu-link" data-menu-target="${m.id}">
            <span class="menu-num">${m.num}</span>
            ${m.label}
          </a>`
        )
        .join('')}
    </div>

    <!-- Scroll Container -->
    <main class="scroll-container" id="scroll-container">

      <!-- ======================== HERO ======================== -->
      <section class="hero-section" id="section-hero">
        <div class="hero-bg-num" aria-hidden="true">01</div>
        <div class="hero-brand">ALVI</div>
        <div class="hero-sub-brand">ALZHEIMER'S VOICE INTELLIGENCE</div>
        <h1 class="hero-heading">The signals<br/>we usually overlook.</h1>
        <p class="hero-body">ALVI explores how voice and cognitive signals could be organized into a clearer visual picture of cognitive health.</p>
      </section>

      <!-- ======================== 01 SIGNALS ======================== -->
      <section class="alvi-section theme-light" id="section-signals" data-theme="light">
        <div class="section-bg-num" aria-hidden="true">01</div>
        <div class="section-label">01 SIGNALS</div>
        <h2 class="alvi-heading">The signals we usually overlook.</h2>
        <p class="alvi-body">Some changes in cognition can be subtle long before they become obvious. ALVI explores how patterns in speech and cognition could be organized into a clearer visual picture of cognitive health.</p>
        <div class="micro-labels">
          <span class="micro-label">VOICE</span>
          <span class="micro-label">COGNITION</span>
          <span class="micro-label">PATTERN</span>
          <span class="micro-label">AWARENESS</span>
        </div>
      </section>

      <!-- ======================== TRANSITION: WHITE → BLUE ======================== -->
      <div class="panel-wrap" id="transition-1" style="height:140vh; position:relative;">
        <div class="panel theme-light" id="panel-light-1" style="position:absolute; inset:0; z-index:1;"></div>
        <div class="panel theme-blue" id="panel-blue-enter" style="position:absolute; top:0; right:0; bottom:0; width:0; z-index:2;"></div>
      </div>

      <!-- ======================== 02 VOICE (FABRIC) ======================== -->
      <section class="alvi-section theme-light" id="section-voice" data-theme="light">
        <div class="section-bg-num" aria-hidden="true">02</div>

        <!-- Mini Section Tabs (matches reference photo) -->
        <div class="section-sub-tabs">
          <span class="sub-tab-lead">VOICE SIGNALS</span>
          <span class="sub-tab-line">—</span>
          <span class="sub-tab active">FABRIC</span>
          <span class="sub-tab">ACOUSTIC</span>
          <span class="sub-tab">TEMPO</span>
          <span class="sub-tab">HARMONICS</span>
        </div>

        <div class="section-sub-num">2.1</div>
        <h2 class="alvi-heading">The human-voice fabric.</h2>
        <p class="alvi-body">Acoustic markers are fast. Cognitive patterns are deep. ALVI fuses them on one live, structured fabric, so researchers work from the same clarity.</p>

        <!-- Fabric Legend (matches reference photo) -->
        <div class="fabric-legend">
          <div class="legend-item"><span class="legend-dot circle-black"></span> YOUR SIGNALS</div>
          <div class="legend-item"><span class="legend-dot square-blue"></span> AGENT MARKER</div>
          <div class="legend-item"><span class="legend-dot diamond-blue"></span> COGNITIVE SKILL</div>
          <div class="legend-item"><span class="legend-line"></span> CONTEXT</div>
        </div>
      </section>

      <!-- ======================== TRANSITION: BLUE → DARK ======================== -->
      <div class="panel-wrap" id="transition-2" style="height:140vh; position:relative;">
        <div class="panel theme-light" id="panel-light-2" style="position:absolute; inset:0; z-index:1;"></div>
        <div class="panel theme-dark" id="panel-dark-enter" style="position:absolute; top:0; right:0; bottom:0; width:0; z-index:2;"></div>
      </div>

      <!-- ======================== 03 COGNITION ======================== -->
      <section class="alvi-section theme-dark" id="section-cognition" data-theme="dark">
        <div class="section-bg-num" aria-hidden="true">03</div>
        <div class="section-label">03 COGNITION</div>
        <h2 class="alvi-heading">Cognition is not a single number.</h2>
        <p class="alvi-body">Memory, language, attention and recall do not exist independently. They interact continuously. ALVI presents these signals as connected parts of a larger cognitive picture.</p>

        <!-- Cognitive Metrics -->
        <div class="metrics-row">
          ${Object.values(cognitiveMetrics)
            .map(
              m => `<div class="metric-item">
              <div class="metric-label">${m.label}</div>
              <div class="metric-value">${m.value}</div>
            </div>`
            )
            .join('')}
        </div>
        <div class="metric-data-label" style="margin-top:20px;">DEMONSTRATION DATA</div>
      </section>

      <!-- ======================== TRANSITION: DARK → WHITE ======================== -->
      <div class="panel-wrap" id="transition-3" style="height:140vh; position:relative;">
        <div class="panel theme-dark" id="panel-dark-1" style="position:absolute; inset:0; z-index:1;"></div>
        <div class="panel theme-light" id="panel-light-enter" style="position:absolute; top:0; right:0; bottom:0; width:0; z-index:2;"></div>
      </div>

      <!-- ======================== 04 INSIGHT ======================== -->
      <section class="alvi-section theme-light" id="section-insight" data-theme="light">
        <div class="section-bg-num" aria-hidden="true">04</div>
        <div class="section-label">04 INSIGHT</div>
        <h2 class="alvi-heading">Many signals. One clearer picture.</h2>
        <p class="alvi-body">ALVI conceptually brings voice and cognitive signals together so complex patterns can be presented in a way that is easier to understand and investigate.</p>

        <!-- ALVI Cognitive Result -->
        <div class="result-scene" style="border-top-color: rgba(0,0,0,0.06);">
          <div class="result-heading" style="color: var(--warm-white-text);">ALVI COGNITIVE INSIGHT</div>
          <div class="result-sub">DEMONSTRATION RESULT</div>
          <div class="result-grid">
            <div>
              <div class="result-metric-label">VOICE SIMILARITY</div>
              <div class="result-metric-value" style="color: var(--warm-white-text);">−3.28%</div>
            </div>
            <div>
              <div class="result-metric-label">PATTERN CONFIDENCE</div>
              <div class="result-metric-value" style="color: var(--warm-white-text);">78%</div>
            </div>
            <div>
              <div class="result-metric-label">MEMORY INDICATOR</div>
              <div class="result-metric-value" style="color: var(--warm-white-text);">01</div>
            </div>
            <div>
              <div class="result-metric-label">OVERALL SIGNAL</div>
              <div class="result-metric-value" style="color: var(--warm-white-text); font-size:16px; letter-spacing:0.5px;">PATTERNS WORTH MONITORING</div>
            </div>
          </div>
          <p class="result-body" style="color: var(--warm-white-text);">Earlier cognitive changes can be subtle. ALVI demonstrates how multiple signal categories could be represented together to create clearer context.</p>
          <div class="result-disclaimer">Demonstration data only — not a medical diagnosis.</div>
        </div>
      </section>

      <!-- ======================== TRANSITION: WHITE → BLUE ======================== -->
      <div class="panel-wrap" id="transition-4" style="height:140vh; position:relative;">
        <div class="panel theme-light" id="panel-light-3" style="position:absolute; inset:0; z-index:1;"></div>
        <div class="panel theme-blue" id="panel-blue-enter-2" style="position:absolute; top:0; right:0; bottom:0; width:0; z-index:2;"></div>
      </div>

      <!-- ======================== 05 RESPONSIBILITY ======================== -->
      <section class="alvi-section theme-blue" id="section-responsibility" data-theme="blue">
        <div class="section-bg-num" aria-hidden="true">05</div>
        <div class="section-label">05 RESPONSIBILITY</div>
        <h2 class="alvi-heading">Technology can surface patterns.<br/>It should not replace judgment.</h2>
        <p class="alvi-body">ALVI is a conceptual interface for exploring how voice and cognitive signals might be communicated. Any real clinical application would require rigorous validation, privacy safeguards, medical oversight and regulatory review.</p>

        <div class="principles-list">
          ${responsibilityPrinciples
            .map(
              p => `<div class="principle-item">
              <div class="principle-num">${p.num}</div>
              <div class="principle-content">
                <div class="principle-title">${p.title}</div>
                <div class="principle-desc">${p.desc}</div>
              </div>
            </div>`
            )
            .join('')}
        </div>
      </section>

      <!-- ======================== TRANSITION: BLUE → DARK ======================== -->
      <div class="panel-wrap" id="transition-5" style="height:140vh; position:relative;">
        <div class="panel theme-blue" id="panel-blue-2" style="position:absolute; inset:0; z-index:1;"></div>
        <div class="panel theme-dark" id="panel-dark-enter-2" style="position:absolute; top:0; right:0; bottom:0; width:0; z-index:2;"></div>
      </div>

      <!-- ======================== 06 FUTURE ======================== -->
      <section class="alvi-section theme-dark" id="section-future" data-theme="dark">
        <div class="section-bg-num" aria-hidden="true">06</div>
        <div class="section-label">06 FUTURE</div>
        <h2 class="alvi-heading">Turning subtle signals into earlier awareness.</h2>
        <p class="alvi-body">ALVI explores a future where complex cognitive signals could become easier to visualize, communicate and investigate.</p>
        <div class="future-statement">Subtle signals.<br/>Clearer context.<br/>Earlier awareness.</div>
        <div class="future-brand">ALVI</div>
        <div class="future-brand-sub">ALZHEIMER'S VOICE INTELLIGENCE</div>
        <div class="future-concept-label">SIMULATED PRODUCT CONCEPT</div>
      </section>

      <!-- ======================== FINAL SCREEN ======================== -->
      <section class="final-screen" id="section-final">
        <h2 class="final-heading">Subtle signals.<br/>Earlier awareness.</h2>
        <div class="final-brand">ALVI</div>
        <div class="final-brand-sub">ALZHEIMER'S VOICE INTELLIGENCE</div>
        <div class="final-concept">SIMULATED PRODUCT CONCEPT</div>
        <p class="final-thought">Technology can help us notice patterns.<br/>Understanding them still requires people.</p>
      </section>

      <!-- Footer -->
      <footer class="alvi-footer">
        <div class="footer-left">ALVI — CONCEPT 2025</div>
        <div class="footer-right">SIMULATED RESEARCH CONCEPT</div>
      </footer>
    </main>
  `;
}

// ============================================================
// Initialize Application
// ============================================================
function init() {
  const app = document.getElementById('app');
  app.innerHTML = buildHTML();

  // --- Multi-scene Graph ---
  const graphCanvas = document.getElementById('graph-canvas');
  const graph = new AnimatedGraph(graphCanvas);
  graph.start();

  // --- Menu ---
  initMenu();

  // --- Section Navigation & Smooth Scroll Morphing ---
  initSectionNav(graph);

  // --- GSAP Scroll Animations ---
  initScrollAnimations(graph);
}

// ============================================================
// Menu
// ============================================================
function initMenu() {
  const overlay = document.getElementById('menu-overlay');
  const openBtn = document.getElementById('menu-open');
  const closeBtn = document.getElementById('menu-close');
  const links = overlay.querySelectorAll('.menu-link');

  openBtn.addEventListener('click', () => {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  });

  closeBtn.addEventListener('click', () => {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    openBtn.focus();
  });

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      overlay.classList.remove('open');
      document.body.style.overflow = '';
      const target = link.getAttribute('data-menu-target');
      const el = document.getElementById('section-' + target);
      if (el) {
        gsap.to(window, { scrollTo: { y: el, offsetY: 0 }, duration: 1.2, ease: 'power3.inOut' });
      }
    });
  });

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
      openBtn.focus();
    }
  });
}

// ============================================================
// Section Navigation & Scroll Progress Tracking
// ============================================================
function initSectionNav(graph) {
  const navLinks = document.querySelectorAll('.section-nav a');
  const header = document.getElementById('alvi-header');
  const simIndicator = document.getElementById('sim-indicator');

  // Click to scroll
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = link.getAttribute('href').substring(1);
      const el = document.getElementById(target);
      if (el) {
        gsap.to(window, { scrollTo: { y: el, offsetY: 0 }, duration: 1.2, ease: 'power3.inOut' });
      }
    });
  });

  // Content chapter checkpoints for smooth scene morphing
  const chapterSections = [
    document.getElementById('section-hero'),
    document.getElementById('section-voice'),
    document.getElementById('section-cognition'),
    document.getElementById('section-insight'),
    document.getElementById('section-responsibility'),
    document.getElementById('section-future'),
  ];

  ScrollTrigger.create({
    trigger: document.body,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: self => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const focalScrollY = scrollY + vh * 0.4;

      // Calculate continuous scene index float (0.0 to 5.0)
      let continuousScene = 0;
      for (let i = 0; i < chapterSections.length - 1; i++) {
        const cur = chapterSections[i];
        const next = chapterSections[i + 1];
        if (cur && next) {
          const topA = cur.offsetTop;
          const topB = next.offsetTop;
          if (scrollY >= topA && scrollY < topB) {
            const frac = Math.max(0, Math.min(1, (scrollY - topA) / (topB - topA)));
            continuousScene = i + frac;
            break;
          } else if (scrollY >= topB && i === chapterSections.length - 2) {
            continuousScene = i + 1;
          }
        }
      }

      // Update graph scene progress (drives collapse and boom!)
      graph.setSceneProgress(continuousScene);

      // Determine active section for nav and colors
      let activeId = 'signals';
      let activeTheme = 'light';

      const navSections = [
        document.getElementById('section-signals'),
        document.getElementById('section-voice'),
        document.getElementById('section-cognition'),
        document.getElementById('section-insight'),
        document.getElementById('section-responsibility'),
        document.getElementById('section-future'),
      ];

      navSections.forEach((el, i) => {
        if (el && el.offsetTop <= focalScrollY) {
          activeId = sections[i] ? sections[i].id : 'signals';
          activeTheme = el.getAttribute('data-theme') || 'light';
        }
      });

      // Update nav
      navLinks.forEach(link => {
        const sid = link.getAttribute('data-section');
        link.classList.toggle('active', sid === activeId);
      });

      // Update graph theme
      graph.setTheme(activeTheme);

      // Update header/nav/indicator colors
      const isDark = activeTheme === 'dark' || activeTheme === 'blue';
      header.style.color = isDark ? '#e8e6e2' : '#1a1a1a';
      simIndicator.style.color = isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)';

      // Section nav colors
      navLinks.forEach(link => {
        link.style.color = isDark ? '#e8e6e2' : '#1a1a1a';
      });
    },
  });
}

// ============================================================
// GSAP Scroll Animations
// ============================================================
function initScrollAnimations(graph) {
  // --- Hero animations ---
  gsap.from('.hero-brand', {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.3,
    ease: 'power2.out',
  });
  gsap.from('.hero-sub-brand', {
    opacity: 0,
    y: 15,
    duration: 0.8,
    delay: 0.5,
    ease: 'power2.out',
  });
  gsap.from('.hero-heading', {
    opacity: 0,
    y: 40,
    duration: 1.2,
    delay: 0.4,
    ease: 'power3.out',
  });
  gsap.from('.hero-body', {
    opacity: 0,
    y: 25,
    duration: 1,
    delay: 0.7,
    ease: 'power2.out',
  });

  // --- Section entry animations ---
  const sectionIds = ['signals', 'voice', 'cognition', 'insight', 'responsibility', 'future'];

  sectionIds.forEach(id => {
    const section = document.getElementById('section-' + id);
    if (!section) return;

    const heading = section.querySelector('.alvi-heading');
    const body = section.querySelector('.alvi-body');
    const label = section.querySelector('.section-label');
    const subTabs = section.querySelector('.section-sub-tabs');
    const subNum = section.querySelector('.section-sub-num');
    const legend = section.querySelector('.fabric-legend');
    const bgNum = section.querySelector('.section-bg-num');
    const micros = section.querySelector('.micro-labels');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none reverse',
      },
    });

    if (bgNum) {
      tl.fromTo(bgNum, { x: -40, opacity: 0 }, { x: 0, opacity: 0.04, duration: 1.2, ease: 'power2.out' }, 0);
    }
    if (subTabs) {
      tl.fromTo(subTabs, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 0.05);
    }
    if (subNum) {
      tl.fromTo(subNum, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, 0.1);
    }
    if (label) {
      tl.fromTo(label, { opacity: 0, y: 15 }, { opacity: 0.5, y: 0, duration: 0.6, ease: 'power2.out' }, 0.1);
    }
    if (heading) {
      tl.fromTo(heading, { opacity: 0, y: 50, clipPath: 'inset(0 0 100% 0)' }, { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 1, ease: 'power3.out' }, 0.15);
    }
    if (body) {
      tl.fromTo(body, { opacity: 0, y: 30 }, { opacity: 0.65, y: 0, duration: 0.8, ease: 'power2.out' }, 0.3);
    }
    if (legend) {
      tl.fromTo(legend, { opacity: 0, y: 20 }, { opacity: 0.55, y: 0, duration: 0.6, ease: 'power2.out' }, 0.4);
    }
    if (micros) {
      tl.fromTo(micros, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 0.45);
    }
  });

  // --- Panel Transitions ---
  createPanelTransition('#transition-1', '#panel-blue-enter');
  createPanelTransition('#transition-2', '#panel-dark-enter');
  createPanelTransition('#transition-3', '#panel-light-enter');
  createPanelTransition('#transition-4', '#panel-blue-enter-2');
  createPanelTransition('#transition-5', '#panel-dark-enter-2');

  // --- Background number parallax ---
  document.querySelectorAll('.section-bg-num').forEach(num => {
    gsap.to(num, {
      y: -30,
      scrollTrigger: {
        trigger: num.closest('.alvi-section') || num.closest('section'),
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });
  });

  // --- Principle items stagger ---
  gsap.from('.principle-item', {
    opacity: 0,
    y: 30,
    stagger: 0.12,
    duration: 0.7,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.principles-list',
      start: 'top 75%',
      toggleActions: 'play none none reverse',
    },
  });

  // --- Result scene ---
  gsap.from('.result-scene', {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.result-scene',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });

  // --- Future statement ---
  gsap.from('.future-statement', {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.future-statement',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });

  // --- Final screen ---
  gsap.from('.final-heading', {
    opacity: 0,
    y: 50,
    clipPath: 'inset(0 0 100% 0)',
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.final-screen',
      start: 'top 70%',
      toggleActions: 'play none none reverse',
    },
  });

  // --- Metrics rows ---
  document.querySelectorAll('.metrics-row').forEach(row => {
    gsap.from(row.querySelectorAll('.metric-item'), {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: row,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });
  });
}

// ============================================================
// Panel Transition Helper
// ============================================================
function createPanelTransition(wrapSelector, panelSelector) {
  const wrap = document.querySelector(wrapSelector);
  const panel = document.querySelector(panelSelector);
  if (!wrap || !panel) return;

  gsap.to(panel, {
    width: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: wrap,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      pin: true,
      pinSpacing: false,
    },
  });
}

// ============================================================
// Start
// ============================================================
document.addEventListener('DOMContentLoaded', init);
if (document.readyState !== 'loading') init();
