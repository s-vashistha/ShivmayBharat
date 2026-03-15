# Prakriti Foundation - Full Setup Guide

## 🎉 Features
- Bilingual React site (EN/HI).
- Forms: Contact, Get Involved → Google Sheets.
- Donate: Razorpay UPI QR scan (preferred) + cards → Sheets with payment details.

## 🚀 Quick Start (Dev)
```bash
cd frontend
npm install
npm run dev
```
Open http://localhost:5173

## 🔧 Owner Setup (One-Time ~10min)

### 1. Google Sheets + Apps Script (Forms Data)
1. [sheets.google.com](sheets.google.com) > New Sheet.
2. Tabs + Headers:
   ```
   Contact: Timestamp | name | email | phone | subject | message
   GetInvolved: Timestamp | firstName | lastName | email | phone | interest
   Donate: Timestamp | donorName | email | phone | amount | payment_id | status | method
   ```
3. [script.google.com](script.google.com) > New > Paste from `frontend/src/lib/gas.ts` Code.gs.
4. Replace `YOUR_SHEET_ID` (sheet URL: /d/ID/edit).
5. Deploy > New > Web app > Me/Anyone > Copy URL to `gas.ts` GAS_URL.
6. Test form → Data in Sheet.

### 2. Razorpay (Payments)
1. [razorpay.com](razorpay.com) > Sign up > Dashboard > API Keys.
2. Copy **Test Key** (`rzp_test_...`) to `gas.ts` RAZORPAY_KEY_ID.
3. Test: /donate → Amount 1000 → Pay (QR scan UPI).
   - Test UPI: Any UPI ID, OTP 123456.
4. Production: Switch live key.

### 3. Production Deploy
```bash
cd frontend
npm run build
```
Serve `dist/` (Vercel/Netlify).

## 📱 QR Scan
- Razorpay auto-preferences UPI QR (GPay/PhonePe scan).
- method='upi_qr' in Sheet.

## 🔍 Test Pages
- http://localhost:5173/contact
- http://localhost:5173/get-involved
- http://localhost:5173/donate ← QR payments


Support: Update keys in `gas.ts`. All data in your Sheet!


