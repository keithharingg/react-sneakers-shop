import React from 'react';
import { FaHeart, FaShoppingCart, FaUserCircle } from 'react-icons/fa';

const Header = () => {
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
        <li
          style={{
            cursor: 'pointer',
          }}
          className="mr-30">
          <FaShoppingCart />
          <span className="ml-10">€ 107,50</span>
        </li>
        <li
          style={{
            cursor: 'pointer',
          }}
          className="mr-30">
          <FaHeart />
          <span className="ml-10">Bookmarks</span>
        </li>
        <li
          style={{
            cursor: 'pointer',
          }}
          className="mr-30">
          <FaUserCircle />
          <span className="ml-10">Profile</span>
        </li>
      </ul>
    </>
  );
};

export default Header;
