//JSON - JavaScript Object Notation

let user={
    name:"Megha",
    age:20,
    salary:1000000
};

let user1 = '{"name":"megha","age":20}';

//convert to json/string
console.log(JSON.stringify(user));

//convert to object
console.log(JSON.parse(user1));
console.log(typeof(JSON.parse(user1)));

//Date and time
let bday=new Date('2006-06-08'); //if not mentioned, today's date and time will be taken

console.log(bday);
console.log(bday.getDate());
console.log(bday.getDay());
console.log(bday.getFullYear());
console.log(bday.getMonth()); //uses 0 as base index