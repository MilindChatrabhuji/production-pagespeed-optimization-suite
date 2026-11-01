# Client Delivery Workflow: Page-Speed Optimization Retainers

## Phase 1: Baseline Speed Audit & Tag Ingestion (Days 1-3)
1. Send `CLIENT_SPEED_AUDIT_BRIEF.md` to client technical lead.
2. Run automated CrUX and Lighthouse scans across key landing pages and checkout templates.
3. Quantify render-blocking scripts, unoptimized hero images, and layout-shifting elements.

## Phase 2: Edge HTMLRewriter & Asset Pipeline (Days 4-7)
1. Deploy Cloudflare Workers edge gateway with `pagespeed_edge_optimizer.ts`.
2. Configure inline critical CSS extraction and asynchronous font loading.
3. Inject `fetchpriority="high"` and responsive `srcset` on hero media.
4. Offload heavy marketing scripts (GTM, Meta Pixel, Hotjar) to Web Workers via Partytown.

## Phase 3: RUM Telemetry & Retainer SLA (Day 8 onwards)
1. Connect Real User Monitoring beacon (`crux_rum_aggregator.ts`) to track field data.
2. Execute `PAGESPEED_OPTIMIZATION_SERVICE_AGREEMENT.md` ($500 / $1,500 / $3,000 monthly tiers).
3. Deliver monthly Core Web Vitals compliance certifications guaranteeing 90+ mobile scores.
