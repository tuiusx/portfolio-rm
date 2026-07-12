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
  project2_title: "Rare Hunter TCG BR",
  project2_desc: "Loja virtual para cartas e produtos TCG, com catálogo, carrinho, checkout, conta do cliente e painel administrativo.",
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

const languageState = {
  pt: { label: "EN", ariaLabel: "Switch to English" },
  en: { label: "PT", ariaLabel: "Trocar para português" }
};

const interfaceCopy = {
  pt: {
    menuOpen: "Abrir menu",
    menuClose: "Fechar menu",
    themeLight: "Ativar tema claro",
    themeDark: "Ativar tema escuro",
    formReady: "Preparando o e-mail para você revisar antes de enviar.",
    formErrors: {
      name: "Informe seu nome para eu saber com quem estou falando.",
      email: "Informe um e-mail válido para eu conseguir responder.",
      message: "Escreva uma mensagem rápida sobre o projeto ou oportunidade."
    }
  },
  en: {
    menuOpen: "Open menu",
    menuClose: "Close menu",
    themeLight: "Activate light theme",
    themeDark: "Activate dark theme",
    formReady: "Preparing the e-mail so you can review it before sending.",
    formErrors: {
      name: "Add your name so I know who I am talking to.",
      email: "Add a valid e-mail so I can reply.",
      message: "Write a short message about the project or opportunity."
    }
  }
};

