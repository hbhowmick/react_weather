import firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyADt9iEpQoj9L4gnPU5Ywbqw2s302iWnh0",
    authDomain: "react-weather-racer-525.firebaseapp.com",
    databaseURL: "https://react-weather-racer-525.firebaseio.com",
    projectId: "react-weather-racer-525",
    storageBucket: "react-weather-racer-525.appspot.com",
    messagingSenderId: "32201299888"
  };
  firebase.initializeApp(config);

  export default firebase;
