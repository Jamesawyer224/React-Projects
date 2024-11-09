import React from "react";
import { createRoot } from "react-dom";
import StudentCard from "./components/StudentCard";


// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "My React App"),
//     // React.createElement(student),
//     React.createElement(
//       studentCard,
//       {
//         name: "Harry",
//         age: 20,
//         homeTown: "London",
//       },
//       null,
//     ),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1> My React App</h1>
      <StudentCard/>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
