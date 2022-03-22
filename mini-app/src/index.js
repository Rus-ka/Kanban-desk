import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";
//import * as firebase from 'firebase/app';
import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

// firebase.initializeApp({
//   apiKey: "AIzaSyAbvcOWlcKxgIOGMVdtNG8FvLsuPh3Pkz8",
//   authDomain: "kanban-b2737.firebaseapp.com",
//   projectId: "kanban-b2737",
// });

//const process = require('process');
// Init VK  Mini App
bridge.send("VKWebAppInit");
// firebase.analytics();
// console.log(firebase);


ReactDOM.render(<App />, document.getElementById("root"));
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
