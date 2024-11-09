

arr1 = [1,2,3,4];
const arr2 =  [...arr1];
console.log(arr2);

arr1[0] = 4;
console.log(arr1);
console.log(arr2);


 
function add(...para){
    let sum = 0; 
    for(const args of para){
        sum = sum + args ;
    }
console.log(sum);
}

 add(...arr2); 


 arr3 = [1,2,3,4,5,6,7,8];
 const[x,y,...z] = arr3;

 console.log(x);
 console.log(y);
 console.log(z);


 const obj = {fir:10,sec:20,thr:30,for:40,fif:50};
 const obj2= {fir:1,sec:2,thr:30,for:40,fif:50};
 const {fir,sec:num,...objj} = obj;

 console.log(fir);
 console.log(num);
 console.log(objj);



 const obj4 = {...obj,...obj2};
 console.log(obj4);
  




