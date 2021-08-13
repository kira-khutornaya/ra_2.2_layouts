import React from 'react';
import PropTypes from 'prop-types';
import ProductModel from './models/ProductModel';
import ShopItem from './Shop/ShopItem';

function ListView({ items }) {
  return (
    <div className="store__cards">
      {items.map((item) => <ShopItem item={item} key={item.id} />)}
    </div>
  );
}

ListView.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.instanceOf(ProductModel).isRequired,
  ).isRequired,
};

export default ListView;
