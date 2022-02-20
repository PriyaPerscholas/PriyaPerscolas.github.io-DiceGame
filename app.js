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

  const switchPlayer = function () {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        if(activePlayer === 0) {
            activePlayer = 1;
          } 
            else {
            activePlayer = 0;
           }
           document.querySelector('.player--0').classList.toggle('player--active');
           document.querySelector('.player--1').classList.toggle('player--active');
    };

    document.querySelector('.btn--hold').addEventListener('click', function () {
    if (playing) {
      
      // 1. Add current score to active player's score
      scores[activePlayer] += currentScore;
    
      document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    
      // 2. Check if player's score is >= 30
      if (scores[activePlayer] >= 30) {
        
        // Finish the game
        playing = false;
    
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`) .classList.remove('player--active');
      } else {
        
        // Switch to the next player
        switchPlayer();
      }
    }
  });
//Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  
  document.querySelector('#score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;

  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
};
init();
