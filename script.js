const defaultConfig = {
  primary_color: "#00adb5",
  secondary_color: "#393e46",
  text_color: "#eeeeee",
  text_light_color: "rgba(238, 238, 238, 0.75)",
  background_color: "#222831",
  font_family: "Poppins",
  font_size: 16,
  full_name: "Ricardo Martins",
  professional_title: "React, Node.js e interfaces pensadas para produto real.",
  bio: "Construo experiências web claras, funcionais e prontas para crescer, unindo front-end forte, APIs bem organizadas e atenção ao uso real da tela.",
  email: "ricardo.martins@aluno.impacta.edu.br",
  project1_title: "ProjetoLMS",
  project1_desc: "Projeto acadêmico em Django voltado à organização de cursos, disciplinas, notícias e acesso de alunos em uma experiência web mais estruturada.",
  project2_title: "coffee-delivery",
  project2_desc: "Interface de e-commerce focada em catálogo, experiência de compra e fluxo de entrega, com atenção especial a composição visual e usabilidade.",
  project3_title: "be-the-hero",
  project3_desc: "Aplicação full stack que conecta ONGs a pessoas interessadas em ajudar, unindo painel web, API e experiência mobile em um fluxo completo.",
  skill1: "TypeScript",
  skill2: "React",
  skill3: "Node.js",
  skill4: "Banco de dados",
  skill5: "Git e GitHub",
  skill6: "UI e organização"
};

const themeState = {
  dark: { icon: "sun" },
  light: { icon: "moon" }
};

const root = document.documentElement;
const body = document.body;
const siteShell = document.querySelector(".site-shell");
const navLinks = document.getElementById("site-navigation");
const navBackdrop = document.querySelector("[data-nav-backdrop]");
const navToggle = document.getElementById("nav-toggle");
const navToggleIcon = document.getElementById("nav-toggle-icon");
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const fallbackProjectImages = [
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=1200&q=80"
];

function shuffleImages(images) {
  const nextImages = [...images];

  for (let index = nextImages.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [nextImages[index], nextImages[randomIndex]] = [nextImages[randomIndex], nextImages[index]];
  }

  return nextImages;
}

function getFallbackImage(index) {
  const shuffledPool = body._fallbackImagePool || shuffleImages(fallbackProjectImages);
  body._fallbackImagePool = shuffledPool;
  return shuffledPool[index % shuffledPool.length];
}

function getDeviceType() {
  const width = window.innerWidth || document.documentElement.clientWidth || 0;
  const userAgent = navigator.userAgent.toLowerCase();
  const isTabletUa =
    /ipad|tablet/.test(userAgent) ||
    (/android/.test(userAgent) && !/mobile/.test(userAgent));
  const isMobileUa =
    /iphone|ipod|android.*mobile|windows phone/.test(userAgent);

  if (isTabletUa || (width >= 768 && width <= 1024)) {
    return "tablet";
  }

  if (isMobileUa || width < 768) {
    return "mobile";
  }

  return "desktop";
}

function applyDeviceLayout() {
  const deviceType = getDeviceType();
  body.setAttribute("data-device", deviceType);

  if (deviceType !== "mobile") {
    setMobileMenuState(false);
    return;
  }

  setMobileMenuState(siteShell?.classList.contains("is-menu-open") || false);
}

function getSavedTheme() {
  return localStorage.getItem("portfolio-theme") || "dark";
}

function renderIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
    document.querySelectorAll("svg.lucide").forEach((icon) => {
      icon.setAttribute("aria-hidden", "true");
      icon.setAttribute("focusable", "false");
    });
  }
}

function isMobileMenuLayout() {
  return body.getAttribute("data-device") === "mobile";
}

function setMobileMenuState(isOpen) {
  if (!siteShell || !navLinks || !navToggle) {
    return;
  }

  const shouldOpen = Boolean(isOpen) && isMobileMenuLayout();

  siteShell.classList.toggle("is-menu-open", shouldOpen);
  body.classList.toggle("mobile-nav-open", shouldOpen);
  navLinks.setAttribute("aria-hidden", String(!shouldOpen && isMobileMenuLayout()));
  navToggle.setAttribute("aria-expanded", String(shouldOpen));
  navToggle.setAttribute("aria-label", shouldOpen ? "Fechar menu" : "Abrir menu");

  if (navToggleIcon) {
    navToggleIcon.setAttribute("data-lucide", shouldOpen ? "x" : "menu");
  }

  renderIcons();
}

