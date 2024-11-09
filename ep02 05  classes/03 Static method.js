

class square{

    constructor (_width){
        this.width = _width;
        this.height = _width;
      }
    
    getArea(){
     return this.width*this.height;
      }

 static calarea(a,b){
    return a*b;
 }

}


const sqr = new square(24);

console.log(sqr.getArea());
console.log(square.calarea(24,28));
