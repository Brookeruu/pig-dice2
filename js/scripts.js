function Player() {
  this.score = 0;
  this.round = 0;
};


Player.prototype.rollDice = function() {
  var roll = Math.floor((Math.random() * 6) + 1);
  console.log(roll);
  if (roll === 1) {
    this.round = 0;
    alert("You rolled a 1! No points this round!")
    return true;
  } else {
    this.round += roll;
  }
};


Player.prototype.hold = function() {
  this.score += this.round;
  return true;
};

function Game() {
  this.turn = 1;
}


// Game.prototype.switchPlayers = function(player, ) {
//   var playerTurn =
//   if player hold is true && player roll dice is true
//   then this.turn = 2; (or other player somehow)
// }

Game.prototype.playerChoice = function(player,choice) { // for UI - if choice is 1 = rollDice, if choice 2 = hold
  var playerSwitch = false;
  if (choice === 1) {
    playerSwitch =  player.rollDice();
  } else {
    playerSwitch = player.hold();
  }
  if (playerSwitch === true) {
    if (this.turn === 1) {
      this.turn += 1;
    } else {
      this.turn -= 1;
    }
  }
}

$(document).ready(function(event){
  var player1 = new Player();
  var player2 = new Player();
  var game1 = new Game();

  var rollAgain = false;
  var hold = false;
  rollAgain = parseInt($("#rollButton").val());
  hold = parseInt($("#holdButton").val())
  if (rollAgain === true) {
    game1.playerChoice(player1,1);
  } else if (hold === true) {
    game1.playerChoice(player1,2);
  }



});




// 4 buttons, but only one player's show at a time
// player 1 : roll and hold hide/show
// player 2 : roll and hold hide/show
//
// on click "roll" button starts rollDice: buttons show until returns true, which switch buttons
// on click "hold" button starts hold, round added to score, player1 buttons hide, player 2 show
