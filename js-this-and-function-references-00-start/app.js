class NameField {
  constructor(name) {
    const field = document.createElement("li");
    field.textContent = name;
    const nameListHook = document.querySelector("#names");
    nameListHook.appendChild(field);
  }
}

// class NameGenerator {
//     constructor() {
//         const btn = document.querySelector('button');

//         //Here we get undefinded addName as there is no addName function inside the constructor() scope
//                   //btn.addEventListener('click', addName);

//                   console.log(this);       // Output : NameGenerator Class Object

//         // Adding this in front of func name will tell that we need EventListner to attach "addName" which is inside 'this' scope,
//         // and here it is addName() function
//                   //btn.addEventListener('click', this.addName);

//         // Here Adding Parenthesis will call the function immediately and thus will not store reference in EventListner
//                  // btn.addEventListener('click', this.addName());

//     }

//     addName() {
//         const name = new NameField("Max");
//     }

// }

class NameGenerator {
  constructor() {
    const btn = document.querySelector("button");
    // const namesArr = ['Carl' , "Tommy" , 'Micheal'];
    // const currentIndex = 0;

    // adding 'this' in front of namesArr and currentIndex will make them attach to 'this' scope ,  i.e NameGenerater Class attribute
    this.namesArr = ["Carl", "Tommy", "Micheal"];
    this.currentIndex = 0;

    //Here JS compiler will first look for addName inside constructor() scope and if not found it will look in window scope
    //Here we get undefinded addName as there is no addName function inside the constructor() scope nor in window scope
            //btn.addEventListener('click', addName);

    console.log(this); // Output : NameGenerator Class Object

    // Adding this in front of func name will tell that we need EventListner to attach addName which is inside 'this' scope
            // btn.addEventListener('click', this.addName);

    //Method 1  Here bind() is used to bind 'this' attribute inside the addName function to the 'this' attribute value inside the
    // constructor() scope
            // btn.addEventListener('click', this.addName.bind(this));

    //Method 2  Arrow function always pass the reference of closest parent(here NameGenerater Class)
    btn.addEventListener("click", () => {
      this.addName();
    });

    // Here Adding Parenthesis will call the function immediately and thus will not store reference in EventListner
            // btn.addEventListener('click', this.addName());
  }

  addName() {
    // this will give us namesArr and currentIndex undefined as they are not in addName scope
            // const name = new NameField(namesArr[currentIndex]);

    console.log(this); // Output : ButtonName , here '''<button> Add Name </button>'''

    // it seems that using 'this' will solve our issue but we still got error can't read property of undefined
    // it is caused as here 'this' does not reference to NameGenerater Class Object but to the function which call addName(),
    // which is the default behaviour of javascript and
    // here is 'Add Name' button through EventListner
            // const name = new NameField(this.namess[this.currentIndex]);

    /* 
        IMPORTANT --------------

        Hence we can say that 'this' will store reference of the parent inside a block which called that piece
        of block(here addName function)

         --------------- IMPORTANT
        */

    // to solve above issue we can use bind()
    const name = new NameField(this.namesArr[this.currentIndex]);
    this.currentIndex++;
    if (this.currentIndex >= this.namesArr.length) {
      this.currentIndex = 0;
    }
  }
}

const gen = new NameGenerator();