const englishContent = {
  ".skip-link": "Skip to content",
  '.nav-link[href="#home"]': "Home",
  '.nav-link[href="#about"]': "About",
  '.nav-link[href="#process"]': "Process",
  '.nav-link[href="#services"]': "Help",
  '.nav-link[href="#projects"]': "Projects",
  '.nav-link[href="#skills"]': "Stack",
  '.nav-link[href="#credentials"]': "Credentials",
  '.nav-link[href="#contact"]': "Contact",
  ".mobile-quick-action-primary span": "Projects",
  '.mobile-quick-action[href="#contact"] span': "Contact me",
  ".eyebrow": "Full stack developer",
  "#hero-title": "React, Node.js and interfaces designed for real products.",
  "#hero-bio": "I build clear, functional web experiences ready to grow, combining strong front-end work, organized APIs and attention to real screen usage.",
  ".hero-availability": "Available for projects, collaborations and remote opportunities.",
  "#hero-actions .button-primary": "View projects",
  "#about .section-kicker": "About me",
  "#about-heading": "Clarity to build, judgment to evolve.",
  "#about .section-heading p": "My focus is building products with solid visual structure, simple navigation and an organized technical base. I like combining thoughtful interfaces with logic that can scale.",
  ".about-card:nth-child(1) h3": "Current focus",
  ".about-card:nth-child(1) p": "Complete web projects with strong front-end work, API integration and a more professional experience.",
  ".about-card:nth-child(2) h3": "What I seek",
  ".about-card:nth-child(2) p": "Freelance work, roles and collaborations where I can deliver real value and keep evolving quickly.",
  ".about-card:nth-child(3) h3": "How I build",
  ".about-card:nth-child(3) p": "I start with structure, think through real screen usage and then refine visuals, interaction and consistency.",
  "#process .section-kicker": "How I work",
  "#process-heading": "A simple process to deliver with clarity.",
  "#process .section-heading p": "I organize every project into short steps to reduce rework, keep communication clear and turn what was agreed into real delivery.",
  ".process-card:nth-child(1) h3": "Quick diagnosis",
  ".process-card:nth-child(1) p": "I map goals, context and priorities before starting from the wrong place.",
  ".process-card:nth-child(2) h3": "Solution structure",
  ".process-card:nth-child(2) p": "I define screen flow, components and technical base before speeding up implementation.",
  ".process-card:nth-child(3) h3": "Iterative implementation",
  ".process-card:nth-child(3) p": "I deliver in short blocks with continuous validation to keep quality and rhythm.",
  ".process-card:nth-child(4) h3": "Refinement and launch",
  ".process-card:nth-child(4) p": "I review UX, accessibility and performance before publishing the final version.",
  "#services .section-kicker": "How I can help",
  "#services-heading": "From idea to published screen.",
  "#services .section-heading p": "I can help create, improve or organize parts of your product with a focus on clarity, usability and real delivery.",
  ".service-card:nth-child(1) h3": "Landing pages and portfolios",
  ".service-card:nth-child(1) p": "Responsive interfaces that are quick to understand and have a clear call to action.",
  ".service-card:nth-child(2) h3": "Web systems and e-commerce",
  ".service-card:nth-child(2) p": "Catalog, account, admin dashboard and purchase journeys organized with more clarity.",
  ".service-card:nth-child(3) h3": "APIs and integrations",
  ".service-card:nth-child(3) p": "Back-end, authentication, data consumption and integration between front-end and services.",
  ".service-card:nth-child(4) h3": "Fixes and improvements",
  ".service-card:nth-child(4) p": "UX, responsiveness, performance and small bug fixes that block the experience.",
  "#projects .section-kicker": "Featured projects",
  "#projects-heading": "Projects with real delivery.",
  "#projects .section-heading p": "I gathered projects from my GitHub to show how I think, build and deliver clearer solutions.",
  ".featured-project .section-kicker": "Featured project",
  "#featured-project-title": "Rare Hunter TCG BR",
  ".featured-project-copy > p": "E-commerce for TCG cards and products with catalog, cart, checkout, customer area, admin dashboard and a foundation ready for real operation.",
  ".featured-impact span:nth-child(1)": "<strong>Problem:</strong> organize TCG product sales with a reliable flow.",
  ".featured-impact span:nth-child(2)": "<strong>Solution:</strong> a Next.js store with purchase journey and administration.",
  ".featured-impact span:nth-child(3)": "<strong>Result:</strong> a stronger project to demonstrate product thinking, UI and architecture.",
  ".featured-links a:nth-of-type(1)": "Open site",
  ".featured-links a:nth-of-type(2)": "View repository",
  ".featured-links a:nth-of-type(3)": "Download brief",
  ".project-detail-link": "Project details",
  "#project1-desc": "Academic Django project focused on organizing courses, subjects, news and student access in a more structured web experience.",
  "#project2-desc": "Online store for TCG cards and products, with catalog, cart, checkout, customer account and admin dashboard.",
  "#project3-desc": "Full stack application connecting NGOs with people interested in helping, combining web panel, API and mobile experience.",
  ".project-card:nth-child(1) .status-badge": "Academic project",
  ".project-card:nth-child(1) .project-signals span:nth-child(1)": "Open source",
  ".project-card:nth-child(1) .project-signals span:nth-child(2)": "Django",
  ".project-card:nth-child(1) .project-signals span:nth-child(3)": "Academic",
  ".project-card:nth-child(1) .project-proof": "<strong>Shows:</strong> academic content organization, Django structure and flow-oriented navigation.",
  ".project-card:nth-child(1) .project-impact span:nth-child(1)": "<strong>Problem:</strong> centralize courses, news and student access.",
  ".project-card:nth-child(1) .project-impact span:nth-child(2)": "<strong>Solution:</strong> Django web structure with content-oriented navigation.",
  ".project-card:nth-child(1) .project-impact span:nth-child(3)": "<strong>Result:</strong> organized academic base that is easier to evolve.",
  ".project-card:nth-child(1) .project-links a": "View repository",
  ".project-card:nth-child(2) .status-badge": "E-commerce",
  ".project-card:nth-child(2) .project-signals span:nth-child(1)": "Live deploy",
  ".project-card:nth-child(2) .project-signals span:nth-child(2)": "PDF available",
  ".project-card:nth-child(2) .project-signals span:nth-child(3)": "Real project",
  ".project-card:nth-child(2) .project-proof": "<strong>Shows:</strong> complete product building with front-end, authentication, operation and purchase flow.",
  ".project-card:nth-child(2) .project-impact span:nth-child(1)": "<strong>Problem:</strong> sell TCG products with a clear catalog and reliable journey.",
  ".project-card:nth-child(2) .project-impact span:nth-child(2)": "<strong>Solution:</strong> Next.js, Supabase, cart, checkout and admin area.",
  ".project-card:nth-child(2) .project-impact span:nth-child(3)": "<strong>Result:</strong> the strongest portfolio project to demonstrate a real product.",
  ".project-card:nth-child(2) .project-links a:nth-of-type(1)": "Open site",
  ".project-card:nth-child(2) .project-links a:nth-of-type(2)": "View repository",
  ".project-card:nth-child(2) .project-links a:nth-of-type(3)": "Download brief",
  ".project-card:nth-child(3) .status-badge": "Full stack",
  ".project-card:nth-child(3) .project-signals span:nth-child(1)": "Open source",
  ".project-card:nth-child(3) .project-signals span:nth-child(2)": "Web + Mobile",
  ".project-card:nth-child(3) .project-signals span:nth-child(3)": "REST API",
  ".project-card:nth-child(3) .project-proof": "<strong>Shows:</strong> web, REST API and mobile integration in a solution with social purpose.",
  ".project-card:nth-child(3) .project-impact span:nth-child(1)": "<strong>Problem:</strong> connect NGOs with people interested in helping.",
  ".project-card:nth-child(3) .project-impact span:nth-child(2)": "<strong>Solution:</strong> REST API with connected web and mobile interfaces.",
  ".project-card:nth-child(3) .project-impact span:nth-child(3)": "<strong>Result:</strong> full stack integration example with social purpose.",
  ".project-card:nth-child(3) .project-links a": "View repository",
  "#skills .section-kicker": "Stack and process",
  "#skills-heading": "Stack that supports my work.",
  "#contact .section-kicker": "Contact",
  "#contact-heading": "Want to build something with me?",
  "#contact-copy": "Tell me the goal, timeline and context. I will answer clearly how I can help, whether it is freelance work, collaboration or a remote opportunity.",
  "#project-modal-kicker": "Project details",
  ".project-modal-grid > div:nth-child(1) strong": "My role",
  ".project-modal-grid > div:nth-child(2) strong": "Problem",
  ".project-modal-grid > div:nth-child(3) strong": "Solution",
  ".project-modal-grid > div:nth-child(4) strong": "Stack",
  ".project-modal-grid > div:nth-child(5) strong": "Result",
  '.contact-form label:nth-child(1) span': "Your name",
  '.contact-form label:nth-child(2) span': "Your e-mail",
  '.contact-form label:nth-child(3) span': "Message",
  "#contact-helper": "The button prepares an e-mail in your default app so you can review it before sending.",
  ".contact-submit": '<i data-lucide="send"></i> Prepare e-mail',
  "#email-text": "Send e-mail",
  "#footer-text": "© 2026 Ricardo Martins. Portfolio built to show projects, process and identity."
};

