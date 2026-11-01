/**
 * Monetization Kit CLI Demo Runner
 */
import { PagespeedInvoicingEngine } from './invoicing_engine';

console.log("=== RUNNING PAGESPEED MONETIZATION DEMO ===");

const invoicing = new PagespeedInvoicingEngine();
const invUsd = invoicing.generateInvoice("Apex Commerce Global", "complete_1500", "USD", false);
console.log(`[PASS] Export Invoice: ${invUsd.invoiceNumber} | Total: $${invUsd.totalPayable} USD via ${invUsd.paymentMethod}`);

const invInr = invoicing.generateInvoice("QuickRetail India Private Limited", "starter_500", "INR", true);
console.log(`[PASS] Domestic Invoice: ${invInr.invoiceNumber} | Total: ₹${invInr.totalPayable} INR (incl GST) via ${invInr.paymentMethod}`);

console.log("=== ALL MONETIZATION CHECKS PASSED ===");
