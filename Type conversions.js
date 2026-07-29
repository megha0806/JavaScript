let age=20;
console.log(age);

console.log('12'/'2'); //works -,*,/ doesn't work for +... str concat occurs

//No. to str
age=String (age);
console.log(age);

let isAdult=true;
isAdult= String(isAdult); //works for all DT. Output= Input
console.log(isAdult);

//Str to No.
let day='365'; // doesn't work for alphabets and NaN gives 0, undefined gives NaN
day=Number(day);
console.log(typeof day);
console.log(day);

let x=45;
console.log(typeof x);
x=Boolean(x);

console.log(typeof x);
console.log(x); //false only if x=0
//''=false and 'a-z'=true
