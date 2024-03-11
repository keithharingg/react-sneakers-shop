import React from 'react';
import { FaHeart, FaShoppingCart, FaUserCircle } from 'react-icons/fa';

const Header = ({ onClickCart }) => {
  return (
    <>
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" alt="" />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Best sneakers shop</p>
        </div>
      </div>

      <ul className="d-flex">
        <li onClick={onClickCart} className="mr-30">
          <FaShoppingCart />
          <span className="ml-10">€ 107,50</span>
        </li>
        <li className="mr-30">
          <a href="/">
            <FaHeart />
            <span className="ml-10">Bookmarks</span>
          </a>
        </li>
        <li className="mr-30">
          <a href="/">
            <FaUserCircle />
            <span className="ml-10">Profile</span>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Header;
