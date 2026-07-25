// ============================================================================
// PERSONALIZE EVERYTHING HERE. Nothing else needs to change.
// ============================================================================
const siteConfig = {
  // The name shown in the hero heading and throughout the site
  name: 'Sofi',

  // Age -- shown in the hero heading
  age: 19,

  // Background music: path to an mp3 file placed in /audio/.
  // Plays automatically when the page opens (browser-permitting -- see script.js),
  // and can be toggled on/off from the music card.
  musicSrc: 'audio/our-song.mp3',
  musicVolume: 0.75,

  // Ending section copy
  ending: {
    heading: 'Thank you for everything, langga.',
    subtext:
      'I hope this year brings you endless happiness, beautiful memories, and countless reasons to smile.'
  }
};

// MEMORIES -- one entry per photo. `src` should point at a file placed in
// /images/. Replace these with your own photos and captions.
const memories = [
  { id: 1, src: 'images/image1.jpg', alt: 'Placeholder memory photo one', caption: 'Picture that I always look at when I miss you' },
  { id: 2, src: 'images/image2.jpg', alt: 'Placeholder memory photo two', caption: 'Goofy ahh, Sofi:]' },
  { id: 3, src: 'images/image3.jpg', alt: 'Placeholder memory photo three', caption: 'Favorite picture of them all:)' },
  { id: 4, src: 'images/image4.jpg', alt: 'Placeholder memory photo four', caption: 'Spontiii date' },
  { id: 5, src: 'images/image5.jpg', alt: 'Placeholder memory photo five', caption: 'My cotilion partner and forever partner' },
  { id: 6, src: 'images/image6.jpg', alt: 'Placeholder memory photo six', caption: 'Trip that I will never forget' }
];

// LETTER -- supports simple paragraphs. Each string in the array becomes
// its own paragraph, typed out in sequence.
const birthdayLetter = {
  salutation: `Dear ${siteConfig.name},`,
  paragraphs: [
    "Another year passed, baby. Congrats 19 ka na AHAHHA, you might be 19 na in age but you will forever be my baby hehe",
    "I wanted to really make your day special kahit wala akong pera and look at what I decided to do nanamn HAHAHAH I made another website for you.",
    "I know how hard it was for you in the past 18 years, you laughed, cried and you did different things in your life that you didn't know you could do.",
    'You have experienced many thing leading up to this point, it was not easy for you and I know',
    'Ever since I entered your life, I couldnt help but admire how strong you are despite how soft your heart is, it definitely isnt easy to be soft hearted nor feel things deeply in this world.', 
    'Youve been so strong for your entire life, you became so independent in ways that normal peoople wouldnt do. Ate ka and you are the eldest and you knew from the start how to carry yourself.', 
    'Pero I want you to know na kahit alam kong kaya mo hayaan mo kong gawin ang mga bagay na kinaya mo dati, since you were born you fought for your life and you still do today.', 
    'This time let me help you, tama na yung 18 years na solo mo problema mo. Now for the rest of your life let me be your pahinga, bff, lover, partner and everything in between.' ,
    '1 heart for only for you and 2 eyes to see you and 3 words to just say I LOVE YOU.',
    'As the song 123 from Over October goes: One life, best its spent with you, Id rather live an entire life with you than live a thousand lives without you.',
    'As you enter a new chapter, I hope you forgive your heart, give peace to your own mind and hold my hand because in the coming years you wont be alone anymore. We will share laughters, tears and most espcially problems.', 
    'Happiest Birthday to my most wonderful and pretty baby in the whole entire world; I wish you nothing but the best, my Sofi💙'
  ],
  signature: 'I love you to the moon and back, langga'
};

// ============================================================================
// ICONS -- small inline SVGs, styled to match the site's line-icon look
// ============================================================================
const ICONS = {
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v9a1 1 0 0 0 1 1H9v-6h6v6h2.5a1 1 0 0 0 1-1v-9"/></svg>',
  images: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="15" height="15" rx="2"/><path d="M8.5 12.5 11 15l3.5-4.5L21 18"/><circle cx="8" cy="9" r="1.2"/></svg>',
  music: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 6.5 8 6 8-6"/></svg>',
  sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 3 12.5 8 18 9.5 12.5 11 11 16 9.5 11 4 9.5 9.5 8Z"/><path d="M19 15 19.8 17.2 22 18 19.8 18.8 19 21 18.2 18.8 16 18 18.2 17.2Z"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  chevronDown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  chevronLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',
  chevronRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
  rotate: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5v14l12-7Z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>'
};

function iconEl(name) {
  const span = document.createElement('span');
  span.className = 'icon';
  span.innerHTML = ICONS[name] || '';
  return span;
}

