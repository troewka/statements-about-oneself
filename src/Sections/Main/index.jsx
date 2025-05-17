import React from "react";
import { config } from "../../config";
import { Icon } from "../../Components/Icon";
import { Button } from "../../Components/Button";
import logo from '../../assets/images/picture/logo_main.png';
import main from '../../assets/images/picture/main_bg.png';
import styles from './styles.module.scss';

export const Main = () => {
  return(
    <div className={styles.main}>
      <div className={styles.main__header}>
        <div className={styles.main__logo}>
          <img src={logo} alt="" />
          <h3 className={styles.main__subtitle}>Твій шлях до кар’єрного зростання</h3>
        </div>
        <div className={styles.main__photo}>
          <img src={main} alt="" />
        </div>
      </div>
      <div className={styles.main__info}>
        <h4 className={styles.main__description}>Програма, яка змінить твоє життя вже сьогодні!</h4>
        <div className={styles.main__start}>
          <Icon name='calendar' size='M'/>
          <div className={styles.main__date}>
            <h4>Початок</h4>
            <span>31 травня 2025</span>
          </div>
        </div>
        <Button label='Зареєструйся зараз!' theme='main' href={config.registration} />
      </div>
    </div>
  )
}