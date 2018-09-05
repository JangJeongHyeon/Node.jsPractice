/**
 * Var have functinal scope
 */
if (true){
    var x =3;
}

console.log(3);


/**
 * Const have block scope
 */

if(true){
    const y =3;
    y = 2; // Assignment to constant variable error
}

console.log(y); // Uncaught Reference Error : y is not defined

const c; // Uncaught Syntax Error: Missing initializer in const declation