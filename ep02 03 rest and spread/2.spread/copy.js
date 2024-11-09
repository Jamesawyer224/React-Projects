

const arr1 = [1 , 2 ,3,4];
const arr2 = [...arr1];
console.log(arr2);

arr1[0]=20;
console.log(arr1);
console.log(arr2);


const obj1 = {one:10,two:20,three:30};
const obj2 ={ ...obj1};
console.log(obj2);

obj1['one']=28;
console.log(obj1);
console.log(obj2);

