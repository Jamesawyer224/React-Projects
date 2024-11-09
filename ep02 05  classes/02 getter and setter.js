
class square{

constructor (_width){
    this.width = _width;
    this.height = _width;
}

getArea(){
 return this.width*this.height;
}

get Area(){
return `THIS IS A GETTER: ${this.width*this.height + 4}`;
}


set Area( newArea){
this.width = Math.sqrt(newArea);
}


}


const news = new square(24);

console.log(news.getArea());
console.log(news.Area);

 news.Area = 902;
 console.log(news.width);
 console.log(news.getArea());
 console.log(news.Area);
  
 
 