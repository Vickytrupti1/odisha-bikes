# Odisha Bikes 🏍️

A multi-page bike showroom web app built with plain HTML, CSS, and JavaScript.  
Live URL: **https://odisha-bikes.web.app**

---

## Folder Structure

```
ODISHA BIKES/
├── index.html          ← Home page
├── listing.html        ← Bike listing page
├── detail-page.html    ← Bike detail page (dynamic via ?id=)
├── login.html          ← Login page
├── signup.html         ← Signup page
├── bikes.json          ← Bike data reference (used by app.js)
├── css/
│   └── styles.css      ← All styles (one file for all pages)
├── js/
│   ├── app.js          ← All page logic (slider, detail, listing)
│   └── firebase.js     ← Firebase auth + Firestore + navbar profile
├── firebase.json       ← Firebase Hosting config
└── .firebaserc         ← Firebase project name
```

---

## Firebase Setup (Do this ONCE before running the project)

### Step 1 — Create a Firebase Project
1. Go to https://console.firebase.google.com
2. Click **"Add project"** → name it anything (e.g. `odisha-bikes`) → **Create project**

### Step 2 — Register a Web App
1. Inside the project, click the **`</>`** (Web) icon
2. App nickname: anything → click **Register app**
3. Choose **"Use a `<script>` tag"** → copy the `firebaseConfig` object
4. Click **Continue to console**

### Step 3 — Enable Email/Password Authentication
1. Left sidebar → **Authentication** → **Get started**
2. **Sign-in method** tab → **Email/Password** → toggle **Enable** → **Save**

### Step 4 — Create Firestore Database
1. Left sidebar → **Firestore Database** → **Create database**
2. Select **Standard edition** → **Next**
3. Location: **`asia-south1`** (Mumbai) → **Next**
4. Select **"Start in test mode"** → **Create**

### Step 5 — Set Firestore Security Rules
1. In Firestore → click the **Rules** tab
2. Replace everything with:
```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow write: if request.auth != null && request.auth.uid == userId;
      allow read:  if request.auth != null && request.auth.uid == userId;
    }
  }
}
```
3. Click **Publish**

### Step 6 — Update Firebase Config in Code
Open `js/firebase.js` and replace the `firebaseConfig` object with YOUR project's values:
```js
var firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};
```
You can find these values in:  
**Firebase Console → Project Settings (gear icon) → General → Your apps → SDK setup and configuration → Config**

---

## How to Run Locally

Just open `index.html` in a browser — no server needed.

> Tip: Use the **Live Server** extension in VS Code for best results.

---

## How to Deploy to Firebase Hosting

### First-time setup (do once on your machine)

**1. Install Node.js**  
Download from https://nodejs.org (LTS version)

**2. Install Firebase CLI**
```bash
npm install -g firebase-tools
```

**3. Login to Firebase**
```bash
firebase login
```
A browser window will open — sign in with the Google account that owns the Firebase project.

**4. Link the project** (already done if `.firebaserc` exists)
```bash
firebase use odisha-bikes
```
Replace `odisha-bikes` with your actual Firebase project ID.

### Deploy
```bash
firebase deploy --only hosting
```
After deploy, your site is live at `https://YOUR-PROJECT-ID.web.app`

### Every time you make changes
1. Edit your files
2. Run `firebase deploy --only hosting`
3. Done — site updates in ~30 seconds

---

## How to Add a New Bike

Open `js/app.js` and add a new object to the `BIKES` array following this template:

```js
{
  id:           'brand-model-name',       // unique, lowercase, hyphens only
  brand:        'Brand Name',
  fullName:     'BRAND MODEL NAME',
  badge:        'Category (e.g. Sport)',
  price:        '₹ X,XX,XXX',
  rating:       '4.5/5',
  specs: {
    engine:   '300 cc',
    mileage:  '35 kmpl',
    power:    '30 PS',
    weight:   '160 kg',
    fuelType: 'Petrol'
  },
  description1:  'Short intro paragraph.',
  description2:  'Second detail paragraph.',
  offer:         'Offer text shown on detail page.',
  ctaDesc:       'Call-to-action description.',
  features: [
    { title: 'Feature Name', desc: 'Feature description.' },
    { title: 'Feature Name', desc: 'Feature description.' }
  ],
  heroImage:     'IMAGE_URL',
  galleryImage1: 'IMAGE_URL',
  galleryLabel1: 'Caption 1',
  galleryImage2: 'IMAGE_URL',
  galleryLabel2: 'Caption 2'
}
```

Then add the bike card HTML to `listing.html` and/or `index.html` (trending section) with:
```html
<button data-bike-id="brand-model-name" class="view-details-btn ...">View Details</button>
```

---

## Tech Stack

| Technology | Usage |
|------------|-------|
| HTML5 | Page structure |
| Tailwind CSS (CDN) | Utility-first styling |
| Vanilla JavaScript | All interactivity |
| Firebase Authentication | Login / Signup |
| Cloud Firestore | User profile storage |
| Firebase Hosting | Live deployment |
