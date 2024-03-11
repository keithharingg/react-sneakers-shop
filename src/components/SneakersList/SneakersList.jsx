import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import axios from 'axios';

const SneakersList = () => {
  const [sneakersData, setSneakersData] = useState([]);

  useEffect(() => {
    getSneakers();
  }, []);

  async function getSneakers() {
    try {
      const res = await axios.get('https://65a17f98600f49256fb1bfc5.mockapi.io/sneakers');
      setSneakersData(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1>All sneakers</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          <input placeholder="Search..." type="text" />
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {sneakersData.map((s, i) => (
          <Card
            key={i}
            title={s.title}
            price={s.price}
            img={s.img}
            onFavorite={() => console.log('Added to bookmarks')}
          />
        ))}
      </div>
    </div>
  );
};

export default SneakersList;
