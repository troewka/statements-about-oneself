import React from "react";
import { HeadLine } from "../../Components/Head-line";
import { Title } from "../../Components/Title";
import { Menu } from "../../Components/Menu";
import { Button } from "../../Components/Button";
import logo from '../../assets/images/picture/logo_footer.png';
import arrow from '../../assets/images/icons/arrow_snake.svg';
import styles from './styles.module.scss';

export const Footer = () => {
  return(
    <div className={styles.footer}>
      <div className={styles.footer__info}>
        <div className={styles.footer__logo}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.footer__description}>
          <div className={styles.footer__headline}>
            <HeadLine text='Час діяти!' letters={['я', '!']}/>
          </div>
          <div className={styles.footer__title}>
            <Title text='Є питання? Напиши нам' color='#0E2129' size='XL'/>
          </div>
          <div className={styles.footer__arrow}>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.footer__nav}>
        <div className={styles.footer__menu}>
          <div className={styles.nav}>
           <Menu/>
          </div>
          <Button label='написати' theme='footer'/>
        </div>
        <div className={styles.footer__line}>
        </div>
      </div>
    </div>
  )
}