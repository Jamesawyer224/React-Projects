
const student = () =>{
    return React.createElement("div",{},[
        React.createElement("h3",{},"Shane"),
 React.createElement("h3",{},"24"),
React.createElement("h3",{},"Mahanuwara"),
    
    ] );
};


const studentCard = ()=>{
    return React.createElement("div",
          {className:"st-card"},
        [React.createElement("img",{
            src:"https://cdn.pixabay.com/photo/2019/05/21/22/21/boy-4220282_1280.png",
                alt:"elephant-srilanka",
            className:"student-image"
            }),
                React.createElement(student) ]
        
    );
}


const App = () =>{ 
       return React.createElement(
   "div",
   {},
   [ React.createElement("h1",{},"My React App"),
    // React.createElement(student),
    React.createElement(studentCard),
    React.createElement(studentCard),
React.createElement(studentCard),
React.createElement(studentCard),
          React.createElement(studentCard),
     ]
    
    );
 };

       const container = document.getElementById("root");
   const root = ReactDOM.createRoot(container);
                  root.render(React.createElement(App));
