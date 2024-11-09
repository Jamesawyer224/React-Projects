

class react {

    constructor(_width,_height,_color){
    
        this.width = _width;
        this.height = _height;
        this.color = _color;
        console.log( `rectangle ufos  `);

        this.areav =  this.width * this.height ;
    }

      
     
     area(){
        return    this.areav;
    }

    about(){
        return `
    wy width is ${this.width}.
    my color is ${this.color}`;
    }
        
    }


 const obj = new react( 20,24 ,"red");
 console.log(obj.area());
 console.log(obj.about());