function animateOpacityLetterReveal(element) {
  if (!element) {
    return;
  }

  const finalText = element.dataset.textValue || element.textContent;
  if (!finalText) {
    return;
  }

  element.dataset.textValue = finalText;

  const lockedHeight = element.offsetHeight;
  if (lockedHeight > 0) {
    element.style.minHeight = `${lockedHeight}px`;
  }

  if (element._opacityRevealTimers) {
    element._opacityRevealTimers.forEach((timer) => window.clearTimeout(timer));
  }

  const fragment = document.createDocumentFragment();
  const revealableChars = [];

  Array.from(finalText).forEach((character) => {
    if (character === " ") {
      fragment.appendChild(document.createTextNode(" "));
      return;
    }

    const span = document.createElement("span");
    span.className = "reveal-char";
    span.textContent = character;
    fragment.appendChild(span);
    revealableChars.push(span);
  });

  element.textContent = "";
  element.appendChild(fragment);
  element.classList.add("is-visible");

  const randomizedChars = [...revealableChars].sort(() => Math.random() - 0.5);
  const timers = [];

  randomizedChars.forEach((charElement, index) => {
    const timer = window.setTimeout(() => {
      charElement.classList.add("is-visible");
    }, 140 + index * 42);

    timers.push(timer);
  });

  const finalTimer = window.setTimeout(() => {
    element.textContent = finalText;
    element.style.minHeight = "";
  }, 140 + randomizedChars.length * 42 + 520);

  timers.push(finalTimer);
  element._opacityRevealTimers = timers;
}

function setupScrambleRevealOnScroll() {
  const elements = document.querySelectorAll("[data-scramble-reveal]");
  if (!elements.length) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => {
      animateOpacityLetterReveal(element);
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || entry.target.dataset.scramblePlayed === "true") {
          return;
        }

        entry.target.dataset.scramblePlayed = "true";
        animateOpacityLetterReveal(entry.target);
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.35,
      rootMargin: "0px 0px -20px 0px"
    }
  );

  elements.forEach((element) => observer.observe(element));
}

function applyTheme(theme) {
  const nextTheme = themeState[theme] ? theme : "dark";
  body.setAttribute("data-theme", nextTheme);
  themeIcon.setAttribute("data-lucide", themeState[nextTheme].icon);
  themeToggle.setAttribute("aria-pressed", String(nextTheme === "light"));
  themeToggle.setAttribute(
    "aria-label",
    nextTheme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"
  );
  localStorage.setItem("portfolio-theme", nextTheme);
  renderIcons();
}

function applyConfig(config = {}) {
  const nextConfig = { ...defaultConfig, ...config };

  root.style.setProperty("--primary", nextConfig.primary_color);
  root.style.setProperty("--surface", nextConfig.secondary_color);
  root.style.setProperty("--text-main", nextConfig.text_color);
  root.style.setProperty("--text-soft", nextConfig.text_light_color);
  root.style.setProperty("--bg", nextConfig.background_color);
  root.style.setProperty("--font-family", `"${nextConfig.font_family}", sans-serif`);
  root.style.setProperty("--font-size-base", `${nextConfig.font_size}px`);

  document.getElementById("hero-name").textContent = nextConfig.full_name;
  document.getElementById("hero-title").textContent = nextConfig.professional_title;
  document.getElementById("hero-bio").textContent = nextConfig.bio;

  document.getElementById("project1-title").textContent = nextConfig.project1_title;
  document.getElementById("project1-desc").textContent = nextConfig.project1_desc;
  document.getElementById("project2-title").textContent = nextConfig.project2_title;
  document.getElementById("project2-desc").textContent = nextConfig.project2_desc;
  document.getElementById("project3-title").textContent = nextConfig.project3_title;
  document.getElementById("project3-desc").textContent = nextConfig.project3_desc;

  document.getElementById("skill1").textContent = nextConfig.skill1;
  document.getElementById("skill2").textContent = nextConfig.skill2;
  document.getElementById("skill3").textContent = nextConfig.skill3;
  document.getElementById("skill4").textContent = nextConfig.skill4;
  document.getElementById("skill5").textContent = nextConfig.skill5;
  document.getElementById("skill6").textContent = nextConfig.skill6;

  const emailText = document.getElementById("email-text");
  const emailLink = document.getElementById("email-link");

  if (emailLink) {
    emailLink.href = `mailto:${nextConfig.email}`;
  }

  if (emailText) {
    const displayMode = emailText.dataset.emailDisplay || "address";
    emailText.textContent = displayMode === "label" ? "Enviar e-mail" : nextConfig.email;
  }
}

