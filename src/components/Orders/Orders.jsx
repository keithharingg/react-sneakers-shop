import React, { useContext } from 'react';
import { AppContext } from '../../App';
import Card from '../Card/Card';

const Orders = () => {
  const { orders } = useContext(AppContext);
  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1>My orders</h1>
      </div>
      {orders.length > 0 ? (
        <div>
          <h2 className="d-flex mb-40">Last order</h2>
          <div className="d-flex flex-wrap">
            {orders.map((item, index) => (
              <Card key={index} title={item.title} price={item.price} img={item.img} />
            ))}
          </div>
        </div>
      ) : (
        <h2>No orders were added yet.</h2>
      )}
    </div>
  );
};

export default Orders;
