function purchaseBtn() {
  alert("Thank you for purchasing.");
}

let quotesArray = [
  "Make sure to give us a tweet! (Not just on twitter) — LBHT",
  "Wood you like to buy our toys? — LBHT",
  "Our toys come in axe-cellent quality! — LBHT",
  "Wood our Toy Boat float?? — LBHT",
  "With these toys, you will no longer be board! — LBHT",
  "The quality is im-peck-able! — LBHT",
  "Heh-Heh-Heh-HEHHH-Heh!! — Woody Woodpecker",
];

let randomNumber = Math.floor(Math.random() * quotesArray.length);
//Let variable round down to whole number based one the random number multiplied by the length of the array

document.getElementById('press-quote').textContent = '“' + quotesArray[randomNumber].split(' — ')[0] + '”' + ' — ' + quotesArray[randomNumber].split(' — ')[1];
//grab the id, go in the text, and assign value of quotesArray which calls the randomNumber function.  # value determining position, string concat word

//console.log(quotesArray[randomNumber].split(' — ')[0]);   