const englishAttributes = {
  ".mobile-quick-actions": { "aria-label": "Quick portfolio actions" },
  '.contact-form input[name="name"]': { placeholder: "What should I call you?" },
  '.contact-form input[name="email"]': { placeholder: "you@email.com" },
  ".contact-form textarea": { placeholder: "Tell me briefly about the project or opportunity." },
  ".project-modal-close": { "aria-label": "Close project details" }
};

const projectDetails = {
  projetolms: {
    pt: {
      title: "ProjetoLMS",
      summary: "Projeto acadêmico em Django para organizar cursos, disciplinas, notícias e acesso de alunos.",
      role: "Estruturei a aplicação, organizei rotas, telas e base de dados para tornar o fluxo acadêmico mais claro.",
      problem: "Conteúdos acadêmicos costumam ficar espalhados, dificultando navegação e manutenção.",
      solution: "Criei uma estrutura web com Django, separando informação, navegação e fluxo de acesso.",
      stack: "Python, Django, SQL, HTML, CSS e organização de rotas.",
      result: "Uma base clara para gestão acadêmica, com foco em estrutura e evolução do sistema.",
      links: [{ label: "Ver repositório", href: "https://github.com/tuiusx/ProjetoLMS" }]
    },
    en: {
      title: "ProjetoLMS",
      summary: "Academic Django project to organize courses, subjects, news and student access.",
      role: "I structured the application, routes, screens and database foundation to make the academic flow clearer.",
      problem: "Academic content is often scattered, making navigation and maintenance harder.",
      solution: "I built a Django web structure separating information, navigation and access flow.",
      stack: "Python, Django, SQL, HTML, CSS and route organization.",
      result: "A clear base for academic management, focused on structure and future evolution.",
      links: [{ label: "View repository", href: "https://github.com/tuiusx/ProjetoLMS" }]
    }
  },
  "rare-hunter": {
    pt: {
      title: "Rare Hunter TCG BR",
      summary: "E-commerce para cartas e produtos TCG com catálogo, carrinho, checkout, conta do cliente e painel administrativo.",
      role: "Atuei no produto completo: interface, fluxo de compra, autenticação, painel administrativo e base técnica.",
      problem: "A loja precisava apresentar produtos de nicho com clareza e sustentar uma jornada de compra confiável.",
      solution: "Desenvolvi uma aplicação em Next.js com catálogo, fluxo de compra, autenticação, administração e base para integrações reais.",
      stack: "Next.js, React, TypeScript, Supabase, Vitest, Playwright e arquitetura de e-commerce.",
      result: "Projeto mais completo do portfólio para demonstrar produto real, UI, operação e decisões técnicas.",
      links: [
        { label: "Acessar site", href: "https://rarehuntertcgbr.com.br" },
        { label: "Ver repositório", href: "https://github.com/tuiusx/rarehuntertcgbr" },
        { label: "Baixar apresentação", href: "assets/downloads/rare-hunter-projeto.pdf", download: true }
      ]
    },
    en: {
      title: "Rare Hunter TCG BR",
      summary: "E-commerce for TCG cards and products with catalog, cart, checkout, customer account and admin dashboard.",
      role: "I worked on the full product: interface, purchase flow, authentication, admin dashboard and technical foundation.",
      problem: "The store needed to present niche products clearly and support a reliable purchase journey.",
      solution: "I developed a Next.js application with catalog, purchase flow, authentication, administration and a foundation for real integrations.",
      stack: "Next.js, React, TypeScript, Supabase, Vitest, Playwright and e-commerce architecture.",
      result: "The strongest portfolio project to demonstrate a real product, UI, operation and technical decisions.",
      links: [
        { label: "Open site", href: "https://rarehuntertcgbr.com.br" },
        { label: "View repository", href: "https://github.com/tuiusx/rarehuntertcgbr" },
        { label: "Download brief", href: "assets/downloads/rare-hunter-projeto.pdf", download: true }
      ]
    }
  },
  "be-the-hero": {
    pt: {
      title: "be-the-hero",
      summary: "Aplicação full stack que conecta ONGs a pessoas interessadas em ajudar.",
      role: "Organizei a integração entre API, painel web e experiência mobile, mantendo o fluxo consistente entre telas.",
      problem: "ONGs precisam divulgar casos de forma simples para alcançar pessoas dispostas a contribuir.",
      solution: "Estruturei API REST, painel web e experiência mobile conectados em um fluxo único.",
      stack: "Node.js, Express, React, React Native, SQLite e API REST.",
      result: "Exemplo claro de integração full stack com proposta social e múltiplas interfaces.",
      links: [{ label: "Ver repositório", href: "https://github.com/tuiusx/be-the-hero" }]
    },
    en: {
      title: "be-the-hero",
      summary: "Full stack application connecting NGOs with people interested in helping.",
      role: "I organized the integration between API, web panel and mobile experience while keeping the flow consistent across screens.",
      problem: "NGOs need a simple way to publish cases and reach people willing to contribute.",
      solution: "I structured a REST API, web panel and mobile experience connected in one flow.",
      stack: "Node.js, Express, React, React Native, SQLite and REST API.",
      result: "A clear example of full stack integration with social purpose and multiple interfaces.",
      links: [{ label: "View repository", href: "https://github.com/tuiusx/be-the-hero" }]
    }
  }
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
const languageToggle = document.getElementById("language-toggle");
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

  const shouldUseCollapsedNav = deviceType === "mobile" || deviceType === "tablet";

  if (!shouldUseCollapsedNav) {
    setMobileMenuState(false);
    return;
  }

  setMobileMenuState(siteShell?.classList.contains("is-menu-open") || false);
}

