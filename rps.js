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

const playerReport = document.createElement('p'); 
const computerReport = document.createElement('p'); 
const gameResult = document.createElement('p');

let playerTally = 0;
let computerTally = 0;

const btn1 = document.querySelector('#gb1');
btn1.addEventListener('click', function (e) {
  const cplay = computerPlay();
  const result = play('rock', cplay);
   
  if(result == 'w') {
    playerTally++;
  }
  else if(result == 'l') {
    computerTally++;
  }

  playerReport.textContent = "you played rock";
  computerReport.textContent = "computer played " + cplay;
  gameResult.textContent = result;
  results.append(playerReport); 
  results.append(computerReport);
  results.append(gameResult);

  score.append(playerTally); 
  score.append(computerTally);
  score.append(' ');

  if(playerTally == 5) {
    winner.append('GAME OVER! YOU WIN! ');
    playerTally = 0;
    computerTally = 0;
  }

  else if(computerTally == 5) {
    winner.append('GAME OVER! ROBOT WINS! ');
    playerTally = 0;
    computerTally = 0;
  }

})

const btn2 = document.querySelector('#gb2');
btn2.addEventListener('click', function (e) {
  const cplay = computerPlay();
  const result = play('paper', cplay);
   
  if(result == 'w') {
    playerTally++;
  }
  else if(result == 'l') {
    computerTally++;
  }

  playerReport.textContent = "you played paper";
  computerReport.textContent = "computer played " + cplay;
  gameResult.textContent = result;
  results.append(playerReport); 
  results.append(computerReport);
  results.append(gameResult);

  score.append(playerTally); 
  score.append(computerTally);
  score.append(' ');

  if(playerTally == 5) {
    winner.append('GAME OVER! YOU WIN! ');
    playerTally = 0;
    computerTally = 0;
  }

  else if(computerTally == 5) {
    winner.append('GAME OVER! ROBOT WINS! ');
    playerTally = 0;
    computerTally = 0;
  }

})


const btn3 = document.querySelector('#gb3');
btn3.addEventListener('click', function (e) {
  const cplay = computerPlay();
  const result = play('scissors', cplay);
   
  if(result == 'w') {
    playerTally++;
  }
  else if(result == 'l') {
    computerTally++;
  }

  playerReport.textContent = "you played scissors";
  computerReport.textContent = "computer played " + cplay;
  gameResult.textContent = result;
  results.append(playerReport); 
  results.append(computerReport);
  results.append(gameResult);

  score.append(playerTally); 
  score.append(computerTally);
  score.append(' ');

  if(playerTally == 5) {
    winner.append('GAME OVER! YOU WIN! ');
    playerTally = 0;
    computerTally = 0;
  }

  else if(computerTally == 5) {
    winner.append('GAME OVER! ROBOT WINS! ');
    playerTally = 0;
    computerTally = 0;
  }
})
