/**
 * Dual-Currency PageSpeed Retainer Invoicing Engine
 * Handles USD and INR billing, GST calculations, and LUT export compliance.
 */

export interface SpeedInvoice {
  invoiceNumber: string;
  clientName: string;
  tier: 'starter_500' | 'complete_1500' | 'enterprise_3000';
  currency: 'USD' | 'INR';
  baseAmount: number;
  taxAmount: number; // 0 for export under LUT, 18% for domestic INR
  totalPayable: number;
  paymentMethod: 'UPI' | 'PayPal';
  remittanceDetails: string;
  generatedDate: string;
}

export class PagespeedInvoicingEngine {
  private readonly domesticGstRate = 0.18;
  private readonly upiHandle = "milind.chatrabhuji@okhdfcbank";
  private readonly payPalHandle = "milind.chatrabhuji@gmail.com";

  public generateInvoice(
    clientName: string,
    tier: 'starter_500' | 'complete_1500' | 'enterprise_3000',
    currency: 'USD' | 'INR',
    isDomesticIndia: boolean = false
  ): SpeedInvoice {
    let baseAmount = 500;
    if (tier === 'complete_1500') baseAmount = 1500;
    if (tier === 'enterprise_3000') baseAmount = 3000;

    if (currency === 'INR') {
      baseAmount = baseAmount * 84;
    }

    const taxAmount = isDomesticIndia ? Math.round(baseAmount * this.domesticGstRate) : 0;
    const totalPayable = baseAmount + taxAmount;

    return {
      invoiceNumber: `INV-${Date.now().toString().slice(-6)}`,
      clientName,
      tier,
      currency,
      baseAmount,
      taxAmount,
      totalPayable,
      paymentMethod: isDomesticIndia ? 'UPI' : 'PayPal',
      remittanceDetails: isDomesticIndia ? `Direct Bank UPI: ${this.upiHandle}` : `PayPal Global: ${this.payPalHandle}`,
      generatedDate: new Date().toISOString()
    };
  }
}
