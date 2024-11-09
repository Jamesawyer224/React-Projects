


const arr1 = [1 , 2 ,3,4];
const arr2 = ["x","y","z"];

console.log(arr1 ,arr2);


function sum(a,b,c){
    console.log(a+b+c);
}

sum(arr1[0],arr1[1],arr1[2]);
sum(...arr1);

console.log(...arr1);



const arr3 = [5,6,7];
const arr4 = [8,9,10];
const arr5 = [...arr3,...arr4];
console.log(arr5);



obj1 = {
    first:10,
    second:20
};

obj2 = {
    third:30,
    forth:40,
     
    
};

obj3 =   { ...obj1,...obj2}
console.log(obj3);

