import React, { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import Card from '../Card/Card';

const Favorites = ({ favoriteItems, onAddToCart, onAddToFavorites }) => {
  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1>My favorites</h1>
      </div>
      <div className="d-flex flex-wrap">
        {favoriteItems.map((item) => (
          <Card favoriteCheck={true} {...item} onAddToFavorites={onAddToFavorites} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
