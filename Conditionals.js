let person,age=13;

if (age>18){
    person='adult';
}
else if (age>12){ //as many as u want
    person='teenager';
}
else{
    person='child';
}

console.log(person);

//conditional operator
x=(age>18)? 'adult':'child';
console.log(x);

y=(age > 18)? 'adult': (age>12)?'teenager':'child';
console.log(y);

if ('0'){
    console.log('hi');
}