//? Stateless vs Stateful

/**
 * ! Note: 
 * Stateless: A system is stateless if it does NOT remember anything about previous requests. (example: function in js)
 * Statefull: A system is stateful if it remembers past interactions. (example: object in js)
 */

//? Stateless:

// const counter = (amount) => {
//     let count = 0;

//     count = count + amount;

//     return count;
// }

// console.log(counter(2)); // output: 2
// console.log(counter(3)); // output: 3 [it will not give 5, because it's stateless, it can't hold data]

//? statefull:

const counter = {
    count: 0,

    // A function which is under the object is called "method"
    add(amount) {
        this.count = this.count + amount;
    },

    print(){
        console.log(this.count);
    }
};

counter.add(2);
counter.add(3);

counter.print(); // output: 5 , [output is 5 because it hold the data or store the data]


