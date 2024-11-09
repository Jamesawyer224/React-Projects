 
 import Student from "../components/Student"; 
 import React from "react";
 
  
const StudentCard = ({name,age,homeTown})=> {
    return (
        <div  className="st-card">  
       <img src = "https://cdn.pixabay.com/photo/2019/05/21/22/21/boy-4220282_1280.png"  
       alt = " `student image_${name}`"
       className= "student-image"  />
        <Student name={name} age={age} homeTown={homeTown} />
        </div>
    )
}

export const test = 10;


export default StudentCard;












 