function runHeroTitleAnimation() {
  animateOpacityLetterReveal(document.getElementById("hero-name"));
}

function runHeroSecondaryReveal() {
  const fadeElements = Array.from(document.querySelectorAll(".hero-fade-line"));
  if (!fadeElements.length) {
    return;
  }

  fadeElements.forEach((element) => {
    element.classList.remove("is-visible");
  });

  const randomizedElements = [...fadeElements].sort(() => Math.random() - 0.5);
  let elapsedDelay = 260;

  randomizedElements.forEach((element) => {
    const nextDelay = 180 + Math.floor(Math.random() * 240);
    window.setTimeout(() => {
      element.classList.add("is-visible");
    }, elapsedDelay);
    elapsedDelay += nextDelay;
  });
}

function setupScrollReveal() {
  const elements = document.querySelectorAll(".reveal-on-scroll");
  if (!elements.length) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  elements.forEach((element) => observer.observe(element));
}

function setupHeroParallax() {
  const hero = document.querySelector(".hero-section");
  const blobOne = document.querySelector(".hero-blob-one");
  const blobTwo = document.querySelector(".hero-blob-two");
  const profileFrame = document.querySelector(".profile-frame");
  const prefersReducedMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!hero || !blobOne || !blobTwo || !profileFrame || prefersReducedMotion) {
    if (blobOne) {
      blobOne.style.transform = "";
    }

    if (blobTwo) {
      blobTwo.style.transform = "";
    }

    if (profileFrame) {
      profileFrame.style.transform = "";
    }

    return;
  }

  let ticking = false;

  function updateParallax() {
    const rect = hero.getBoundingClientRect();
    const viewportHeight = window.innerHeight || 1;
    const progress = Math.max(-1, Math.min(1, rect.top / viewportHeight));

    blobOne.style.transform = `translate3d(0, ${progress * -18}px, 0)`;
    blobTwo.style.transform = `translate3d(0, ${progress * 14}px, 0)`;
    profileFrame.style.transform = `translate3d(0, ${progress * -10}px, 0)`;

    ticking = false;
  }

  function requestUpdate() {
    if (ticking) {
      return;
    }

    ticking = true;
    window.requestAnimationFrame(updateParallax);
  }

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  requestUpdate();
}

function setupProjectToggles() {
  document.querySelectorAll("[data-project-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const projectCard = button.closest(".project-card");
      if (!projectCard) {
        return;
      }

      const isExpanded = projectCard.classList.toggle("is-expanded");
      button.setAttribute("aria-expanded", String(isExpanded));
      button.textContent = isExpanded ? "Ver menos" : "Ver mais";
    });
  });

  document.querySelectorAll("[data-credential-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const credentialCard = button.closest(".credential-card");
      if (!credentialCard) {
        return;
      }

      const isExpanded = credentialCard.classList.toggle("is-expanded");
      button.setAttribute("aria-expanded", String(isExpanded));
      button.textContent = isExpanded ? "Ver menos" : "Ver mais";
    });
  });
}

