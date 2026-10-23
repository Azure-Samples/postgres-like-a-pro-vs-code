/**
 * Tabler outline icons, inlined at build time (no icon font, no runtime JS).
 * Add a name to the glob and to IconName to make it available to <Icon name="…" />.
 */
const files = import.meta.glob<string>(
  '/node_modules/@tabler/icons/icons/outline/{sun,moon,arrow-right,arrow-up-right,brand-github,copy,check,player-play,player-pause,plug-connected,code,message-chatbot,robot,arrows-right-left,activity,brand-youtube,cloud,puzzle}.svg',
  { query: '?raw', import: 'default', eager: true },
);

/**
 * Filled brand marks that Tabler doesn't have, stored unmodified in src/assets/icons/.
 * `brand-postgresql` (Devicon, MIT) is unused, kept; the loader stays for any future filled mark.
 * Their own fill colours are dropped at build time so the mark takes currentColor.
 */
const brandFiles: Record<string, string> = {
  'brand-postgresql': Object.values(
    import.meta.glob<string>('/src/assets/icons/devicon-postgresql-plain.svg', { query: '?raw', import: 'default', eager: true }),
  )[0],
};

export type IconName =
  | 'sun' | 'moon' | 'arrow-right' | 'arrow-up-right' | 'brand-github' | 'copy' | 'check'
  | 'player-play' | 'player-pause' | 'plug-connected' | 'code' | 'message-chatbot' | 'robot'
  | 'arrows-right-left' | 'activity' | 'brand-youtube' | 'cloud' | 'brand-postgresql' | 'puzzle';

const byName = new Map(
  Object.entries(files).map(([path, svg]) => [path.split('/').pop()!.replace('.svg', ''), svg]),
);

// Filled marks are wrapped so they ignore the outline icons' stroke settings.
for (const [name, svg] of Object.entries(brandFiles)) {
  const body = svg
    .replace(/^[\s\S]*?<svg[^>]*>/, '')
    .replace(/<\/svg>\s*$/, '')
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace(/\sfill="[^"]*"/g, '');
  // Fit the file's own viewBox into Icon.astro's 24-unit box.
  const box = Number(svg.match(/viewBox="0 0 ([\d.]+)/)?.[1] ?? 24);
  byName.set(name, `<svg><g fill="currentColor" stroke="none" transform="scale(${24 / box})">${body}</g></svg>`);
}

/** Inner SVG markup (paths only) for an icon; the <svg> wrapper is rendered by Icon.astro. */
export function iconBody(name: IconName): string {
  const svg = byName.get(name);
  if (!svg) throw new Error(`Unknown icon: ${name}`);
  return svg.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
}
