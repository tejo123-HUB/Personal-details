// ============================================================
// DATA — edit these arrays to add/update projects
// ============================================================

const OWN_REPOS = [
  {
    name: "sentinelpay",
    desc: "Real-time fraud-detection API for micro-transactions — rule-based detectors, a money-laundering graph engine, and a Vertex AI ML layer.",
    lang: "JavaScript",
    tags: ["Node.js", "Fraud Detection", "Vertex AI", "Graph Engine"],
    url: "https://github.com/tejo123-HUB/sentinelpay"
  },
  {
    name: "wifi-signal-mapper",
    desc: "Campus WiFi signal strength mapping tool built with Node.js, Express, and SQLite.",
    lang: "JavaScript",
    tags: ["Node.js", "Express", "SQLite"],
    url: "https://github.com/tejo123-HUB/wifi-signal-mapper"
  },
  {
    // Description/tags are a best guess — repo has no description set on GitHub yet, see README.
    name: "CSE-D-Attendance",
    desc: "Tooling for organizing and tracking CSE-D section roll numbers and attendance records.",
    lang: "JavaScript",
    tags: ["JavaScript", "Automation"],
    url: "https://github.com/tejo123-HUB/CSE-D-Attendance"
  },
  {
    // Description/tags are a best guess — repo has no description set on GitHub yet, see README.
    name: "Google--honours-attendance",
    desc: "Attendance and roster tooling for the Google Honours section.",
    lang: "JavaScript",
    tags: ["JavaScript", "Automation"],
    url: "https://github.com/tejo123-HUB/Google--honours-attendance"
  },
  {
    // Description/tags are a best guess — repo has no description set on GitHub yet, see README.
    name: "codealpha_tasks",
    desc: "Task submissions completed for the CodeAlpha internship program.",
    lang: "CSS",
    tags: ["CSS", "Internship"],
    url: "https://github.com/tejo123-HUB/codealpha_tasks"
  },
  {
    name: "Simple-Calculator",
    desc: "A simple calculator built with vanilla JavaScript.",
    lang: "JavaScript",
    tags: ["JavaScript", "Vanilla JS"],
    url: "https://github.com/tejo123-HUB/Simple-Calculator"
  },
  {
    name: "Image-Gallery",
    desc: "A responsive image gallery layout project.",
    lang: "CSS",
    tags: ["CSS", "Responsive Design"],
    url: "https://github.com/tejo123-HUB/Image-Gallery"
  },
  {
    // Description/tags are a best guess — repo has no description set on GitHub yet, see README.
    name: "NTR-HBD",
    desc: "A front-end web project — see the repository for details.",
    lang: "JavaScript",
    tags: ["JavaScript", "Front-end"],
    url: "https://github.com/tejo123-HUB/NTR-HBD"
  },
  {
    name: "Portfolio",
    desc: "An earlier portfolio site build — superseded by this site.",
    lang: "CSS",
    tags: ["CSS", "Archived"],
    url: "https://github.com/tejo123-HUB/Portfolio"
  }
];

const FORKED_REPOS = [
  {
    name: "AgentX",
    upstream: "browser-use/browser-use",
    upstreamUrl: "https://github.com/browser-use/browser-use",
    desc: "Contribution to browser-use — an open-source project that makes websites accessible to AI agents for task automation.",
    tags: ["Python", "AI Agents"],
    url: "https://github.com/tejo123-HUB/AgentX"
  },
  {
    name: "AI-dev-assistant-tejo",
    upstream: "imDarshanGK/AI-dev-assistant",
    upstreamUrl: "https://github.com/imDarshanGK/AI-dev-assistant",
    desc: "GSSoC 2026 contribution to AI-dev-assistant — an AI-powered code analysis tool for bug detection across Python, JS, TS, Java, and C++.",
    program: "GSSoC 2026",
    tags: ["Static Analysis", "Multi-language"],
    url: "https://github.com/tejo123-HUB/AI-dev-assistant-tejo"
  },
  {
    name: "UltimateHealth",
    upstream: "SB2318/UltimateHealth",
    upstreamUrl: "https://github.com/SB2318/UltimateHealth",
    desc: "Contribution to UltimateHealth — an open-source health library and article platform built with React Native, Node.js, and MongoDB.",
    tags: ["React Native", "Node.js", "MongoDB"],
    url: "https://github.com/tejo123-HUB/UltimateHealth"
  },
  {
    name: "story-spark-ai",
    upstream: "ronisarkarexe/story-spark-ai",
    upstreamUrl: "https://github.com/ronisarkarexe/story-spark-ai",
    desc: "Contribution to StorySparkAI — a platform for generating and sharing multiple story variations from a single prompt.",
    tags: ["GenAI", "Storytelling"],
    url: "https://github.com/tejo123-HUB/story-spark-ai"
  },
  {
    name: "Checkora-tejo",
    upstream: "Checkora/Checkora",
    upstreamUrl: "https://github.com/Checkora/Checkora",
    desc: "Contribution to Checkora — a chess platform with an AI opponent using minimax and alpha-beta pruning, built on Django and a C++ engine.",
    tags: ["Django", "C++", "Game AI"],
    url: "https://github.com/tejo123-HUB/Checkora-tejo"
  },
  {
    name: "Pesimens-app",
    upstream: "Darshanpawar7/Pesimens-app",
    upstreamUrl: "https://github.com/Darshanpawar7/Pesimens-app",
    desc: "Contribution to Pesimens-app, an existing application project.",
    tags: ["App"],
    url: "https://github.com/tejo123-HUB/Pesimens-app"
  },
  {
    name: "ToDoList",
    upstream: "Ruthvik-Anne/ToDoList",
    upstreamUrl: "https://github.com/Ruthvik-Anne/ToDoList",
    desc: "Contribution to a Flask to-do app originally built by teammate Ruthvik Anne.",
    tags: ["Flask", "Python"],
    url: "https://github.com/tejo123-HUB/ToDoList"
  }
];

