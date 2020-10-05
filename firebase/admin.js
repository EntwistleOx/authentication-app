import * as firebaseAdmin from 'firebase-admin';
import serviceAccount from './firebase-keys.json';

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL: 'https://entwistle-auth-app.firebaseio.com',
  });
}

export { firebaseAdmin };
