const totalBill = 83.50;
const taxRate = 0.14;
const diners = [
  "Alice",
  "Bob",
  "Carol",
  "Dean",
];
const randomIndex = getRandomIndex(diners);
console.log(`${diners[randomIndex]} will get the bill, which comes to ${totalBill * (1 + taxRate)}, plus the tip.`);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
