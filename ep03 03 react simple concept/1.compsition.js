 function add2(x){
    return x + 2;
 }

 function multi3(x) {
    return x * 3 ;
 }

 function sub(x) {
    return x - 1 ;
 }


 let y =  sub(multi3(add2(5)));
 console.log(y+"\n\n\n\n");




function compose( ) {
var functions = arguments;
return function(input){
      var value = input;
      for(var i = 0 ; i < functions.length  ; i++){
         value = functions[i](value);
      }
      return value;
   }
 }
 
 

 var allInOneFunction = compose(add2,multi3,sub);
 var result  =  allInOneFunction(5);
 console.log(result);