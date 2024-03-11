import React from 'react';
import { CgCloseR } from 'react-icons/cg';

const Drawer = ({ onClose, items = [], onRemove }) => {
  return (
    <div className="drawer-overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between">
          Cart <CgCloseR onClick={onClose} className="cart-remove" />
        </h2>
        {items.map((item) => (
          <div key={item.id} className="cartItem d-flex align-center mb-20">
            <img className="mr-10" width={150} height={150} src={item.img} alt="Sneakers" />
            <div className="mr-10">
              <p className="sex">Men's sneakers</p>
              <p className="title">{item.title}</p>
              <b>€ {item.price}</b>
            </div>
            <CgCloseR onClick={() => onRemove(item.id)} className="cart-remove" />
          </div>
        ))}
        <div className="cart-items">
          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Total: </span>
                <div></div>
                <b>€ 430,00</b>
              </li>
              <li>
                <span>Tax 5%: </span>
                <div></div>
                <b>€ 21,05</b>
              </li>
            </ul>
            <button className="greenButton">
              Checkout <img src="/img/arrow.svg" alt="Arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