function setupActiveNavSection() {
  const sections = Array.from(document.querySelectorAll("main section[id]"));
  const navLinks = Array.from(document.querySelectorAll('.nav-link[href^="#"]'));

  if (!sections.length || !navLinks.length) {
    return;
  }

  const linkMap = new Map(
    navLinks.map((link) => [link.getAttribute("href"), link])
  );

  function setActiveSection(sectionId) {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${sectionId}`;
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function getActivationOffset() {
    const nav = document.querySelector(".site-shell");
    const navHeight = nav ? nav.getBoundingClientRect().height : 0;
    return navHeight + Math.min(window.innerHeight * 0.22, 180);
  }

  let ticking = false;

  function updateActiveSection() {
    const activationOffset = getActivationOffset();
    let nextSection = sections[0];

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top - activationOffset <= 0 && linkMap.has(`#${section.id}`)) {
        nextSection = section;
      }
    });

    const pageBottom =
      window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
    if (pageBottom) {
      nextSection = sections[sections.length - 1];
    }

    setActiveSection(nextSection.id);
    ticking = false;
  }

  function requestActiveSectionUpdate() {
    if (ticking) {
      return;
    }

    ticking = true;
    window.requestAnimationFrame(updateActiveSection);
  }

  requestActiveSectionUpdate();
  window.addEventListener("scroll", requestActiveSectionUpdate, { passive: true });
  window.addEventListener("resize", requestActiveSectionUpdate);
}

function setupMobileNav() {
  if (!siteShell || !navLinks || !navToggle) {
    return;
  }

  navToggle.addEventListener("click", () => {
    if (!isMobileMenuLayout()) {
      return;
    }

    const isOpen = siteShell.classList.contains("is-menu-open");
    setMobileMenuState(!isOpen);
  });

  if (navBackdrop) {
    navBackdrop.addEventListener("click", () => {
      setMobileMenuState(false);
    });
  }

  navLinks.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
      setMobileMenuState(false);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMobileMenuState(false);
    }
  });
}

