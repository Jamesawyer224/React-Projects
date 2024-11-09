

const arr1 = [1,2,3,4,5];
const [fir,sec,...rest_arguments] = arr1;

console.log( fir );
console.log( sec );
console.log( rest_arguments);


const obj = {one:10,two:20,three:30,four:40,five:50};
const {one:x,two,...rest_obj} = obj;

console.log(x);
console.log(two);
console.log(rest_obj);






