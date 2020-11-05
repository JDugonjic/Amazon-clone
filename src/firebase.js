import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDyzL6jjtva4finDrv3vSinRbBR-P2PLP0",
  authDomain: "clone-55b41.firebaseapp.com",
  databaseURL: "https://clone-55b41.firebaseio.com",
  projectId: "clone-55b41",
  storageBucket: "clone-55b41.appspot.com",
  messagingSenderId: "1079924657240",
  appId: "1:1079924657240:web:4881ceeec1126732818e2d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
