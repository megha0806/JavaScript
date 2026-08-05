//recursive fns
// -base case
// -update statement
// -recursive call

function fact(n){
    if (n==0 || n==1){
        return 1;
    }
    return n*fact(n-1);
}

console.log(fact(5));


function add(n){
    if (n==0){
        return 0;
    }
    return n+add(n-1);
}

console.log(add(6));