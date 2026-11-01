/**
 * Cumulative Layout Shift (CLS) Intrinsic Dimension In-Filler
 * Calculates intrinsic aspect-ratio and injects missing width/height attributes into image and iframe elements.
 */

export class ClsDimensionInfill {
  public infillMissingDimensions(html: string, defaultWidth: number = 800, defaultHeight: number = 600): string {
    return html.replace(/<img\b(?![^>]*\b(width|height)=)([^>]*)>/gi, (match, p1) => {
      return `<img width="${defaultWidth}" height="${defaultHeight}" style="aspect-ratio: ${defaultWidth}/${defaultHeight};" ${p1}>`;
    });
  }

  public generateFontFallbacks(fontFamily: string, fallbackFamily: string, sizeAdjustPct: number = 100): string {
    return `@font-face {
  font-family: '${fontFamily}-fallback';
  src: local('${fallbackFamily}');
  size-adjust: ${sizeAdjustPct}%;
}`;
  }
}
