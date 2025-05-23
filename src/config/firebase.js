import admin from 'firebase-admin';
import { firebaseBucket, googleCredentials } from './constants.js'

admin.initializeApp({
    credential:  admin.credential.cert(googleCredentials),
    storageBucket: firebaseBucket
});

export const bucket = admin.storage().bucket();