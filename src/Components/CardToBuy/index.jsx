import React from "react";
import dayjs from "dayjs";
import classNames from "classnames";
import { Title } from "../Title";
import { Button } from "../Button";
import { Icon } from "../Icon";
import { config } from "../../config";
import styles from './styles.module.scss';

export const CardToBuy = ({ title, text, date, price }) => {
  const beforeStartDate = dayjs().isBefore(dayjs(date)) && date === '2025-05-30';
  const afterEndDate = dayjs().isAfter(dayjs(date)) && date === '2025-06-01';
  const theSameDate = dayjs().isSame(dayjs(date), 'day');

  const isActiveDay = beforeStartDate || afterEndDate || theSameDate;

  const className = classNames(styles.buy, isActiveDay && styles.buy__green);

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
        <Icon name={isActiveDay ? 'calendarBG' : 'calendarBB'} size='ML'/>
        <Title text={text} color='#000000' size='XX'/>
      </div>
       <Button
        label={<>купити за {price} грн.</>}
        theme={isActiveDay ? 'buyGren' : 'buyBlue'}
        href={config.registration}
      />
    </div>
  )
}






