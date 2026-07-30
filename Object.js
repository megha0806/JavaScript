let x={};
console.log(x);
console.log(typeof x);

let engineOptions="petrol, diesel";
let car={
    brand:"audi", //key-value pair
    color:"red",
    fuel: engineOptions+", ev",
    price:15,
    onRoadPrice(){
        return this.price+2;
    }
};

console.log(car);
console.log(car.fuel); 

delete car.color; //deletion
car['year']=1997; //creation
car.brand='BMW'; //or car['brand']='BMW'; //updation
console.log(car);

console.log(car.onRoadPrice);
console.log(car.onRoadPrice(12));

console.log('price' in car);

for (key in car){
    console.log(car[key]);
}

//references
let a={
    name:"Megha",
    age:20
};
let b=a;

console.log(b,a);

b.age=21;
console.log(a,b);

const c={
    pet:"dog",
    age:2
};
//c={} cannot be done because everything is taken as a single value
c.age=1.5;
console.log(c);

//garbage collection- free up memory space
c=null;
console.log(c);