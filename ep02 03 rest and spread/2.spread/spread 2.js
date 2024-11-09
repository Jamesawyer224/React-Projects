

function sum(a,b,c){
    console.log(a+b+c);
}


const arr1 = [1,2,3];
const obj = {one:10,two:20,three:30};

sum(...arr1);
// sum(...obj);/ display error

sum(...Object.values(obj));

