import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Jumbotron from "./components/jumbotron";
import Cards from "./components/cards";
import Footer from "./components/footer";
import propType from "prop-types";
import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";


const App = () =>{
  return (
    
    <div style={{backgroundColor: "#e9ecef"}}>
      
    <Navbar/>
    <div className="">
      <Jumbotron/>
    </div>
    <div className="d-flex flex-row mt-4 mb-4 "style={{margin: "15%"}} >
        <Cards />
    </div>
    <div className="">
    <Footer/></div>
    </div>
     
  )
    
};


export default App;

