

const numbers = [1,2,3,4,5,6,7,8];
const evenNumbers = numbers.filter(number => number %2 == 0);
console.log(evenNumbers);




const numbers2 = [1,2,3,4,5,6,7,8,20,22,24,28];
const evenNumbers2 = [];

for(let i = 0 ; i < numbers2.length;i++){
    if(numbers2[i] % 2 == 0){
        evenNumbers2.push(numbers2[i]);
    }
}

console.log(evenNumbers2);