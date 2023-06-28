import dayjs from "dayjs";
import "dayjs/locale/fr";
import isBetween from "dayjs/plugin/isBetween";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
import weekday from "dayjs/plugin/weekday";

dayjs.locale("fr");

dayjs.extend(updateLocale);
dayjs.extend(relativeTime);
dayjs.extend(isBetween);
dayjs.extend(updateLocale);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(weekday);
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

export function formatDateCustom(date: Date, format: string): string {
  return dayjs(date).format(format);
}

export function formatOptionalDate(date: Date | undefined | null): string | undefined {
  if (!date) return undefined;
  return formatDate(date);
}

export function formatDateTime(date: Date): string {
  return dayjs(date).format("DD/MM/YYYY [à] HH:mm");
}

export function formatFromNow(date: Date): string {
  return dayjs(date).fromNow(true);
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

export function addXDaysToDate(date: Date, days: number): Date {
  return dayjs(date).add(days, "day").toDate();
}

export function removeXDaysToDate(date: Date, days: number): Date {
  return dayjs().subtract(days, "day").toDate();
}

export function getEndOfMonthDate(date: Date): Date {
  return dayjs(date).endOf("month").toDate();
}

export function getCurrentDayOfWeek(): number {
  return dayjs().weekday();
}

export function getCurrentDay(dayOfWeek: number): string {
  return dayjs().day(dayOfWeek).format("dddd");
}

export function getDateFromString(date: string): Date {
  return dayjs(date, "DD/MM/YYYY", true).toDate();
}

export function isDateValid(date: Date): boolean {
  return dayjs(date).isValid();
}

export function isSameDate(date1: Date, date2?: Date): boolean {
  if (!date2) return false;
  return dayjs(date1).isSame(dayjs(date2), "day");
}

export function isDateBefore(date: Date, targetDate: Date | string): boolean {
  return dayjs(date).isSameOrBefore(dayjs(targetDate), "day");
}

export function isDateAfter(date: Date, targetDate: Date | string): boolean {
  return dayjs(date).isSameOrAfter(dayjs(targetDate), "day");
}

export function isDateOutsideRange(date: Date, afterDate?: Date, beforeDate?: Date): boolean {
  return !dayjs(date).isBetween(beforeDate, afterDate, "day");
}

export function getYear(date?: Date): number {
  if (!date || !isDateValid(date)) {
    return dayjs().year();
  }

  return dayjs(date).year();
}
