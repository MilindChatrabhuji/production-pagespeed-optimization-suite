/**
 * Core Web Vitals Performance Budget Tracker & Regression Alerting
 * Evaluates CI/CD or production telemetry against strict SLAs.
 */

export interface CWVBudgetThresholds {
  maxLcpMs: number;
  maxInpMs: number;
  maxCls: number;
  minLighthouseScore: number;
  maxTotalJsBytes: number;
}

export class CWVBudgetMonitor {
  private thresholds: CWVBudgetThresholds;

  constructor(thresholds: CWVBudgetThresholds = {
    maxLcpMs: 2500,
    maxInpMs: 200,
    maxCls: 0.10,
    minLighthouseScore: 90,
    maxTotalJsBytes: 250000
  }) {
    this.thresholds = thresholds;
  }

  public checkBudget(metrics: { lcpMs: number; inpMs: number; cls: number; score: number; jsBytes: number }): { passed: boolean; violations: string[] } {
    const violations: string[] = [];
    if (metrics.lcpMs > this.thresholds.maxLcpMs) {
      violations.push(`LCP regression: ${metrics.lcpMs}ms exceeds budget limit of ${this.thresholds.maxLcpMs}ms`);
    }
    if (metrics.inpMs > this.thresholds.maxInpMs) {
      violations.push(`INP regression: ${metrics.inpMs}ms exceeds budget limit of ${this.thresholds.maxInpMs}ms`);
    }
    if (metrics.cls > this.thresholds.maxCls) {
      violations.push(`CLS regression: ${metrics.cls} exceeds budget limit of ${this.thresholds.maxCls}`);
    }
    if (metrics.score < this.thresholds.minLighthouseScore) {
      violations.push(`Lighthouse regression: Score ${metrics.score} below guaranteed SLA of ${this.thresholds.minLighthouseScore}`);
    }
    if (metrics.jsBytes > this.thresholds.maxTotalJsBytes) {
      violations.push(`Bundle size budget exceeded: ${metrics.jsBytes} bytes vs allowed ${this.thresholds.maxTotalJsBytes} bytes`);
    }

    return {
      passed: violations.length === 0,
      violations
    };
  }
}
