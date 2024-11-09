import React from "react";
import { createRoot } from "react-dom";

const Student = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h3", {}, props.name),
    React.createElement("h3", {}, props.age),
    React.createElement("h3", {}, props.homeTown),
  ]);
};

const StudentCard = (props) => {
  return React.createElement("div", { className: "st-card" }, [
    React.createElement("img", {
      src: "https://cdn.pixabay.com/photo/2019/05/21/22/21/boy-4220282_1280.png",
      alt: "elephant-srilanka",
      className: "student-image",
    }),
    React.createElement(Student, { ...props }, null),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "My React App"),
    // React.createElement(student),
    React.createElement(
      StudentCard,
      {
        name: "Harry",
        age: 20,
        homeTown: "London",
      },
      null,
    ),
    React.createElement(
      StudentCard,
      {
        name: "Ronn",
        age: "24",
        homeTown: "London",
      },
      null,
    ),
    React.createElement(
      StudentCard,
      {
        name: "harminy",
        age: 24,
        homeTown: "London",
      },
      null,
    ),

    // React.createElement(studentCard),
    // React.createElement(studentCard),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
