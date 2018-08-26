/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import firebase from 'firebase'

import NavBar from '../../components/NavBar';
import Login from '../Login';
import Dashboard from '../../components/Dashboard'

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA7l-U8ZU8qOl4JsNrQ5SRkhnnDq45R22w",
  authDomain: "rival-us.firebaseapp.com",
  databaseURL: "https://rival-us.firebaseio.com",
  projectId: "rival-us",
  storageBucket: "rival-us.appspot.com",
  messagingSenderId: "274178549474"
};
firebase.initializeApp(config);

export default function App() {
  return (
    <div>
      <NavBar/>
      <div className="container">
        <Login/>
        <Dashboard/>
      </div>
    </div>
  );
}
