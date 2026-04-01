/* FIREBASE.JS — Odisha Bikes
   Handles: Auth (login/signup), Firestore user save, navbar profile widget
*/

/* Firebase project config — replace with YOUR values from Firebase Console */
var firebaseConfig = {
  apiKey:            "AIzaSyA49TKmdvnNYiDJAth-OQAwrOOW6so-wJ8",
  authDomain:        "odisha-bikes.firebaseapp.com",
  projectId:         "odisha-bikes",
  storageBucket:     "odisha-bikes.firebasestorage.app",
  messagingSenderId: "258321510571",
  appId:             "1:258321510571:web:7b2d941e648ce570f5c7ee"
};

/* Initialize Firebase */
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

var auth = firebase.auth();
var db   = firebase.firestore();

/* Show/hide inline error on login & signup forms */
function showFirebaseError(msg) {
  var el = document.getElementById('firebase-error');
  if (!el) return;
  el.textContent = msg;
  el.style.display = 'block';
}
function clearFirebaseError() {
  var el = document.getElementById('firebase-error');
  if (el) { el.textContent = ''; el.style.display = 'none'; }
}

/* Auth state listener — updates navbar on every page */
auth.onAuthStateChanged(function (user) {
  var loginBtn  = document.getElementById('nav-login-btn');
  var profile   = document.getElementById('nav-profile');
  var avatar    = document.getElementById('nav-avatar');
  var username  = document.getElementById('nav-username');
  var dropName  = document.getElementById('nav-dropdown-name');

  if (!loginBtn || !profile) return;

  if (user) {
    /* Logged IN — hide Login button, show avatar + name */
    loginBtn.style.display = 'none';
    profile.classList.remove('hidden');
    profile.style.display  = 'flex';

    // Get first letter for avatar + display name
    var name    = user.displayName || user.email.split('@')[0];
    var initial = name.charAt(0).toUpperCase();

    avatar.textContent    = initial;
    if (username)  username.textContent  = name;
    if (dropName)  dropName.textContent  = name;

  } else {
    /* Logged OUT — show Login button, hide avatar */
    loginBtn.style.display = '';
    profile.classList.add('hidden');
    profile.style.display  = 'none';
  }
});

/* Logout — called by navbar Logout button */
function firebaseLogout() {
  auth.signOut().then(function () {
    window.location.href = 'index.html';
  });
}

/* Close dropdown when clicking outside */
document.addEventListener('click', function (e) {
  var dropdown = document.getElementById('nav-dropdown');
  var avatar   = document.getElementById('nav-avatar');
  if (!dropdown || !avatar) return;
  if (!dropdown.contains(e.target) && e.target !== avatar) {
    dropdown.classList.add('hidden');
  }
});

/* LOGIN form handler */
var loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    clearFirebaseError();

    var email    = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value;
    var btn      = loginForm.querySelector('button[type="submit"]');

    if (!email || !password) { showFirebaseError('Please fill in both fields.'); return; }

    btn.disabled    = true;
    btn.textContent = 'Logging in…';

    auth.signInWithEmailAndPassword(email, password)
      .then(function () {
        window.location.href = 'index.html';
      })
      .catch(function (error) {
        btn.disabled    = false;
        btn.textContent = 'Login';
        if (error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {
          showFirebaseError('No account found with this email.');
        } else if (error.code === 'auth/wrong-password') {
          showFirebaseError('Incorrect password. Please try again.');
        } else if (error.code === 'auth/invalid-email') {
          showFirebaseError('Please enter a valid email address.');
        } else if (error.code === 'auth/too-many-requests') {
          showFirebaseError('Too many failed attempts. Please try later.');
        } else {
          showFirebaseError('Login failed: ' + error.message);
        }
      });
  });
}

/* SIGNUP form handler */
var signupForm = document.getElementById('signup-form');
if (signupForm) {
  signupForm.addEventListener('submit', function (e) {
    e.preventDefault();
    clearFirebaseError();

    var name     = document.getElementById('name').value.trim();
    var email    = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value;
    var confirm  = document.getElementById('confirm_password').value;
    var terms    = document.getElementById('terms').checked;
    var btn      = signupForm.querySelector('button[type="submit"]');

    if (!name || !email || !password || !confirm) { showFirebaseError('Please fill in all fields.'); return; }
    if (password.length < 8) { showFirebaseError('Password must be at least 8 characters.'); return; }
    if (password !== confirm) { showFirebaseError('Passwords do not match.'); return; }
    if (!terms) { showFirebaseError('Please agree to the Terms of Service.'); return; }

    btn.disabled    = true;
    btn.textContent = 'Creating account…';

    auth.createUserWithEmailAndPassword(email, password)
      .then(function (cred) {
        return cred.user.updateProfile({ displayName: name })
          .then(function () {
            return db.collection('users').doc(cred.user.uid).set({
              name:      name,
              email:     email,
              createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
          });
      })
      .then(function () {
        window.location.href = 'login.html';
      })
      .catch(function (error) {
        btn.disabled    = false;
        btn.textContent = 'Create Account';
        if (error.code === 'auth/email-already-in-use') {
          showFirebaseError('An account with this email already exists.');
        } else if (error.code === 'auth/weak-password') {
          showFirebaseError('Password is too weak. Use at least 8 characters.');
        } else {
          showFirebaseError('Signup failed: ' + error.message);
        }
      });
  });
}