// ============================================================
// RENDER REPO GRID
// ============================================================
function renderRepos(list = OWN_REPOS, animate = true) {
  const grid = document.getElementById("repoGrid");
  if (!grid) return;
  const revealClass = animate ? " reveal" : "";
  grid.innerHTML = list.map(repo => `
    <a class="repo-card${revealClass}" href="${repo.url}" target="_blank" rel="noopener" data-repo="${repo.name}">
      <div class="repo-top">
        <span class="repo-name">${repo.name}</span>
        <span class="repo-lang"><span class="lang-dot"></span>${repo.lang}</span>
      </div>
      <p class="repo-desc">${repo.desc}</p>
      <div class="repo-tags">${(repo.tags || []).map(t => `<span class="tag-chip">${t}</span>`).join("")}</div>
      <div class="repo-footer">
        <span class="repo-stats" data-repo="${repo.name}"></span>
        <span class="repo-link">View repository →</span>
      </div>
    </a>
  `).join("");
  applyLiveRepoStats();
}

// ============================================================
// LIVE PER-REPO STATS (stars / last updated — populated from the
// same GitHub API response loadGitHubStats() already fetches)
// ============================================================
let liveRepoStatsMap = null;

function applyLiveRepoStats() {
  if (!liveRepoStatsMap) return;
  document.querySelectorAll(".repo-stats[data-repo]").forEach(el => {
    const stats = liveRepoStatsMap.get(el.dataset.repo);
    if (!stats) return;
    const updated = new Date(stats.pushedAt).toLocaleDateString("en-IN", { year: "numeric", month: "short" });
    const starText = stats.stars > 0 ? `★ ${stats.stars} · ` : "";
    el.textContent = `${starText}updated ${updated}`;
  });
}

// ============================================================
// REPO FILTER CHIPS + SORT CONTROL
// ============================================================
function setupRepoFilters() {
  const filterWrap = document.getElementById("repoFilters");
  const sortSelect = document.getElementById("repoSort");
  if (!filterWrap) return;

  const allTags = [...new Set(OWN_REPOS.flatMap(r => r.tags || []))].sort();
  const tags = ["All", ...allTags];
  let activeTag = "All";

  filterWrap.innerHTML = tags.map(t =>
    `<button type="button" class="filter-chip${t === "All" ? " active" : ""}" data-tag="${t}">${t}</button>`
  ).join("");

  function applyFilter() {
    document.querySelectorAll(".repo-card").forEach(card => {
      const repo = OWN_REPOS.find(r => r.name === card.dataset.repo);
      const matches = activeTag === "All" || (repo && repo.tags && repo.tags.includes(activeTag));
      card.classList.toggle("is-hidden", !matches);
    });
  }

  filterWrap.querySelectorAll(".filter-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      activeTag = chip.dataset.tag;
      filterWrap.querySelectorAll(".filter-chip").forEach(c => c.classList.toggle("active", c === chip));
      applyFilter();
    });
  });

  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      const mode = sortSelect.value;
      const sorted = [...OWN_REPOS];
      if (mode === "az") {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
      } else if (mode === "stars") {
        sorted.sort((a, b) => {
          const sa = liveRepoStatsMap?.get(a.name)?.stars ?? -1;
          const sb = liveRepoStatsMap?.get(b.name)?.stars ?? -1;
          return sb - sa;
        });
      } else if (mode === "newest") {
        sorted.sort((a, b) => {
          const da = liveRepoStatsMap?.get(a.name)?.pushedAt ?? "";
          const db = liveRepoStatsMap?.get(b.name)?.pushedAt ?? "";
          return db.localeCompare(da);
        });
      }
      renderRepos(sorted, false);
      applyFilter();
    });
  }
}

