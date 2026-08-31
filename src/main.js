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
  responsibilityPrinciples,
  cognitiveMetrics,
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

    <!-- Header (Clean Logo only on top left) -->
    <header class="alvi-header" id="alvi-header">
      <a class="alvi-header-logo" href="#" aria-label="ALVI Home">
        ALVI
        <span>Alzheimer's Voice Intelligence</span>
      </a>
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

    <!-- Scroll Container -->
    <main class="scroll-container" id="scroll-container">

      <!-- ======================== 01 — MEMBER 1: The Idea ======================== -->
      <section class="hero-section" id="section-hero" data-theme="light">
        <div class="section-bg-num" aria-hidden="true">01</div>
        <div class="section-eyebrow">TEAM ZEPHYR</div>
        <h1 class="hero-heading">What if your voice<br/>could reveal your<br/>cognitive health?</h1>
        <p class="hero-body">57 million people live with dementia worldwide. Nearly 10 million new cases emerge every year. By the time symptoms become obvious, valuable time for intervention is already lost.</p>
        <div class="micro-labels">
          <span class="micro-label">VOICE</span>
          <span class="micro-label">COGNITION</span>
          <span class="micro-label">PATTERN</span>
          <span class="micro-label">AWARENESS</span>
        </div>
        <p class="hero-sub-body">No expensive tests. No specialized equipment. Just speak.</p>
      </section>

      <!-- ======================== 02 — MEMBER 2: How It Works ======================== -->
      <section class="alvi-section theme-blue" id="section-ingest" data-theme="blue">
        <div class="section-bg-num" aria-hidden="true">02</div>

        <!-- Mini Section Tabs -->
        <div class="section-sub-tabs">
          <span class="sub-tab-line">—</span>
          <span class="sub-tab">RAW AUDIO</span>
          <span class="sub-tab-line">—</span>
          <span class="sub-tab active">PIPELINE</span>
          <span class="sub-tab-line">—</span>
          <span class="sub-tab">CLASSIFY</span>
          <span class="sub-tab-line">—</span>
          <span class="sub-tab">RESULT</span>
        </div>

        <div class="section-sub-num">2.2</div>
        <h2 class="alvi-heading">From hearing a voice to finding patterns in it.</h2>
        <p class="alvi-body">Raw audio becomes a spectrogram, transforms into meaningful features, and passes through our ML classifier. HTML, CSS, JavaScript and React power the interface. Python, TensorFlow and scikit-learn drive the AI.</p>

        <!-- Bottom Sources Arch Bar with Icons & Curved Projection -->
        <div class="sources-arch-container">
          <svg class="sources-arch-svg" viewBox="0 0 520 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 40 40 Q 260 -8 480 40" stroke="rgba(255,255,255,0.28)" stroke-width="1" stroke-dasharray="3 3"/>
            <line x1="260" y1="12" x2="260" y2="4" stroke="rgba(255,255,255,0.45)" stroke-width="1"/>
          </svg>
          <div class="sources-arch-bar">
            <div class="source-item">
              <div class="source-icon-badge">
                <svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
              </div>
              <div class="source-label">RAW AUDIO</div>
            </div>
            <div class="source-item">
              <div class="source-icon-badge">
                <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" stroke-width="1.5"/><polyline points="14 2 14 8 20 8" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div class="source-label">SPECTROGRAM</div>
            </div>
            <div class="source-item">
              <div class="source-icon-badge">
                <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/><line x1="7" y1="8" x2="17" y2="8" stroke="currentColor" stroke-width="1.5"/><line x1="7" y1="12" x2="17" y2="12" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div class="source-label">FEATURES</div>
            </div>
            <div class="source-item">
              <div class="source-icon-badge">
                <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5"/><circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/><polyline points="21 15 16 10 5 21" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div class="source-label">CLASSIFIER</div>
            </div>
          </div>
        </div>
      </section>

      <!-- ======================== TRANSITION: BLUE → DARK ======================== -->
      <div class="panel-wrap" id="transition-2" style="height:140vh; position:relative;">
        <div class="panel theme-blue" id="panel-blue-1" style="position:absolute; inset:0; z-index:1;"></div>
        <div class="panel theme-dark" id="panel-dark-enter" style="position:absolute; top:0; right:0; bottom:0; width:0; z-index:2;"></div>
      </div>

      <!-- ======================== 03 — MEMBER 3: The User Journey ======================== -->
      <section class="alvi-section theme-dark" id="section-cognition" data-theme="dark">
        <div class="section-bg-num" aria-hidden="true">03</div>
        <div class="section-label">03 THE CHECK-IN</div>
        <h2 class="alvi-heading">Stop talking about ALVI.<br/>Become the user.</h2>
        <p class="alvi-body">ALVI builds a personal cognitive journey — not an isolated test. A simple voice check-in. Describe a scene. Tell a story. Play a game. ALVI listens to how you speak, not just what you say.</p>

        <!-- Cognitive Metrics repurposed for check-in signals -->
        <div class="metrics-row">
          <div class="metric-item">
            <div class="metric-label">VOICE CHECK-IN</div>
            <div class="metric-value">FLUENCY</div>
          </div>
          <div class="metric-item">
            <div class="metric-label">STORY RECALL</div>
            <div class="metric-value">RETENTION</div>
          </div>
          <div class="metric-item">
            <div class="metric-label">MINDPLAY</div>
            <div class="metric-value">RESPONSE</div>
          </div>
          <div class="metric-item">
            <div class="metric-label">SIGNAL TYPE</div>
            <div class="metric-value">MULTI</div>
          </div>
        </div>
        <div class="metric-data-label" style="margin-top:20px;">MULTIPLE SIGNALS — NOT A SINGLE RESPONSE</div>
      </section>

      <!-- ======================== TRANSITION: DARK → WHITE ======================== -->
      <div class="panel-wrap" id="transition-3" style="height:140vh; position:relative;">
        <div class="panel theme-dark" id="panel-dark-1" style="position:absolute; inset:0; z-index:1;"></div>
        <div class="panel theme-light" id="panel-light-enter" style="position:absolute; top:0; right:0; bottom:0; width:0; z-index:2;"></div>
      </div>

      <!-- ======================== 04 — MEMBER 4: Results & Insights ======================== -->
      <section class="alvi-section theme-light" id="section-insight" data-theme="light">
        <div class="section-bg-num" aria-hidden="true">04</div>
        <div class="section-label">04 INSIGHT</div>
        <h2 class="alvi-heading">Many signals. One clearer picture.</h2>
        <p class="alvi-body">Voice assessment, Story Recall, and MindPlay results side by side. No random numbers — context that makes sense.</p>

        <!-- ALVI Result Dashboard -->
        <div class="result-scene" style="border-top-color: rgba(0,0,0,0.06);">
          <div class="result-heading" style="color: var(--warm-white-text);">COGNITIVE SNAPSHOT</div>
          <div class="result-sub">DEMONSTRATION RESULT</div>
          <div class="result-grid">
            <div>
              <div class="result-metric-label">VOICE ASSESSMENT</div>
              <div class="result-metric-value" style="color: var(--warm-white-text);">STABLE</div>
            </div>
            <div>
              <div class="result-metric-label">STORY RECALL</div>
              <div class="result-metric-value" style="color: var(--warm-white-text);">78%</div>
            </div>
            <div>
              <div class="result-metric-label">MINDPLAY</div>
              <div class="result-metric-value" style="color: var(--warm-white-text);">NORMAL</div>
            </div>
            <div>
              <div class="result-metric-label">PATTERN TREND</div>
              <div class="result-metric-value" style="color: var(--warm-white-text); font-size:16px; letter-spacing:0.5px;">WORTH MONITORING</div>
            </div>
          </div>
          <p class="result-body" style="color: var(--warm-white-text);">The Cognitive Journey tracks results across check-ins. The Pattern Explorer compares against anonymized baselines. AI Insights translates changes into simple observations.</p>
          <div class="result-disclaimer">Demonstration data only — not a medical diagnosis.</div>
        </div>
      </section>

      <!-- ======================== TRANSITION: WHITE → BLUE ======================== -->
      <div class="panel-wrap" id="transition-4" style="height:140vh; position:relative;">
        <div class="panel theme-light" id="panel-light-3" style="position:absolute; inset:0; z-index:1;"></div>
        <div class="panel theme-blue" id="panel-blue-enter-2" style="position:absolute; top:0; right:0; bottom:0; width:0; z-index:2;"></div>
      </div>

      <!-- ======================== 05 — Responsibility ======================== -->
      <section class="alvi-section theme-blue" id="section-responsibility" data-theme="blue">
        <div class="section-bg-num" aria-hidden="true">05</div>
        <div class="section-label">05 RESPONSIBILITY</div>
        <h2 class="alvi-heading">ALVI doesn't replace a diagnosis.<br/>It makes noticing change easier.</h2>
        <p class="alvi-body">Technology can surface patterns. Understanding them still requires people. Any real clinical application would require rigorous validation, privacy safeguards, and medical oversight.</p>

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

      <!-- ======================== 06 — The Vision ======================== -->
      <section class="alvi-section theme-dark" id="section-future" data-theme="dark">
        <div class="section-bg-num" aria-hidden="true">06</div>
        <div class="section-label">06 VISION</div>
        <h2 class="alvi-heading">With more data, the model grows.<br/>This isn't the finish line.</h2>
        <p class="alvi-body">ALVI is built to grow. More data means a more robust model. More voices means wider accessibility. This is the first step.</p>
        <div class="future-statement">One voice at a time.</div>
      </section>

      <!-- ======================== FINAL SCREEN ======================== -->
      <section class="final-screen" id="section-final">
        <h2 class="final-heading">One voice<br/>at a time.</h2>
        <div class="final-concept">TEAM ZEPHYR — ALVI</div>
        <p class="final-thought">Riya · Aman · Gunpreet · Shaurya</p>
      </section>

      <!-- Footer -->
      <footer class="alvi-footer">
        <div class="footer-left">ALVI — TEAM ZEPHYR 2025</div>
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

  // --- Fast Multi-scene Graph ---
  const graphCanvas = document.getElementById('graph-canvas');
  const graph = new AnimatedGraph(graphCanvas);
  graph.start();

  // --- Section Navigation & Smooth Scroll Morphing ---
  initSectionNav(graph);

  // --- GSAP Scroll Animations ---
  initScrollAnimations(graph);
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
        gsap.to(window, { scrollTo: { y: el, offsetY: 0 }, duration: 1.0, ease: 'power3.inOut' });
      }
    });
  });

  // Chapter sections (0 to 5)
  const chapterSections = [
    document.getElementById('section-hero'),
    document.getElementById('section-ingest'),
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

      // Update graph scene progress (drives fast collapse & boom NN formation)
      graph.setSceneProgress(continuousScene);

      // Determine active section for nav and colors
      let activeId = 'hero';
      let activeTheme = 'light';

      // Force light theme when at/near top of page (fixes scroll-back bug)
      if (scrollY < 100) {
        activeId = 'hero';
        activeTheme = 'light';
      } else {
        chapterSections.forEach((el, i) => {
          if (el && el.offsetTop <= focalScrollY) {
            activeId = sections[i] ? sections[i].id : 'hero';
            activeTheme = el.getAttribute('data-theme') || 'light';
          }
        });
      }

      // Update nav
      navLinks.forEach(link => {
        const sid = link.getAttribute('data-section');
        link.classList.toggle('active', sid === activeId);
      });

      // Update graph theme
      graph.setTheme(activeTheme);

      // Smooth body background transition
      if (activeTheme === 'blue') {
        document.body.style.backgroundColor = '#1d3da8';
        document.body.style.color = '#ffffff';
      } else if (activeTheme === 'dark') {
        document.body.style.backgroundColor = '#0c0e14';
        document.body.style.color = '#e8e6e2';
      } else {
        document.body.style.backgroundColor = '#f5f2ed';
        document.body.style.color = '#1a1a1a';
      }

      // Update header/nav/indicator colors
      const isDark = activeTheme === 'dark' || activeTheme === 'blue';
      header.style.color = isDark ? '#ffffff' : '#1a1a1a';
      simIndicator.style.color = isDark ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.5)';

      // Section nav colors
      navLinks.forEach(link => {
        link.style.color = isDark ? '#ffffff' : '#1a1a1a';
      });
    },
  });
}

