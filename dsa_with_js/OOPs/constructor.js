class Car {
  constructor(){
console.log("constructor calling..");
this.model = "maruti sujuki"
this.year = 2020

  }
  printModel(){
    console.log("model is", this.model,"year is " , this.year);
    
  }
}
let model1 = new Car()
console.log(model1);
//  
// dynamic class 
class CarFlexibal {
  constructor(model, year){
    console.log("constructor ..is calling ....");
    
    this.model = model;
    this.year = year
  }
  printDetails(){
    console.log("model is" ,this.model, "year is" , this.year);
    
  }

}
const model2 = new CarFlexibal("dustor", 1002)
console.log(model2);

model2.printDetails()