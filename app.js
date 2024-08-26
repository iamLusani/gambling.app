// 1. Despot some money
// 2. collect a bet amount
// 3. determine number of lines to bet on
// 4. spin the slot machine
// 5. check if the user won
// 6. give the user their winning /
// 7. play again

//Despot some money
//importing the package that was instaled through the terminal
const prompt = require("prompt-sync")();
/*{ while(true) }  = while statement is a loop, true is a condition for when we should contunig looping,
 while(true) aka forever we are gonna contunig to do this until the statement is false. */
let deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid input!!!, try again.");
    } else {
      return numberDepositAmount;
    }
  }
};
let balance = deposit();

//determine number of lines to bet on
const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter number of lines (1-3): ");
    const numberLines = parseFloat(lines);

    if (isNaN(numberLines) || numberLines <= 0 || numberLines > 3) {
      console.log("Invalid input!!!, try again.");
    } else {
      return numberLines;
    }
  }
};
const linesYouGot = getNumberOfLines();

//collect a bet amount
const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt("Enter your bet: ");
    const numberBet = parseFloat(bet);

    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
      console.log("Invalid input!!!, try again.");
    } else {
      return numberBet;
    }
  }
};
const yourBet = getBet(balance, linesYouGot);
