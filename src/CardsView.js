import React from 'react';
import PropTypes from 'prop-types';
import ProductModel from './models/ProductModel';
import ShopCard from './Shop/ShopCard';

function CardsView({ cards }) {
  return (
    <div className="store__cards">
      {cards.map((card) => <ShopCard card={card} key={card.id} />)}
    </div>
  );
}

CardsView.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.instanceOf(ProductModel),
  ).isRequired,
};

export default CardsView;
