const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

// 1. Load Credentials (Prioritize Environment Variables, Fallback to Local JSON)
let clientEmail, privateKey;

// Check if we are running in CI/CD (GitHub Actions) or Vercel with Environment Variables injected
if (process.env.GOOGLE_CLIENT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
  clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  // Handle escaped newlines in the private key from CI/CD environments
  privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');
  console.log('Using Google Credentials from Environment Variables (Secrets).');
} else {
  // Fallback for local development
  const keyFile = path.join(__dirname, '../service-account.json');
  if (!fs.existsSync(keyFile)) {
    console.error('\n[ERROR] Missing Google Cloud Credentials!');
    console.error('You must either set GOOGLE_CLIENT_EMAIL and GOOGLE_PRIVATE_KEY as environment variables, or provide a local service-account.json file.\n');
    process.exit(1);
  }
  const key = require(keyFile);
  clientEmail = key.client_email;
  privateKey = key.private_key;
  console.log('Using Google Credentials from local service-account.json.');
}

// 2. Setup JWT Auth Client
const jwtClient = new google.auth.JWT(
  clientEmail,
  null,
  privateKey,
  ['https://www.googleapis.com/auth/indexing'],
  null
);

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
const urlsToPublish = searchIndex.map(item => item.url);

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
