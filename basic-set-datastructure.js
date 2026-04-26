// part 1: 
// const set = new Set();

// // console.log(set); // and:  Set(0) {} 

// set.add("mango");
// set.add("apple");
// set.add("banana");
// set.add(5)

// console.log(set); // output: Set(4) { 'mango', 'apple', 'banana', 5 }
//--------------------------------------------------------------


// part 2: set do not count repeated items

// const set1 = new Set();

// const mezba = { userName: "Mezba" }
// const mizan = { userName: "mizan" }
// const tanmoy = { userName: "tanmoy" }

// set1.add(mezba);
// set1.add(mizan);
// set1.add(tanmoy);
// set1.add(mizan);

// console.log(set1.size); // output: 3 [because set don't count repeated items]

//--------------------------------------------------------------------

// part 3: remove duplicate items from an array using set method

// const arr = ["apple", "mango", "banana", "apple", "banana"];

// const set = new Set(arr); // convert the array  to a set

// //console.log(set); // output: Set(3) { 'apple', 'mango', 'banana' }

// const newArr = Array.from(set);


// console.log(newArr); // output: [ 'apple', 'mango', 'banana' ]

// newArr.push("tomato");

// console.log(newArr); // output: [ 'apple', 'mango', 'banana', 'tomato' ]

// .............................................................

// part 4: 
// set.has("mango") // output: jodi set er moddhe mango thake tahole true return korbe na thakle false return korbe


// set.delete("banana")


//-----------------------------------------------------------------