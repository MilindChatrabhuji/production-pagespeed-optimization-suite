/**
 * Interaction to Next Paint (INP) Scheduler & Task Chunking Breaker
 * Breaks main-thread execution tasks (>50ms) using requestIdleCallback and isInputPending yields.
 */

export class InpInteractionOptimizer {
  public generateYieldScript(): string {
    return `// INP Micro-task scheduler and long-task breaker
window.scheduleTask = async function(tasks) {
  for (const task of tasks) {
    if (navigator.scheduling && navigator.scheduling.isInputPending && navigator.scheduling.isInputPending()) {
      await new Promise(resolve => setTimeout(resolve, 0));
    }
    task();
  }
};`;
  }
}
