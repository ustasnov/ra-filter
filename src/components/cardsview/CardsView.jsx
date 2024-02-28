import PropTypes from 'prop-types';
import ShopCard from "../shopcard/ShopCard";
import "./CardsView.css";

function CardsView({cards}) {

  return (
    <div className="cardsview">
      {cards.map((card) => 
        <ShopCard key={card} name={card.name} price={card.price} color={card.color} img={card.img} buttontext="Add to cart"></ShopCard>  
      )}  
    </div>
  )
}

CardsView.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.string,
      color: PropTypes.string,
      img: PropTypes.string
    })
  )
}

export default CardsView