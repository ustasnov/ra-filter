import PropTypes from 'prop-types';
import { useState } from 'react';
import './Store.css';
import CardsView from "../cardsview/CardsView";
import ListView from "../listview/ListView";
import IconSwitch from "../iconswitch/IconSwitch";

function Store({ products }) {
  const [dataView, setDataView] = useState("view_module");
  let iconName = "";

  const onSwitch = () => {
    if (dataView === "view_module") {
      iconName = "view_list";
    } else {
      iconName = "view_module";
    }
    setDataView(iconName);
  }

  return (
    <div className='store'>
      <div className="storeheader">
        <IconSwitch icon={dataView} onSwitch={onSwitch}></IconSwitch>
      </div>
      <div className={"cardscontainer " + dataView}>
        <CardsView cards={products}></CardsView>
      </div>
      <div className={"listcontainer " + dataView}>
        <ListView cards={products}></ListView>
      </div>
    </div>
  );
}

Store.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.string,
      color: PropTypes.string,
      img: PropTypes.string
    })
  )
}

export default Store