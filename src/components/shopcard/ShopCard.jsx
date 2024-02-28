import PropTypes from 'prop-types';
import "./ShopCard.css";

function ShopCard({name, price, color, img, buttontext}) {

  return (
    <div className="shopcard">
      <div className="product-name">{name}</div>
      <div className="product-color">{color}</div>
      <figure className="product-figure">
        <img className="product-img" src={img} alt={name}></img>
      </figure>
      <div className="product-bottom">
        <div className="product-price">{"$" + price}</div>
        <button className="product-add">{buttontext}</button>
      </div>  
    </div>
  )
}

ShopCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  color: PropTypes.string,
  img: PropTypes.string,
  buttontext: PropTypes.string
}

export default ShopCard
