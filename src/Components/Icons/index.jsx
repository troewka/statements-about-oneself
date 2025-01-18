import React from "react";
import classNames from "classnames";

import calendarIcon from '../../assets/images/icons/calendar.svg'
import likeIcon from '../../assets/images/icons/like.svg'
import messagesIcon from '../../assets/images/icons/messages.svg'
import topIcon from '../../assets/images/icons/top.svg'
import recommendationsIcon from '../../assets/images/icons/recommendations.svg'
import arrowSmallIcon from '../../assets/images/icons/arrow_small.svg'
import arrowBigIcom from '../../assets/images/icons/arrow_big.svg'

import styles from './styles.module.scss'



export const Icons = ( {name, theme} ) => {

  const icon = {
    calendar: calendarIcon,
    like: likeIcon,
    messages: messagesIcon,
    top: topIcon,
    recommendations: recommendationsIcon,
    arrowSmall: arrowSmallIcon,
    arrowBig: arrowBigIcom
  }

  return (
    <div className={classNames(styles.circle, theme === 'smallCircle' && styles.circle__small, theme === 'middleCircle' && styles.circle__middle, theme === 'bigCircle' && styles.circle__large)}>
      <img src={icon[name]} alt=''/>
    </div>
  )
}
