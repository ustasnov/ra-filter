import PropTypes from 'prop-types';
import "./ShopItem.css";

function ShopItem({name, price, color, img, buttontext}) {

  return (
    <div className="shopitem">
      <figure className="product-figure">
        <img className="product-img" src={img} alt={name}></img>
      </figure>
      <div className="product-name">{name}</div>
      <div className="product-color">{color}</div>
      <div className="product-price">{"$" + price}</div>
      <button className="product-add">{buttontext}</button>
    </div>
  )
}

ShopItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  color: PropTypes.string,
  img: PropTypes.string,
  buttontext: PropTypes.string
}

export default ShopItem