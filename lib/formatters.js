import { getIntlLocale } from "@/lib/locale";

export function formatMonthYear(dateString, lng) {
  return new Intl.DateTimeFormat(getIntlLocale(lng), {
    month: "short",
    year: "numeric",
  }).format(new Date(dateString));
}

export function formatLongDate(dateString, lng) {
  return new Intl.DateTimeFormat(getIntlLocale(lng), {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(dateString));
}
