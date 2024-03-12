import React, { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import Card from '../Card/Card';

const Favorites = ({ favoriteItems, onAddToCart, onAddToFavorites }) => {
  const [searchValue, setSearchValue] = useState('');

  const onInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1>My favorites</h1>
      </div>
      <div className="d-flex flex-wrap">
        {favoriteItems.map((s) => (
          <Card id={s.id} key={s.id} title={s.title} price={s.price} img={s.img} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
