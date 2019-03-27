import * as firebase from 'firebase';

import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

var config = {
    apiKey: "AIzaSyC_B0wq0Lg6S-gwhZfx2eOFtpVT2Q3d4v8",
    authDomain: "test-86608.firebaseapp.com",
    databaseURL: "https://test-86608.firebaseio.com",
    projectId: "test-86608",
    storageBucket: "",
    messagingSenderId: "234859963574"
  };
  firebase.initializeApp(config);
const storage = firebase.storage();

export default firebase;