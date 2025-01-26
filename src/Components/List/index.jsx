import React from "react";
import arrowLongGreenIcon from '../../assets/images/icons/arrow_long_green.svg'
import arrowLongWhiteIcon from '../../assets/images/icons/arrow_long_white.svg'
import styles from './styles.module.scss'

export const List = ({ name, title, text}) => {
  const icons = {
    arrowLongGreen: arrowLongGreenIcon,
    arrowLongWhite: arrowLongWhiteIcon
  }
  return (
    <div className={styles.list}>
      <img src={icons[name]} alt="" />
      <p className={styles.list__text}>{title ? 
        <span className={styles.list__title}>{title}
        </span> : ''} 
          {text}
      </p>
    </div>
  )
}