// ============================================================
// RENDER CONTRIBUTIONS / FORKS
// ============================================================
function renderContributions() {
  const list = document.getElementById("contribList");
  if (!list) return;
  list.innerHTML = FORKED_REPOS.map(repo => `
    <a class="contrib-item reveal" href="${repo.url}" target="_blank" rel="noopener">
      <span class="contrib-name">
        ${repo.name}
        <span class="fork-badge${repo.program ? " fork-badge-program" : ""}">${repo.program || "Contribution"}</span>
      </span>
      <span class="contrib-desc">${repo.desc}</span>
      <span class="contrib-upstream">from ${repo.upstream}</span>
    </a>
  `).join("");
}

// ============================================================
// HERO TERMINAL TYPE-ON EFFECT
// ============================================================
function bootType() {
  const target = document.getElementById("typeTarget");
  if (!target) return;
  const phrases = [
    "whoami",
    "cat interests.txt // security, iot, fraud-detection",
    "status --check // shipping"
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = phrases[phraseIndex];

    if (!deleting) {
      target.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
    } else {
      target.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }
    setTimeout(tick, deleting ? 30 : 55);
  }
  tick();
}

// ============================================================
// THEME TOGGLE (persisted, respects system preference)
// ============================================================
function setupTheme() {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const stored = localStorage.getItem("tm-theme");
  // Light is the default appearance regardless of OS preference — visitors opt into dark via the toggle.
  const initial = stored || "light";
  if (initial === "dark") root.setAttribute("data-theme", "dark");

  if (!toggle) return;
  toggle.addEventListener("click", () => {
    const isDark = root.getAttribute("data-theme") === "dark";
    if (isDark) {
      root.removeAttribute("data-theme");
      localStorage.setItem("tm-theme", "light");
    } else {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("tm-theme", "dark");
    }
  });
}

// ============================================================
// LIVE GITHUB STATS (public API, no auth — graceful fallback on failure/rate limit)
// ============================================================
async function loadGitHubStats() {
  const repoEl = document.getElementById("statRepos");
  try {
    const res = await fetch("https://api.github.com/users/tejo123-HUB/repos?per_page=100");
    if (!res.ok) throw new Error("rate limited or unavailable");
    const repos = await res.json();
    if (!Array.isArray(repos)) throw new Error("unexpected response");

    const totalRepos = repos.length;
    if (repoEl) repoEl.textContent = totalRepos;

    liveRepoStatsMap = new Map(repos.map(r => [r.name, {
      stars: r.stargazers_count,
      forks: r.forks_count,
      pushedAt: r.pushed_at
    }]));
    applyLiveRepoStats();
  } catch (err) {
    // Silent fallback — static value already in the HTML stays as-is.
  }
}

// ============================================================
// SCROLL REVEAL (IntersectionObserver)
// ============================================================
function setupScrollReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  items.forEach(el => observer.observe(el));
}

