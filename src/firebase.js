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
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

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
const auth = getAuth(app);
const database = getDatabase(app);

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error("Registration error:", error.message);
    throw error;
  }
};

export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error("Login error:", error.message);
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log("Logout");
  } catch (error) {
    console.error("Logout error:", error.message);
    throw error;
  }
};

export const checkAuthState = (callback) => {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};

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
