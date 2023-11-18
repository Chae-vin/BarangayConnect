import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import Start from "./Login/Start";
import Login from "./Login/Login";
import AdminProfileEdit from "./Profile/AdminProfileEdit";
import Header from "./Header";
import ProfileEdit from "./Profile/ProfileEdit";
import ProfileView from "./Profile/ProfileView";
import AdminProfileView from "./Profile/AdminProfileView";
import Signup from "./Login/Signup";
import CommunityCalendar from "./Calendar/CommunityCalendar";
import ProfileList from "./Profile/ProfileList";
import AdminCalendar from "./Calendar/AdminCalendar";
import EventList from "./Calendar/EventList";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Start />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
