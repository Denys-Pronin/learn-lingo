import { initializeApp } from "firebase/app";
import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAfter,
} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCro8IJ8R4pyyJMT9O4EyYKAVyIx7FGOx4",
  authDomain: "learnlingo-93adc.firebaseapp.com",
  databaseURL: "https://learnlingo-93adc-default-rtdb.firebaseio.com",
  projectId: "learnlingo-93adc",
  storageBucket: "learnlingo-93adc.firebasestorage.app",
  messagingSenderId: "882883151821",
  appId: "1:882883151821:web:05cefe1cf80a4df2702684",
  measurementId: "G-LFV1DXE9K9",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const getTeachers = async (lastKey = null) => {
  const dbQuery = lastKey
    ? query(
        ref(database, "/"),
        orderByKey(),
        startAfter(lastKey),
        limitToFirst(4)
      )
    : query(ref(database, "/"), orderByKey(), limitToFirst(4));
  const snapshot = await get(dbQuery);

  if (snapshot.exists()) {
    return Object.entries(snapshot.val()).map(([key, value]) => ({
      id: key,
      ...value,
    }));
  } else {
    console.log("Error");
  }
};
