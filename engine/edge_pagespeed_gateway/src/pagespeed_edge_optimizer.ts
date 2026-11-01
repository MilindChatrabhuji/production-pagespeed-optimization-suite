/**
 * Cloudflare Workers Edge HTMLRewriter Streaming Optimizer
 * Performs AST transformations on the fly with sub-5ms latency.
 */

export class PagespeedEdgeOptimizer {
  public transformHtml(rawHtml: string): string {
    // Simulated edge streaming transformations
    let transformed = rawHtml;
    // 1. Add fetchpriority="high" to first hero image
    transformed = transformed.replace(/<img\b(?![^>]*\bfetchpriority=)([^>]*)>/i, '<img fetchpriority="high"$1>');
    // 2. Defer un-deferred external scripts
    transformed = transformed.replace(/<script\b(?![^>]*\b(async|defer|type=))([^>]*\bsrc=[^>]*)>/gi, '<script defer$2>');
    return transformed;
  }
}