// ============================================================
// COMMAND PALETTE (Ctrl/Cmd + K)
// ============================================================
function setupCommandPalette() {
  const overlay = document.getElementById("cmdkOverlay");
  const input = document.getElementById("cmdkInput");
  const list = document.getElementById("cmdkList");
  const trigger = document.getElementById("cmdkTrigger");
  const shortcutLabel = document.getElementById("cmdkShortcutLabel");
  if (!overlay || !input || !list || !trigger) return;

  const isMac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
  if (shortcutLabel) shortcutLabel.textContent = isMac ? "⌘ K" : "Ctrl K";

  const staticCommands = [
    { label: "About", hint: "Field notes", action: () => scrollToId("about") },
    { label: "Background", hint: "Education & credentials", action: () => scrollToId("background") },
    { label: "Builds on GitHub", hint: "Original repositories", action: () => scrollToId("projects") },
    { label: "Contributions", hint: "Open-source contributions", action: () => scrollToId("contrib") },
    { label: "Toolchain", hint: "Languages, stack, security", action: () => scrollToId("skills") },
    { label: "Contact", hint: "Email, GitHub, LinkedIn", action: () => scrollToId("contact") },
    { label: "Open GitHub profile", hint: "github.com/tejo123-HUB", action: () => openUrl("https://github.com/tejo123-HUB") },
    { label: "Open LinkedIn", hint: "linkedin.com/in/tejo-medasani", action: () => openUrl("https://www.linkedin.com/in/tejo-medasani-a1b470373/") },
    { label: "Email Tejo", hint: "Opens Gmail compose", action: () => openUrl("https://mail.google.com/mail/?view=cm&fs=1&to=medasanitejo@gmail.com&su=Portfolio%20Inquiry") },
    { label: "Toggle theme", hint: "Switch light / dark", action: () => document.getElementById("themeToggle").click() }
  ];

  const repoCommands = OWN_REPOS.map(r => ({
    label: r.name, hint: "Repository — " + r.lang, tag: "Build", action: () => openUrl(r.url)
  }));
  const contribCommands = FORKED_REPOS.map(r => ({
    label: r.name, hint: "Contribution — from " + r.upstream, tag: "Contribution", action: () => openUrl(r.url)
  }));

  const allCommands = [...staticCommands, ...repoCommands, ...contribCommands];
  let activeIndex = 0;
  let filtered = allCommands;

  function scrollToId(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
  function openUrl(url) {
    window.open(url, "_blank", "noopener");
  }

  function render() {
    if (!filtered.length) {
      list.innerHTML = `<div class="cmdk-empty">No matches — try a different search.</div>`;
      return;
    }
    list.innerHTML = filtered.map((cmd, i) => `
      <div class="cmdk-item" role="option" aria-selected="${i === activeIndex}" data-index="${i}">
        <span class="cmdk-item-label">
          <span>${cmd.label}</span>
          <span class="cmdk-item-hint">${cmd.hint}</span>
        </span>
        ${cmd.tag ? `<span class="cmdk-item-tag">${cmd.tag}</span>` : ""}
      </div>
    `).join("");

    list.querySelectorAll(".cmdk-item").forEach(el => {
      el.addEventListener("mouseenter", () => {
        activeIndex = Number(el.dataset.index);
        updateSelection();
      });
      el.addEventListener("click", () => {
        filtered[Number(el.dataset.index)].action();
        closePalette();
      });
    });
  }

  function updateSelection() {
    list.querySelectorAll(".cmdk-item").forEach(el => {
      el.setAttribute("aria-selected", String(Number(el.dataset.index) === activeIndex));
    });
    const activeEl = list.querySelector('[aria-selected="true"]');
    if (activeEl) activeEl.scrollIntoView({ block: "nearest" });
  }

  function openPalette() {
    overlay.classList.add("open");
    input.value = "";
    filtered = allCommands;
    activeIndex = 0;
    render();
    setTimeout(() => input.focus(), 30);
    document.body.style.overflow = "hidden";
  }

  function closePalette() {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    filtered = !q ? allCommands : allCommands.filter(c =>
      c.label.toLowerCase().includes(q) || c.hint.toLowerCase().includes(q)
    );
    activeIndex = 0;
    render();
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      activeIndex = Math.min(activeIndex + 1, filtered.length - 1);
      updateSelection();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      activeIndex = Math.max(activeIndex - 1, 0);
      updateSelection();
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered[activeIndex]) {
        filtered[activeIndex].action();
        closePalette();
      }
    } else if (e.key === "Escape") {
      closePalette();
    }
  });

  trigger.addEventListener("click", openPalette);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closePalette();
  });

  document.addEventListener("keydown", (e) => {
    const cmdKey = isMac ? e.metaKey : e.ctrlKey;
    if (cmdKey && e.key.toLowerCase() === "k") {
      e.preventDefault();
      overlay.classList.contains("open") ? closePalette() : openPalette();
    }
    if (e.key === "Escape" && overlay.classList.contains("open")) closePalette();
  });
}

// ============================================================
// NAV: mobile toggle + smooth close on link click
// ============================================================
function setupNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ============================================================
// BACK TO TOP
// ============================================================
function setupBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 600);
  }, { passive: true });
}

// The nav is position:sticky and stays pinned at the top, so its
// getBoundingClientRect().top is always 0 — the browser's native
// "#top" anchor scroll sees it as already in view and does nothing.
// Scroll explicitly instead, for every link that points at #top.
function setupTopLinks() {
  document.querySelectorAll('a[href="#top"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

// ============================================================
// MISC: footer year, rev date
// ============================================================
function setupMeta() {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const rev = document.getElementById("revDate");
  if (rev) {
    rev.textContent = new Date().toLocaleDateString("en-IN", {
      year: "numeric", month: "short", day: "2-digit"
    });
  }
}

// ============================================================
// INIT
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  setupTheme();
  renderRepos();
  renderContributions();
  bootType();
  setupNav();
  setupBackToTop();
  setupTopLinks();
  setupMeta();
  setupScrollReveal();
  setupCommandPalette();
  setupRepoFilters();
  loadGitHubStats();
});
