//break, continue, swtich

let n=4, ans=0;
for (let i=1; i<=n; i++){
    if (i==2){
        break; 
    }
    ans+=i;
}
console.log(ans);

//add odd numbers
sum=0;
for (let j=1; j<=n; j++){
    if (j % 2==0){
        continue;
    }
    sum+=j;
}
console.log(sum);

//swtich
let x=3;

switch(x){
    case 1: //x==1
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    case 3:
        console.log("three");
        break;
    default:
        console.log("Number is greater than 3");
}

//calculator
let op='+',a=21,b=78;
switch (op){
    case '+':
        console.log(a+b);
        break;
    case '-':
        console.log(a-b);
        break;
    default:
        console.log('Invalid Operation');
}
