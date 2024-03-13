import React, { useState } from 'react';
import { MdShoppingCartCheckout } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';
import styles from './Card.module.scss';
import SneakersSkeleton from './../SneakersSkeleton/SneakersSkeleton';

const Card = ({
  title,
  price,
  img,
  id,
  onAddToCart,
  onAddToFavorites,
  favoriteCheck = false,
  added = false,
  loading,
}) => {
  const [isAdded, setIsAdded] = useState(added);
  const [isLiked, setIsLiked] = useState(favoriteCheck);

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
        {loading ? (
          <SneakersSkeleton />
        ) : (
          <>
            <div className={styles.favorite}>
              {isLiked ? (
                <FcLike className={styles.isLiked} onClick={onClickLikeToggle} />
              ) : (
                <FaRegHeart onClick={onClickLikeToggle} className={styles.like} />
              )}
            </div>
            <img width={220} height={220} src={img} alt="Sneakers" />
            <h5>Men's sneakers {title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price: </span>
                <b>€ {price}</b>
              </div>

              <MdShoppingCartCheckout
                onClick={onClickPlusToggle}
                className={added ? styles.plusActive : styles.plus}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Card;
