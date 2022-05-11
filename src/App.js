import './styles/style.scss';

import ScoreBoard from './components/ScoreBoard';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import Rules from './components/Rules';

import { useEffect, useState } from 'react';

function App() {
  const [stepTwo, setStepTwo] = useState(false);
  const [choice, setChoice] = useState("");
  const [score, setScore] = useState(0);
  const [rule, showRule] = useState(false);

  useEffect(() => {
    const score = JSON.parse(localStorage.getItem('gameScore'));
    if (score) {
      setScore(score)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('gameScore', JSON.stringify(score));
  }, [score]);
  
  return (
    <div className='container'>
      <ScoreBoard score={score}/>
      {!stepTwo && <StepOne setStepTwo={setStepTwo} setChoice={setChoice}/>}
      {stepTwo && <StepTwo choice={choice} setScore={setScore} setStepTwo={setStepTwo}/>}
      <button className='rule' onClick={() => showRule(true)}>Rules</button>
      {rule && <Rules showRule={showRule}/>}
    </div>
  );
}

export default App;
