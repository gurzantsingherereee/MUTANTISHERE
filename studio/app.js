const config = window.STUDIO_CONFIG || {};
const root = document.documentElement;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.querySelectorAll("[data-studio-name]").forEach((node) => {
  node.textContent = config.name || "STUDIO—01";
});

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const publicEmail = config.publicEmail || "";
const footerEmail = document.getElementById("footer-email");
if (footerEmail && publicEmail) {
  const link = document.createElement("a");
  link.href = `mailto:${publicEmail}`;
  link.textContent = publicEmail;
  footerEmail.replaceWith(link);
}

root.classList.add("motion-ready");

const revealNodes = document.querySelectorAll(".reveal");
if (reduceMotion || !("IntersectionObserver" in window)) {
  revealNodes.forEach((node) => node.classList.add("visible"));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8%" });
  revealNodes.forEach((node) => revealObserver.observe(node));
}

const progressBar = document.querySelector(".scroll-progress span");
const chapterNumber = document.querySelector("[data-chapter-number]");
const chapterName = document.querySelector("[data-chapter-name]");
const chapterSections = document.querySelectorAll("[data-chapter]");

if (chapterSections.length && "IntersectionObserver" in window) {
  const chapterObserver = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    if (chapterNumber) chapterNumber.textContent = visible.target.dataset.chapter;
    if (chapterName) chapterName.textContent = visible.target.dataset.chapterName;
  }, { threshold: [0.2, 0.45, 0.7], rootMargin: "-28% 0px -28%" });
  chapterSections.forEach((section) => chapterObserver.observe(section));
}

const parallaxNodes = [...document.querySelectorAll("[data-parallax]")];
let ticking = false;

function updateScrollEffects() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
  if (progressBar) progressBar.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;

  if (!reduceMotion) {
    parallaxNodes.forEach((node) => {
      const rect = node.parentElement.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      const offset = ((rect.top + rect.height / 2) - window.innerHeight / 2) * -0.025;
      node.style.transform = `scale(1.045) translate3d(0, ${offset}px, 0)`;
    });
  }
  ticking = false;
}

window.addEventListener("scroll", () => {
  if (ticking) return;
  ticking = true;
  window.requestAnimationFrame(updateScrollEffects);
}, { passive: true });
updateScrollEffects();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("site-nav");
if (menuToggle && nav) {
  const menuLabel = menuToggle.querySelector("span");
  const setMenuState = (open) => {
    menuToggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("open", open);
    document.body.classList.toggle("menu-open", open);
    if (menuLabel) menuLabel.textContent = open ? "Close" : "Menu";
  };
  menuToggle.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") !== "true";
    setMenuState(open);
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    setMenuState(false);
  }));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      setMenuState(false);
      menuToggle.focus();
    }
  });
}

const cursor = document.querySelector(".cursor");
const cursorLabel = cursor?.querySelector("span");
if (cursor && window.matchMedia("(pointer: fine)").matches && !reduceMotion) {
  window.addEventListener("pointermove", (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  }, { passive: true });

  document.querySelectorAll("a, button, [data-cursor-label]").forEach((node) => {
    node.addEventListener("pointerenter", () => {
      if (cursorLabel) cursorLabel.textContent = node.dataset.cursorLabel || "View";
      cursor.classList.add("visible");
    });
    node.addEventListener("pointerleave", () => cursor.classList.remove("visible"));
  });
}

const platforms = {
  amazon: {
    index: "01",
    label: "Amazon / Search → Detail → A+",
    title: "Compliance opens the door. Story earns the scroll.",
    body: "The primary image creates eligibility and recognition. Secondary images resolve objections. A+ deepens the world through native modules.",
    items: ["Primary + gallery hierarchy", "Basic and Premium A+ systems", "Store and retail-media adaptation"]
  },
  flipkart: {
    index: "02",
    label: "Flipkart / Browse → Compare → Choose",
    title: "Design for comparison without becoming comparable.",
    body: "Category rules, live seller templates and clean product recognition come first. The secondary sequence then separates the product through benefit hierarchy and proof.",
    items: ["Category-led image sequence", "Variant and pack accuracy", "Live-template verification before export"]
  },
  beauty: {
    index: "03",
    label: "Nykaa / Beauty / Trust + Desire",
    title: "Make aspiration answerable to evidence.",
    body: "Beauty storytelling must balance ritual, texture and transformation with ingredient, claim and label discipline. Sensory art direction cannot outrun substantiation.",
    items: ["Texture and ritual storytelling", "Ingredient and claim hierarchy", "Pack-label and legal review"]
  },
  fashion: {
    index: "04",
    label: "Myntra / Fashion / Fit + Detail",
    title: "Let silhouette lead. Let detail close.",
    body: "Fashion commerce depends on consistent views, faithful colour and material detail. The story supports fit and use instead of obstructing them.",
    items: ["Category-specific view sets", "Material, colour and fit accuracy", "Campaign-to-catalogue continuity"]
  },
  qcommerce: {
    index: "05",
    label: "Blinkit / Zepto / Instamart",
    title: "Recognition has to survive the smallest shelf.",
    body: "The pack, variant and one dominant cue must remain legible at thumbnail scale. Promotional media is adapted only after the product passes the 200-pixel stress test.",
    items: ["Pack-first silhouette", "Variant and claim discipline", "Thumbnail and dark-mode QA"]
  },
  dtc: {
    index: "06",
    label: "D2C / Retail media / Campaign",
    title: "Give every placement one source idea.",
    body: "The brand world can expand across landing pages, display, sponsored placements and social—without becoming a folder of unrelated resizes.",
    items: ["Campaign master system", "Placement-specific hierarchy", "Modular motion and static exports"]
  }
};

