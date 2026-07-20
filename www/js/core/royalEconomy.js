const STORAGE_KEY = "socio-cats:kingsTotal";

let kingsThisLevel = 0;
let kingsTotal = 0;

// Load kingsTotal from localStorage
function loadFromStorage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    kingsTotal = stored ? parseInt(stored, 10) : 0;
  } catch (e) {
    kingsTotal = 0;
  }
}

// Save kingsTotal to localStorage
function saveToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, String(kingsTotal));
  } catch (e) {
    // Ignore storage errors
  }
}

// Initialize on module load
loadFromStorage();

/**
 * Called when a cat becomes a king
 */
export function onKingCreated() {
  kingsThisLevel++;
}

/**
 * Called when a cat stops being a king
 */
export function onKingLost() {
  if (kingsThisLevel > 0) {
    kingsThisLevel--;
  }
}

/**
 * Commit kingsThisLevel to kingsTotal (called on level victory)
 */
export function commitLevel() {
  kingsTotal += kingsThisLevel;
  saveToStorage();
  kingsThisLevel = 0; // Reset to prevent double counting
}

/**
 * Reset kingsThisLevel (called on level restart/fail)
 */
export function resetLevel() {
  kingsThisLevel = 0;
}

/**
 * Get current kingsThisLevel count
 */
export function getKingsThisLevel() {
  return kingsThisLevel;
}

/**
 * Get total kings count
 */
export function getKingsTotal() {
  return kingsTotal;
}
