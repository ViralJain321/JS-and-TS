
let GiveRandomNumber = () => {
    return new Promise((resolve) =>  {
        setTimeout( () => {
            resolve( Math.round(Math.random() * 10))
        },3000)
    })
        
}

let RandomSquare = () => {
    return new Promise((resolve) => {
        throw new Error;
        let root = Math.round(Math.random()*10)
        return resolve(root*root)
    })
  
}


async function doStuff(){
    try{
        let num = await GiveRandomNumber();
        console.log("Logging random number: " + num);
        let sq = await RandomSquare();
        console.log("Logging Square: " + sq);
        console.log("Logging sqRoot * num: " + Math.sqrt(sq) * num);
    }catch(e){
         console.error(e);
    }
  
}

console.log("Logging outside async function");


doStuff();