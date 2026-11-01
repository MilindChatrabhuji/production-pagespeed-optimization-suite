/**
 * LCP Hero Image Preloader & Fetchpriority Synthesizer
 * Identifies above-the-fold hero elements, injects fetchpriority="high", and preloads responsive sources.
 */

export interface PreloadDirective {
  imageUrl: string;
  mediaQuery?: string;
  asType: 'image';
  fetchPriority: 'high';
}

export class LcpHeroPreloader {
  public synthesizePreloadTags(heroImages: Array<{ url: string; minWidth?: number }>): string[] {
    return heroImages.map(img => {
      const mediaAttr = img.minWidth ? ` media="(min-width: ${img.minWidth}px)"` : '';
      return `<link rel="preload" as="image" href="${img.url}" fetchpriority="high"${mediaAttr}>`;
    });
  }

  public injectFetchPriority(html: string): string {
    // Inject fetchpriority="high" into the first prominent <img> tag if missing
    let modified = false;
    return html.replace(/<img\b(?![^>]*\bfetchpriority=)([^>]*)>/i, (match, p1) => {
      if (!modified) {
        modified = true;
        return `<img fetchpriority="high"${p1}>`;
      }
      return match;
    });
  }
}
