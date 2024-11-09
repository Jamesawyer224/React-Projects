this.name = "gimly";
 

const obj1 = {

    name : "john",
    norfunc:function(){
    console.log(this.name);
   },
   arrfunc:()=>{
    console.log(this.name);
   }
 }


console.log(this.name);
obj1.norfunc();
obj1.arrfunc();