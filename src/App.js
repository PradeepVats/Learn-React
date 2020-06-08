import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Heading from "./Heading";

const Working = " Navodaya Vidyalaya Samiti";
const location = "JNV Mungeshpur Delhi 110039";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
const head = {
  color: "#fa9191",
  textTransform: "capitalize",
  textAlign: "center",
};

function App() {
  return (
    <>
      <Heading />
      <h1 className="heading"> Pradeep Vats</h1>
      <img
        className="center"
        src="https://picsum.photos/200"
        alt="Random Picture"
      />
      <h2 style={head}>Full Stack Developer of </h2>
      <h2> MERN and Python with Good Experience </h2>
      <p>Currently Working in {`${Working} at the location is ${location}`}</p>
      <p>{`Current Date is : ${currDate} and Current Time is :${currTime}`}</p>
      <p> List of Best {2 + 3} Netflix Series</p>
      
      <ol>
        <li> Dark </li>
        <li>Extra Curricular</li>
        <li>URI</li>
        <li>Speical OPS</li>
        <li>Mr Robot</li>
      </ol>
    </>
  );
}

export default App;
