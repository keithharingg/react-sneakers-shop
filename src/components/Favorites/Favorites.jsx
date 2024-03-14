import React, { useContext } from 'react';
import { AppContext } from '../../App';
import Card from '../Card/Card';

const Favorites = () => {
  const { favoriteItems, onAddToFavorites, onAddToCart } = useContext(AppContext);
  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1>My favorites</h1>
      </div>
      {favoriteItems.length > 0 ? (
        <div className="d-flex flex-wrap">
          {favoriteItems.map((item, index) => (
            <Card
              key={index}
              liked={favoriteItems.some((obj) => obj.id === item.id)}
              {...item}
              onAddToFavorites={onAddToFavorites}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      ) : (
        <h2>No sneakers were added yet.</h2>
      )}
    </div>
  );
};

export default Favorites;
