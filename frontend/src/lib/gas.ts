/**
 * Google Apps Script URLs - REPLACE with your deployed Web App URLs after setup
 * 
 * Setup Instructions (do once):
 * 1. Create new Google Sheet: Add tabs 'Contact', 'Donate', 'GetInvolved'
 *    - Contact headers: Timestamp, name, email, phone, subject, message
 *    - Donate headers: Timestamp, donorName, email, phone, amount, method
 *    - GetInvolved headers: Timestamp, firstName, lastName, email, phone, interest
 * 2. New Apps Script project, paste Code.gs (below), replace SHEET_ID
 * 3. Deploy > New Deployment > Web app > Execute as: Me > Who: Anyone
 * 4. Copy Web app URL here, update this file
 */

export const GAS_URL = 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec';

export const RAZORPAY_KEY_ID = 'rzp_test_xxxxxxxxxxxxxxxxxxxxxxxxxx'; // Owner: Get from dashboard.razorpay.com > Test Key (rzp_test_...) for dev, live for prod

/**
 * Update Donate Sheet headers: Timestamp, donorName, email, phone, amount, payment_id, status, method
 * Update Code.gs donate case: appendRow([timestamp, data.donorName, data.email, data.phone, data.amount, data.payment_id, data.status, data.method || 'razorpay']);
 */

/**
 * Code.gs Template - Paste into Apps Script:
 * 
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const timestamp = new Date();
    
    let sheet;
    if (data.formType === 'contact') {
      sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getSheetByName('Contact');
      sheet.appendRow([timestamp, data.name, data.email, data.phone, data.subject, data.message]);
    } else if (data.formType === 'donate') {
      sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getSheetByName('Donate');
      sheet.appendRow([timestamp, data.donorName, data.email, data.phone, data.amount, data.method || 'Online']);
    } else if (data.formType === 'getinvolved') {
      sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getSheetByName('GetInvolved');
      sheet.appendRow([timestamp, data.firstName, data.lastName, data.email, data.phone, data.interest]);
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
 */