// ============================================================================
// HELPERS
// ============================================================================
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// ============================================================================
// NAVBAR
// ============================================================================
const NAV_ITEMS = [
  { id: 'hero', label: 'Home', icon: 'home' },
  { id: 'music', label: 'Music', icon: 'music' },
  { id: 'memories', label: 'Memories', icon: 'images' },
  { id: 'letter', label: 'Letter', icon: 'mail' },
  { id: 'ending', label: 'Ending', icon: 'sparkles' }
];

function buildNav() {
  const desktopList = document.getElementById('nav-list-desktop');
  const mobileList = document.getElementById('nav-list-mobile');

  NAV_ITEMS.forEach(({ id, label, icon }) => {
    // desktop
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.className = 'nav-item tap-target';
    btn.dataset.sectionId = id;
    btn.appendChild(iconEl(icon));
    const span = document.createElement('span');
    span.textContent = label;
    btn.appendChild(span);
    btn.addEventListener('click', () => {
      scrollToSection(id);
      closeMobileMenu();
    });
    li.appendChild(btn);
    desktopList.appendChild(li);

    // mobile
    const liM = document.createElement('li');
    const btnM = document.createElement('button');
    btnM.className = 'nav-item-mobile tap-target';
    btnM.dataset.sectionId = id;
    btnM.appendChild(iconEl(icon));
    const spanM = document.createElement('span');
    spanM.textContent = label;
    btnM.appendChild(spanM);
    btnM.addEventListener('click', () => {
      scrollToSection(id);
      closeMobileMenu();
    });
    liM.appendChild(btnM);
    mobileList.appendChild(liM);
  });
}

function setActiveNav(activeId) {
  document.querySelectorAll('.nav-item, .nav-item-mobile').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.sectionId === activeId);
  });
}

function initActiveSectionObserver() {
  const sectionIds = NAV_ITEMS.map((n) => n.id);
  const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
  let activeId = sectionIds[0];
  setActiveNav(activeId);

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) {
        activeId = visible[0].target.id;
        setActiveNav(activeId);
      }
    },
    { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
  );

  sections.forEach((el) => observer.observe(el));
}

function initMobileMenu() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const overlay = document.getElementById('mobile-menu-overlay');
  const iconWrap = document.getElementById('mobile-menu-icon');
  iconWrap.appendChild(iconEl('menu'));

  toggle.addEventListener('click', () => {
    const isOpen = overlay.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    iconWrap.innerHTML = '';
    iconWrap.appendChild(iconEl(isOpen ? 'x' : 'menu'));
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeMobileMenu();
  });
}

function closeMobileMenu() {
  const overlay = document.getElementById('mobile-menu-overlay');
  const toggle = document.getElementById('mobile-menu-toggle');
  const iconWrap = document.getElementById('mobile-menu-icon');
  overlay.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open menu');
  iconWrap.innerHTML = '';
  iconWrap.appendChild(iconEl('menu'));
}

// ============================================================================
// FLOATING PARTICLES -- purely decorative, aria-hidden
// ============================================================================
function renderParticles(containerId, { count = 18, variant = 'dot' } = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.setAttribute('aria-hidden', 'true');

  for (let i = 0; i < count; i++) {
    const el = document.createElement('span');
    el.className = `particle ${variant}`;
    const left = randomBetween(2, 98);
    const delay = randomBetween(0, 6);
    const duration = randomBetween(7, 14);
    const size = randomBetween(4, 10);
    const drift = randomBetween(-30, 30);

    el.style.left = `${left}%`;
    el.style.animationDelay = `${delay}s`;
    el.style.animationDuration = `${duration}s`;
    el.style.setProperty('--drift', `${drift}px`);
    if (variant !== 'heart') {
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
    } else {
      el.textContent = '♥';
    }
    container.appendChild(el);
  }
}

// ============================================================================
// SCROLL REVEAL -- generic IntersectionObserver-based fade/slide-in
// ============================================================================
function initRevealObserver(selector, threshold = 0.3) {
  const els = document.querySelectorAll(selector);
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold }
  );
  els.forEach((el) => observer.observe(el));
}

// ============================================================================
// HERO
// ============================================================================
function initHero() {
  document.getElementById('hero-age').textContent = siteConfig.age;
  document.getElementById('hero-name').textContent = siteConfig.name;
  document.getElementById('scroll-down-btn').appendChild(iconEl('chevronDown'));
  document.getElementById('scroll-down-btn').addEventListener('click', () => scrollToSection('music'));

  renderParticles('particles-hero-sparkle', { count: 22, variant: 'sparkle' });
  renderParticles('particles-hero-dot', { count: 10, variant: 'dot' });
}

