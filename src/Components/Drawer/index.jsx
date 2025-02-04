import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const Drawer = ({ isOpen, setIsOpen, children }) => {
  return (
    <div className={classNames(styles.drawer, isOpen && styles.isOpen)}>
      <div className={styles.close} onClick={() => setIsOpen(false)}></div>
      {children}
    </div>
  )
}