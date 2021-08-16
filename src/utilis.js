const hands = ['rock', 'scissor', 'paper'];

const win = {
    rock: 'scissor',
    scissor: 'paper',
    paper: 'rock',
  };
  
  export function compareHand(a,b) {
    if (win[a] === b) {return 1;}
    else if (win[b] === a) {return -1;}
    else {return 0;}
  }
  
  function random(n) {
      return Math.floor(Math.random() * n);
  }

  export function generateRandomHand() {
      const idx = random(hands.length);
      return hands[idx];
  }