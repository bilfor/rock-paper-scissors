function computerPlay() {
  switch(parseInt(Math.random()*3)) {
    case 0: return 'rock'; break;
    case 1: return 'paper'; break;
    case 2: return 'scissors'; break;
  }
}

function playerPlay(choice) {
  return choice;
}

function play(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();   
  let result = '';

  if (playerSelection == 'rock') {
    switch(computerSelection) {
      case 'rock': result = 'd'; break; 
      case 'paper': result = 'l'; break;
      case 'scissors': result = 'w'; break;
    }
  }

  else if (playerSelection == 'paper') {
    switch(computerSelection) {
      case 'rock': result = 'w'; break; 
      case 'paper': result = 'd'; break;
      case 'scissors': result = 'l'; break;
    }
  }
 
  else if (playerSelection == 'scissors') {
    switch(computerSelection) {
      case 'rock': result = 'l'; break; 
      case 'paper': result = 'w'; break;
      case 'scissors': result = 'd'; break;
    }
  }

  else {
    result='invalid input, game canceled';
  }

  return result;
} 

/*
function game() {
  let w = 0;
  let l = 0;
  let d = 0; 
  let round='';

for(let i=0; i<5; i++) {
   round = play(playerPlay(), computerPlay());
   console.log(round);
    switch(round) {
      case 'w': w++; break;
      case 'l': l++; break;
      case 'd': d++; break;
    }
  }

  console.log('SCORE: ');
  console.log('PLAYER: ' + w);
  console.log('ROBOT: ' + l);
  
  if (w > l) {
    console.log('PLAYER WINS!')
  }
  else {
    console.log('ROBOT WINS!')
  }
}
game();

*/

const playerreport = document.createElement('p'); 
const computerreport = document.createElement('p'); 
const gameresult = document.createElement('p');

const btn1 = document.querySelector('#gb1');
btn1.addEventListener('click', function (e) {
  const cplay = computerPlay();
  const result = play('rock', cplay);
  playerreport.textContent = "you played rock";
  computerreport.textContent = "computer played " + cplay;
  gameresult.textContent = result;
  results.append(playerreport); 
  results.append(computerreport);
  results.append(gameresult);
  
})

const btn2 = document.querySelector('#gb2');
btn2.addEventListener('click', function (e) {
  playerPlay('paper');
  gamestate.textContent = "you played paper";
  score.append(gamestate); 
})

const btn3 = document.querySelector('#gb3');
btn3.addEventListener('click', function (e) {
  playerPlay('scissors');
  gamestate.textContent = "you played scissors";
  score.append(gamestate); 
  
})
