import React, { useEffect, useState } from "react";
import "./App.css";
import Photos from "./pages/Photos";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import { useStateValue } from "./StateProvider";
import axios from "./axios";

function App() {
  const [{ images }, dispatch] = useStateValue();

  useEffect(() => {
    async function fetchdata() {
      const { data } = await axios.get();
      console.log(data);
      dispatch({
        type: "ADD_PHOTOS",
        data,
      });
    }
    fetchdata();
  }, []);

  console.log(images);

  return (
    // Module -> 1: Set up a React Router for rendering the Photos and cart Component (Found in the Pages Folder)

    <Router>
      <div className="app">
        <Switch>
          <Route path="/cart">
            <Header />
            <Cart />
          </Route>
          <Route path="/">
            <Header />
            <Photos />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
