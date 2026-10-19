/**
 * Nursing-tool silhouettes used by the preloader.
 *
 * Each icon is drawn in a 100×100 box as solid shapes (`shape`) with detail
 * lines cut out of them (`cut`) through an SVG mask. They are rasterised once
 * into sprites, so the per-frame cost is a drawImage.
 */

type Icon = {
  /** Solid parts, unioned. Elements with fill="none" are stroked. */
  shape: string;
  /** Detail lines (stroked) and holes (filled) cut out of the silhouette. */
  cut: string;
  /** Optional tilt in degrees, applied to shape and cut together. */
  rotate?: number;
};

const ICONS: Icon[] = [
  // Stethoscope
  {
    shape: `
      <path d="M30 14V36C30 50 39 60 50 60S70 50 70 36V14" fill="none" stroke-width="7" stroke-linecap="round"/>
      <circle cx="30" cy="11" r="5.5"/>
      <circle cx="70" cy="11" r="5.5"/>
      <path d="M50 60V70C50 80 56 84 63 84" fill="none" stroke-width="6" stroke-linecap="round"/>
      <circle cx="73" cy="82" r="13"/>`,
    cut: `<circle cx="73" cy="82" r="5.5"/>`,
  },
  // Syringe
  {
    rotate: 45,
    shape: `
      <rect x="38" y="3" width="24" height="6" rx="2.5"/>
      <rect x="46.5" y="8" width="7" height="16"/>
      <rect x="32" y="21" width="36" height="6" rx="2.5"/>
      <rect x="39" y="25" width="22" height="44" rx="3"/>
      <rect x="44.5" y="68" width="11" height="8" rx="1.5"/>
      <rect x="48.6" y="75" width="2.8" height="22" rx="1.2"/>`,
    cut: `<path d="M46 36H54M46 44H51M46 52H54M46 60H51" stroke-width="2.6" stroke-linecap="round" fill="none"/>`,
  },
  // Nurse cap
  {
    shape: `<path d="M14 72L25 32C38 24 62 24 75 32L86 72C64 64 36 64 14 72Z"/>`,
    cut: `
      <rect x="45" y="32" width="10" height="24" rx="1.5"/>
      <rect x="38" y="39" width="24" height="10" rx="1.5"/>
      <path d="M20 62C38 56 62 56 80 62" stroke-width="3" fill="none"/>`,
  },
  // Heart with heartbeat
  {
    shape: `<path d="M50 88C20 68 8 52 8 34C8 20 19 11 31 11C39 11 46 15 50 22C54 15 61 11 69 11C81 11 92 20 92 34C92 52 80 68 50 88Z"/>`,
    cut: `<path d="M14 47H34L40 35L49 62L57 39L62 47H86" stroke-width="5" stroke-linejoin="round" stroke-linecap="round" fill="none"/>`,
  },
  // Capsule
  {
    rotate: 45,
    shape: `<rect x="33" y="8" width="34" height="84" rx="17"/>`,
    cut: `
      <path d="M33 50H67" stroke-width="3.5" fill="none"/>
      <path d="M42 22V38" stroke-width="3.5" stroke-linecap="round" fill="none"/>`,
  },
  // Clipboard with checklist
  {
    shape: `
      <rect x="20" y="14" width="60" height="80" rx="7"/>
      <rect x="35" y="5" width="30" height="18" rx="5"/>`,
    cut: `
      <rect x="43" y="10" width="14" height="5" rx="2.5"/>
      <path d="M30 23H70" stroke-width="3" fill="none"/>
      <path d="M30 41l4.5 4.5 8-8M30 59l4.5 4.5 8-8M30 77l4.5 4.5 8-8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M50 42H70M50 60H70M50 78H64" stroke-width="4" stroke-linecap="round" fill="none"/>`,
  },
  // Thermometer
  {
    rotate: 35,
    shape: `
      <rect x="41" y="4" width="18" height="70" rx="9"/>
      <circle cx="50" cy="79" r="15"/>`,
    cut: `
      <path d="M41 20H48M41 30H45M41 40H48M41 50H45M41 60H48" stroke-width="2.6" fill="none"/>
      <circle cx="50" cy="79" r="8" fill="none" stroke-width="2.6"/>`,
  },
  // First-aid kit
  {
    shape: `
      <path d="M37 26V18C37 15 39 13 42 13H58C61 13 63 15 63 18V26" fill="none" stroke-width="6"/>
      <rect x="10" y="25" width="80" height="62" rx="10"/>`,
    cut: `
      <rect x="44" y="39" width="12" height="34" rx="2"/>
      <rect x="33" y="50" width="34" height="12" rx="2"/>`,
  },
];

/** Standalone SVG markup for icon `i`, filled with `color`. */
export function iconSvg(i: number, color: string): string {
  const icon = ICONS[i % ICONS.length];
  const tf = icon.rotate ? ` transform="rotate(${icon.rotate} 50 50)"` : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs><mask id="m" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
    <rect width="100" height="100" fill="#fff"/>
    <g fill="#000" stroke="#000" stroke-width="0"${tf}>${icon.cut}</g>
  </mask></defs>
  <g mask="url(#m)"><g fill="${color}" stroke="${color}" stroke-width="0"${tf}>${icon.shape}</g></g>
</svg>`;
}

export const ICON_COUNT = ICONS.length;
