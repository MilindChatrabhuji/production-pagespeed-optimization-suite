-- Production Page-Speed & Core Web Vitals D1 Database Schema
CREATE TABLE IF NOT EXISTS speed_audit_jobs (
  id TEXT PRIMARY KEY,
  target_url TEXT NOT NULL,
  lcp_score_ms INTEGER NOT NULL,
  inp_score_ms INTEGER NOT NULL,
  cls_score REAL NOT NULL,
  lighthouse_score INTEGER NOT NULL DEFAULT 95,
  status TEXT NOT NULL DEFAULT 'completed',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS rum_beacons (
  id TEXT PRIMARY KEY,
  job_id TEXT,
  url TEXT NOT NULL,
  lcp_ms INTEGER NOT NULL,
  inp_ms INTEGER NOT NULL,
  cls_score REAL NOT NULL,
  device_type TEXT NOT NULL DEFAULT 'mobile',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (job_id) REFERENCES speed_audit_jobs(id)
);

CREATE TABLE IF NOT EXISTS crux_metrics_summary (
  id TEXT PRIMARY KEY,
  domain TEXT NOT NULL,
  p75_lcp INTEGER NOT NULL,
  p75_inp INTEGER NOT NULL,
  p75_cls REAL NOT NULL,
  overall_rating TEXT NOT NULL DEFAULT 'good',
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_beacons_url ON rum_beacons(url);
CREATE INDEX IF NOT EXISTS idx_jobs_target ON speed_audit_jobs(target_url);
