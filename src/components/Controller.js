import '../styles/components/_controller.scss';

const Controller = ({item, setStepTwo, setChoice}) => {
  const imgSrc = require(`../images/icon-${item}.svg`)
  const handleClick = () => {
    setStepTwo(true);
    setChoice(item)
  }
  return (
    <div className={`step-one__item ${item}`} onClick={handleClick}>
        <div className="circle">
          <img src={imgSrc} alt={item} />
        </div>
    </div>
  )
}

export default Controller;