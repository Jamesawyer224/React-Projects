 
 import Student from "../components/Student"; 
 // const studentCard = (props) => {
//     return React.createElement("div", { className: "st-card" }, [
//       React.createElement("img", {
//         src: "https://cdn.pixabay.com/photo/2019/05/21/22/21/boy-4220282_1280.png",
//         alt: "elephant-srilanka",
//         className: "student-image",
//       }),
//       React.createElement(student, { ...props }, null),
//     ]);
//   };


const StudentCard = ()=> {
    return (
        <div>  
       <img src = "https://cdn.pixabay.com/photo/2019/05/21/22/21/boy-4220282_1280.png"  
       alt = "student image"
       className= "student-image"  />
        <Student/>
        </div>
    )
}


export default StudentCard;