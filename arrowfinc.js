
let me = { 
  name: "Ashutosh Verma", 
  thisInArrow:() => { 
  console.log("My name is " + this.name); // no 'this' binding here 
  }, 
  thisInRegular(){ 
  console.log("My name is " + this.name); // 'this' binding works here 
  } 
 };
 me.thisInArrow(); 
 me.thisInRegular();



 class Person {
  constructor(name) {
    this.name = name
  }

  printNameArrow() {
    setTimeout(() => {
      console.log(`Arrow: ${this.name}`)
    }, 100)
  }

  printNameFunction() {
    setTimeout(function() {
      console.log(`Function: ${this.name}`)
    }, 100)
  }
}

const person = new Person('Kyle')
person.printNameArrow()
// Arrow: Kyle
person.printNameFunction()
// Function: 



class per{
  constructor(name){
    this.name = name
  }
}

 let person1 = (p) => {
    console.log("Arrow " + this);
 }

function person2(p){
   console.log("Normal " + this);
 }
 
 let p = new per("cat");


// console.log(p.name);

person1(p);
person2(p);