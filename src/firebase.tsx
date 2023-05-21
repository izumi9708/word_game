import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAaHb2qGmwMY9YGfJUogLdGtgCybRZLi-A",
  authDomain: "word-game-5a2b1.firebaseapp.com",
  projectId: "word-game-5a2b1",
  storageBucket: "word-game-5a2b1.appspot.com",
  messagingSenderId: "999899766782",
  appId: "1:999899766782:web:cd3e98f5e4357adee3eaaf"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;