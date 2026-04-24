const shellCopy = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      articles: "Articles",
      projects: "Projects",
    },
    menu: "Menu",
    navigation: "Navigation",
    closeMenu: "Close menu",
    toggleTheme: "Toggle theme",
    switchToTheme: "Switch to {{theme}} theme",
    themeNames: {
      light: "light",
      dark: "dark",
    },
    language: "Language",
    languageLabels: {
      en: "EN",
      es: "ES",
    },
    switchToLanguage: {
      en: "Switch language to English",
      es: "Switch language to Spanish",
    },
    footerRights: "All rights reserved.",
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      articles: "Artículos",
      projects: "Proyectos",
    },
    menu: "Menú",
    navigation: "Navegación",
    closeMenu: "Cerrar menú",
    toggleTheme: "Cambiar tema",
    switchToTheme: "Cambiar al tema {{theme}}",
    themeNames: {
      light: "claro",
      dark: "oscuro",
    },
    language: "Idioma",
    languageLabels: {
      en: "EN",
      es: "ES",
    },
    switchToLanguage: {
      en: "Cambiar idioma a inglés",
      es: "Cambiar idioma a español",
    },
    footerRights: "Todos los derechos reservados.",
  },
};

export function getShellCopy(lng) {
  return shellCopy[lng] ?? shellCopy.en;
}

export function getThemeToggleLabel(lng, nextTheme, mounted) {
  const copy = getShellCopy(lng);

  if (!mounted) {
    return copy.toggleTheme;
  }

  return copy.switchToTheme.replace("{{theme}}", copy.themeNames[nextTheme]);
}