// ============================================================================
// MEMORIES + LIGHTBOX
// ============================================================================
function initMemories() {
  const grid = document.getElementById('memories-grid');

  memories.forEach((memory, index) => {
    const card = document.createElement('button');
    card.className = 'memory-card';
    card.style.transitionDelay = `${(index % 6) * 0.08}s`;

    const img = document.createElement('img');
    img.src = memory.src;
    img.alt = memory.alt;
    img.loading = 'lazy';
    card.appendChild(img);

    const captionWrap = document.createElement('div');
    captionWrap.className = 'memory-card-caption';
    const captionP = document.createElement('p');
    captionP.textContent = memory.caption;
    captionWrap.appendChild(captionP);
    card.appendChild(captionWrap);

    // tilt-on-hover
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rotateY = clamp((px - 0.5) * 14, -7, 7);
      const rotateX = clamp((0.5 - py) * 14, -7, 7);
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = card.classList.contains('is-visible')
        ? 'translateY(0) perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)'
        : '';
    });

    card.addEventListener('click', () => openLightbox(index));

    grid.appendChild(card);
  });

  // fade-in-on-scroll for memory cards (separate from the transform above)
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll('.memory-card').forEach((el) => observer.observe(el));

  document.getElementById('memories-heading').classList.add('section-heading');
  initRevealObserver('#memories-heading', 0.4);

  // lightbox controls
  document.getElementById('lightbox-close').appendChild(iconEl('x'));
  document.getElementById('lightbox-prev').appendChild(iconEl('chevronLeft'));
  document.getElementById('lightbox-next').appendChild(iconEl('chevronRight'));

  document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
  document.getElementById('lightbox-prev').addEventListener('click', () => navLightbox(-1));
  document.getElementById('lightbox-next').addEventListener('click', () => navLightbox(1));
  document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!document.getElementById('lightbox').classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') navLightbox(1);
    if (e.key === 'ArrowLeft') navLightbox(-1);
  });

  // touch swipe
  let touchStartX = null;
  const figure = document.getElementById('lightbox-figure');
  figure.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; });
  figure.addEventListener('touchend', (e) => {
    if (touchStartX === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX;
    if (diff < -80) navLightbox(1);
    else if (diff > 80) navLightbox(-1);
    touchStartX = null;
  });
}

let lightboxIndex = null;

function openLightbox(index) {
  lightboxIndex = index;
  renderLightbox();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
  lightboxIndex = null;
}

function navLightbox(dir) {
  if (lightboxIndex === null) return;
  lightboxIndex = (lightboxIndex + dir + memories.length) % memories.length;
  renderLightbox();
}

function renderLightbox() {
  const memory = memories[lightboxIndex];
  document.getElementById('lightbox-img').src = memory.src;
  document.getElementById('lightbox-img').alt = memory.alt;
  document.getElementById('lightbox-caption').textContent = memory.caption;
  document.getElementById('lightbox').setAttribute('aria-label', `Photo: ${memory.caption}`);
}

// ============================================================================
// MUSIC
// ============================================================================
function initMusic() {
  document.querySelector('#music .music-info-title').prepend(iconEl('music'));

  document.getElementById('music-heading').classList.add('section-heading');
  initRevealObserver('#music-heading', 0.4);

  renderParticles('particles-music', { count: 8, variant: 'dot' });

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  observer.observe(document.getElementById('music-card'));

  initBackgroundAudio();
}

