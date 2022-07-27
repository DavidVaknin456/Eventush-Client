import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDNSRLqzAVCnKgN6vC8LvAH2QgWJBR_hkU",
  authDomain: "rn-eventer.firebaseapp.com",
  projectId: "rn-eventer",
  storageBucket: "rn-eventer.appspot.com",
  messagingSenderId: "504775289675",
  appId: "1:504775289675:web:9aed1a9c6c9fd3398856ce",
  measurementId: "G-JVNZZ4B6TG",
};

let initApp;

const initFirebase = () => {
  initApp = initializeApp(firebaseConfig);
  console.log("Firebase is Initialized");
};
export { initApp, initFirebase };
