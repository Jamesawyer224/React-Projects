


class person{

    constructor(_name,_age){
       this.name = _name;
       this.age = _age; 

       console.log(`A new person created.
       name : ${this.name}
       age  : ${this.age}`);
    }
}


class programmer extends person{
 
    constructor(_name,_age,_lang){
      
        super(_name,_age)
        // this.name = _name;
        // this.age = _age; 
        this.lang = _lang;
        
    }


}







const john = new person("john",25);
const kamal = new person("kamal",25);
const robayya = new programmer("robyya",24,"c");
