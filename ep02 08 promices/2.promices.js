


function takeshower(){

    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const shower = true;
        if(shower){
            console.log("you take shower ");
            resolve ("you took shower ") 
        } else{
            reject("you didnt take shower\n ")
        }
      
    },3000);
    })
}



function dohomework(){

 return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const homework = true ;
        if(homework){
            console.log("you do your homework ");
            resolve("you completed your homework ") 
        } else{
            reject("you didnt do home work")
        }
     
    },1000);
 })

}



function play(){

return new Promise((resolve,reject)=>{

    setTimeout(()=>{
        const play = true ;
        if(play){
            console.log("you can play what you like");
            resolve("you played what you like ") 
        } else{
            reject("you didnt play ")
        }
     
    },3000);
})

}




takeshower()
.then((result)=>{
   console.log(result);
   return dohomework()  })
.then((result)=>{
   console.log(result);
   return play()  })
.then((result)=>{
    console.log(result);
    console.log("all done\n\n");
})  
.catch((error)=>{
    console.log(error);
}) 

 