//-OR, -AND, -NOT, -NULL Coalescing
//OR
console.log(0||1); // short circuit at 1
console.log(0||12);
console.log(2||12);
console.log(0||1||12);

//AND
console.log(0 && 1); //short circuit at 0
console.log(21 && 1);
console.log(0 && 12);
console.log(121 && 0 && 12);

//NOT
console.log(!1);

let age=22, gender='m';
if (age>=21||(age >=18 && gender=='f')){
    console.log("Eligible");
}
else{
    console.log("Not Eligible");
}

//NULL colaescing
let uage=null; //try  with nos
let curr_age = uage ?? 18;

console.log(curr_age);

console.log(null || 0 || undefined);