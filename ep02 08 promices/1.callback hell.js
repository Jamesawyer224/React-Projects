


function fun1(callback){
    setTimeout(()=>{
        console.log("this is fun 1");
        callback();
    },2000);
}


function fun2(callback){
    setTimeout(()=>{
        console.log("this is fun 2");
        callback();
    },2000);
}


function fun3(callback){
    setTimeout(()=>{
        console.log("this is fun 3");
        callback();
    },2000);
}

function fun4(callback){
    setTimeout(()=>{
        console.log("this is fun 4");
        callback();
    },2000);
}

function fun5(callback){
    setTimeout(()=>{
        console.log("this is fun 5");
        callback();
    },2000);
}



 fun1(()=>{
   
    fun2(()=>{
        fun3(()=>{
            fun4(()=>{
                fun5(()=>{
                    console.log("all done \n");
                })
            })
        })
    })
 });





 

 