function setupFloatingTechBadges() {
  const photoWrap = document.querySelector(".profile-photo-wrap");
  const badgeLayer = document.querySelector(".profile-stack");
  const badges = badgeLayer ? Array.from(badgeLayer.querySelectorAll(".tech-badge")) : [];

  if (!photoWrap || !badgeLayer || !badges.length) {
    return;
  }

  if (setupFloatingTechBadges._frameId) {
    window.cancelAnimationFrame(setupFloatingTechBadges._frameId);
    setupFloatingTechBadges._frameId = 0;
  }

  const prefersReducedMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  badges.forEach((badge) => {
    badge.style.setProperty("--tech-float-x", "0px");
    badge.style.setProperty("--tech-float-y", "0px");
    badge.style.setProperty("--tech-float-rotate", "0deg");
    badge.style.setProperty("--tech-float-scale", "1");
  });

  if (prefersReducedMotion) {
    return;
  }

  const motionMap = [
    {
      className: "tech-badge-ts",
      startX: 0.08,
      startY: 0.14,
      rangeRotate: 5,
      minSpeed: 24,
      maxSpeed: 34,
      maxRotateSpeed: 7
    },
    {
      className: "tech-badge-react",
      startX: 0.72,
      startY: 0.1,
      rangeRotate: 7,
      minSpeed: 26,
      maxSpeed: 36,
      maxRotateSpeed: 8
    },
    {
      className: "tech-badge-node",
      startX: 0.06,
      startY: 0.72,
      rangeRotate: 6,
      minSpeed: 23,
      maxSpeed: 33,
      maxRotateSpeed: 7
    },
    {
      className: "tech-badge-docker",
      startX: 0.42,
      startY: 0.08,
      rangeRotate: 6,
      minSpeed: 24,
      maxSpeed: 35,
      maxRotateSpeed: 7
    },
    {
      className: "tech-badge-sql",
      startX: 0.7,
      startY: 0.8,
      rangeRotate: 5,
      minSpeed: 22,
      maxSpeed: 31,
      maxRotateSpeed: 6
    },
    {
      className: "tech-badge-python",
      startX: 0.76,
      startY: 0.44,
      rangeRotate: 7,
      minSpeed: 25,
      maxSpeed: 35,
      maxRotateSpeed: 8
    },
    {
      className: "tech-badge-ai",
      startX: 0.14,
      startY: 0.38,
      rangeRotate: 7,
      minSpeed: 23,
      maxSpeed: 32,
      maxRotateSpeed: 7
    }
  ];

  function getMotionConfig(badge) {
    return (
      motionMap.find((config) => badge.classList.contains(config.className)) || {
        startX: 0.18,
        startY: 0.18,
        rangeRotate: 6,
        minSpeed: 24,
        maxSpeed: 34,
        maxRotateSpeed: 7
      }
    );
  }

  function randomBetween(min, max) {
    return min + Math.random() * (max - min);
  }

  function createVelocity(config, hitX = 0, hitY = 0) {
    let dirX =
      hitX === -1 ? 1 : hitX === 1 ? -1 : randomBetween(-1, 1);
    let dirY =
      hitY === -1 ? 1 : hitY === 1 ? -1 : randomBetween(-1, 1);

    if (Math.abs(dirX) < 0.18) {
      dirX = dirX < 0 ? -0.18 : 0.18;
    }

    if (Math.abs(dirY) < 0.18) {
      dirY = dirY < 0 ? -0.18 : 0.18;
    }

    const magnitude = Math.hypot(dirX, dirY) || 1;
    const speed = randomBetween(config.minSpeed, config.maxSpeed);

    return {
      vx: (dirX / magnitude) * speed,
      vy: (dirY / magnitude) * speed
    };
  }

  const wrapRect = photoWrap.getBoundingClientRect();
  if (wrapRect.width <= 0 || wrapRect.height <= 0) {
    return;
  }

  function createState(badge) {
    const config = getMotionConfig(badge);
    const badgeRect = badge.getBoundingClientRect();
    const badgeWidth = badgeRect.width || 88;
    const badgeHeight = badgeRect.height || 36;
    const insetX = Math.min(14, Math.max(6, wrapRect.width * 0.03));
    const insetY = Math.min(14, Math.max(6, wrapRect.height * 0.03));
    const minX = insetX;
    const minY = insetY;
    const maxX = Math.max(minX, wrapRect.width - badgeWidth - insetX);
    const maxY = Math.max(minY, wrapRect.height - badgeHeight - insetY);
    const velocity = createVelocity(config);

    return {
      badge,
      config,
      minX,
      maxX,
      minY,
      maxY,
      x: minX + (maxX - minX) * config.startX,
      y: minY + (maxY - minY) * config.startY,
      vx: velocity.vx,
      vy: velocity.vy,
      rotation: randomBetween(-config.rangeRotate * 0.45, config.rangeRotate * 0.45),
      vr: randomBetween(-config.maxRotateSpeed, config.maxRotateSpeed),
      scale: 1
    };
  }

  const states = badges.map(createState);
  let lastTime = window.performance.now();

  function animate(now) {
    const delta = Math.min(40, now - lastTime) / 1000;
    lastTime = now;

    states.forEach((state) => {
      const { badge, config } = state;
      let hitX = 0;
      let hitY = 0;

      state.x += state.vx * delta;
      state.y += state.vy * delta;
      state.rotation += state.vr * delta;

      if (state.x <= state.minX) {
        state.x = state.minX;
        hitX = -1;
      } else if (state.x >= state.maxX) {
        state.x = state.maxX;
        hitX = 1;
      }

      if (state.y <= state.minY) {
        state.y = state.minY;
        hitY = -1;
      } else if (state.y >= state.maxY) {
        state.y = state.maxY;
        hitY = 1;
      }

      const maxTilt = config.rangeRotate;
      if (state.rotation >= maxTilt || state.rotation <= -maxTilt) {
        state.rotation = Math.max(-maxTilt, Math.min(maxTilt, state.rotation));
        state.vr *= -1;
      }

      if (hitX || hitY) {
        const nextVelocity = createVelocity(config, hitX, hitY);
        state.vx = nextVelocity.vx;
        state.vy = nextVelocity.vy;
        state.scale = 1.045;
        state.vr = randomBetween(-config.maxRotateSpeed, config.maxRotateSpeed);
      }

      state.scale += (1 - state.scale) * Math.min(1, delta * 8);

      badge.style.setProperty("--tech-float-x", `${state.x.toFixed(2)}px`);
      badge.style.setProperty("--tech-float-y", `${state.y.toFixed(2)}px`);
      badge.style.setProperty("--tech-float-rotate", `${state.rotation.toFixed(2)}deg`);
      badge.style.setProperty("--tech-float-scale", state.scale.toFixed(3));
    });

    setupFloatingTechBadges._frameId = window.requestAnimationFrame(animate);
  }

  setupFloatingTechBadges._frameId = window.requestAnimationFrame(animate);
}

