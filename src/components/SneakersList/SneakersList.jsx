import React, { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import Card from '../Card/Card';

const SneakersList = ({ sneakersData, onAddToCart, onAddToFavorites, cartItems }) => {
  const [searchValue, setSearchValue] = useState('');

  const onInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1>{searchValue ? `Search by: "${searchValue}"` : 'All sneakers'}</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          <input onChange={onInputChange} value={searchValue} placeholder="Search..." type="text" />
          {searchValue && <IoIosClose className="clearSearch" onClick={() => setSearchValue('')} />}
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {sneakersData
          .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item) => (
            <Card
              {...item}
              added
              onAddToCart={(obj) => onAddToCart(obj)}
              onAddToFavorites={(obj) => onAddToFavorites(obj)}
            />
          ))}
      </div>
    </div>
  );
};

export default SneakersList;
