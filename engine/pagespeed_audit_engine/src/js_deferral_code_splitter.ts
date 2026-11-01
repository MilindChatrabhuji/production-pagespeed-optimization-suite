/**
 * Render-Blocking JavaScript Deferral & Web Worker Offloader
 * Converts synchronous script tags to defer/module, and offloads third-party analytics to Web Workers.
 */

export class JsDeferralCodeSplitter {
  public deferRenderBlockingScripts(html: string): string {
    // Add defer attribute to external scripts lacking async or defer
    return html.replace(/<script\b(?![^>]*\b(async|defer|type="module"))([^>]*\bsrc=[^>]*)>/gi, (match, p1) => {
      return `<script defer${p1}>`;
    });
  }

  public offloadThirdPartyToWorker(thirdPartyDomains: string[], html: string): string {
    let output = html;
    for (const domain of thirdPartyDomains) {
      const regex = new RegExp(`<script\b([^>]*\bsrc=["'][^"']*${domain}[^"']*["'][^>]*)><\/script>`, 'gi');
      output = output.replace(regex, (match, attrs) => {
        return `<script type="text/partytown"${attrs}></script>`;
      });
    }
    return output;
  }
}
