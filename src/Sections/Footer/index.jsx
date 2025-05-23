import React from "react";
import { HeadLine } from "../../Components/Headline";
import { Title } from "../../Components/Title";
import { Menu } from "../../Components/Menu";
import { ButtonToMail } from "../../Components/ButtonMailTo";
import logo from '../../assets/images/picture/logo_footer.png';
import styles from './styles.module.scss';

export const Footer = () => {
  return(
    <div id="contacts" className={styles.footer}>
      <div className={styles.footer__info}>
        <div className={styles.footer__logo}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.footer__description}>
          <div className={styles.footer__headline}>
            <HeadLine text='Час діяти!' letters={{ '12': true, '15': true }} />
          </div>
          <div className={styles.footer__title}>
            <Title text='Є питання? Напиши нам' color='#0E2129' size='XL'/>
          </div>
        </div>
      </div>
      <div className={styles.footer__nav}>
        <div className={styles.footer__menu}>
          <div className={styles.nav}>
           <Menu />
          </div>
          <ButtonToMail label='написати' theme='footer' />
        </div>
        <div className={styles.footer__line}>
        </div>
      </div>
    </div>
  )
}