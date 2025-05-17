import React from "react";
import classNames from "classnames";
import styles from './styles.module.scss';
import { Title } from "../Title";
import { Button } from "../Button";
import { Icon } from "../Icon";

export const CardToBuy = ( {title, bg, calendar, date, price, btn} ) => {
  const className = classNames(
    styles.buy, 
    bg === 'green' && styles.buy__green,
    bg === 'blue' && styles.buy__blue,
  );

  return (
    <div className={className}>
      <div className={styles.buy__title}>
        <Title text={title} color='#0E2129' size='XSS'/>
      </div>
      <div className={styles.buy__descr}>
        <p>Доступ до live семінарів</p>
        <p>Індивідуальний робочий зошит</p>
        <p>Ком’юніті однодумців</p>
      </div>
      <div className={styles.buy__date}>
        <Icon name={calendar} size='ML'/>
        <Title text={date} color='#000000' size='XX'/>
      </div>
       <Button label={<>купити за {price} грн.</>} theme={btn}/>
    </div>
  )
}






