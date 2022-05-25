// VARIABLES
const apiKey = process.env.NEXT_PUBLIC_API_KEY
const authDomain = process.env.NEXT_PUBLIC_AUTH_DOMAIN
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID
const storageBucket = process.env.NEXT_PUBLIC_STORAGE_BUCKET
const messagingSenderId = process.env.NEXT_PUBLIC_MESSAGIN_SENDER_ID
const appId = process.env.NEXT_PUBLIC_APP_ID
const measurementId = process.env.NEXT_PUBLIC_MEASUREMENT_ID

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// export const firebaseConfig = {
//     apiKey: 'AIzaSyBdn31PpwPzL8o5NInwDJngXYXJFa0QAes',
//     authDomain: 'test-remote-config-e2b48.firebaseapp.com',
//     projectId: 'test-remote-config-e2b48',
//     storageBucket: 'test-remote-config-e2b48.appspot.com',
//     messagingSenderId: '393243129908',
//     appId: '1:393243129908:web:a35ac536d27052d7667261',
//     measurementId: 'G-YKJXVRKN08'
// };

export const firebaseConfig = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId
};