import React from "react";
import arrowLongGreenIcon from '../../assets/images/icons/arrow_long_green.svg';
import arrowLongWhiteIcon from '../../assets/images/icons/arrow_long_white.svg';
import styles from './styles.module.scss';
import classNames from "classnames";

export const List = ({ name, title, text, size}) => {

  const icons = {
    arrowLongGreen: arrowLongGreenIcon,
    arrowLongWhite: arrowLongWhiteIcon
  }
  
  return (
    <div className={styles.list}>
      <img src={icons[name]} alt="" />
      <p className={classNames(
        styles.list__text, 
        size === 'S' && styles.list__text_s,
        size === 'M' && styles.list__text_m)}>{title ? 
        <span className={classNames(
          styles.list__title,
          size === 'S' && styles.list__text_s,
          size === 'M' && styles.list__text_m)}>
          {title}
        </span> : ''} 
          {text}
      </p>
    </div>
  )
}