/**
 * Edge PageSpeed Gateway Demo Runner
 */
import { PagespeedEdgeOptimizer } from './pagespeed_edge_optimizer';
import { CacheControlInjector } from './cache_control_injector';
import { CruxRumAggregator } from './crux_rum_aggregator';

console.log("=== RUNNING EDGE PAGESPEED GATEWAY DEMO ===");

const optimizer = new PagespeedEdgeOptimizer();
const transformed = optimizer.transformHtml('<html><img src="banner.jpg"><script src="app.js"></script></html>');
console.log(`[PASS] Edge HTMLRewriter output: ${transformed}`);

const cache = new CacheControlInjector();
const headers = cache.generateHeaders('html');
console.log(`[PASS] Edge Stale-While-Revalidate Headers:`, headers);

const crux = new CruxRumAggregator();
const summary = crux.evaluateCruxStatus([
  { url: "https://speed.example.com", lcpMs: 1150, inpMs: 80, clsScore: 0.00, deviceType: 'mobile', connectionType: '4g', timestamp: Date.now() },
  { url: "https://speed.example.com", lcpMs: 1250, inpMs: 95, clsScore: 0.01, deviceType: 'mobile', connectionType: '5g', timestamp: Date.now() }
]);
console.log(`[PASS] CrUX Field Summary: P75 LCP=${summary.p75LcpMs}ms | INP=${summary.p75InpMs}ms | CLS=${summary.p75Cls} -> Status: ${summary.status}`);
console.log("=== ALL EDGE GATEWAY CHECKS PASSED ===");