const platformButtons = document.querySelectorAll("[data-platform]");
const platformNodes = {
  index: document.getElementById("platform-index"),
  label: document.getElementById("platform-label"),
  title: document.getElementById("platform-title"),
  body: document.getElementById("platform-body"),
  list: document.getElementById("platform-list")
};

platformButtons.forEach((button) => button.addEventListener("click", () => {
  const item = platforms[button.dataset.platform];
  if (!item) return;
  platformButtons.forEach((other) => {
    other.classList.toggle("active", other === button);
    other.setAttribute("aria-selected", String(other === button));
  });
  platformNodes.index.textContent = item.index;
  platformNodes.label.textContent = item.label;
  platformNodes.title.textContent = item.title;
  platformNodes.body.textContent = item.body;
  platformNodes.list.innerHTML = item.items.map((value) => `<li>${value}</li>`).join("");
}));

const archivePreview = document.querySelector(".archive-preview");
const archiveFloatImage = document.querySelector(".archive-float img");
document.querySelectorAll(".archive-row[data-preview]").forEach((row) => {
  row.addEventListener("pointerenter", () => {
    if (archiveFloatImage) archiveFloatImage.src = row.dataset.preview;
    archivePreview?.classList.add("preview-active");
  });
  row.addEventListener("pointerleave", () => archivePreview?.classList.remove("preview-active"));
});

const filterButtons = document.querySelectorAll("[data-filter]");
const workCards = document.querySelectorAll("[data-work-card]");
filterButtons.forEach((button) => button.addEventListener("click", () => {
  const filter = button.dataset.filter;
  filterButtons.forEach((other) => other.classList.toggle("active", other === button));
  workCards.forEach((card) => card.classList.toggle("hidden", filter !== "all" && card.dataset.category !== filter));
}));

const form = document.getElementById("project-form");
const status = document.getElementById("form-status");
const dialog = document.getElementById("brief-dialog");
const dialogMessage = document.getElementById("dialog-message");
let latestBrief = "";

function buildBrief(data) {
  return [
    "PRIVATE PROJECT DISCOVERY",
    "",
    `Name: ${data.get("name")}`,
    `Email: ${data.get("email")}`,
    `Brand: ${data.get("brand")}`,
    `Target shelf: ${data.get("platform")}`,
    "",
    "What needs to change:",
    data.get("challenge"),
    "",
    "STUDIO REVIEW CHECKLIST",
    "1. Confirm product, category, platform and SKU count.",
    "2. Identify the product truth and the shopper decision to change.",
    "3. Check available claims, assets, packaging and compliance inputs.",
    "4. Recommend the smallest useful story system.",
    "5. Share private scope, timing and commercial terms after fit review."
  ].join("\n");
}

function openBriefDialog(message) {
  if (!dialog || !dialogMessage) return;
  dialogMessage.textContent = message;
  dialog.showModal();
}

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    latestBrief = buildBrief(data);
    if (status) status.textContent = "Preparing the private discovery brief…";

    if (config.formEndpoint) {
      try {
        const response = await fetch(config.formEndpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
        if (!response.ok) throw new Error("Routing failed");
        openBriefDialog("Your enquiry has been routed for review. Scope and commercial terms will follow only after product and platform fit is assessed.");
        form.reset();
      } catch {
        openBriefDialog("Online routing is unavailable. Copy or download the complete brief so none of your project information is lost.");
      }
    } else if (config.email) {
      location.href = `mailto:${config.email}?subject=${encodeURIComponent(`Private project discovery — ${data.get("brand")}`)}&body=${encodeURIComponent(latestBrief)}`;
      openBriefDialog("Your email application has opened with the complete private discovery brief.");
    } else {
      openBriefDialog("The company inbox is not connected yet. Copy or download this complete private brief and keep it ready for the studio review.");
    }
    if (status) status.textContent = "Private brief prepared.";
  });
}

document.querySelector("[data-close-dialog]")?.addEventListener("click", () => dialog?.close());
document.querySelector("[data-copy-brief]")?.addEventListener("click", async () => {
  if (!latestBrief) return;
  try {
    await navigator.clipboard.writeText(latestBrief);
    if (dialogMessage) dialogMessage.textContent = "The private brief has been copied.";
  } catch {
    if (dialogMessage) dialogMessage.textContent = "Copy was blocked by the browser. Use Download brief instead.";
  }
});
document.querySelector("[data-download-brief]")?.addEventListener("click", () => {
  if (!latestBrief) return;
  const blob = new Blob([latestBrief], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "private-project-discovery.txt";
  link.click();
  URL.revokeObjectURL(link.href);
});
