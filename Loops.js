//while, do-while, for
//-- Initialisation, Validation, Updation
//printing 1-10
let num=1;
while (num<=10){ //check cond before printing
    console.log(num);
    num++;
}

do{ //check cond after printing
    console.log("Inside Do");
}while (num<=10);

for (let n=1; n<=3; n++){
    console.log(n);
}


//Factorial
let a=5, ans=1;

for (let i=1; i<=a; i++){
    ans=ans*i;
}
console.log("Factorial:" + ans);

// let i=1;
// while (i<=n){
//     ans*=i;
//     i++;
// }
// console.log(ans);

//Sum of n numbers
let sum=0;
for(let j=0; j<=n; j++){
    sum+=j;
}
console.log("Sum:"+sum);