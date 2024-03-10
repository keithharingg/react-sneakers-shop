import React from 'react';
import { CgCloseR } from 'react-icons/cg';
import { CiSquarePlus } from 'react-icons/ci';
import { FaRegHeart } from 'react-icons/fa';

const Card = () => {
  return (
    <div className="card">
      <div className="favorite">
        <FaRegHeart className="liked" />
      </div>
      {/* <FaHeart /> */}
      <img
        width={220}
        height={220}
        src="/img/sneakers/adidas-adizero-prime-x-2-strung-scarpe-running-uomo-ivory-black-id0264_A-240x240.jpg"
        alt="Sneakers"
      />
      <h5>Men's sneakers Adidas Adizero Prime X-2</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price: </span>
          <b>€ 299,99</b>
        </div>
        {/* <BiSolidCheckboxChecked
                  style={{
                    width: '50px',
                    height: '50px',
                    cursor: 'pointer',
                    opacity: 0.5,
                  }}
                /> */}
        <CiSquarePlus className="plus" />
      </div>
    </div>
  );
};

export default Card;