function getSavedTheme() {
  return localStorage.getItem("portfolio-theme") || "dark";
}

function getSavedLanguage() {
  return localStorage.getItem("portfolio-language") || "pt";
}

function getCurrentLanguage() {
  return body.getAttribute("data-language") === "en" ? "en" : "pt";
}

function getInterfaceCopy() {
  return interfaceCopy[getCurrentLanguage()];
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
  const deviceType = body.getAttribute("data-device");
  return deviceType === "mobile" || deviceType === "tablet";
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
  navToggle.setAttribute("aria-label", shouldOpen ? getInterfaceCopy().menuClose : getInterfaceCopy().menuOpen);

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
    nextTheme === "dark" ? getInterfaceCopy().themeLight : getInterfaceCopy().themeDark
  );
  localStorage.setItem("portfolio-theme", nextTheme);
  renderIcons();
}

function updateToggleLabels() {
  const language = body.getAttribute("data-language") || "pt";
  const isEnglish = language === "en";

  document.querySelectorAll("[data-project-toggle], [data-credential-toggle]").forEach((button) => {
    const card = button.closest(".project-card, .credential-card");
    const isExpanded = card?.classList.contains("is-expanded") || false;
    const labels = isEnglish
      ? { closed: "See more", open: "Show less" }
      : { closed: "Ver mais", open: "Ver menos" };

    button.textContent = isExpanded ? labels.open : labels.closed;
  });
}

