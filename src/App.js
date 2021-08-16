import { useState } from "react";
import Button from "./Button";
import HandButton from "./HandButton";
import HandIcon from "./HandIcon";
import { compareHand, generateRandomHand } from "./utilis";
import "./App.css";

function getResult(me, other) {
  const comparison = compareHand(me, other);  
  if (comparison > 0) {return '나';}
  if (comparison < 0) {return '컴퓨터';}
  return '무승부';
}

function App() {
  const [hand, setHand] = useState('rock');
  const [otherHand, setOtherHand] = useState('rock');
  const [history, setHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [bet, setBet] = useState(1);

  
  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand();
    const nextHistoryItem = getResult(nextHand, nextOtherHand);
    const comparison = compareHand(nextHand, nextOtherHand);

    setHand(nextHand);
    setOtherHand(nextOtherHand);
    setHistory([...history, nextHistoryItem]);
    
    if (comparison > 0) {return setScore( score + bet ); } 
    if (comparison < 0) {return setOtherScore( otherScore + bet );}
  };
  
  const handleClearClick = () => {
    setHand('rock');
    setOtherHand('rock');
    setHistory([]);
    setScore(0);
    setOtherScore(0);
    setBet(1);
  };

  const handleBetChange = (e) => {
    let num = Number(e.target.value);
    if (num > 9) num %=10;
    if (num < 1) num = 1;
    num = Math.round(num);
    setBet(num);
  };

  return (
    <div className="App">
      <h1 className="App-heading">가위바위보</h1>
      <div className="App-reset">
        <Button alt="초기화" onClick={handleClearClick}></Button>
      </div>
      <div className="App-scores">
        <div className="Score">
          <div className="Score-num">{score}</div>
          <div className="Score-name">나</div>
        </div>
          <div className="App-versus">:</div>
        <div className="Score"> 
          <div className="Score-num">{otherScore}</div>
          <div className="Score-name">컴퓨터</div>
        </div>
      </div>     
      <div className="Box App-box">
        <div className="Box-inner">
          <div className="App-hands">
            <HandIcon value={hand} />
            <div className="App-versus">VS</div>
            <HandIcon value={otherHand} />
          </div>    
      <div className="App-bet">
        <span>승리 배점</span>
        <input type="number" min={1} max={9} onChange={handleBetChange}></input>
      </div>
      <div className="App-history">
        <h2>승부기록</h2>
        <p>{history.join(', ')}</p>    
      </div>
      </div>
      </div>  
      <div>
        <HandButton value="rock" onClick={handleButtonClick}/>
        <HandButton value="scissor" onClick={handleButtonClick}/>
        <HandButton value="paper" onClick={handleButtonClick}/>
      </div>
    </div>
  );
}

export default App;
