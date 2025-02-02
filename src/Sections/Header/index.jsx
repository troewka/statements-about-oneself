import React, { useState } from "react";
import { Menu } from "../../Components/Menu";
import { Button } from "../../Components/Button";
import { ReactComponent as Icon } from "../../assets/images/icons/burger_menu.svg";
import styles from './styles.module.scss';
import classNames from "classnames";

export const Header = () => {

  const [isOpen, setOpen] = useState();

  return (
    <div className={styles.header}>
      <div className={classNames(styles.header__nav, isOpen && styles.header__nav_active)}>
        <Menu/>
        <Button label='Реєстрація' theme='header'/>
      </div>
      <div className={styles.header__line}></div>
      <button 
        className={styles.header__button}
        onClick={() => setOpen(!isOpen)}>
        <Icon/>
      </button>
    </div>
  )
}