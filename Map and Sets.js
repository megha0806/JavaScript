let map=new Map(); //type-> object

map.set(1,"Megha");
map.set(2,"Ansy")
.set(3,"Sara");

console.log(map);
console.log(map.get(2));
console.log(map.has(1));

//deletion
map.delete(2); //del element
// map.clear(); //del the complete map
console.log(map);

console.log(map.size);


// () -> method
// .something -> property

for (key of map.keys()){
    console.log(key);
}

for (val of map.values()){
    console.log(val);
}

for (x of map){
    console.log(x);
}



//Sets
let set=new Set(); //type -> object
set.add('Megha')
.add('Ansy')
.add('Sara')
.add('Ansy')
.add(1); // only stores unique vlaues

console.log(set);
set.delete(1);
console.log(set.has("Megha"));

console.log(set);
console.log(set.size);

for (s of set){
    console.log(s);
}