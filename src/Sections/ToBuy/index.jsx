import React from "react";
import { CardToBuy } from "../../Components/CardToBuy";
import { Title } from "../../Components/Title";
import styles from './styles.module.scss';

export const ToBuy = () => {
  return (
    <div className={styles.tobuy}>
      <div className={styles.tobuy__title}>
        <Title text='готова купити вже зараз?' color='#508696' size='XLL'/>
      </div>
      <div className={styles.tobuy__card}>
        <CardToBuy 
          title='EARLY BIRDS' 
          text='до 30 травня 2025'
          date='2025-05-30'
          price='3499' 
        />
        <CardToBuy 
          title='REGULAR' 
          text='з 31 травня 2025' 
          date='2025-05-31'
          price='3799' 
        />
        <CardToBuy 
          title='FINAL CALL' 
          text='з 1 червня 2025' 
          date='2025-06-01'
          price='4499' 
        />
      </div>
    </div>
  )
}
