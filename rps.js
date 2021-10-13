function computerPlay() {
  switch(parseInt(Math.random()*3)) {
    case 0: return 'Rock'; break;
    case 1: return 'Paper'; break;
    case 2: return 'Scissors'; break;
  }
}

function playerPlay() {
  return prompt("Rock, paper, scissors, SHOOT!");
}

function play(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();   
  let result = '';

  //console.log(computerSelection);
  //console.log(playerSelection);

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

  console.log('SCORE:');
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
