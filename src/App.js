import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Jumbotron from "./components/jumbotron";
import Card from "./components/cards";


const App = () =>{
  return (
    
    <>
    <Navbar/>
    <div className="">
      <Jumbotron/>
    <div class="card" style="width: 18rem;">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
    </div></>
     
  )
    
};


export default App;

