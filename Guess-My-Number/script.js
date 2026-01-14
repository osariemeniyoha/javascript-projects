'use strict';



let secretNumber =Math.trunc(Math.random()*20)+1
// console.log(secretNumber)

let score = 20;
let highscore = 0

function displayMessage (message){
    document.querySelector('.message').textContent = message

}



document.querySelector('.check').addEventListener('click', 
    function(){
        const guess =Number(document.querySelector('.guess').value) 
        // console.log(guess)
        
        // No Input
        if (!guess) {
            // document.querySelector('.message').textContent ='No number'
            displayMessage('Not a number')

            // When guess is correct
        } else if (guess === secretNumber) {
            // document.querySelector('.message').textContent = 'Correct Number'
            displayMessage ('Correct Number')
            document.querySelector('.number').textContent = secretNumber
            document.querySelector('body').style.backgroundColor = '#60b347'
            document.querySelector('.number').style.width = '20rem'

            if (score > highscore) {
                highscore = score
                document.querySelector('.highscore').textContent = highscore
            }
            
            

            // When guess is Too High
        } else if (guess !== secretNumber) {
            if (score > 1) {
            // document.querySelector('.message').textContent =
            // guess > secretNumber? 'Too high' :'Too low'
            displayMessage(guess > secretNumber? 'Too high' :'Too low')
            score--
            document.querySelector('.score').textContent = score

        } else {
            // document.querySelector('.message').textContent = 'You lost the game'
            displayMessage('You lost the game')
            document.querySelector('.score').textContent = 0
        }
            


            
        } 
    })

    document.querySelector('.again'). addEventListener 
    ('click', function (){
        score = 20
        secretNumber =Math.trunc(Math.random()*20)+1
        document.querySelector('.score').textContent = score
        document.querySelector('body').style.backgroundColor = '#222'
        document.querySelector('.number').style.width = '15rem'
        
        displayMessage('Start guessing...')
        document.querySelector('.number').textContent = '?'
        document.querySelector('.guess').value = ''
    })