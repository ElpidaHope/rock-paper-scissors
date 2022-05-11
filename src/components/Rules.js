import '../styles/components/_rules.scss';
import rule from '../images/image-rules.svg';
import close from '../images/icon-close.svg';

const Rules = ({showRule}) => {
  return (
    <div className="overlay">
      <div className="rule-content">
        <h1>Rules</h1>
        <img src={rule} alt="rule" />
        <img src={close} alt="close" onClick={() => showRule(false)}/>
      </div>
    </div>
  )
}

export default Rules;