# Deployment Manual: Page-Speed & Core Web Vitals Optimization Suite

## 1. Prerequisites
- Node.js 18.0.0 or higher
- Cloudflare Wrangler CLI (`npm install -g wrangler`)
- Cloudflare D1 Database binding (`speed_db`)

## 2. Local Verification
```bash
cd engine/pagespeed_optimization_engine
npm install
npx ts-node src/demo_runner.ts
```

## 3. Edge Gateway Deployment
```bash
cd engine/edge_pagespeed_gateway
npm install
npx wrangler d1 create speed_db
# Paste database_id into wrangler.toml
npx wrangler d1 execute speed_db --file=schema.sql
npx wrangler deploy
```

## 4. Key Performance Budgets
- `TARGET_LCP_MS`: Default `1200` (< 1.2s)
- `TARGET_INP_MS`: Default `100` (< 100ms)
- `TARGET_CLS_SCORE`: Default `0.00`
- `LONG_TASK_THRESHOLD_MS`: Default `50`
