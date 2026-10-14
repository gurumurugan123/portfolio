/* Gurumurugan A · portfolio scripts
   Edit PROJECTS and SKILLS below to update the site. */

const PROJECTS = [
  {
    title: "LAVMIS: AI Land Valuation",
    cat: ["ml", "backend"], label: "AI / ML · Production",
    wide: true,
    img: "assets/projects/lavmis.webp",
    desc: "A Kubernetes-deployed microservices platform for land valuation. I built its prediction service: a config-driven Random Forest pipeline (scikit-learn) with Celery batch retraining and confidence-scored property-value inference. Services sync over Kafka behind an API gateway.",
    tags: ["Python", "Django", "scikit-learn", "Celery", "Kafka", "PostgreSQL", "MongoDB", "Redis", "Keycloak", "Kubernetes"],
    links: [],
  },
  {
    title: "Pathly",
    cat: ["web"], label: "Web app", live: true,
    img: "assets/projects/pathly.webp",
    desc: "Your career, connected. Pathly maps your professional network as a graph, tracks referrals and shows the warmest path into the company you want.",
    tags: ["Graph", "Dashboard", "REST API"],
    links: [{ t: "View live", u: "https://jobgraph-frontend-1pp2.onrender.com/dashboard" }],
  },
  {
    title: "Power Cut Check",
    cat: ["web"], label: "Web app", live: true,
    img: "assets/projects/powercut.webp",
    desc: "Finds scheduled TANGEDCO power shutdowns near you. One tap detects your location with GPS and lists the planned outages for your area.",
    tags: ["Geolocation", "Mobile-first", "Vercel"],
    links: [{ t: "View live", u: "https://power-cut-check.vercel.app/" }],
  },
  /* Gen AI examples: replace the text and links with your own projects. */
  {
    title: "DocuMind",
    cat: ["genai"], label: "Gen AI · RAG",
    img: "assets/projects/documind.webp",
    desc: "Chat with your documents. PDFs are chunked, embedded into pgvector and answered by an LLM that cites the exact page it used.",
    tags: ["LangChain", "OpenAI", "pgvector", "Django REST", "Celery"],
    links: [{ t: "GitHub", u: "https://github.com/gurumurugan123" }],
  },
  {
    title: "TalentLens",
    cat: ["genai", "ml"], label: "Gen AI · Embeddings",
    img: "assets/projects/talentlens.webp",
    desc: "Scores a resume against a job description with sentence embeddings, then uses an LLM to explain the score and list missing skills.",
    tags: ["Hugging Face", "Embeddings", "LLM", "Pandas", "Django"],
    links: [{ t: "GitHub", u: "https://github.com/gurumurugan123" }],
  },
  {
    title: "TaskFlow",
    cat: ["backend"], label: "Backend",
    img: "assets/projects/taskflow.webp",
    desc: "A Celery-style async job queue built from scratch on Redis with BRPOPLPUSH workers, idempotency keys, exponential-backoff retries and dead-letter queues.",
    tags: ["Django", "Redis", "PostgreSQL", "Docker"],
    links: [{ t: "GitHub", u: "https://github.com/gurumurugan123/TaskFlow" }],
  },
  {
    title: "LedgerVault",
    cat: ["backend"], label: "Backend · Fintech",
    img: "assets/projects/ledgervault.webp",
    desc: "A wallet backend on double-entry accounting with ACID transfers (SELECT … FOR UPDATE), idempotency keys, Redis rate limiting, JWT auth and GitHub Actions CI.",
    tags: ["Python", "Django", "PostgreSQL", "Redis", "JWT"],
    links: [{ t: "GitHub", u: "https://github.com/gurumurugan123/LedgerVault" }],
  },
];

/* logo file names live in assets/icons/ ; null = text only */
const SKILLS = [
  ["Generative AI", [["LangChain", "langchain"], ["OpenAI API", "openai"], ["Hugging Face", "huggingface"], ["RAG", null], ["Embeddings", null], ["Vector search", null], ["Prompt engineering", null]]],
  ["Machine Learning", [["scikit-learn", "scikitlearn"], ["Pandas", "pandas"], ["NumPy", "numpy"], ["PyTorch", "pytorch"], ["Model serving", null]]],
  ["Backend", [["Python", "python"], ["Django", "django"], ["Django REST Framework", null], ["Celery", "celery"], ["FastAPI", "fastapi"], ["gRPC", null], ["REST APIs", null]]],
  ["Data & messaging", [["PostgreSQL", "postgresql"], ["MongoDB", "mongodb"], ["Redis", "redis"], ["Apache Kafka", "kafka"], ["SQL", null]]],
  ["DevOps & cloud", [["Docker", "docker"], ["Kubernetes", "kubernetes"], ["Jenkins", "jenkins"], ["GitHub Actions", "githubactions"], ["Azure", "azure"], ["Git", "git"]]],
  ["Auth & testing", [["Keycloak", "keycloak"], ["JWT", "jwt"], ["Postman", "postman"]]],
];

