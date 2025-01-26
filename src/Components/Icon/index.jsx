import React, { useState } from "react";
import classNames from "classnames";
import calendarIcon from '../../assets/images/icons/calendar.svg';
import likeIcon from '../../assets/images/icons/like.svg';
import messagesIcon from '../../assets/images/icons/messages.svg';
import topIcon from '../../assets/images/icons/top.svg';
import recommendationsIcon from '../../assets/images/icons/recommendations.svg';
import arrowSmallIcon from '../../assets/images/icons/arrow_small.svg';
import arrowLargeIcon from '../../assets/images/icons/arrow_large.svg';
import listIcon from '../../assets/images/icons/list.svg';
import arrowLeftIcon from '../../assets/images/icons/arrow_left.svg';
import arrowRightIcon from '../../assets/images/icons/arrow_right.svg';
import { ReactComponent as ArrowRight } from '../../assets/images/icons/arrow_right.svg';
import styles from './styles.module.scss';

export const Icon = ( {name, size, color, hoverColor} ) => {
  const [isHover, setIsHover] = useState();

  const handleHover = () => setIsHover(!isHover);
  const icon = {
    calendar: calendarIcon,
    like: likeIcon,
    messages: messagesIcon,
    top: topIcon,
    recommendations: recommendationsIcon,
    arrowSmall: arrowSmallIcon,
    arrowLarge: arrowLargeIcon,
    list: listIcon,
    arrowLeft: arrowLeftIcon,
    arrowRight: arrowRightIcon
  }
  return (
    <div className={classNames(styles.size, size === 'S' && styles.size__s, size === 'S_active' && styles.size__s_active, size === 'M' && styles.size__m, size === 'L' && styles.size__l, size === 'XL' && styles.size__xl, isHover && styles.hover)} onMouseEnter={handleHover} onMouseLeave={handleHover}>
      {/*<img src={icon[name]} alt=''/>*/}
      <ArrowRight fill={isHover ? hoverColor : color}/>
    </div>
  )
}
