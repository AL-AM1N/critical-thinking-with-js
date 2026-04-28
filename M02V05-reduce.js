//------------reduce-----------------
//?--------------- general form:

const numbers = [10, 20, 30];

const sum = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum); // 60


//? ------------- Count subtotal ---------------------

const cartItems = [
  { id: "p-001", name: "Daraz Laptop Bag", price: 1500, quantity: 1 },
  { id: "p-002", name: "Walton USB-C Cable", price: 350, quantity: 2 },
  { id: "p-003", name: "Aarong Kurta", price: 2200, quantity: 1 },
];

const subTotal = cartItems.reduce((subTotal, product) => {
    console.log(subTotal, product);
    return subTotal + (product.price * product.quantity);
}, 0)

console.log(subTotal);


//? Find the best scorer

const players = [
  { name: "Jamal Bhuyan", score: 88 },
  { name: "Shekh Morsalin", score: 81 },
  { name: "Rakib Hossain", score: 95 },
  { name: "Topu Barman", score: 91 },
  { name: "Sohel Rana", score: 72 },
];

const bestPlayer = players.reduce((bestPlayer, player) => {
    console.log("Current: ", bestPlayer, "Compare with: ", player);
    
    if(player.score > bestPlayer.score){
        return player;
    }

    return bestPlayer;

}, players[0]);

console.log(bestPlayer);