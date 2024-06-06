import './SingleCard.css'

export default function SingleCard({ card, handleChoice, flipped, disabled }) {

  const handleClick = () => {
    if(!disabled) {
         handleChoice(card)
    }
  }

  return (
    <div className="carddd">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
            className="back"
            src="/images/cover.jpg"
            onClick={handleClick}
            alt="cover"
        />
      </div>
    </div>
  )
}