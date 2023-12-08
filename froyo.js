// let dinner = {
//   cheeseburger: 12,
//   steak: 20,
//   soup: 8,
//   macAndCheese: 14,
//   ultdSoupAndSalad: 16,
// };
// console.log(Object.keys(dinner));

// const fullPrice = Object.values(dinner);
// let full = 0;
// for (let i = 0; i < fullPrice.length; i++) {
//   full += fullPrice[i];
//   // return full
// }
// console.log(full);

const flavorPrompt = prompt(
  "Please type what kind of Froyo you would like!",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const stringArray = flavorPrompt.split(",");

console.log(stringArray);

const flavorArray = stringArray;

let i = 0;
while (i > flavorArray.length) {
  console.log(flavorArray[i]);
  i++;
}

const count = {
  vanilla: 0,
  strawberry: 0,
  coffee: 0,
  other: 0,
};

for (let i = 0; i < flavorArray.length; i++) {
  if (flavorArray[i] === "vanilla") {
    count.vanilla++;
  }
  if (flavorArray[i] === "strawberry") {
    count.strawberry++;
  } else if (flavorArray[i] === "coffee") {
    count.coffee++;
  } else {
    count.other++;
  }
}
console.log(count);
