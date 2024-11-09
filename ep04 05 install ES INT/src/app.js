const student = () => {
  return React.createElement("div", {}, [
    React.createElement("h3", {}, "Ronn weasley"),
    React.createElement("h3", {}, "24"),
    React.createElement("h3", {}, "London"),
  ]);
};

const studentCard = () => {
  return React.createElement("div", { className: "st-card" }, [
    React.createElement("img", {
      src: "https://cdn.pixabay.com/photo/2019/05/21/22/21/boy-4220282_1280.png",
      alt: "elephant-srilanka",
      className: "student-image",
    }),
    React.createElement(student),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "My React App"),
    // React.createElement(student),
    React.createElement(studentCard),
    React.createElement(studentCard),
    React.createElement(studentCard),
    React.createElement(studentCard),
    React.createElement(studentCard),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   root: "src",
// });
