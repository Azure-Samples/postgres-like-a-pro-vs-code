const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Render copy text to safe HTML: escape everything, then turn `backticks` into <code>. */
export function inline(text: string): string {
  return escapeHtml(text).replace(/`([^`]+)`/g, '<code>$1</code>');
}

/**
 * Render a two-tone heading: escape everything, then wrap `[[…]]` in the quieter tone.
 * A `\n` is a set line break. The words are unchanged; screen readers hear one heading.
 * The break keeps a space before it: invisible at the end of a line, but it keeps the words
 * apart where a layout hides the <br> (the hero title on phones) and in the accessible name.
 */
export function twoTone(text: string): string {
  return escapeHtml(text)
    .replace(/\[\[([^\]]+)\]\]/g, '<span class="tt-quiet">$1</span>')
    .replace(/\n/g, ' <br />');
}

/** True once a link is real; `{{placeholder}}` hrefs are still waiting on the client. */
export const isResolved = (href: string) => /^https?:\/\//.test(href);

/** Prefix an internal path with the configured base, so it works when the site is served from a sub-path. */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
