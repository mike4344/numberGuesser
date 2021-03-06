let readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let numAttempt
let secretNumber;

let randomInRange = (min, max) =>{
  return Math.floor(Math.random()* (max - min)) + min;
}

let askRange = (cb, cb2) =>{
   let asklimit = () =>{
    rl.question("enter a turn limit: ", answer =>{
         numAttempt = Number(answer)


    rl.question("enter a min number: ", answer =>{
        let min = Number(answer)
        rl.question("enter a max number: ", answer2 =>{
           let max = Number(answer2)
           console.log(`I'm thinking of a number between ${min} and ${max}...`)
            secretNumber = cb2(min, max)
            cb(numAttempt)
        })
    })
   }
   )}
    asklimit()
}
// Begin by initializing a variable in the global scope named secretNumber to any positive integer. Later we will program this variable to be assigned at random, but for now we'll hard-code a value that we can test for quickly.



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

const askGuess = (numAttempt) => {

  rl.question('Enter a guess: ', answer => {
    let lastAnswer = checkGuess(Number(answer));
   if (numAttempt === 0){
       rl.close
       console.log("loser")
   }
    if(lastAnswer === false){

        askGuess(numAttempt -1);
    } else {
    rl.close();
    }
  })
}

askRange(askGuess,randomInRange)

// When accepting user input, there is a very important nuance to take into account. When the user enters their guess it will be interpreted as a string of numeric characters and not an actual number type! Depending on how you wrote your checkGuess function, this could be disastrous because:
