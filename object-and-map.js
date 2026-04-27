//* basic structure of an object
//! Note:
// 1. Object keys in JavaScript are either strings or symbols.
// 2. So JavaScript doesn’t store duplicates—it just updates the value. (update bolte last a jei value ta thakbe oitai final value hoye jabe)

// const obj1 ={
//     name: "AL-AMIN",
//     age: 21,
//     profession: "frontend developer",
//     "marital status": "unmarried",  //? there is a space between marital status, thats why we use double quotation, we can also handle it like this: marital_status: "unmarried", maritalStatus: "unmarried"

//     payment_status: "paid"

// }

// console.log(obj1.profession); //? output: frontend developer

// // there is a space betw
// console.log(obj1["marital status"]) //? output: unmarried
//---------------------------------------------------------------------


// const obj = {
//     nextLevel: { courseId: "level2" }
// };

// console.log(obj.nextLevel.courseId);

//--------------------------------------------------------------

//? ------------------------- Map()-----------------------------

//! Note: 
// 1. We can store any type of key like boolean, string, number, object etc. , which we can't in the object property 
// 2. there are some Built-in methods
// i) map.set("name", "AL-AMIN");
// ii) map.get("name");
// iii) map.has("name");
// iv) map.clear()   - it will clear the map 
// v) map.size    -  koto gula items ase ta return korbe
// vi) map.forEach((value, key) => console.log("key: ", key, "vlaue: ", value))
// vii)  for...of → best for Map

// const map = new Map();

//console.log(map); //? output: Map(0) {}

// map.set("course1", "programming hero");
// map.set(true, "This is true");
// map.set(1, "This is number");

// console.log(map);
//? output: Map(3) {
//   'course1' => 'programming hero',
//   true => 'This is true',
//   1 => 'This is number'
// }

// map.forEach((value, key) => console.log("key: ", key, "vlaue: ", value))
//? output: 
// key:  course1 vlaue:  programming hero
// key:  true vlaue:  This is true
// key:  1 vlaue:  This is number

//?-------------Converting Map key to an array using spread operator [...map.keys()]----------

// const map = new Map();
// map.set("name", "AL-AMIN");
// map.set("age", 21);

// const arr = [...map.keys()]; //? this ... is a spread operator
// console.log(arr); //? output: [ 'name', 'age' ]