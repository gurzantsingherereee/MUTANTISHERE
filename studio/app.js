const config = window.STUDIO_CONFIG || {};

document.querySelectorAll("[data-studio-name]").forEach((node) => {
  node.textContent = config.name || "STUDIO // 00";
});
document.title = `${config.name || "STUDIO // 00"} — Commerce Creative Systems`;
document.getElementById("year").textContent = new Date().getFullYear();

const footerEmail = document.getElementById("footer-email");
const publicEmail = config.publicEmail || "";
if (publicEmail) {
  const link = document.createElement("a");
  link.href = `mailto:${publicEmail}`;
  link.textContent = publicEmail;
  footerEmail.replaceWith(link);
}

const menuButton = document.querySelector(".menu-button");
const nav = document.getElementById("primary-nav");
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("open", !open);
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  menuButton.setAttribute("aria-expanded", "false");
  nav.classList.remove("open");
}));

document.body.classList.add("motion-ready");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: "0px 0px -5%" });
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const progress = document.querySelector(".progress span");
window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${max > 0 ? (scrollY / max) * 100 : 0}%`;
}, { passive: true });

const platforms = {
  amazon: {
    index: "01", label: "Amazon / Search → Detail → A+", title: "Balance compliance with persuasion.",
    body: "A clean primary earns eligibility. Secondary images answer objections. A+ builds depth through modules. Store and ad creative follow separate acceptance policies.",
    items: ["Primary + secondary PDP system", "Basic / Premium A+ modules", "Brand Store + retail-media adaptation"]
  },
  flipkart: {
    index: "02", label: "Flipkart / Catalogue → QC → Conversion", title: "Design for the vertical, not a copied Amazon set.",
    body: "Catalogue requirements and quality checks vary by category. We build square masters, required angles and persuasive secondary imagery, then validate the live vertical template.",
    items: ["Category-specific image architecture", "QC-ready export and correction loop", "Campaign and catalogue adaptation"]
  },
  beauty: {
    index: "03", label: "Nykaa / Beauty / Trust → Texture → Proof", title: "Make claims beautiful—and defensible.",
    body: "Beauty needs sensory desire, shade or texture clarity, ingredient logic and complete label truth. Unsupported medical language is not creative strategy.",
    items: ["Pack, texture and routine imagery", "Ingredient / technology storytelling", "Claim, label and disclaimer review"]
  },
  fashion: {
    index: "04", label: "Myntra / Fashion / Fit → Detail → Confidence", title: "Reduce uncertainty around fit, finish and truth.",
    body: "Category angles, model crops, material detail and accurate colour work together. The creative system must help shoppers imagine ownership without misrepresenting the product.",
    items: ["Front / back / side / detail system", "Fit, scale and material communication", "Category-portal validation"]
  },
  qcommerce: {
    index: "05", label: "Blinkit / Zepto / Instamart / Thumb → Tap", title: "Win before the shopper slows down.",
    body: "Quick-commerce shelves compress attention. Variant recognition, pack silhouette and honest front-of-pack clarity matter before decorative lifestyle storytelling.",
    items: ["NPI-ready SKU image set", "200 × 200 shelf-legibility test", "Placement-specific campaign assets"]
  },
  dtc: {
    index: "06", label: "D2C / Retail media / Attention → Action", title: "Carry one campaign idea across every placement.",
    body: "The website, marketplace, social launch and retail media should feel like one product world. We create a master system, then adapt hierarchy rather than merely resizing files.",
    items: ["Campaign key visual and message system", "Landing-page and social adaptations", "Placement matrix and creative QA"]
  }
};

const tabButtons = document.querySelectorAll("[data-platform]");
const platformNodes = {
  index: document.getElementById("platform-index"), label: document.getElementById("platform-label"),
  title: document.getElementById("platform-title"), body: document.getElementById("platform-body"), list: document.getElementById("platform-list")
};
tabButtons.forEach((button) => button.addEventListener("click", () => {
  const item = platforms[button.dataset.platform];
  tabButtons.forEach((candidate) => {
    const active = candidate === button;
    candidate.classList.toggle("active", active);
    candidate.setAttribute("aria-selected", String(active));
  });
  platformNodes.index.textContent = item.index;
  platformNodes.label.textContent = item.label;
  platformNodes.title.textContent = item.title;
  platformNodes.body.textContent = item.body;
  platformNodes.list.innerHTML = item.items.map((value) => `<li>${value}</li>`).join("");
}));

const form = document.getElementById("project-form");
const status = document.getElementById("form-status");
const dialog = document.getElementById("brief-dialog");
const dialogMessage = document.getElementById("dialog-message");
let latestBrief = "";

function buildBrief(data) {
  return [
    `${config.name || "STUDIO // 00"} — PRIVATE PROJECT DISCOVERY`,
    `Prepared: ${new Date().toLocaleString()}`, "",
    `Contact: ${data.get("name")}`,
    `Email: ${data.get("email")}`,
    `Brand: ${data.get("brand")}`,
    `Platform: ${data.get("platform")}`,
    `Workstream: ${data.get("service")}`,
    `Target launch: ${data.get("timeline") || "Not provided"}`, "",
    "WHAT MUST IMPROVE", data.get("context"), "",
    "STUDIO REVIEW GATE",
    "1. Confirm product, platform, category and SKU count.",
    "2. Audit available assets, claims and evidence.",
    "3. Define deliverable architecture and production dependencies.",
    "4. Share private scope, timeline and commercial terms after fit review."
  ].join("\n");
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = new FormData(form);
  latestBrief = buildBrief(data);
  status.textContent = "Preparing the private discovery brief…";

  if (config.formEndpoint) {
    try {
      const response = await fetch(config.formEndpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("Submission failed");
      dialogMessage.textContent = "Your enquiry has been routed for review. Commercial terms will follow only after product and platform fit is assessed.";
      form.reset();
    } catch {
      dialogMessage.textContent = "Online routing is unavailable. Download or copy the complete brief so none of your project information is lost.";
    }
  } else if (config.email) {
    location.href = `mailto:${config.email}?subject=${encodeURIComponent(`Private project discovery — ${data.get("brand")}`)}&body=${encodeURIComponent(latestBrief)}`;
    dialogMessage.textContent = "Your email application has opened with the complete private discovery brief.";
  } else {
    dialogMessage.textContent = "The company inbox is not connected yet. Download or copy the brief; routing can be switched on later without changing the website.";
  }
  status.textContent = "Private brief ready.";
  dialog.showModal();
});

document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
document.getElementById("download-brief").addEventListener("click", () => {
  const blob = new Blob([latestBrief], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "private-project-discovery.txt";
  link.click();
  URL.revokeObjectURL(link.href);
});
document.getElementById("copy-brief").addEventListener("click", async (event) => {
  await navigator.clipboard.writeText(latestBrief);
  event.currentTarget.textContent = "Copied";
  setTimeout(() => { event.currentTarget.textContent = "Copy to clipboard"; }, 1800);
});
