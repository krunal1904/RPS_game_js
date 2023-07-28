const playerscore = document.querySelector('#player-score')
const hands = document.getElementById('hands')
const result = document.getElementById('result')
const endGameBtn = document.getElementById('endGameButton')

function getComputerChoice(){
    const rps = ['rock','paper','scissors']
    const randChoice = Math.floor(Math.random() * rps.length)
    return rps[randChoice]
}

function getResult(playerChoice,compChoice) {
    let score = 0
    if(playerChoice === compChoice){
        score = 0
    }
    else if(playerChoice == 'rock' && compChoice == 'scissors'){
        score = 1
    }
    else if(playerChoice == 'paper' && compChoice == 'rock'){
        score = 1
    }
    else if(playerChoice == 'scissors' && compChoice == 'paper'){
        score = 1
    }
    else{
        score = -1
    }
    return score   
}

totalscore = {'player':0,'computer':0}

function onClickRps(playerChoice) {
    console.log({playerChoice});
    const compChoice = getComputerChoice()
    console.log({compChoice});
    const score = getResult(playerChoice,compChoice)
    console.log({score});
    totalscore['player'] += score
    console.log(totalscore);
    showResult(score,playerChoice,compChoice)
}

function playGame() {
    const rpsBtn = document.querySelectorAll('.rpsButton')
    rpsBtn.forEach(k =>{
    k.onclick = () => onClickRps(k.value)
    })
    const endGameBtn = document.getElementById('endGameButton')
    endGameBtn.onclick = () => {
        endGame(totalscore)
    }
}

function showResult(score,playerChoice,compChoice) {
    switch (score) {
        case -1:
          result.innerText = `You Lose!`
          break;
        case 0:
          result.innerText = `It's a Draw!`
          break;
        case 1:
          result.innerText = `You Win!`
          break;
      }

      hands.innerText = `👱 ${playerChoice} vs 🤖 ${compChoice}`
      playerscore.innerText = `Your Score:${totalscore['player']}`
}

function endGame(totalscore) {
    totalscore['player'] = 0
    totalscore['computer'] = 0
    result.innerText = ''
    hands.innerText = ''
    playerscore.innerText = ''
}

playGame()