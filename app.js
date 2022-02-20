let scores, currentScore, activePlayer, playing;

// Rolling dice functionality
document.querySelector('.btn--roll').addEventListener('click', function () {
    if (playing) {
      
      // 1. Generating a random dice roll
      const dice = Math.floor(Math.random() * 6) + 1;
    
      // 2. Display dice
      document.querySelector('.dice').src = `dice-${dice}.png`;
    
      // 3. Check for rolled 1
      if (dice !== 1) {
        
        // Add dice to current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}` ).textContent = currentScore;
      }
      else {
        
        // Switch to next player
        switchPlayer();
      }
    }
  });
// Player name
var player1 = "Player 1";
var player2 = "Player 2";

// Function to change the player name
function editNames() {
    player1 = prompt("Change Player1 name");
    player2 = prompt("Change player2 name");

    document.querySelector("p.Player1").innerHTML = player1;
    document.querySelector("p.Player2").innerHTML = player2;
}

// Function to roll the dice
function rollTheDice() {
    setTimeout(function () {
    
        
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;
        var randomNumber3 = Math.floor(Math.random() * 6) + 1;
        var randomNumber4 = Math.floor(Math.random() * 6) + 1;

        var random=randomNumber1+randomNumber2;
        var random2=randomNumber3+randomNumber4;
      
        
            document.querySelector(".img1").setAttribute("src","dice" + randomNumber1 + ".png");
            document.querySelector(".img2").setAttribute("src","dice" + randomNumber2 + ".png");
            document.querySelector(".img3").setAttribute("src","dice" + randomNumber3 + ".png");
            document.querySelector(".img4").setAttribute("src","dice" + randomNumber4 + ".png");
    
        if (random === random2) {
            document.querySelector("h2").innerHTML = "Draw!";
        }

        else if (random < random2)
         {
            document.querySelector("h2").innerHTML
                            = (player2 + " WINS!");
        }

        else {
            document.querySelector("h2").innerHTML
                            = (player1 + " WINS!");
        }
        
    }, 2500);

}