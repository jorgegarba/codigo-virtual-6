import firebase from "firebase"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Inicializando Firebase

const fire = firebase.initializeApp(firebaseConfig)

export {
  firebase, //trae metodos tipos de datos
  fire //Nos va a permitir hacer operaciones utilizando Firebase
}