let a=12, b=21;

//fn declaration
function ops(x,y){
    console.log((x+y*y/x)*y);
}

//fn call
ops(a,b);
ops(3,4);

function add(x=10,y=20){ //default parameters
    console.log(x+y);
}

add(7);
let z; //global var
// don't declare inside fn
function sub(x=20,y=10){
    //let z=x-y; ->local var
    z=x-y;
    return z;
}

console.log(sub(23,12));

// odd or even
function oddEven(a){ //try-> let OE= function (a){...}
    if (a%2==0){
        return "Even";
    }
    else{
        return "Odd";
    }
    console.log(`won't print if the cond is true`);
}
console.log(oddEven(a));

let OE=oddEven;
console.log(OE);
console.log(OE(21));

let odev= (a)=> a%2==0? "Even":"Odd";
console.log(odev(b));

//callback
function Operation(op, a, b){
    return op(a,b);
}

let mul=(a,b) => a*b;
let div=(a,b) => a/b;

console.log(Operation(mul,2,3));