/**
 * Above-the-Fold Critical CSS Extractor
 * Generates inline critical style blocks and defers non-critical stylesheets asynchronously.
 */

export class CriticalCssExtractor {
  public inlineCriticalCss(criticalStyles: string, nonCriticalCssUrls: string[]): string {
    const inlineBlock = `<style id="critical-css">${criticalStyles.trim()}</style>`;
    const asyncLinks = nonCriticalCssUrls.map(url => {
      return `<link rel="preload" href="${url}" as="style" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="${url}"></noscript>`;
    }).join('\n');

    return `${inlineBlock}\n${asyncLinks}`;
  }
}