const MARQUEE_1 = ["python", "django", "langchain", "openai", "huggingface", "scikitlearn", "pandas", "numpy", "pytorch", "fastapi", "celery"];
const MARQUEE_2 = ["postgresql", "mongodb", "redis", "kafka", "docker", "kubernetes", "jenkins", "githubactions", "azure", "git", "keycloak", "postman"];
const NAMES = { python: "Python", django: "Django", langchain: "LangChain", openai: "OpenAI", huggingface: "Hugging Face", scikitlearn: "scikit-learn", pandas: "Pandas", numpy: "NumPy", pytorch: "PyTorch", fastapi: "FastAPI", celery: "Celery", postgresql: "PostgreSQL", mongodb: "MongoDB", redis: "Redis", kafka: "Apache Kafka", docker: "Docker", kubernetes: "Kubernetes", jenkins: "Jenkins", githubactions: "GitHub Actions", azure: "Azure", git: "Git", keycloak: "Keycloak", postman: "Postman", jwt: "JWT" };

/* ---------------------------------------------------------- */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
document.documentElement.classList.add("js");
$("#year").textContent = new Date().getFullYear();
const logo = (k, cls = "logo") => `<span class="${cls}"><img src="assets/icons/${k}.svg" alt="" loading="lazy" /></span>`;

/* Marquee */
const fill = (el, keys) => {
  const html = keys.map((k) => `<div class="tech">${logo(k)}${NAMES[k]}</div>`).join("");
  el.innerHTML = html + html; // duplicated for a seamless loop
};
fill($("#row1"), MARQUEE_1);
fill($("#row2"), MARQUEE_2);

/* Skills */
$("#skillTable").innerHTML = SKILLS.map(([group, items]) => `
  <div class="skill-row reveal">
    <h3>${group}</h3>
    <div class="skill-items">${items.map(([n, k]) => k
      ? `<span class="skill">${logo(k)}${n}</span>`
      : `<span class="skill plain">${n}</span>`).join("")}</div>
  </div>`).join("");

/* Projects */
const grid = $("#projectGrid");
grid.innerHTML = PROJECTS.map((p) => {
  const href = p.links[0] ? p.links[0].u : null;
  const shot = `<img src="${p.img}" alt="${p.title} screen" loading="lazy" />`;
  return `
  <article class="project reveal ${p.wide ? "wide" : ""}" data-cat="${p.cat.join(" ")}">
    ${href ? `<a class="shot" href="${href}" target="_blank" rel="noopener">${shot}</a>` : `<div class="shot">${shot}</div>`}
    <div class="p-body">
      <div class="p-meta"><span>${p.label}</span>${p.live ? `<span class="live">● Live</span>` : ""}</div>
      <h3>${p.title}</h3>
      <p class="p-desc">${p.desc}</p>
      <div class="p-tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
      ${p.links.length ? `<div class="p-links">${p.links.map((l) => `<a class="text-link" href="${l.u}" target="_blank" rel="noopener">${l.t} →</a>`).join("")}</div>` : ""}
    </div>
  </article>`;
}).join("");

$$("#filters button").forEach((b) => b.addEventListener("click", () => {
  $$("#filters button").forEach((x) => x.classList.toggle("active", x === b));
  const f = b.dataset.f;
  $$(".project", grid).forEach((card) => {
    card.hidden = !(f === "all" || card.dataset.cat.split(" ").includes(f));
    card.classList.toggle("wide", f === "all" && card === grid.firstElementChild);
  });
}));

/* Nav: background on scroll, active link, mobile menu */
const nav = $("#nav");
const links = $$(".nav-links a[href^='#']");
const sections = links.map((a) => $(a.getAttribute("href")));
const onScroll = () => {
  nav.classList.toggle("scrolled", scrollY > 20);
  let cur = sections[0];
  sections.forEach((s) => { if (s && s.offsetTop - 160 <= scrollY) cur = s; });
  links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + cur.id));
};
addEventListener("scroll", onScroll, { passive: true });
onScroll();
const burger = $("#burger"), menu = $("#navLinks");
burger.addEventListener("click", () => { burger.classList.toggle("open"); menu.classList.toggle("open"); });
$$("a", menu).forEach((a) => a.addEventListener("click", () => { burger.classList.remove("open"); menu.classList.remove("open"); }));

/* Reveal on scroll */
const io = new IntersectionObserver((entries) => entries.forEach((e) => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: 0.12 });
$$(".reveal").forEach((el) => io.observe(el));

/* Count-up numbers */
const cio = new IntersectionObserver((entries) => entries.forEach((e) => {
  if (!e.isIntersecting) return;
  const el = e.target, to = +el.dataset.to, suf = el.dataset.suf || "", t0 = performance.now();
  const step = (t) => {
    const k = Math.min((t - t0) / 1200, 1);
    el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))) + suf;
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
  cio.unobserve(el);
}), { threshold: 0.6 });
$$(".stat b").forEach((el) => cio.observe(el));
