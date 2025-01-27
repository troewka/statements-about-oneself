import React from "react";
import { Menu } from "../../Components/Menu";
import { Button } from "../../Components/Button";
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__nav}>
        <Menu/>
        <Button label='Реєстрація' theme='header'/>
      </div>
      <div className={styles.header__line}></div>
    </div>
  )
}