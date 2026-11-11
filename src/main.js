/* Breakpoint-Anzeige */

// HTML-Element auswählen 
const breakpointInfo = document.querySelector('#breakpoint-info');

// Funktion zur Aktualisierung 
function updateBreakpoint() {
  const width = window.innerWidth;
  let layout;

  if (width < 768) {
    layout = 'Mobile';
  } else if (width < 1024) {
    layout = 'Tablet';
  } else {
    layout = 'Desktop';
  }

  // Text aktualisieren – оновлюємо текст
  breakpointInfo.textContent = `Layout: ${layout}`;
}

// Beim Laden ausführen 
updateBreakpoint();

// Bei Größenänderung aktualisieren
window.addEventListener('resize', updateBreakpoint);

/* MOBILE MENU */

// Elemente auswählen
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

// Klick auf Menü-Button
menuToggle.addEventListener('click', () => {

  // Klasse hinzufügen/entfernen
  const isOpen = navigation.classList.toggle('is-open');

  // ARIA-Status aktualisieren 
  menuToggle.setAttribute('aria-expanded', String(isOpen));

  // Beschriftung ändern 
  menuToggle.setAttribute(
    'aria-label',
    isOpen ? 'Menü schließen' : 'Menü öffnen'
  );
});

/* Menü nach Link-Klick schließen */

navigation.querySelectorAll('a').forEach((link) => {

  // Klick auf Navigationslink
  link.addEventListener('click', () => {

    // Menü schließen – закриваємо меню
    navigation.classList.remove('is-open');

    // ARIA-Attribute zurücksetzen 
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Menü öffnen');

  });
});

