

const arr1 = [1,2,3,4,5,6];

function sum(...args){
   
   let sum  = 0;
    for(const arg of args) {
    sum = sum +arg ;
   } 
   console.log(sum);
}

sum(...arr1);