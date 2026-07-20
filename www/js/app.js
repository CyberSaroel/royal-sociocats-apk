import { showIntroScreen } from "./screens/introScreen.js";
import { applyTheme, getSelectedTheme } from "./screens/themeSelect.js";
import NavigationService from "./core/navigation.js";
import { VERSION, saveVersion } from "./core/version.js";

const root = document.getElementById("app");

// Apply selected theme on load
applyTheme(getSelectedTheme());

// Save current version
saveVersion();

// Add version label to body (persists across screen changes)
const versionLabel = document.createElement("div");
versionLabel.className = "version-label";
versionLabel.textContent = `v${VERSION}`;
document.body.appendChild(versionLabel);

// Initialize NavigationService
NavigationService.init(root);

// Show intro screen as the first screen (no history entry)
NavigationService.currentScreen = "intro";
NavigationService.saveCurrentRender(() => showIntroScreen(root));
showIntroScreen(root);
