import React from "react";
import classNames from "classnames";

import calendarIcon from '../../assets/images/icons/calendar.svg'
import likeIcon from '../../assets/images/icons/like.svg'
import messagesIcon from '../../assets/images/icons/messages.svg'
import topIcon from '../../assets/images/icons/top.svg'
import recommendationsIcon from '../../assets/images/icons/recommendations.svg'
import arrowSmallIcon from '../../assets/images/icons/arrow_small.svg'
import arrowLargeIcon from '../../assets/images/icons/arrow_large.svg'
import arrowLongGreenIcon from '../../assets/images/icons/arrow_long_green.svg'
import arrowLongWhiteIcon from '../../assets/images/icons/arrow_long_white.svg'
import listIcon from '../../assets/images/icons/list.svg'

import styles from './styles.module.scss'



export const Icon = ( {name, size} ) => {

  const icon = {
    calendar: calendarIcon,
    like: likeIcon,
    messages: messagesIcon,
    top: topIcon,
    recommendations: recommendationsIcon,
    arrowSmall: arrowSmallIcon,
    arrowLarge: arrowLargeIcon,
    arrowLongGreen: arrowLongGreenIcon,
    arrowLongWhiteIcon: arrowLongWhiteIcon,
    list: listIcon

  }

  return (
    <div className={classNames(styles.size, size === 'small' && styles.size__small, size === 'middle' && styles.size__middle, size === 'large' && styles.size__large)}>
      <img src={icon[name]} alt=''/>
    </div>
  )
}
