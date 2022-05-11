import '../styles/components/_scoreBoard.scss';
import logo from '../images/logo.svg';

const ScoreBoard = ({score}) => {
  return (
    <div className="score-board">
      <img src={logo} alt="logo" />
      <div className="score-board__content">
        <p>Score</p>
        <h1>{score}</h1>
      </div>
    </div>
  )
}

export default ScoreBoard