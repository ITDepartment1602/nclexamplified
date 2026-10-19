import fileNames from "virtual:calendar-images";

export interface CalendarCycle {
  /** File name, unique within the folder — used as the React key. */
  id: string;
  /** Public URL of the image. */
  url: string;
  /** Label shown in the badge and under the active thumbnail. */
  title: string;
}

const MONTHS = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

/**
 * Ordering tiers, applied before the tier-specific sort value:
 *   0 — file name starts with a number ("01 - May.jpg") → that number wins
 *   1 — file name contains a month ("May.jpg", "May 2026.jpg") → chronological
 *   2 — anything else → alphabetical, pushed to the end
 */
function sortInfo(baseName: string) {
  const numericPrefix = baseName.match(/^(\d+)\s*[-_.]?\s+|^(\d+)[-_.]/);
  if (numericPrefix) {
    return { tier: 0, value: Number(numericPrefix[1] ?? numericPrefix[2]) };
  }

  const lower = baseName.toLowerCase();
  const monthIndex = MONTHS.findIndex((month) =>
    new RegExp(`\\b${month.slice(0, 3)}[a-z]*\\b`).test(lower),
  );
  if (monthIndex !== -1) {
    const year = Number(baseName.match(/\b(19|20)\d{2}\b/)?.[0] ?? 0);
    return { tier: 1, value: year * 12 + monthIndex };
  }

  return { tier: 2, value: 0 };
}

/** "01 - May 2026.jpg" → "May 2026" */
function toTitle(baseName: string) {
  return baseName
    .replace(/^\d+\s*[-_.]?\s+|^\d+[-_.]/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Every image in `public/calendar`, newest cycle last.
 *
 * To publish a new cycle, just drop the image into that folder — the file name
 * becomes the label, so name it after the cycle ("September 2026.jpg"). Prefix
 * with a number ("01 - September.jpg") if you want to force a specific order.
 */
export const calendarCycles: CalendarCycle[] = fileNames
  .map((fileName) => {
    const baseName = fileName.replace(/\.[^.]+$/, "");
    return {
      fileName,
      baseName,
      ...sortInfo(baseName),
    };
  })
  .sort(
    (a, b) =>
      a.tier - b.tier ||
      a.value - b.value ||
      a.baseName.localeCompare(b.baseName),
  )
  .map(({ fileName, baseName }) => ({
    id: fileName,
    url: `/calendar/${encodeURIComponent(fileName)}`,
    title: toTitle(baseName),
  }));

// Managed in the IT dashboard: nclex/admin-it/manage_testimonials (Manage Landing Page → NCLEX Cycle Calendar)
const CALENDAR_API =
  import.meta.env.VITE_CALENDAR_API ||
  "https://app.nclexamplifiedreviewcenter.com/nclex/admin-it/manage_testimonials/calendar_api.php";

interface ApiCalendarCycle {
  id: number;
  title: string;
  url: string;
}

/** Live cycles from the dashboard, in the order set there. Throws when unreachable. */
export async function fetchCalendarCycles(): Promise<CalendarCycle[]> {
  const res = await fetch(CALENDAR_API, { cache: "no-store" });
  if (!res.ok) throw new Error(`Calendar API responded ${res.status}`);
  const data: { cycles?: ApiCalendarCycle[] } = await res.json();
  if (!Array.isArray(data.cycles)) throw new Error("Calendar API returned no cycles list");
  return data.cycles.map((c) => ({
    id: String(c.id),
    url: c.url,
    title: c.title,
  }));
}
