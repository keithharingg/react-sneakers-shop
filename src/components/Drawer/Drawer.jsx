import React from 'react';
import { CgCloseR } from 'react-icons/cg';

const Drawer = () => {
  return (
    <div style={{ display: 'none' }} className="drawer-overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between">
          Cart <CgCloseR className="cart-remove" />
        </h2>
        <div className="cartItem d-flex align-center mb-20">
          <img
            className="mr-10"
            width={150}
            height={150}
            src="/img/sneakers/hoka-one-one-kaha-2-low-gtx-scarpe-outdoor-uomo-goblin-blue-1123190-gbhm_A-240x240.jpg"
            alt="Sneakers"
          />
          <div className="mr-10">
            <p className="sex">Men's sneakers</p>
            <p className="title">Hoka One One Kaha Low GTX</p>
            <b>€ 129,99</b>
          </div>
          <CgCloseR className="cart-remove" />
        </div>
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
