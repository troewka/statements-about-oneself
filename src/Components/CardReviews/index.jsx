import React from "react";
import styles from './styles.module.scss';

export const CardReviews = ( {number, name, descr} ) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <span className={styles.card__number}>{number}</span>
        <h5 className={styles.card__name}>{name}</h5>
      </div>
      <p className={styles.card__descr}>{descr}</p>
    </div>
  )
}