function applyLanguage(language) {
  const nextLanguage = languageState[language] ? language : "pt";
  const isEnglish = nextLanguage === "en";

  document.documentElement.lang = isEnglish ? "en" : "pt-BR";
  body.setAttribute("data-language", nextLanguage);

  Object.entries(englishContent).forEach(([selector, englishValue]) => {
    document.querySelectorAll(selector).forEach((element) => {
      if (!element.dataset.langPtHtml) {
        element.dataset.langPtHtml = element.innerHTML;
      }

      element.innerHTML = isEnglish ? englishValue : element.dataset.langPtHtml;
    });
  });

  Object.entries(englishAttributes).forEach(([selector, attributes]) => {
    document.querySelectorAll(selector).forEach((element) => {
      Object.entries(attributes).forEach(([attribute, englishValue]) => {
        const normalizedAttribute = attribute.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
        const storageKey = `langPt${normalizedAttribute.charAt(0).toUpperCase()}${normalizedAttribute.slice(1)}`;
        if (!element.dataset[storageKey]) {
          element.dataset[storageKey] = element.getAttribute(attribute) || "";
        }

        element.setAttribute(attribute, isEnglish ? englishValue : element.dataset[storageKey]);
      });
    });
  });

  if (languageToggle) {
    languageToggle.textContent = languageState[nextLanguage].label;
    languageToggle.setAttribute("aria-label", languageState[nextLanguage].ariaLabel);
    languageToggle.setAttribute("aria-pressed", String(isEnglish));
  }

  if (navToggle) {
    const isMenuOpen = siteShell?.classList.contains("is-menu-open") || false;
    navToggle.setAttribute("aria-label", isMenuOpen ? getInterfaceCopy().menuClose : getInterfaceCopy().menuOpen);
  }

  if (themeToggle) {
    const currentTheme = body.getAttribute("data-theme") || "dark";
    themeToggle.setAttribute(
      "aria-label",
      currentTheme === "dark" ? getInterfaceCopy().themeLight : getInterfaceCopy().themeDark
    );
  }

  localStorage.setItem("portfolio-language", nextLanguage);
  updateToggleLabels();
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
      updateToggleLabels();
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
      updateToggleLabels();
    });
  });
}

