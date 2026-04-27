//? Sort

const numbers = [40, 100, 1, 5, 25, 10];
const fruits = ["Banana", "apple", "Cherry", "date"];

fruits.sort((a, b) => a - b);
console.log(fruits); //! output: [ 'Banana', 'apple', 'Cherry', 'date' ]  , karon eikhane in build capital letter gulake age set kore, alphabatically set kore na jodi capital letter thake

// fruits.sort((a, b) => a.localeCompare(b)); //! eikhane "localeCompare" use er maddhome amra alphabatically print korte pacchi 

// console.log(fruits); //output: [ 'apple', 'Banana', 'Cherry', 'date' ]

//? Nested array flat

// const arr = [1, 2, 3, [4, 5, [6, 7, [8, 9, [10, 11]]]]];

// const flatArr = arr.flat(Infinity); //! joto gulo nested array e thakuk akn akta flat array te convert hoye jabe

// console.log(flatArr);

const tagsFromPosts = [
  ["javascript", "react", "css"],
  ["node", "express"],
  ["css", "html", "react"],
];

const filterTags = [...new Set(tagsFromPosts.flat())];  //! spread (... ) operator use kore array te convert kore felchi

console.log(filterTags);