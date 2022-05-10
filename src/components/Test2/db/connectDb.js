import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBChx-Vf4Lh6yKvTts9uGfOzFlZp7HWG40",
    authDomain: "software-internship-test.firebaseapp.com",
    projectId: "software-internship-test",
    storageBucket: "software-internship-test.appspot.com",
    messagingSenderId: "721073249820",
    appId: "1:721073249820:web:f9068bcbd5147d775849d9"
  };

export const app = initializeApp(firebaseConfig);