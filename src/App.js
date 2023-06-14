import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import More from "./components/More";
import Error from "./components/Error";
import { Routes,Route } from "react-router";

const App = () => {

  return (
    <div className="app">
      <Nav/>
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route path="/login" Component={Login}/>
        <Route path="/signup" Component={Signup}/>
        <Route path="/more" Component={More}/>
        <Route path="*" Component={Error}/>
      </Routes>
    </div>
  );
};

export default App;
