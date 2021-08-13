// comece a criar a sua função add na linha abaixo
function add(a, b){
    return a + b;
}

console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(a, b){
    let count = 0;
    for (let i=1; i <= a ;i++){
        count = add(b, count);
    }
    return count
}

console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');



function power(a, b){
    let count = 1;
    for (let i = 0; i < b; i++) { 
        count = multiply(count, a);
    }
    return count;
  }


console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


function factorial(a){
    let count = 1;
    for (let i = a; i > 1 ;i--){
        count = multiply(i, count);
    }
    return count
}

// function factorial(a){
//     let count = 1;
//     for (let i= a; i > 1 ;i--){
//         count = multiply(i, count);
//     }
//     return count
// }

console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');

function fibonacci(a){
    let count = 0;
    let count2 = 1;
    let nextCount;
    
    for (let i = 1; i< a ;i++){
        //console.log(count)
        nextCount = add(count, count2);
        count = count2;
        count2 = nextCount

    }  
    return count
}

console.assert(fibonacci(8) === 13, 'A função fibonacci não está funcionando como esperado');