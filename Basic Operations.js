//unary
let x=1;
x=-x;
console.log(x);

//binary +,-,*,/,%,**
let a=12,b=21;
let sum=a+b;
console.log(sum);

let c='hi';
let d='hello';
let concat=a+b;
console.log(concat);

let e='12';
let f='6';
let tot=Number(e)+Number(f);
console.log(tot);

//Assignment Operator
let g=h=i=12;
console.log(g,h,i);

//Modify on place
let j=12;
j+=5;
console.log(j);

//increment/decrement
j++; //post and pre exists
console.log(j);


//comparisons
let k=12,l=21;
console.log(k<l);

let m='0',b=0;
m=Boolean(m);
n=Boolean(n);
console.log(m==n);
console.log('0'===0);//strict equality

console.log(null==undefined);
console.log(null===undefined);

//null(0)<=0 & undefined(NaN)>=0