document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const primaryNav = document.getElementById('primaryNav');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTop = document.getElementById('backToTop');
  const sections = document.querySelectorAll('main section[id]');
  const contactForm = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');
  const yearEl = document.getElementById('year');

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Navbar background + back-to-top visibility on scroll
  const onScroll = () => {
    const scrolled = window.scrollY > 20;
    navbar.classList.toggle('scrolled', scrolled);
    backToTop.classList.toggle('show', window.scrollY > 500);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu toggle
  navToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close mobile menu after tapping a link
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      primaryNav.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Back to top: animated manually so it scrolls smoothly across browsers instead of
  // relying on native smooth-scroll, which some browsers silently skip.
  function smoothScrollToTop(duration = 600) {
    const startY = window.scrollY;
    if (startY === 0) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.scrollTo(0, 0);
      return;
    }
    const start = performance.now();
    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      // behavior: 'auto' forces an instant jump per frame; the global CSS
      // scroll-behavior: smooth would otherwise turn each frame into its own
      // native smooth-scroll animation, fighting this manual easing.
      window.scrollTo({ top: startY * (1 - eased), left: 0, behavior: 'auto' });
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  backToTop.addEventListener('click', () => smoothScrollToTop());

  // Highlight active nav link based on section in view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
  );
  sections.forEach((section) => observer.observe(section));

  // Hero "campaign results" card: cycles through channels, morphing the line and counting the
  // headline number. Each series' first-to-last ratio matches its claim (3x, -30%), so the shape is honest.
  const liveChart = document.getElementById('liveChart');
  if (liveChart) {
    const series = [
      {
        values: [0.28, 0.33, 0.41, 0.5, 0.62, 0.74, 0.84],
        from: 1, to: 3, fmt: (v) => `${v.toFixed(1)}×`,
        label: 'Monthly engagement', sub: 'Instagram growth campaign',
        aria: 'Monthly engagement tripling over six months',
      },
      {
        values: [0.85, 0.83, 0.77, 0.71, 0.66, 0.62, 0.595],
        from: 0, to: 30, fmt: (v) => `−${Math.round(v)}%`,
        label: 'Cost per lead', sub: 'Multi-platform ad rollout',
        aria: 'Cost per lead falling 30 percent over six months',
      },
      {
        values: [0.05, 0.07, 0.1, 0.42, 0.7, 0.84, 0.9],
        from: 0, to: 1.8, fmt: (v) => `${v.toFixed(1)}M`,
        label: 'Total reach', sub: 'Creator partnership launch',
        aria: 'Total reach climbing to 1.8 million after launch',
      },
    ];
    const tabs = liveChart.querySelectorAll('.live-chart__tab');
    const line = document.getElementById('liveLine');
    const area = document.getElementById('liveArea');
    const now = document.getElementById('liveNow');
    const svg = document.getElementById('liveSvg');
    const dot = document.getElementById('liveDot');
    const numEl = document.getElementById('liveNum');
    const labelEl = document.getElementById('liveLabel');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    // viewBox is 640x300; the line stops at x=600 so the end dot isn't clipped by the card edge,
    // and stays above y=230 so the "Trusted growth partner" badge overlapping the card never hides it.
    const W = 600, TOP = 30, SPAN = 200, H = 300;
    const DWELL = 5000, MORPH = 1000;
    const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

    const toPoints = (vals) => vals.map((v, i) => [(i / (vals.length - 1)) * W, TOP + (1 - v) * SPAN]);
    // Catmull-Rom through the points, expressed as cubic Béziers, for a smooth curve.
    const curve = (pts) => {
      let d = `M${pts[0][0]},${pts[0][1]}`;
      for (let i = 0; i < pts.length - 1; i++) {
        const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
        const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
        const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
        d += ` C${c1},${c2} ${p2[0]},${p2[1]}`;
      }
      return d;
    };

    let current = series[0].values.slice();
    let index = 0, morphFrom = current, morphStart = 0, elapsed = 0, last = 0;
    let paused = false, visible = true;

    function render(vals, num) {
      const pts = toPoints(vals);
      const d = curve(pts);
      line.setAttribute('d', d);
      area.setAttribute('d', `${d} L${W},${H} L0,${H} Z`);
      const end = pts[pts.length - 1];
      now.setAttribute('x1', end[0]); now.setAttribute('x2', end[0]);
      now.setAttribute('y1', end[1]); now.setAttribute('y2', H);
      dot.style.left = `${(end[0] / 640) * 100}%`;
      dot.style.top = `${(end[1] / H) * 100}%`;
      numEl.textContent = series[index].fmt(num);
    }

    function select(i) {
      index = i;
      morphFrom = current.slice();
      morphStart = performance.now();
      elapsed = 0;
      const s = series[i];
      labelEl.innerHTML = `${s.label}<br><small>${s.sub}</small>`;
      svg.setAttribute('aria-label', s.aria);
      tabs.forEach((t, j) => {
        t.setAttribute('aria-selected', String(j === i));
        t.style.setProperty('--p', 0);
      });
    }

    function frame(now) {
      const dt = last ? now - last : 0;
      last = now;
      const s = series[index];
      const t = reduceMotion.matches ? 1 : Math.min((now - morphStart) / MORPH, 1);
      const k = ease(t);
      current = s.values.map((v, j) => morphFrom[j] + (v - morphFrom[j]) * k);
      render(current, s.from + (s.to - s.from) * k);

      // Auto-advance only when it's on screen, not hovered/focused, and motion is welcome.
      if (!reduceMotion.matches && visible && !paused) {
        elapsed += dt;
        tabs[index].style.setProperty('--p', Math.min(elapsed / DWELL, 1));
        if (elapsed >= DWELL) select((index + 1) % series.length);
      }
      requestAnimationFrame(frame);
    }

    tabs.forEach((tab, i) => tab.addEventListener('click', () => select(i)));
    liveChart.addEventListener('mouseenter', () => { paused = true; });
    liveChart.addEventListener('mouseleave', () => { paused = false; });
    liveChart.addEventListener('focusin', () => { paused = true; });
    liveChart.addEventListener('focusout', () => { paused = false; });
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(liveChart);

    // Start from a flat line so the first series rises into place on load.
    current = series[0].values.map(() => 0.02);
    select(0);
    requestAnimationFrame(frame);
  }

  // Scroll reveal: content fades up as it enters the viewport, siblings staggered slightly.
  // The classes are removed afterwards so cards get their own hover transitions back.
  const revealTargets = document.querySelectorAll(
    '.section__head, .service-card, .process-step, .work-card, .about__media, .about__content, .testimonial-card, .cta-band__inner, .contact__info, .contact__form'
  );
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const delay = [...el.parentElement.children].indexOf(el) * 90;
        el.style.transitionDelay = `${delay}ms`;
        el.classList.add('in-view');
        revealObserver.unobserve(el);
        setTimeout(() => {
          el.classList.remove('reveal', 'in-view');
          el.style.transitionDelay = '';
        }, 900 + delay);
      });
    },
    { rootMargin: '0px 0px -10% 0px' }
  );
  revealTargets.forEach((el) => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });

  // Cursor-following glow on glass cards (CSS reads --mx/--my).
  document.querySelectorAll('.service-card, .work-card, .testimonial-card').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });

  // Submits to Web3Forms via AJAX so the page doesn't reload. Works on any static host.
  if (contactForm) {
    const submitBtn = document.getElementById('formSubmit');
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';
      formNote.classList.remove('is-error');
      formNote.textContent = '';
      fetch(contactForm.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(contactForm))),
      })
        .then((res) => res.json().then((data) => ({ res, data })))
        .then(({ res, data }) => {
          // fetch only rejects on network failure; also require Web3Forms' own success flag.
          if (!res.ok || !data.success) throw new Error(data.message || `HTTP ${res.status}`);
          formNote.textContent = "Thanks! We'll get back to you within one business day.";
          contactForm.reset();
        })
        .catch(() => {
          formNote.classList.add('is-error');
          formNote.textContent = 'Something went wrong. Please email us at contact@ignishun.com instead.';
        })
        .finally(() => {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Message';
        });
    });
  }
});
