import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDshT-g8wtGxUNF2q5TsuDd4Mmnoy_QSkk",
    authDomain: "omed-ce340.firebaseapp.com",
    databaseURL: "https://omed-ce340.firebaseio.com",
    projectId: "omed-ce340",
    storageBucket: "omed-ce340.appspot.com",
    messagingSenderId: "29136469871",
    appId: "1:29136469871:web:3b5c002f57ca687978729a",
    measurementId: "G-D1LXF6BEL2"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;