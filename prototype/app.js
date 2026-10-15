const screens = new Map(
  [...document.querySelectorAll(".screen")].map((screen) => [
    screen.id.replace("screen-", ""),
    screen,
  ]),
);
const loginForm = document.querySelector("#login-form");
const captureForm = document.querySelector("#capture-form");
const toast = document.querySelector("#toast");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let currentScreen = "welcome";
let toastTimer;

if (!sessionStorage.getItem("capturer-pulso-presented")) {
  document.body.classList.add("first-presentation");
  sessionStorage.setItem("capturer-pulso-presented", "1");
}

function showScreen(next) {
  if (!screens.has(next) || next === currentScreen) return;
  const previous = screens.get(currentScreen);
  const target = screens.get(next);
  previous.classList.remove("is-active");
  previous.hidden = true;
  target.hidden = false;
  target.classList.remove("is-active");
  void target.offsetWidth;
  target.classList.add("is-active");
  currentScreen = next;
  const scrollRegion = target.querySelector(".app-scroll");
  if (scrollRegion) scrollRegion.scrollTop = 0;
  document.querySelectorAll(".nav-item").forEach((item) => {
    const selected = item.dataset.screen === next;
    item.classList.toggle("is-current", selected);
    if (selected) item.setAttribute("aria-current", "page");
    else item.removeAttribute("aria-current");
  });
  const heading = target.querySelector("h2");
  if (heading) {
    heading.setAttribute("tabindex", "-1");
    heading.focus({ preventScroll: true });
  }
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.hidden = false;
  requestAnimationFrame(() => toast.classList.add("is-visible"));
  toastTimer = setTimeout(() => {
    toast.classList.remove("is-visible");
    setTimeout(
      () => {
        toast.hidden = true;
      },
      reducedMotion.matches ? 0 : 220,
    );
  }, 3000);
}

function setFieldError(input, message) {
  input.setAttribute("aria-invalid", String(Boolean(message)));
  const error = document.querySelector(`#${input.id}-error`);
  if (error) error.textContent = message;
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const emailError = !email.value.trim()
    ? "Ingresa tu correo."
    : !email.validity.valid
      ? "Revisa el formato del correo."
      : "";
  const passwordError = password.value ? "" : "Ingresa tu contraseña.";
  setFieldError(email, emailError);
  setFieldError(password, passwordError);
  if (emailError || passwordError) {
    (emailError ? email : password).focus();
    return;
  }
  showScreen("home");
});

for (const input of [
  document.querySelector("#email"),
  document.querySelector("#password"),
  document.querySelector("#reference"),
]) {
  input.addEventListener("input", () => setFieldError(input, ""));
}

document
  .querySelector("#toggle-password")
  .addEventListener("click", (event) => {
    const password = document.querySelector("#password");
    const visible = password.type === "password";
    password.type = visible ? "text" : "password";
    event.currentTarget.textContent = visible ? "Ocultar" : "Ver";
    event.currentTarget.setAttribute(
      "aria-label",
      visible ? "Ocultar contraseña" : "Mostrar contraseña",
    );
    event.currentTarget.setAttribute("aria-pressed", String(visible));
    password.focus();
  });

document
  .querySelector("#start-capture")
  .addEventListener("click", () => showScreen("capture"));
document
  .querySelector("#open-profile")
  .addEventListener("click", () => showScreen("profile"));
document
  .querySelectorAll("[data-screen]")
  .forEach((button) =>
    button.addEventListener("click", () => showScreen(button.dataset.screen)),
  );

captureForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const reference = document.querySelector("#reference");
  if (!reference.value.trim()) {
    setFieldError(reference, "Escribe una referencia.");
    reference.focus();
    return;
  }
  document.querySelector("#review-reference").textContent =
    reference.value.trim();
  document.querySelector("#review-note").textContent =
    document.querySelector("#note").value.trim() || "Sin observación";
  showScreen("review");
});

document.querySelector("#confirm-demo").addEventListener("click", () => {
  showScreen("complete");
});

document.querySelector("#logout").addEventListener("click", () => {
  loginForm.reset();
  captureForm.reset();
  for (const id of ["email", "password", "reference"])
    setFieldError(document.querySelector(`#${id}`), "");
  showScreen("welcome");
});

document
  .querySelectorAll(".demo-button")
  .forEach((button) =>
    button.addEventListener("click", () =>
      showToast("Ejemplo de feedback de una acción."),
    ),
  );
