let anserNumber = Math.floor(Math.random() * 100)+1

const guesses = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')

const guessField = document.querySelector('.guessField')
const guessSubmit = document.querySelector('.guessSubmit')

let guessCount = 1
let resetbtn

function checkNumber(){
    let userGuess = Number(guessField.value)
    if(guessCount === 1){
        guesses.textContent = '前回の予想：'
    }
    guesses.textContent += userGuess + ' '

    if(userGuess === anserNumber){
        lastResult.textContent = 'おめでとう! 正解です!'
        lastResult.style.backgroudColor = 'green'
        lowOrHi.textContent = ''
        setGameOver()
    }
    else if(guessCount === 10){
        lastResult.textContent = '!!!ゲームオーバー!!'
        setGameOver()
    }
    else{
        lastResult.textContent = '間違いです!'
        lastResult.style.backgroudColor = 'red'
        if(userGuess < anserNumber){
            lowOrHi.textContent = '今の予想は小さすぎです!もっと大きな数字です。'
        }
        else if(userGuess > anserNumber){
            lowOrHi.textContent = '今の予想は大きすぎです!もっと小さな数字です。'
        }
    }
    guessCount++
    guessField.value = ''
    guessField.focus()

}
guessSubmit.addEventListener('click',checkNumber)

function setGameOver(){
    guessField.disabled = true
    guessSubmit.disabled = true
    resetbtn = document.createElement('button')
    resetbtn.textContent = '新しいゲームを始める'
    document.body.appendChild(resetbtn)
    resetbtn.addEventListener('click',resetGame)
}
function resetGame(){
    guessCount = 1
    let resetParams = document.querySelectorAll('.resetParams p')
    for (let i = 0;i < resetParams.length;i++){
        resetParams[i].textContent = ''
    }
    resetbtn.parentNode.removeChild(resetbtn)

    guessField.disabled = false
    guessSubmit.disabled = false
    guessField.value = ''
    guessField.focus()

    lastResult.style.backgroudColor = 'white'

    anserNumber = Math.floor(Math.random() * 100) + 1
}
