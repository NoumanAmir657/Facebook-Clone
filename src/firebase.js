import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDuCX9l3HF-uXHZ0hf7eR6oP6dix4XU2_0",
    authDomain: "fb-clone-5f52f.firebaseapp.com",
    projectId: "fb-clone-5f52f",
    storageBucket: "fb-clone-5f52f.appspot.com",
    messagingSenderId: "309545582044",
    appId: "1:309545582044:web:383e57cf1ee13ebc1fe319"
  };

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
