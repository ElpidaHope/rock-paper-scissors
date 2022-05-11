import '../styles/components/_step-two.scss';
import Controller from './Controller';

import { useEffect, useState } from 'react';

const StepTwo = ({choice, setScore, setStepTwo}) => {
  const [computer, setComputer] = useState(false);
  const [computerChoice, setComputerChoice] = useState('');

  useEffect(() => {
    setTimeout(() => {
      const random = Math.floor(Math.random() * 3);
      if (random === 0) {
        setComputerChoice("rock")
      }
      else if (random === 1) {
        setComputerChoice("scissors")
      }
      else if (random === 2) {
        setComputerChoice("paper")
      }
      setComputer(true)
    }, 1000);
  },[])
  
  const [comment, setComment] = useState([false, "win"]);
  const Result = () => {
    if (choice === computerChoice) {
      setComment([true, "draw"])
    }
    else if (choice === "rock" && computerChoice === "scissors") {
      setComment([true, "win"])
      setScore(prev => prev + 1)
    }
    else if (choice === "rock" && computerChoice === "paper") {
      setComment([true, "lose"])
      setScore(prev => prev - 1)
    }
  
    else if (choice === "paper" && computerChoice === "scissors") {
      setComment([true, "lose"])
      setScore(prev => prev - 1)
    }
    else if (choice === "paper" && computerChoice === "rock") {
      setComment([true, "win"])
      setScore(prev => prev + 1)
    }
  
    else if (choice === "scissors" && computerChoice === "rock") {
      setComment([true, "lose"])
      setScore(prev => prev - 1)
    }
    else if (choice === "scissors" && computerChoice === "paper") {
      setComment([true, "win"])
      setScore(prev => prev + 1)
    }
  }

  useEffect(() => {
    Result()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [computerChoice]);

  return (
    <>
      <div className={`game-play ${comment[0] && 'result'}`}>
        <Controller item={choice}/>
        {!computer ? <div className="empty-circle"></div> : <Controller item={computerChoice}/>}
        <p className='word'>You Picked</p>
        <p className='word'>The House Picked</p>
        {comment[0] && <div className="comment">
          {comment[1] === "win" && <h1>You Win </h1>}
          {comment[1] === "lose" && <h1>You Lose</h1>}
          {comment[1] === "draw" && <h1>Draw</h1>}
          <button onClick={() => setStepTwo(false)}>Play Again</button>
        </div>}
      </div>
    </>
  )
}

export default StepTwo;