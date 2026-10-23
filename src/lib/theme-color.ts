import tokens from '../styles/tokens.css?raw';

/** A token's value inside the block that opens with `selector {`. Fails the build if it's missing. */
function tokenIn(selector: string, token: string): string {
  const start = tokens.indexOf(`${selector} {`);
  const block = start < 0 ? '' : tokens.slice(start, tokens.indexOf('}', start));
  const value = block.match(new RegExp(`${token}:\\s*([^;]+);`))?.[1].trim();
  if (!value) throw new Error(`theme-color: ${token} not found in tokens.css under ${selector}`);
  return value;
}

/** The browser UI colour (<meta name="theme-color">) in each theme: --color-bg, read from tokens.css at build time. */
export const themeColor = {
  light: tokenIn(':root', '--color-bg'),
  dark: tokenIn(":root[data-theme='dark']", '--color-bg'),
};
