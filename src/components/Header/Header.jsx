import React, { useContext } from 'react';
import { FaHeart, FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';

const Header = ({ onClickCart }) => {
  const { cartItems } = useContext(AppContext);

  const toCartPrice = cartItems.reduce((sum, item) => item.price + sum, 0);
  return (
    <>
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Best sneakers shop</p>
          </div>
        </div>
      </Link>

      <ul className="d-flex">
        <li onClick={onClickCart} className="mr-30">
          <Link to="/cart">
            <FaShoppingCart />
            <span className="ml-10">€ {toCartPrice},00</span>
          </Link>
        </li>
        <li className="mr-30">
          <Link to="/favorites">
            <FaHeart />
            <span className="ml-10">Favorites</span>
          </Link>
        </li>
        <li className="mr-30">
          <Link to="/orders">
            <FaUserCircle />
            <span className="ml-10">Orders</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
