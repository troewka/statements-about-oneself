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
          bg='green' 
          calendar='calendarBG' 
          date='до 30 травня 2025' 
          price='3499' 
          btn='buyGren'/>
        <CardToBuy 
          title='REGULAR' 
          bg='blue' 
          calendar='calendarBB' 
          date='до 31 травня 2025' 
          price='3799' 
          btn='buyBlue'/>
        <CardToBuy 
          title='FINAL CALL' 
          bg='blue' 
          calendar='calendarBB' 
          date='з 1 червня 2025' 
          price='4499' 
          btn='buyBlue'/>
      </div>
    </div>
  )
}
