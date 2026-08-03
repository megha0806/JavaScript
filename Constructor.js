let a={
    name:'Megha'
}
function User(){ //uppercase imp! //parameter=a
    // this={};
    this.name='Joshy'; // this.name=a;
    // return this;
    this.age=function(){
        return 20;
    }
}

let x=new User();
console.log(x);
console.log(x.age());

function Add(){
    this.a=45;
    this.b=78;
    this.add = function(c){
        return this.a+this.b+c;
    }
}

let sum= new Add();
console.log(sum.add(4));