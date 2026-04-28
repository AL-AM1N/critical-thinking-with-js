//* Denormalizing Data (Client-Side "Join")

// Scenario: You have an array of users and a separate array of posts.
// You want to create a new array of users where each user object contains a posts array of their own posts.

//? input
const users = [
  { id: 101, name: "Alice" },
  { id: 102, name: "Bob" },
  { id: 103, name: "Charlie" },
];

const posts = [
  { id: 1, userId: 102, title: "My first post" },
  { id: 2, userId: 101, title: "React Hooks" },
  { id: 3, userId: 101, title: "Data Structures" },
  { id: 4, userId: 103, title: "CSS is fun" },
  { id: 5, userId: 102, title: "Node.js streams" },
];

//? output
// [
//   { id: 101, name: 'Alice', posts: [ { id: 2, ... }, { id: 3, ... } ] },
//   { id: 102, name: 'Bob', posts: [ { id: 1, ... }, { id: 5, ... } ] },
//   { id: 103, name: 'Charlie', posts: [ { id: 4, ... } ] }
// ]


//?-----------------Solution--------------------------
//? easy way but not efficient:
const result = users.map((user) => {
    const userPost = posts.filter((post) => post.userId === user.id);

    return {
        ...user,
        posts: userPost
    }
});

console.log(JSON.stringify(result));


//? solution with efficient way:

const postsByUser = posts.reduce((acc, post) => {
  if (!acc[post.userId]) {
    acc[post.userId] = [];
  }

  acc[post.userId].push(post);
  return acc;
}, {});

const result = users.map(user => ({
  ...user,
  posts: postsByUser[user.id] || []
}));

console.log(result);