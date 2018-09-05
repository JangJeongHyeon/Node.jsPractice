var sayNode = function(){
    console.log('Node');
};

var es = 'ES';
var oldObject = {
    sayJS: function(){
        console.log('js');
    },
    sayNode: sayNode
};

oldObject[es+6] = 'Fantastic';

oldObject.sayNode(); // Node
oldObject.sayJS(); // JS
console.log(oldObject.ES6); // Fantastic


/**
 * ES6
 */

 const newObject = {
     sayJS(){
         console.log('JS');
     },
     sayNode,
     [es+6]:'Fantastic',
 };

 newObject.sayNode() // Node
 newObject.sayJS(); // JS
 console.log(newObject.ES6);