// ============================================================
// GSAP Scroll Animations
// ============================================================
function initScrollAnimations(graph) {
  // --- Hero animations ---
  gsap.from('.hero-heading', {
    opacity: 0,
    y: 35,
    duration: 1,
    delay: 0.2,
    ease: 'power3.out',
  });
  gsap.from('.hero-body', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.4,
    ease: 'power2.out',
  });

  // --- Section entry animations ---
  const sectionIds = ['hero', 'ingest', 'cognition', 'insight', 'responsibility', 'future'];

  sectionIds.forEach(id => {
    const section = document.getElementById('section-' + id);
    if (!section) return;

    const heading = section.querySelector('.alvi-heading');
    const body = section.querySelector('.alvi-body');
    const label = section.querySelector('.section-label');
    const subTabs = section.querySelector('.section-sub-tabs');
    const subNum = section.querySelector('.section-sub-num');
    const archContainer = section.querySelector('.sources-arch-container');
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
      tl.fromTo(bgNum, { x: 30, opacity: 0 }, { x: 0, opacity: 0.08, duration: 1, ease: 'power2.out' }, 0);
    }
    if (subTabs) {
      tl.fromTo(subTabs, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, 0.05);
    }
    if (subNum) {
      tl.fromTo(subNum, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, 0.1);
    }
    if (label) {
      tl.fromTo(label, { opacity: 0, y: 15 }, { opacity: 0.5, y: 0, duration: 0.5, ease: 'power2.out' }, 0.1);
    }
    if (heading) {
      tl.fromTo(heading, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.15);
    }
    if (body) {
      tl.fromTo(body, { opacity: 0, y: 25 }, { opacity: 0.7, y: 0, duration: 0.7, ease: 'power2.out' }, 0.25);
    }
    if (archContainer) {
      tl.fromTo(archContainer, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 0.35);
    }
    if (micros) {
      tl.fromTo(micros, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, 0.35);
    }
  });

  // --- Panel Transitions ---
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
    y: 25,
    stagger: 0.1,
    duration: 0.6,
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
    y: 35,
    duration: 0.7,
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
    y: 25,
    duration: 0.8,
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
    y: 40,
    duration: 1,
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
      stagger: 0.08,
      duration: 0.5,
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
