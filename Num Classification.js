let x=-10;

if(x>0){
    console.log("Positive");
}
else if(x<0){
    console.log("Negative");
}
else{
    console.log("Zero");
}

let year=1900;
if (year%4==0){
    if (year%100==0){
        if (year%400){
            console.log("Leap Year");
        }
        else{
            console.log("Not a leap year");
        }
    }
    else{
        console.log("leap year");
    }
}
else{
    console.log("Not a leap year");
}