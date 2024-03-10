import React from 'react';
import Card from '../Card/Card';
import sneakers from '../../data/sneakers';

const SneakersList = () => {
  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1>All sneakers</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          <input placeholder="Search..." type="text" />
        </div>
      </div>
      <div className="d-flex justify-between">
        {sneakers.map((s, i) => (
          <Card key={i} title={s.title} price={s.price} img={s.img} />
        ))}
      </div>
    </div>
  );
};

export default SneakersList;
