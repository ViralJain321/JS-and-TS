

let promise = new Promise((resolve , reject) => {
    const value = 8 //Math.round(Math.random() *10)
    if(value % 2 == 0){
         resolve(value)
    }else{
         reject(value)
    }
})



promise.then((value) => {
        console.log("resolved value " + value);
        throw new Error("8");
        return value;
    } 
//     , (value) =>{
//     console.log("rejected value " + value);
//     return value;
// }
).then((value2) => {
    
    console.log("chained then " +  2*value2);
    
}).catch((value3) => {
    console.log(value3);
    console.log("rejected value " + value3*value3 );
}) ;