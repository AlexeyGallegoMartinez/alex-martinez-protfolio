import { fallbackLng, languages } from "@/app/i18n/settings";

export { fallbackLng, languages };

export function isSupportedLanguage(lng) {
  return languages.includes(lng);
}

export function getPathLanguage(pathname = "") {
  const segment = pathname.split("/")[1];
  return isSupportedLanguage(segment) ? segment : fallbackLng;
}

export function stripLanguageFromPath(pathname = "") {
  if (!pathname || pathname === "/") {
    return "/";
  }

  const [, maybeLng, ...rest] = pathname.split("/");

  if (!isSupportedLanguage(maybeLng)) {
    return pathname;
  }

  const strippedPath = `/${rest.join("/")}`.replace(/\/+/g, "/");

  if (strippedPath === "/" || strippedPath === "") {
    return "/";
  }

  return strippedPath.endsWith("/") && strippedPath !== "/"
    ? strippedPath.slice(0, -1)
    : strippedPath;
}

export function replacePathLanguage(pathname = "/", nextLng = fallbackLng) {
  const normalizedPath = stripLanguageFromPath(pathname);
  return normalizedPath === "/" ? `/${nextLng}` : `/${nextLng}${normalizedPath}`;
}

export function localizeValue(value, lng) {
  if (
    value == null ||
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean" ||
    Array.isArray(value)
  ) {
    return value;
  }

  return value[lng] ?? value[fallbackLng];
}

export function getIntlLocale(lng) {
  return lng === "es" ? "es-ES" : "en-US";
}
