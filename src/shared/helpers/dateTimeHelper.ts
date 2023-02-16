import { addMilliseconds, format, isValid } from "date-fns";
import { getTimezoneOffset } from "date-fns-tz";

import { TAppDate } from "../types/appDate";

export const parseDateTime = (
  date: string | Date | undefined | null
): Date | null => {
  if (date instanceof Date) return date;

  if (date === undefined || date === null) return null;

  const newDate = new Date(date);

  if (!isValid(newDate)) return null;

  return addTimeZoneOffset(newDate);
};

export const dateTimeToString = (date: TAppDate) => {
  if (date === null || !isValid(date)) return "";

  const dateWithOffset = removeTimeZoneOffset(date);

  return format(dateWithOffset, "yyyy-MM-dd'T'HH:mm:ss");
};

export const toAppDateFormat = (date: Date | null) => {
  if (date === null || !isValid(date)) return "";

  const dateWithOffset = addTimeZoneOffset(date);

  return format(dateWithOffset, "dd.MM.yyyy");
};

export const addTimeZoneOffset = (date: Date) => {
  const timeZoneOffset = getTimezoneOffset(
    process.env.REACT_APP_TIMEZONE ?? "",

    date
  );

  return addMilliseconds(date, timeZoneOffset);
};

export const removeTimeZoneOffset = (date: Date) => {
  const timeZoneOffset = getTimezoneOffset(
    process.env.REACT_APP_TIMEZONE ?? "",

    date
  );

  return addMilliseconds(date, -timeZoneOffset);
};
