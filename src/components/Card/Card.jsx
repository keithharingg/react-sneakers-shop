import React, { useState } from 'react';
import { CiSquarePlus } from 'react-icons/ci';
import { FaRegHeart } from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';
import styles from './Card.module.scss';

const Card = ({ title, price, img, id, onAddToCart, onAddToFavorites }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const onClickPlusToggle = () => {
    onAddToCart({ title, price, img, id });
    setIsAdded(!isAdded);
  };

  const onClickLikeToggle = () => {
    onAddToFavorites({ title, price, img, id });
    setIsLiked(!isLiked);
  };
  return (
    <>
      <div className={styles.card}>
        <div className={styles.favorite}>
          {isLiked ? (
            <FcLike className={styles.isLiked} onClick={onClickLikeToggle} />
          ) : (
            <FaRegHeart onClick={onClickLikeToggle} className={styles.like} />
          )}
        </div>
        {/* <FaHeart /> */}
        <img width={220} height={220} src={img} alt="Sneakers" />
        <h5>Men's sneakers {title}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Price: </span>
            <b>€ {price}</b>
          </div>
          <CiSquarePlus onClick={onClickPlusToggle} className={styles.plus} />
        </div>
      </div>
    </>
  );
};

export default Card;
