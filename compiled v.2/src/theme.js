const KEY = "theme"; // "Light" | "Dark" | "System"

/**
 * Returns the saved theme, defaulting to "System".
 */
export function getSavedTheme() {
  return localStorage.getItem(KEY) || "System";
}

function isSystemDark() {
  const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
  return mq ? mq.matches : false;
}

export function applyTheme(theme) {
  const root = document.documentElement; // <html>
  const body = document.body;
  const appRoot = document.getElementById("root");

  const shouldBeDark =
    theme === "Dark" || (theme === "System" && isSystemDark());

  [root, body, appRoot].forEach((el) => {
    if (!el) return;
    el.classList.toggle("dark", shouldBeDark);
  });

  root.style.colorScheme = shouldBeDark ? "dark" : "light";
}

export function saveTheme(theme) {
  localStorage.setItem(KEY, theme);
  applyTheme(theme);
}

export function initTheme() {
  applyTheme(getSavedTheme());

  const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
  if (!mq) return () => {};

  const onChange = () => {
    if (getSavedTheme() === "System") applyTheme("System");
  };

  if (mq.addEventListener) {
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }

  mq.addListener(onChange);
  return () => mq.removeListener(onChange);
}
