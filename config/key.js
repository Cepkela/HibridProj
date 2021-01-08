import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyAXZivTmd9kKXNxgC1GjkosOCNo0ZqcWPc",
    authDomain: "reactnativefirebase-dd07f.firebaseapp.com",
    databaseURL: "https://reactnativefirebase-dd07f-default-rtdb.firebaseio.com",
    projectId: "reactnativefirebase-dd07f",
    storageBucket: "reactnativefirebase-dd07f.appspot.com",
    messagingSenderId: "196865755794",
    appId: "1:196865755794:web:2f6135bc0eaf718610b44b",
    measurementId: "G-2KZRZVE313"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  export { firebase };