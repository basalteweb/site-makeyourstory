
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-mobile-menu]");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  const order = new URLSearchParams(window.location.search).get("offre");
  const select = document.querySelector("select[name='Offre choisie']");
  if (order && select) {
    const normalized = order.toLowerCase();
    [...select.options].forEach(opt => {
      if (opt.value.toLowerCase().includes(normalized)) select.value = opt.value;
    });
  }

  const accessForm = document.querySelector("[data-access-form]");
  if (accessForm) {
    accessForm.addEventListener("submit", event => {
      event.preventDefault();
      const code = (accessForm.querySelector("input[name='code']").value || "").trim().toUpperCase();
      const msg = accessForm.querySelector("[data-access-message]");
      if (code === "DEMO-LOVE" || code === "DEMO") {
        window.location.href = "stories/demo/index.html";
        return;
      }
      msg.textContent = "Ce code ne correspond pas à une histoire disponible. Vérifiez le code reçu avec votre lien.";
    });
  }
});
