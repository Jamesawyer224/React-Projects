


class animal{

constructor(){
  console.log("AN animal is created.");
    }

sound(){
    console.log("Animal gennarally makes sound.");
   }
}


class dog extends animal{
    
    constructor(){
      super();  
      console.log("AN dog is created.");
        }

    sound(){
        console.log("Tommy is makes sound.");
    }  
    
}


class cat extends animal{

    constructor(){
        super();
    }

}

    console.log("__________");
    const someani = new animal;
    console.log("__________");
    const puppy = new dog;
    console.log("__________");
     
    someani.sound();
    console.log("__________");
    puppy.sound();
    console.log("__________");

    const reven = new cat();
    reven.sound();
    console.log("__________");
