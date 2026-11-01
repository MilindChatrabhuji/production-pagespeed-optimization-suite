/**
 * Core Web Vitals Type Definitions
 */

export interface MetricBudget {
  lcpTargetMs: number; // e.g. 1200ms
  inpTargetMs: number; // e.g. 100ms
  clsTarget: number;   // e.g. 0.00
}

export interface OptimizationResult {
  originalSize: number;
  optimizedSize: number;
  savingsPct: number;
  transformationsApplied: string[];
}
