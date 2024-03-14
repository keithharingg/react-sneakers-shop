import React, { useContext, useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import Card from '../Card/Card';
import { AppContext } from '../../App';

const SneakersList = ({ sneakersData, onAddToCart, onAddToFavorites, isLoading }) => {
  const [searchValue, setSearchValue] = useState('');
  const { cartItems, favoriteItems } = useContext(AppContext);

  const onInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const renderingItems = () => {
    const filteredItems = sneakersData.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
      <Card
        key={index}
        {...item}
        added={cartItems.some((obj) => obj.id === item.id)}
        liked={favoriteItems.some((obj) => obj.id === item.id)}
        loading={isLoading}
        onAddToCart={(obj) => onAddToCart(obj)}
        onAddToFavorites={(obj) => onAddToFavorites(obj)}
      />
    ));
  };

  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1>{searchValue ? `Search by: "${searchValue}"` : 'All sneakers'}</h1>
        <div className="search-block d-flex">
          <img src="img/search.svg" alt="Search" />
          <input onChange={onInputChange} value={searchValue} placeholder="Search..." type="text" />
          {searchValue && <IoIosClose className="clearSearch" onClick={() => setSearchValue('')} />}
        </div>
      </div>
      <div className="d-flex flex-wrap">{renderingItems()}</div>
    </div>
  );
};

export default SneakersList;
