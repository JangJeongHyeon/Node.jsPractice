// var candyMachine = {
//     status: {
//         name: 'node',
//         count: 5,
//     },
//     getCandy: function () {
//         this.status.count--;
//         return this.status.count;
//     }
// };

// var getCandy = candyMachine.getCandy;
// var count = candyMachine.status.count;

// console.log(getCandy);
// console.log(count);


/**
 * ES6
 */

const candyMachine2 = {
    status: {
        name: 'node',
        count: 5
    },

    getCandy() {
        this.status.count--;
        return this.status.count;
    }
};

const {
    getCandy,
    status: {
        count
    }
} = candyMachine2;

console.log(getCandy);
console.log(count);


const array = ['nodejs', {}, 10, true];
const [node, obj, ,bool] = array;

console.log(node);
console.log(obj);
console.log(bool);