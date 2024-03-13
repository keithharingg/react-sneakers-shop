import React, { useContext, useState } from 'react';
import { CgCloseR } from 'react-icons/cg';
import Info from '../Info/Info';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../App';

const Drawer = ({ onClose, items = [], onRemove }) => {
  const [orderId, setOrderId] = useState(null);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const { setCartItems } = useContext(AppContext);

  const onClickOrder = () => {
    setOrderId(Math.floor(Math.random() * 10));
    setIsOrderComplete(true);
    setCartItems([]);
  };

  const navigate = useNavigate();
  const handleClose = () => {
    onClose(); // Close the cart
    navigate('/');
  };

  return (
    <div className="drawer-overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between">
          Cart <CgCloseR onClick={handleClose} className="cart-remove" />
        </h2>

        {items.length > 0 ? (
          <>
            <div className="d-flex flex-column flex">
              <div className="cart-items">
                {items.map((item) => (
                  <div key={item.id} className="cartItem d-flex align-center mb-20">
                    <img className="mr-10" width={150} height={150} src={item.img} alt="Sneakers" />
                    <div className="mr-10">
                      <p className="sex">Men's sneakers</p>
                      <p className="title">{item.title}</p>
                      <b>€ {item.price}</b>
                    </div>
                    <CgCloseR onClick={() => onRemove(item.title)} className="cart-remove" />
                  </div>
                ))}
              </div>
            </div>

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
              <button onClick={onClickOrder} className="greenButton">
                Checkout <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </>
        ) : (
          <Info
            title={isOrderComplete ? 'Order placed!' : 'Cart is empty.'}
            description={
              isOrderComplete
                ? `Your order #${orderId} will be transferred to courier delivery soon.`
                : 'Add at least one pair of sneakers to place an order.'
            }
            image={isOrderComplete ? 'img/complete-order.jpg' : 'img/empty-cart.jpg'}
          />
        )}
      </div>
    </div>
  );
};

export default Drawer;
