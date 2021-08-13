import React from 'react';
import PropTypes from 'prop-types';
import ProductModel from '../models/ProductModel';

function ShopCard({ card }) {
  const {
    name, color, img, price,
  } = card;

  return (
    <article className="store__card">
      <img className="store-card__img" src={img} alt="" />

      <div className="store-card__content">
        <header className="store-card__header">
          <h3 className="store-card__name">
            <a className="store-card-name__link" href="#0">{name}</a>
          </h3>

          <div className="store-card__text">
            <p>{color}</p>
          </div>
        </header>

        <footer className="store-card__footer">
          <div className="store-card__prices">
            <span className="store-card__price store-card__new-price">
              $
              {price}
            </span>
          </div>
          <button className="store-card__add-button button" type="button">Add to cart</button>
        </footer>
      </div>
    </article>
  );
}

ShopCard.propTypes = {
  card: PropTypes.instanceOf(ProductModel).isRequired,
};

export default ShopCard;
