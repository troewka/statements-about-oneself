import React from "react";
import { Icon } from "../../Components/Icon";
import { Button } from "../../Components/Button";
import logo from '../../assets/images/picture/logo.png';
import main from '../../assets/images/picture/main_bg.png'
import styles from './styles.module.scss';

export const Main = () => {
  return(
    <div className={styles.wrapper}>
      <div className={styles.img_wrapper}>
        <img src={logo} alt="logo" />
        <img src={main} alt="main" />
        <p>Твій шлях до кар’єрного зростання</p>
        <div className={styles.icon}><Icon name='arrowLarge' size='large'/></div>
      </div>
      <div className={styles.info}>
        <p>Програма, яка змінить твоє життя вже сьогодні!</p>
        <Icon name='calendar' size='small'/>
        <div>
          <h5>Початок</h5>
          <span>хх лютого 2025</span>
        </div>
        <Button label='Зареєструйся зараз!' theme='green'/>
      </div>
    </div>
  )
}