import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/messaging';
import 'firebase/analytics';

const USER = 'afayawebapp@afya.com';
const TOKEN = 'afayawebapp@afya.com';
// firebase.auth().signInAnonymously
const envstage = REACT_APP_ENV === 'prod' ? 'prod' : REACT_APP_ENV === 'stage' ? 'stage' : REACT_APP_ENV === 'uat' ? 'stage' : 'stage';

try {
  const config = require(`./config/${envstage}.firebase.js`);
  firebase
    .initializeApp(config);
  firebase.analytics();
} catch (error) {
  console.log(...Object.keys(error));
  console.log('firebase initital', error);
  console.log(error.code);
}

export const { auth, storage } = firebase;
export default firebase;
