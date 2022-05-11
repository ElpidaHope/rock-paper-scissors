import '../styles/components/_step-one.scss';

import Controller from './Controller';

const StepOne = ({setStepTwo, setChoice}) => {
  return (
    <div className="step-one">
      <Controller item='rock' setStepTwo={setStepTwo} setChoice={setChoice}/>
      <Controller item="scissors" setStepTwo={setStepTwo} setChoice={setChoice}/>
      <Controller item="paper" setStepTwo={setStepTwo}setChoice={setChoice} />
    </div>
  )
}

export default StepOne;