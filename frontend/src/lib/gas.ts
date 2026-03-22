/**
 * Google Apps Script Web App URL
 * Replace with your deployed URL after setup
 */
export const GAS_URL = 'https://script.google.com/macros/s/AKfycbzG8iierdduISqfW57JpuA_6Huk9MC9gXCGwHKg-4cLLwJ3GwLXoJmkBIcw_oRhmJVEPg/exec';

/**
 * Razorpay Key (use test in dev, live in prod)
 */
export const RAZORPAY_KEY_ID = 'rzp_test_xxxxxxxxxxxxxxxxxxxxxxxxxx';

/**
 * Send data to Google Apps Script
 */
export const fetchToGAS = async (data: Record<string, any>): Promise<void> => {
  try {
    const res = await fetch(GAS_URL, {
      method: 'POST',
      body: JSON.stringify(data), // keep it raw for GAS compatibility
    });

    const text = await res.text();

    let result;
    try {
      result = JSON.parse(text);
    } catch {
      throw new Error('Invalid response from server');
    }

    if (!res.ok || !result.success) {
      throw new Error(result?.error || 'GAS submission failed');
    }

  } catch (err: any) {
    console.error('GAS Error:', err.message);
    throw err;
  }
};