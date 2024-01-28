const C = "global"

let outerFunc = (out) => {return (inn) => {
        console.log(out);
        console.log(inn);
        console.log(C);
        }
}

let outter = outerFunc("hello out");
outter("helloinner");