
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
}

updateScoreElement();


let isAutoPlaying = false;
let intervalID;


//const autoPlay = () => {}

let AutoPlayArrowFunc = () => {
    autoPlay();
  }

  function autoPlay() {
  const autoPlayButton = document.querySelector('.js-auto-play-button')
  if (!isAutoPlaying) {
    autoPlayButton.classList.add('is-waiting')
    autoPlayButton.innerText = 'Зачекайте...';
    intervalID = setInterval(() => {
      const playerMove = computerMoveFunc();
      playGame(playerMove);
    }, 1500);  
    isAutoPlaying = true;
    setTimeout(() => {
      autoPlayButton.classList.remove('is-waiting')
      autoPlayButton.innerText = 'Зупинити гру';
      autoPlayButton.classList.add('is-playing')
    }, 1500); 
    if (autoPlayButton.innerText === 'Зачекайте...') {
      AutoPlayArrowFunc = () => {
        return false
      }
    }
  }
  else {
    clearInterval(intervalID);
    isAutoPlaying = false;
    document.querySelector('.js-auto-play-button')
      .innerText = 'Авто-гра'; 
    document.querySelector('.js-auto-play-button')
      .classList.remove('is-playing')
  }
}

if (document.onkeydown === 'a') {
  autoPlay()   
}

document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('Rock');
    updateScoreElement();

  })

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('Paper');
  })
document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('Scissors')
  })

document.querySelector('.js-reset-score-button')
  .addEventListener('click', () => {
    if (score.wins===0 && score.losses === 0 && score.ties === 0) {
      alert('Ви вже скинули рахунок!');
    }
    
    score.wins = 0
    score.losses = 0
    score.ties = 0

    localStorage.removeItem('score');

    
    document.querySelector('.js-result').
      innerHTML = '';
      
    document.querySelector('.js-computerMove').
      innerHTML = '';
      
    document.querySelector('.js-playerMove').
      innerHTML = '';
    
    updateScoreElement();

  })


document.querySelector('.js-auto-play-button')
  .addEventListener('click', AutoPlayArrowFunc)

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('Rock')
  }
  else if (event.key === 'p') {
    playGame('Paper')
  }
  else if (event.key === 's') {
    playGame('Scissors')
  }
  else if (event.key === 'a') {
    autoPlay()
  }
})

function playGame (playerMove) {

  const computerMove = computerMoveFunc();

  let result = '';

  if (playerMove === 'Scissors') {
  
    if (computerMove === 'Rock') {
    result = 'Ви програли';
    }
    else if (computerMove === 'Paper') {
      result = 'Ви виграли!';
    }
    else if (computerMove === 'Scissors') {
      result = 'Нічия';
    }
  }

  else if (playerMove === 'Rock') {
    
    if (computerMove === 'Rock') {
      result = 'Нічия';
    }
    else if (computerMove === 'Paper') {
      result = 'Ви програли';
    }
    else if (computerMove === 'Scissors') {
      result = 'Ви виграли!';
    }
  }

  else if (playerMove === 'Paper') {
    
    if (computerMove === 'Rock') {
      result = 'Ви виграли!';
    }
    else if (computerMove === 'Paper') {
      result = 'Нічия';
    }
    else if (computerMove === 'Scissors') {
      result = 'Ви програли';
    }
  }

  if (result === 'Ви виграли!') {
    score.wins ++;
  }
  else if (result === 'Ви програли') {
    score.losses ++;
  }
  else if (result === 'Нічия') {
    score.ties ++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result')
    .innerHTML = result;

  document.querySelector('.js-computerMove')
    .innerHTML = `Хід комп'ютера -- <img src="img/${computerMove}-emoji.png" class="move-image">`;

  document.querySelector('.js-playerMove')
    .innerHTML = `Ваш хід -- <img src="img/${playerMove}-emoji.png" class="move-image">`;


}

function updateScoreElement () {
document.querySelector('.js-score')
  .innerHTML = `Перемоги: ${score.wins}, Поразки: ${score.losses}, Нічиї: ${score.ties}`
}


function computerMoveFunc () {
const randomNumber = Math.random();

let computerMove = '';

if (randomNumber>0 && randomNumber <= 0.3) {
  computerMove = 'Rock';
}
else if (randomNumber>0.3 && randomNumber <= 0.6) {
  computerMove = 'Paper';
}
else if (randomNumber>0.6 && randomNumber <= 1) {
  computerMove = 'Scissors';

}
return computerMove;

}