// ----------------------------------------------------------------------
// Background audio: tries to autoplay the moment the page opens. Most
// browsers block audio-with-sound autoplay until the visitor has
// interacted with the page at least once, so if the initial attempt is
// blocked, playback starts silently on the very first tap/click/key/scroll
// anywhere on the page -- no play button needed. The vinyl and the
// "playing/paused" pill both act as an on/off toggle at any time.
// ----------------------------------------------------------------------
function initBackgroundAudio() {
  const audio = document.getElementById('bg-audio');
  const vinylBtn = document.getElementById('vinyl-toggle');
  const toggleBtn = document.getElementById('music-toggle-btn');
  const toggleIcon = document.getElementById('music-toggle-icon');
  const toggleLabel = document.getElementById('music-toggle-label');
  const vinyl = document.querySelector('.vinyl');
  const equalizer = document.querySelector('.equalizer');
  if (!audio) return;

  audio.src = siteConfig.musicSrc;
  audio.volume = siteConfig.musicVolume ?? 0.75;

  let userPaused = false; // true once the visitor explicitly hits pause

  function reflectState(isPlaying) {
    toggleIcon.innerHTML = ICONS[isPlaying ? 'pause' : 'play'];
    toggleLabel.textContent = isPlaying ? 'playing' : 'paused';
    toggleBtn.setAttribute('aria-pressed', String(isPlaying));
    toggleBtn.setAttribute('aria-label', isPlaying ? 'Pause music' : 'Play music');
    vinylBtn.setAttribute('aria-pressed', String(isPlaying));
    vinylBtn.setAttribute('aria-label', isPlaying ? 'Pause music' : 'Play music');
    vinyl.classList.toggle('is-paused', !isPlaying);
    equalizer.classList.toggle('is-paused', !isPlaying);
  }

  audio.addEventListener('play', () => reflectState(true));
  audio.addEventListener('pause', () => reflectState(false));

  function tryPlay() {
    const p = audio.play();
    if (p && typeof p.catch === 'function') {
      p.catch(() => {
        // Autoplay blocked -- reflect the paused state and wait for a
        // first user gesture to try again.
        reflectState(false);
        armFirstInteractionAutoplay();
      });
    }
  }

  function armFirstInteractionAutoplay() {
    const gestureEvents = ['pointerdown', 'keydown', 'touchstart', 'wheel'];
    const onFirstGesture = () => {
      if (!userPaused) tryPlay();
      gestureEvents.forEach((evt) => document.removeEventListener(evt, onFirstGesture));
    };
    gestureEvents.forEach((evt) => document.addEventListener(evt, onFirstGesture, { once: true, passive: true }));
  }

  function toggle() {
    if (audio.paused) {
      userPaused = false;
      tryPlay();
    } else {
      userPaused = true;
      audio.pause();
    }
  }

  toggleBtn.addEventListener('click', toggle);
  vinylBtn.addEventListener('click', toggle);

  reflectState(false);
  tryPlay();
}

// ============================================================================
// LETTER
// ============================================================================
function initLetter() {
  const fullText = [birthdayLetter.salutation, ...birthdayLetter.paragraphs, `— ${birthdayLetter.signature}`].join('\n\n');
  const envelope = document.getElementById('letter-envelope');
  const card = document.getElementById('letter-card');
  const visibleSpan = document.getElementById('letter-visible');
  const cursor = document.getElementById('letter-cursor');
  const replayBtn = document.getElementById('letter-replay');

  envelope.querySelector('.letter-envelope-label').prepend(iconEl('mail'));
  replayBtn.prepend(iconEl('rotate'));

  let visibleChars = 0;
  let typeInterval = null;

  function typeText() {
    clearInterval(typeInterval);
    visibleChars = 0;
    cursor.classList.add('active');
    replayBtn.hidden = true;

    if (prefersReducedMotion()) {
      visibleSpan.textContent = fullText;
      cursor.classList.remove('active');
      replayBtn.hidden = false;
      return;
    }

    typeInterval = setInterval(() => {
      visibleChars += 2;
      if (visibleChars >= fullText.length) {
        visibleChars = fullText.length;
        visibleSpan.textContent = fullText;
        clearInterval(typeInterval);
        cursor.classList.remove('active');
        replayBtn.hidden = false;
        return;
      }
      visibleSpan.textContent = fullText.slice(0, visibleChars);
    }, 18);
  }

  function openLetter() {
    envelope.classList.add('hidden-away');
    card.hidden = false;
    requestAnimationFrame(() => card.classList.add('open'));
    typeText();
  }

  envelope.addEventListener('click', openLetter);
  replayBtn.addEventListener('click', typeText);

  document.getElementById('letter-heading').classList.add('section-heading');
  initRevealObserver('#letter-heading', 0.4);
}

// ============================================================================
// ENDING
// ============================================================================
function initEnding() {
  document.getElementById('ending-title').textContent = siteConfig.ending.heading;
  document.getElementById('ending-subtext').textContent = siteConfig.ending.subtext;
  document.getElementById('ending-signoff').textContent = `made with love and care, for ${siteConfig.name}💙`;

  const starsField = document.getElementById('stars-field');
  for (let i = 0; i < 40; i++) {
    const star = document.createElement('span');
    star.className = 'star';
    const size = Math.random() * 2 + 1;
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.animationDelay = `${Math.random() * 4}s`;
    starsField.appendChild(star);
  }

  renderParticles('particles-ending', { count: 12, variant: 'sparkle' });

  const section = document.getElementById('ending');
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  observer.observe(section);
}

// ============================================================================
// INIT
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  initActiveSectionObserver();
  initMobileMenu();
  initHero();
  initMemories();
  initMusic();
  initLetter();
  initEnding();
});
