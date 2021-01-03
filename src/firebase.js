import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAEajt9Kq-DeC5cnIfisMKTlklvFdrWaP4",
  authDomain: "twiter-clone-189ee.firebaseapp.com",
  databaseURL: "https://twiter-clone-189ee.firebaseio.com",
  projectId: "twiter-clone-189ee",
  storageBucket: "twiter-clone-189ee.appspot.com",
  messagingSenderId: "16635555981",
  appId: "1:16635555981:web:b281087df2788e614132c4",
  measurementId: "G-5T9W6GXQXL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
