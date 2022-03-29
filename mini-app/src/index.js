import 'core-js/features/map';
import 'core-js/features/set';
import React from "react";
import ReactDOM from "react-dom";
//import bridge from "@vkontakte/vk-bridge";
import App from "./components/App";

import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbvcOWlcKxgIOGMVdtNG8FvLsuPh3Pkz8",
  authDomain: "kanban-b2737.firebaseapp.com",
  projectId: "kanban-b2737",
  storageBucket: "kanban-b2737.appspot.com",
  messagingSenderId: "613615665100",
  appId: "1:613615665100:web:84eb9aac3f40f6fa196769",
  measurementId: "G-RG0B4S5P7Q"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// const go = async () => {
//   const querySnapshot = await getDocs(collection(db, "desks"));
//   querySnapshot.forEach((doc) => {
//     console.log(doc.id, doc.data());
//     //console.log(`${doc.id} => ${doc.data()}`);
//   });
// };
 
// go();

// Init VK  Mini App
//bridge.send("VKWebAppInit");

ReactDOM.render(<App />, document.getElementById("root"));
