

function openfile(callback){
    setTimeout(() => {
        console.log("file open"); 
        callback();
    }, 3000);
  }

function addsomething(){
    console.log("add something");
}


function  removesome(){
    console.log("remove something");
}



openfile(addsomething);
openfile(removesome);
   

