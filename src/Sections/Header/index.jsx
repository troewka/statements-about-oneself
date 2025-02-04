import React, { useState } from "react";
import classNames from "classnames";
import { config } from "../../config";
import { Menu } from "../../Components/Menu";
import { Button } from "../../Components/Button";
import { ReactComponent as Icon } from "../../assets/images/icons/burger_menu.svg";
import { Drawer } from "../../Components/Drawer";
import styles from './styles.module.scss';

export const Header = () => {
  const [isOpen, setIsOpen] = useState();

  return (
    <div className={styles.header}>
      <div className={classNames(styles.header__nav)}>
        <Menu/>
        <Button label='Реєстрація' theme='header' href={config.registration} />
      </div>
      <div className={classNames(styles.header__nav__mobile)}>
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
          <Menu/>
        </Drawer>
        <button 
          className={styles.header__button}
          onClick={() => setIsOpen(!isOpen)}>
          <Icon/>
        </button>
        <Button label='Реєстрація' theme='header' href={config.registration} />
      </div>
      <div className={styles.header__line}></div>
    </div>
  )
}