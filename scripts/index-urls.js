const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

// 1. Load Credentials (Prioritize Environment Variables, Fallback to Local JSON)
let clientEmail, privateKey;

// Check if we are running in CI/CD (GitHub Actions) or Vercel with Environment Variables injected
if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
  console.error('\n[FATAL ERROR] Missing Google Cloud Credentials in Environment Variables!');
  console.error('This script is strictly configured to run via Git Secrets. You must provide GOOGLE_CLIENT_EMAIL and GOOGLE_PRIVATE_KEY in your GitHub Actions Secrets.\n');
  process.exit(1);
}

clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
// Handle escaped newlines in the private key from CI/CD environments
privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');
console.log('Using strictly enforced Google Credentials from Git Secrets.');

// 2. Setup JWT Auth Client using Object Initialization to avoid positional bugs
const jwtClient = new google.auth.JWT({
  email: clientEmail,
  key: privateKey,
  scopes: ['https://www.googleapis.com/auth/indexing']
});

// 3. Initialize the Indexing API
const indexing = google.indexing({
  version: 'v3',
  auth: jwtClient
});

// 4. Load the JSON Index
const searchIndexPath = path.join(__dirname, '../public/search-index.json');
if (!fs.existsSync(searchIndexPath)) {
  console.error('\n[ERROR] public/search-index.json not found! Run generate_json_index.js first.\n');
  process.exit(1);
}

const searchIndex = require(searchIndexPath);

// HARDENING 1: Domain Whitelisting (prevent submitting poisoned/external URLs to your Google Account)
const ALLOWED_DOMAIN = 'https://www.malpanimsoulstrings.com';

// HARDENING 2: Deduplication (prevent sending the exact same URL twice and wasting quota)
let rawUrls = [...new Set(searchIndex.map(item => item.url))];

// Filter only valid URLs
let urlsToPublish = rawUrls.filter(url => url.startsWith(ALLOWED_DOMAIN));

// HARDENING 3: Hard Cap limit of 200 (Google's standard daily limit) to prevent runaway bot loops
if (urlsToPublish.length > 200) {
  console.warn(`[WARNING] Attempted to submit ${urlsToPublish.length} URLs. Truncating to 200 to strictly respect Google API limits.`);
  urlsToPublish = urlsToPublish.slice(0, 200);
}

async function publishUrls() {
  console.log(`Authenticating with Google as ${clientEmail}...`);
  
  await jwtClient.authorize();
  console.log('Successfully Authenticated!\n');

  console.log(`Initiating bulk Google Indexing API submission for ${urlsToPublish.length} URLs...\n`);

  let successCount = 0;
  let failCount = 0;

  for (const url of urlsToPublish) {
    try {
      const response = await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: 'URL_UPDATED' // Force Google to crawl immediately
        }
      });
      
      console.log(`[SUCCESS] Submitted: ${url}`);
      successCount++;
    } catch (error) {
      console.error(`[FAILED] URL: ${url}`);
      console.error(`         Reason: ${error.message}`);
      failCount++;
      
      // HARDENING 4: Quota Protection Kill-Switch
      // If Google explicitly tells us the Quota is exceeded (429 Too Many Requests), stop immediately.
      // Continuing to hammer the API when out of quota will result in a permanent ban.
      if (error.message && error.message.toLowerCase().includes('quota exceeded')) {
        console.error('\n[CRITICAL HARD STOP] Google API Quota Exceeded. Engaging Kill-Switch to prevent account suspension.');
        break; 
      }
    }
    
    // Tiny delay to respect API rate limits (Google allows 100 requests per minute usually, but safe is better)
    await new Promise(r => setTimeout(r, 200));
  }

  console.log('\n========================================');
  console.log('        INDEXING API COMPLETED          ');
  console.log('========================================');
  console.log(`Total Submitted: ${urlsToPublish.length}`);
  console.log(`Successful:      ${successCount}`);
  console.log(`Failed:          ${failCount}`);
  console.log('========================================\n');
}

publishUrls().catch(console.error);
