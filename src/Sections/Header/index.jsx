import React from "react";
import { Menu } from "../../Components/Menu";
import { Button } from "../../Components/Button";
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <div className={styles.header_wrapper}>
      <Menu/>
      <Button label='Реєстрація' theme='transparent'/>
    </div>
  )
}