function setupProjectDetails() {
  const modal = document.querySelector("[data-project-modal]");
  if (!modal) {
    return;
  }

  const title = document.getElementById("project-modal-title");
  const summary = document.getElementById("project-modal-summary");
  const role = document.getElementById("project-modal-role");
  const problem = document.getElementById("project-modal-problem");
  const solution = document.getElementById("project-modal-solution");
  const stack = document.getElementById("project-modal-stack");
  const result = document.getElementById("project-modal-result");
  const links = document.getElementById("project-modal-links");
  const closeButton = modal.querySelector(".project-modal-close");
  let lastFocusedElement = null;

  const focusableSelector = [
    "a[href]",
    "button:not([disabled])",
    "textarea:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    '[tabindex]:not([tabindex="-1"])'
  ].join(", ");

  function closeModal() {
    modal.hidden = true;
    body.classList.remove("modal-open");
    lastFocusedElement?.focus?.();
  }

  function openModal(projectKey) {
    const language = getCurrentLanguage();
    const detail = projectDetails[projectKey]?.[language];
    if (!detail || !title || !summary || !role || !problem || !solution || !stack || !result || !links) {
      return;
    }

    lastFocusedElement = document.activeElement;
    title.textContent = detail.title;
    summary.textContent = detail.summary;
    role.textContent = detail.role;
    problem.textContent = detail.problem;
    solution.textContent = detail.solution;
    stack.textContent = detail.stack;
    result.textContent = detail.result;
    links.innerHTML = "";

    detail.links.forEach((link, index) => {
      const anchor = document.createElement("a");
      anchor.href = link.href;
      anchor.textContent = link.label;
      anchor.className = index === 0 ? "project-action-primary" : "project-action-secondary";

      if (link.download) {
        anchor.setAttribute("download", "");
      } else {
        anchor.target = "_blank";
        anchor.rel = "noreferrer";
      }

      links.appendChild(anchor);
    });

    modal.hidden = false;
    body.classList.add("modal-open");
    closeButton?.focus();
  }

  function trapFocus(event) {
    if (event.key !== "Tab" || modal.hidden) {
      return;
    }

    const focusableElements = Array.from(modal.querySelectorAll(focusableSelector))
      .filter((element) => !element.hasAttribute("disabled") && element.offsetParent !== null);

    if (!focusableElements.length) {
      event.preventDefault();
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  document.querySelectorAll("[data-project-detail]").forEach((button) => {
    button.addEventListener("click", () => {
      openModal(button.getAttribute("data-project-detail"));
    });
  });

  modal.querySelectorAll("[data-project-modal-close]").forEach((button) => {
    button.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeModal();
      return;
    }

    trapFocus(event);
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

function setupContactForm() {
  const contactForm = document.querySelector("[data-contact-form]");
  if (!contactForm) {
    return;
  }

  const feedback = contactForm.querySelector("[data-contact-feedback]");
  const fields = {
    name: contactForm.querySelector('[name="name"]'),
    email: contactForm.querySelector('[name="email"]'),
    message: contactForm.querySelector('[name="message"]')
  };

  function setFieldError(fieldName, message = "") {
    const field = fields[fieldName];
    const errorElement = contactForm.querySelector(`[data-field-error="${fieldName}"]`);

    if (!field || !errorElement) {
      return;
    }

    field.setAttribute("aria-invalid", String(Boolean(message)));
    errorElement.textContent = message;
  }

  function setFeedback(message = "", type = "neutral") {
    if (!feedback) {
      return;
    }

    feedback.textContent = message;
    feedback.dataset.feedbackType = type;
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function getFieldError(fieldName, value) {
    const copy = getInterfaceCopy();

    if (fieldName === "name" && !value) {
      return copy.formErrors.name;
    }

    if (fieldName === "email" && !isValidEmail(value)) {
      return copy.formErrors.email;
    }

    if (fieldName === "message" && !value) {
      return copy.formErrors.message;
    }

    return "";
  }

  function validateForm(values) {
    const errors = {};

    Object.entries(values).forEach(([fieldName, value]) => {
      const error = getFieldError(fieldName, value);
      if (error) {
        errors[fieldName] = error;
      }
    });

    Object.keys(fields).forEach((fieldName) => {
      setFieldError(fieldName, errors[fieldName] || "");
    });

    return errors;
  }

  Object.entries(fields).forEach(([fieldName, field]) => {
    field?.addEventListener("blur", () => {
      const error = getFieldError(fieldName, String(field.value || "").trim());
      setFieldError(fieldName, error);
    });
  });

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const errors = validateForm({ name, email, message });

    if (Object.keys(errors).length) {
      setFeedback("", "error");
      fields[Object.keys(errors)[0]]?.focus();
      return;
    }

    const subject = encodeURIComponent(`Contato pelo portfólio - ${name || "novo projeto"}`);
    const body = encodeURIComponent(
      [
        `Nome: ${name}`,
        `E-mail: ${email}`,
        "",
        "Mensagem:",
        message
      ].join("\n")
    );

    setFeedback(getInterfaceCopy().formReady, "success");
    window.setTimeout(() => {
      window.location.href = `mailto:${defaultConfig.email}?subject=${subject}&body=${body}`;
    }, 350);
  });
}

function setupSimpleAnalytics() {
  const storageKey = "portfolio-analytics-events";
  const trackedSelector = [
    ".button",
    ".project-links a",
    ".project-detail-link",
    ".contact-submit",
    ".mobile-quick-action",
    '.nav-link[href="#contact"]'
  ].join(", ");

  function readEvents() {
    try {
      return JSON.parse(localStorage.getItem(storageKey) || "[]");
    } catch {
      return [];
    }
  }

  function writeEvents(events) {
    localStorage.setItem(storageKey, JSON.stringify(events.slice(-120)));
  }

  function getEventName(target) {
    if (target.classList.contains("project-detail-link")) {
      return `project_detail:${target.getAttribute("data-project-detail") || "unknown"}`;
    }

    if (target.classList.contains("contact-submit")) {
      return "contact_form:prepare_email";
    }

    if (target instanceof HTMLAnchorElement) {
      const href = target.getAttribute("href") || "";
      if (href.includes("rare-hunter-projeto.pdf")) {
        return "download:rare_hunter_brief";
      }
      if (href.includes("rarehuntertcgbr.com.br")) {
        return "project_site:rare_hunter";
      }
      if (href.includes("github.com")) {
        return "outbound:github";
      }
      if (href.includes("linkedin.com")) {
        return "outbound:linkedin";
      }
      if (href === "#contact") {
        return "navigation:contact";
      }
      if (href.startsWith("#")) {
        return `navigation:${href.slice(1)}`;
      }
    }

    return "interaction:click";
  }

  function recordEvent(target) {
    const event = {
      name: getEventName(target),
      label: target.textContent.trim().replace(/\s+/g, " ").slice(0, 80),
      href: target instanceof HTMLAnchorElement ? target.href : "",
      path: window.location.pathname,
      language: body.getAttribute("data-language") || "pt",
      theme: body.getAttribute("data-theme") || "dark",
      createdAt: new Date().toISOString()
    };

    const events = readEvents();
    events.push(event);
    writeEvents(events);

    const endpoint = window.PORTFOLIO_ANALYTICS_ENDPOINT;
    if (endpoint && navigator.sendBeacon) {
      navigator.sendBeacon(endpoint, JSON.stringify(event));
    }
  }

  document.addEventListener("click", (event) => {
    const target = event.target.closest(trackedSelector);
    if (target) {
      recordEvent(target);
    }
  });

  window.portfolioAnalytics = {
    getEvents: readEvents,
    clear: () => localStorage.removeItem(storageKey),
    getSummary: () =>
      readEvents().reduce((summary, event) => {
        summary[event.name] = (summary[event.name] || 0) + 1;
        return summary;
      }, {})
  };
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

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const currentLanguage = body.getAttribute("data-language") || "pt";
    applyLanguage(currentLanguage === "pt" ? "en" : "pt");
  });
}

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
applyLanguage(getSavedLanguage());
applyDeviceLayout();
applyProjectImageFallbacks();
setupScrollReveal();
setupScrambleRevealOnScroll();
setupHeroParallax();
setupProjectToggles();
setupProjectDetails();
setupActiveNavSection();
setupMobileNav();
setupContactForm();
setupSimpleAnalytics();
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
      applyLanguage(getSavedLanguage());
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
