"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export const AppContext = createContext({});

const ThemeContext = createContext({
  resolvedTheme: "light",
  setTheme: () => {},
  theme: "light",
  themes: ["light", "dark"],
});

const THEME_STORAGE_KEY = "theme";
const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";

function getSystemTheme() {
  return window.matchMedia(COLOR_SCHEME_QUERY).matches ? "dark" : "light";
}

function getInitialTheme() {
  if (typeof window === "undefined") {
    return "light";
  }

  return getStoredTheme() ?? getSystemTheme();
}

function getStoredTheme() {
  try {
    let storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

    return storedTheme === "dark" || storedTheme === "light"
      ? storedTheme
      : null;
  } catch {
    return null;
  }
}

function applyTheme(theme) {
  let root = document.documentElement;

  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

export function useTheme() {
  return useContext(ThemeContext);
}

function LocalThemeProvider({ children }) {
  const [resolvedTheme, setResolvedTheme] = useState(getInitialTheme);
  const resolvedThemeRef = useRef(resolvedTheme);

  const commitTheme = useCallback((theme, { persist = false } = {}) => {
    let nextTheme = theme === "dark" ? "dark" : "light";

    resolvedThemeRef.current = nextTheme;
    setResolvedTheme(nextTheme);
    applyTheme(nextTheme);

    if (!persist) {
      return;
    }

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // localStorage can be unavailable in private or restricted browsing modes.
    }
  }, []);

  const setTheme = useCallback(
    (nextTheme) => {
      let theme =
        typeof nextTheme === "function"
          ? nextTheme(resolvedThemeRef.current)
          : nextTheme;

      commitTheme(theme, { persist: true });
    },
    [commitTheme],
  );

  useEffect(() => {
    applyTheme(resolvedTheme);
  }, [resolvedTheme]);

  useEffect(() => {
    let systemPreference = window.matchMedia(COLOR_SCHEME_QUERY);

    function handleSystemThemeChange(event) {
      if (getStoredTheme()) {
        return;
      }

      commitTheme(event.matches ? "dark" : "light");
    }

    systemPreference.addEventListener("change", handleSystemThemeChange);

    return () => {
      systemPreference.removeEventListener("change", handleSystemThemeChange);
    };
  }, [commitTheme]);

  const value = useMemo(
    () => ({
      resolvedTheme,
      setTheme,
      theme: resolvedTheme,
      themes: ["light", "dark"],
    }),
    [resolvedTheme, setTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function Providers({ children }) {
  return (
    <AppContext.Provider value={{}}>
      <LocalThemeProvider>{children}</LocalThemeProvider>
    </AppContext.Provider>
  );
}
