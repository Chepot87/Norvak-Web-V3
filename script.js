/* Progressive enhancements. All navigation and direct contact work without JS. */
document.documentElement.classList.add("js");
let language = "en";
try {
  const stored = localStorage.getItem("norvak-language");
  if (stored === "en" || stored === "es") language = stored;
} catch {}
const choose = (en, es) => (language === "es" ? es : en);
const menu = document.getElementById("main-nav");
const toggle = document.querySelector(".menu-toggle");
function closeMenu() {
  menu?.classList.remove("open");
  toggle?.setAttribute("aria-expanded", "false");
}
toggle?.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
menu
  ?.querySelectorAll("a")
  .forEach((a) => a.addEventListener("click", closeMenu));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menu?.classList.contains("open")) {
    closeMenu();
    toggle?.focus();
  }
});
document.addEventListener("click", (e) => {
  if (!e.target.closest(".site-header")) closeMenu();
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 900) closeMenu();
});
document
  .querySelectorAll("[data-year]")
  .forEach((el) => (el.textContent = String(new Date().getFullYear())));

function updateCount() {
  const status = document.getElementById("filter-status");
  if (!status) return;
  const count = [...document.querySelectorAll("[data-category]")].filter(
    (el) => !el.hidden,
  ).length;
  status.textContent = choose(
    `${count} project${count === 1 ? "" : "s"}`,
    `${count} proyecto${count === 1 ? "" : "s"}`,
  );
}
document.querySelectorAll("[data-filter]").forEach((button) =>
  button.addEventListener("click", () => {
    document
      .querySelectorAll("[data-filter]")
      .forEach((b) => b.setAttribute("aria-pressed", String(b === button)));
    document
      .querySelectorAll("[data-category]")
      .forEach(
        (card) =>
          (card.hidden =
            button.dataset.filter !== "all" &&
            card.dataset.category !== button.dataset.filter),
      );
    updateCount();
  }),
);

const form = document.getElementById("brief-form");
const result = document.getElementById("brief-result");
let prepared = null;
const serviceNames = {
  "01": ["A new website", "Una web nueva"],
  "02": ["Refresh an existing website", "Renovar una web existente"],
  "03": ["Launch or maintenance", "Publicación o mantenimiento"],
  "04": ["Let’s figure it out together", "Vamos a definirlo juntos"],
};
if (form) {
  const query = new URLSearchParams(window.location.search).get("service");
  if (serviceNames[query]) form.elements.service.value = query;
}
function composeBrief(data) {
  const labels =
    language === "es"
      ? ["Nombre", "Email", "Negocio / proyecto", "Servicio", "Idea"]
      : ["Name", "Email", "Business / project", "Service", "Idea"];
  const greeting = choose(
    "Hello José, I’d like to discuss a website project.",
    "Hola José, me gustaría hablar de un proyecto web.",
  );
  const service = serviceNames[data.service] || serviceNames["04"];
  const rows = [`${labels[0]}: ${data.name}`];
  if (data.email) rows.push(`${labels[1]}: ${data.email}`);
  if (data.business) rows.push(`${labels[2]}: ${data.business}`);
  rows.push(
    `${labels[3]}: ${choose(...service)}`,
    `${labels[4]}:\n${data.message}`,
  );
  return greeting + "\n\n" + rows.join("\n");
}
function refreshBrief() {
  if (!prepared) return;
  const message = composeBrief(prepared);
  document.getElementById("brief-preview").value = message;
  document.getElementById("brief-whatsapp").href =
    "https://wa.me/18633606475?text=" + encodeURIComponent(message);
  const subject =
    choose(
      "Norvak Web — Project inquiry",
      "Norvak Web — Consulta de proyecto",
    ) + (prepared.business ? " — " + prepared.business : "");
  document.getElementById("brief-email").href =
    "mailto:norvakweb@gmail.com?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(message);
  document.getElementById("brief-status").textContent = choose(
    "Review the message in your chosen app, then send it there.",
    "Revisa el mensaje en la app que elegiste y envíalo allí.",
  );
}
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = Object.fromEntries(new FormData(form));
  prepared = Object.fromEntries(
    Object.entries(data).map(([key, value]) => [key, String(value).trim()]),
  );
  if (!prepared.name || prepared.message.length < 10) {
    document
      .getElementById("message")
      .setCustomValidity(
        choose(
          "Please include at least 10 characters about your idea.",
          "Incluye al menos 10 caracteres sobre tu idea.",
        ),
      );
    form.reportValidity();
    return;
  }
  refreshBrief();
  result.hidden = false;
  document.getElementById("brief-heading").focus();
});
form?.addEventListener("input", () => {
  document.getElementById("message").setCustomValidity("");
  if (result) result.hidden = true;
  prepared = null;
});
document.getElementById("copy-brief")?.addEventListener("click", async () => {
  const preview = document.getElementById("brief-preview");
  try {
    await navigator.clipboard.writeText(preview.value);
    document.getElementById("brief-status").textContent = choose(
      "Message copied. Paste it into your preferred app.",
      "Mensaje copiado. Pégalo en la app que prefieras.",
    );
  } catch {
    preview.focus();
    preview.select();
    document.getElementById("brief-status").textContent = choose(
      "Select and copy the message above.",
      "Selecciona y copia el mensaje de arriba.",
    );
  }
});
function setLanguage(next) {
  language = next === "es" ? "es" : "en";
  document.documentElement.lang = language;
  document
    .querySelectorAll("[data-en][data-es]")
    .forEach((el) => (el.textContent = el.dataset[language]));
  document.querySelectorAll("[data-alt-es]").forEach((el) => {
    el.dataset.altEn ??= el.alt;
    el.alt = language === "es" ? el.dataset.altEs : el.dataset.altEn;
  });
  document
    .querySelectorAll("[data-lang]")
    .forEach((el) =>
      el.setAttribute("aria-pressed", String(el.dataset.lang === language)),
    );
  document.title =
    document.body.dataset[language === "es" ? "titleEs" : "titleEn"];
  menu?.setAttribute(
    "aria-label",
    choose("Main navigation", "Navegación principal"),
  );
  try {
    localStorage.setItem("norvak-language", language);
  } catch {}
  updateCount();
  refreshBrief();
}
document
  .querySelectorAll("[data-lang]")
  .forEach((button) =>
    button.addEventListener("click", () => setLanguage(button.dataset.lang)),
  );
setLanguage(language);
