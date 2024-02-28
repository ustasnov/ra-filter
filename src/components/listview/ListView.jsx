import PropTypes from 'prop-types';
import ShopItem from "../shopitem/ShopItem";
import "./ListView.css";

function ListView({cards}) {

  return (
    <div className="listview">
      {cards.map((card) => 
        <ShopItem key={card} name={card.name} price={card.price} color={card.color} img={card.img} buttontext="Add to cart"></ShopItem>  
      )}  
    </div>
  )
}

ListView.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.string,
      color: PropTypes.string,
      img: PropTypes.string
    })
  )
}

export default ListView