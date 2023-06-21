import dayjs from "dayjs";
import "dayjs/locale/fr";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.locale("fr");

dayjs.extend(updateLocale);
dayjs.extend(isSameOrBefore);

dayjs.updateLocale("fr", {
  calendar: {
    lastDay: "[Hier à] HH:mm",
    sameDay: "[Aujourd'hui à] HH:mm",
    nextDay: "[Demain à] HH:mm",
    lastWeek: "dddd [dernier à] HH:mm",
    nextWeek: "dddd [prochain à] HH:mm",
    sameElse: "HH:mm",
  },
  relativeTime: {
    s: "Il y a quelques secondes",
    m: "Il y a une minute",
    mm: "Il y a %d minutes",
    h: "Il y a une heure",
    hh: "Il y a %d heures",
    d: "Il y a un jour",
    dd: "Il y a %d jours",
    M: "Il y a un mois",
    MM: "Il y a %d mois",
    y: "Il y a an",
    yy: "Il y a %d ans",
  },
});

export function formatDate(date: Date): string {
  return dayjs(date).format("DD/MM/YYYY");
}

export function formatOptionalDate(date: Date | undefined | null): string | undefined {
  if (!date) return undefined;
  return formatDate(date);
}

export function formatRangeDate(startDate: Date, endDate: Date): string {
  return `du ${formatDate(startDate)} au ${formatDate(endDate)}`;
}

export function getTodayStartDate(): Date {
  return dayjs().startOf("day").toDate();
}

export function isFutureDay(date: Date): boolean {
  return dayjs(date).isAfter(dayjs(), "day");
}

export function isPastDayOrToday(date: Date): boolean {
  return dayjs(date).isSameOrBefore(dayjs(), "day");
}
