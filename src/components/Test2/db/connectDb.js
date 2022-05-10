
// TODO: Replace the following with your app's Firebase project configuration
import { initializeApp } from "firebase/app";


console.log(process.env);
const firebaseConfig = {
  apiKey: process.env.VUE_APP_apiKey,
  authDomain: process.env.VUE_APP_authDomain,
  projectId: process.env.VUE_APP_projectId,
  storageBucket: process.env.VUE_APP_storageBucket,
  messagingSenderId: process.env.VUE_APP_messagingSenderId,
  appId: process.env.VUE_APP_appId,
}
console.log(firebaseConfig)
export const app = initializeApp(firebaseConfig)