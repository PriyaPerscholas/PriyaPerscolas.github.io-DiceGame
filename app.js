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

        let random=randomNumber1+randomNumber2;
        let random2=randomNumber3+randomNumber4;
        

            document.querySelector(".img1").setAttribute("src",
                "dice" + randomNumber1 + ".png");
            document.querySelector(".img2").setAttribute("src",
                "dice" + randomNumber2 + ".png");
            document.querySelector(".img3").setAttribute("src",
                "dice" + randomNumber3 + ".png");
            document.querySelector(".img4").setAttribute("src",
                "dice" + randomNumber4 + ".png");

        if (random === random2) {
            document.querySelector("h1").innerHTML = "Draw!";
        }

        else if (random < random2)
         {
            document.querySelector("h1").innerHTML
                            = (player2 + " WINS!");
        }

        else {
            document.querySelector("h1").innerHTML
                            = (player1 + " WINS!");
        }
    }, 2500);
}