setupFloatingTechBadges._frameId = 0;

function applyProjectImageFallbacks() {
  const projectImages = document.querySelectorAll("[data-project-image]");
  let fallbackIndex = 0;

  projectImages.forEach((image) => {
    const hasReadmeImage = image.getAttribute("data-has-readme-image") === "true";
    const setFallbackImage = () => {
      image.src = getFallbackImage(fallbackIndex);
      fallbackIndex += 1;
    };

    image.addEventListener(
      "error",
      () => {
        setFallbackImage();
      },
      { once: true }
    );

    if (hasReadmeImage) {
      return;
    }

    setFallbackImage();
  });
}

themeToggle.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme") || "dark";
  applyTheme(currentTheme === "dark" ? "light" : "dark");
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");
    if (!href || href === "#") {
      return;
    }

    const target = document.querySelector(href);
    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

applyTheme(getSavedTheme());
applyConfig(defaultConfig);
applyDeviceLayout();
applyProjectImageFallbacks();
setupScrollReveal();
setupScrambleRevealOnScroll();
setupHeroParallax();
setupProjectToggles();
setupActiveNavSection();
setupMobileNav();
setupFloatingTechBadges();
runHeroTitleAnimation();
runHeroSecondaryReveal();

window.addEventListener("resize", () => {
  applyDeviceLayout();
  setupFloatingTechBadges();
});

if (window.elementSdk && typeof window.elementSdk.init === "function") {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange: async (config) => {
      applyConfig(config);
      runHeroTitleAnimation();
      runHeroSecondaryReveal();
      renderIcons();
    },
    mapToCapabilities: (config) => ({
      recolorables: [
        {
          get: () => config.primary_color || defaultConfig.primary_color,
          set: (value) => {
            config.primary_color = value;
            window.elementSdk.setConfig({ primary_color: value });
          }
        },
        {
          get: () => config.secondary_color || defaultConfig.secondary_color,
          set: (value) => {
            config.secondary_color = value;
            window.elementSdk.setConfig({ secondary_color: value });
          }
        },
        {
          get: () => config.text_color || defaultConfig.text_color,
          set: (value) => {
            config.text_color = value;
            window.elementSdk.setConfig({ text_color: value });
          }
        },
        {
          get: () => config.background_color || defaultConfig.background_color,
          set: (value) => {
            config.background_color = value;
            window.elementSdk.setConfig({ background_color: value });
          }
        }
      ],
      borderables: [],
      fontEditable: {
        get: () => config.font_family || defaultConfig.font_family,
        set: (value) => {
          config.font_family = value;
          window.elementSdk.setConfig({ font_family: value });
        }
      },
      fontSizeable: {
        get: () => config.font_size || defaultConfig.font_size,
        set: (value) => {
          config.font_size = value;
          window.elementSdk.setConfig({ font_size: value });
        }
      }
    }),
    mapToEditPanelValues: (config) =>
      new Map([
        ["full_name", config.full_name || defaultConfig.full_name],
        ["professional_title", config.professional_title || defaultConfig.professional_title],
        ["bio", config.bio || defaultConfig.bio],
        ["email", config.email || defaultConfig.email],
        ["project1_title", config.project1_title || defaultConfig.project1_title],
        ["project1_desc", config.project1_desc || defaultConfig.project1_desc],
        ["project2_title", config.project2_title || defaultConfig.project2_title],
        ["project2_desc", config.project2_desc || defaultConfig.project2_desc],
        ["project3_title", config.project3_title || defaultConfig.project3_title],
        ["project3_desc", config.project3_desc || defaultConfig.project3_desc],
        ["skill1", config.skill1 || defaultConfig.skill1],
        ["skill2", config.skill2 || defaultConfig.skill2],
        ["skill3", config.skill3 || defaultConfig.skill3],
        ["skill4", config.skill4 || defaultConfig.skill4],
        ["skill5", config.skill5 || defaultConfig.skill5],
        ["skill6", config.skill6 || defaultConfig.skill6]
      ])
  });
}

renderIcons();
