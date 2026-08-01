/**
 * Dark/light scheme switcher for "Royal Cat Park" book theme.
 * Styles live in css/theme-royal.css (:root[data-theme="dark"/"light"]).
 * Light scheme is a minimal variation: beige background only, game colors inherited.
 */

const THEME_SCHEME_KEY = "rsc_theme";

export function setThemeScheme(name) {
  document.documentElement.setAttribute("data-theme", name);
  try {
    localStorage.setItem(THEME_SCHEME_KEY, name);
  } catch (e) {
    /* localStorage may be unavailable - not critical */
  }
}

export function getThemeScheme() {
  try {
    const saved = localStorage.getItem(THEME_SCHEME_KEY);
    return saved === "dark" ? "dark" : "light";
  } catch (e) {
    return "light";
  }
}

export function applyThemeScheme() {
  setThemeScheme(getThemeScheme());
}

/** Toggle between dark and light, return the new name. */
export function toggleThemeScheme() {
  const next = getThemeScheme() === "dark" ? "light" : "dark";
  setThemeScheme(next);
  return next;
}