const prompt = require("prompt-sync")();
console.log("Wel-Come You in 'Hang-Man' Game")
const name = prompt("Enter Your Good name :- ")
console.log("Hello, " + name, "Time to play hangman!\nYou can start\nStart guessing...")
let hangman = [  `
                    --------
                    |      |
                    |      O
                    |     \\|/
                    |      |
                    |     / \\
                    -
                    `,
                    `
                    --------
                    |      |
                    |      O
                    |     \\|/
                    |      |
                    |     /
                    -
                    `,
                    `
                    --------
                    |      |
                    |      O
                    |     \\|/
                    |      |
                    |
                    -
                    `,
                    `
                    --------
                    |      |
                    |      O
                    |     \\|
                    |      |
                    |
                    -
                    `,
                    `
                    --------
                    |      |
                    |      O
                    |      |
                    |      |
                    |
                    -
                    `,
                    `
                    --------
                    |      |
                    |      O
                    |
                    |
                    |
                    -
                    `,
                    `
                    --------
                    |      |
                    |      
                    |
                    |
                    |
                    -
                    `
     ]
const word = "gamblar"
let str = " "
let turn = 6
var incrment = 1
while (true){
    var failed = 0
    for (let x of word){
        if (str.includes(x)){
            console.log(x)
        } else{
            console.log("_")
            failed +=1
        }
    }     
    if (failed == 0){
        console.log("Congratulation You won")
        break
    }
    let guess = prompt("Guess a character:- ")
    if (word.includes(guess)){
        str += guess
    } else {
        console.log("Wrong answer\nYou have", + turn, 'more guesses')
        console.log(hangman[hangman.length-incrment])
        incrment++
        if (turn==0){
            console.log("You are Lose\nYour man Hanged")
            break
        } 
        turn -- 
    }
    
}