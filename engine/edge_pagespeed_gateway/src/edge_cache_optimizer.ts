/**
 * Edge Cache-Control & Compression Header Injector
 * Injects stale-while-revalidate, immutable asset rules, and Brotli/Zstandard tags.
 */

export class CacheControlInjector {
  public generateHeaders(assetType: 'html' | 'static_asset' | 'api'): Record<string, string> {
    if (assetType === 'static_asset') {
      return {
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Vary': 'Accept-Encoding'
      };
    }
    if (assetType === 'html') {
      return {
        'Cache-Control': 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800',
        'Vary': 'Accept-Encoding, Accept'
      };
    }
    return {
      'Cache-Control': 'no-store, no-cache, must-revalidate'
    };
  }
}
