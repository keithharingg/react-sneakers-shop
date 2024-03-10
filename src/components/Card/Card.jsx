import React from 'react';
import { CiSquarePlus } from 'react-icons/ci';
import { FaRegHeart } from 'react-icons/fa';
import styles from './Card.module.scss';

const Card = ({ title, price, img }) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.favorite}>
          <FaRegHeart className={styles.liked} />
        </div>
        {/* <FaHeart /> */}
        <img width={220} height={220} src={img} alt="Sneakers" />
        <h5>Men's sneakers {title}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Price: </span>
            <b>€ {price}</b>
          </div>
          {/* <BiSolidCheckboxChecked
                  }}
                /> */}
          <CiSquarePlus className={styles.plus} />
        </div>
      </div>
    </>
  );
};

export default Card;
