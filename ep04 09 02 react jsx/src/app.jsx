import React from "react";
import { createRoot } from "react-dom/client";
import StudentCard from "./components/StudentCard";
import { test } from "./components/StudentCard";

console.log(test);


const App = () => {  
  return (
    <div>
      <h1> My React App</h1>
      <StudentCard  name = "Ronn weasley" age = {22} homeTown = "Hagwarts" />
           <StudentCard  name = "Harry potter" age = {22} homeTown = "Hagwarts" />
      <StudentCard  name = "Herminey granger" age = {22} homeTown = "Hagwarts" />
           <StudentCard  name = "Nevil longbottom" age = {22} homeTown = "Hagwarts" />
    </div>
  );
};

const container = document.getElementById("root");
     const root = createRoot(container);
root.render(React.createElement(App));
