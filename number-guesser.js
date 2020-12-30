let readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Begin by initializing a variable in the global scope named secretNumber to any positive integer. Later we will program this variable to be assigned at random, but for now we'll hard-code a value that we can test for quickly.

const secretNumber = 12;

/*
Define a function named checkGuess that accepts a number as an argument. It should compare that argument against the global secretNumber. It should have the following behavior:

when the argument is larger than secretNumber, it should print 'Too high.' and return false
when the argument is smaller than secretNumber, it should print 'Too low.' and return false
when the argument is equal to secretNumber, it should print 'Correct!'
*/
const checkGuess = num => {
  if(num > secretNumber){

    console.log('Too high.');
    return false;
  } else if (num < secretNumber) {

    console.log("Too low.");
    return false;
  } else {

    console.log("Correct!");
    return true;
  }
}

// Define a function named askGuess. The method should use the readline module's question method to ask the user to 'Enter a guess: '. If you need a refresher on how to use this method, check out the question docs. Once the user enters their number, the checkGuess function should be called with their number as an argument and the interface should be closed.

const askGuess = () => {
  rl.question('Enter a guess: ', answer => {
    let lastAnswer = checkGuess(Number(answer));
    if(lastAnswer === false){
        askGuess();
    } else {
    rl.close();
    }
  })
}

askGuess();
// When accepting user input, there is a very important nuance to take into account. When the user enters their guess it will be interpreted as a string of numeric characters and not an actual number type! Depending on how you wrote your checkGuess function, this could be disastrous because:
