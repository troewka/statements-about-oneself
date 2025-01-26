import React from "react";
import arrowLongGreenIcon from '../../assets/images/icons/arrow_long_green.svg'
import arrowLongWhiteIcon from '../../assets/images/icons/arrow_long_white.svg'
import styles from './styles.module.scss'
import classNames from "classnames";

export const List = ({ name, text, title}) => {
  const icon = {
    arrowLongGreen: arrowLongGreenIcon,
    arrowLongWhite: arrowLongWhiteIcon
  }
  return (
    <div className={styles.listWrapper}>
      <img src={icon[name]} alt="" />
      <p className={classNames(name === 'arrowLongWhite' && styles.onlyText, name === 'arrowLongGreen' && styles.text)}>{title ? <span className={styles.title}>{title}</span> : ''} {text}</p>
    </div>
  )
}