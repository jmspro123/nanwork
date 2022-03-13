import app from 'firebase/app';
import 'firebase/firestore';


console.log(process.env)
var firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
  };

  // Initialize Firebase
  const firebase=app.initializeApp(firebaseConfig);
  const firestore=firebase.firestore();

  export {firebase,firestore,app};
