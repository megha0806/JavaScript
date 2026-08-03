//Array
let vegies= new Array(); //type->object
let animal=['dog','cat','donkey']
vegies=['carrot',{name:'Megha',age:20}, function add(a,b){return a+b},'beetroot','potato',true,null,undefined,20];
//any DT can be used

console.log(vegies);
console.log(vegies[0]);
console.log(vegies[1].name);
console.log(vegies[2](1,5));

//add new element
animal[3]='cow'; //index based
animal.push('pig'); //ele at last
animal.unshift('goat'); //ele at first

console.log(animal);

//delete an element
animal.pop(); //last
//console.log(animal.pop()); returns what element is popped
console.log(animal.shift()); //first

for (a of animal){ //in->index, of->elements
    console.log(a);
}

//length
console.log(animal.length);

let matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(matrix[2][3]);

for (let i=0; i<matrix.length; i++){
    for (let j=0; j<matrix.length; j++){
        console.log(matrix[i][j]);
    }
}