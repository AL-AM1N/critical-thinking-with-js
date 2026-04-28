//* Grouping and Aggregating Data

// Scenario: Count every survey and group by response

//? input
const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];

//? Output
// { A: 5, C: 3, B: 5, D: 1 }

//? Solution: -----------------------------------

const result = surveyResponses.reduce((acc, survey) => {

  //TODO initiate empty object
  //TODO Check if the response already exist or not
  //TODO If it exists then increment the count
  //TODO If not then initialize it with 1
  
  //? step by step:
  // if(acc[survey]){
  //     acc[survey] = acc[survey] + 1;
  // }

  // else {
  //     acc[survey] = 1;
  // }

  // in just one line:
  acc[survey] = (acc[survey] || 0) + 1;
  return acc;
}, {});

console.log(result);

//? Another solution: -----------------------------------

const count = {};
surveyResponses.forEach((survey) => {
  count[survey] = (count[survey] || 0) + 1;
});

console.log(count);
