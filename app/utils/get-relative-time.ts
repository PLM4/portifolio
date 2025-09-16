export function getRelativeTimeString(
  date: Date | number,
  lang = navigator.language
): string {
  const timeMs = typeof date === "number" ? date : date.getTime();

  const deltaSeconds = Math.floor((timeMs - Date.now()) / 1000);

  const cutoffs = [60, 3600, 86400, 604800, 2419200, 29030400, Infinity];

  const units: Intl.RelativeTimeFormatUnit[] = [
    "second",
    "minute",
    "hour",
    "day",
    "week",
    "month",
    "year",
  ];

  const unitIndex = cutoffs.findIndex(
    (cutoff) => Math.abs(deltaSeconds) < cutoff
  );

  const divisor = unitIndex === 0 ? 1 : cutoffs[unitIndex - 1];

  const rtf = new Intl.RelativeTimeFormat(lang, { numeric: "auto" });
  return rtf.format(Math.round(deltaSeconds / divisor), units[unitIndex]);
}
