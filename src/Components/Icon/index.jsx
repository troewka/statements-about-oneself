import React, { useState } from "react";
import classNames from "classnames";
import { ReactComponent as Calendar } from '../../assets/images/icons/calendar.svg';
import { ReactComponent as CalendarBigGreen} from '../../assets/images/icons/calendar_big_green.svg';
import { ReactComponent as CalendarBigBlue} from '../../assets/images/icons/calendar_big_blue.svg'
import { ReactComponent as Like } from '../../assets/images/icons/like.svg';
import { ReactComponent as Messages } from '../../assets/images/icons/messages.svg';
import { ReactComponent as Top } from '../../assets/images/icons/top.svg';
import { ReactComponent as Recommendations } from '../../assets/images/icons/recommendations.svg';
import { ReactComponent as ArrowSmall } from '../../assets/images/icons/arrow_small.svg';
import { ReactComponent as ArrowLarge } from '../../assets/images/icons/arrow_large.svg';
import { ReactComponent as List } from '../../assets/images/icons/list.svg';
import { ReactComponent as ArrowLeft } from '../../assets/images/icons/arrow_left.svg';
import { ReactComponent as ArrowRight } from '../../assets/images/icons/arrow_right.svg';
import styles from './styles.module.scss';

export const Icon = ({ name, size, color, borderColor, hoverColor, bg, hoverBg, onClick }) => {
  const [isHover, setIsHover] = useState(false);

  const icons = {
    calendar: Calendar,
    calendarBG: CalendarBigGreen,
    calendarBB: CalendarBigBlue,
    like: Like,
    messages: Messages,
    top: Top,
    recommendations: Recommendations,
    arrowSmall: ArrowSmall,
    arrowLarge: ArrowLarge,
    list: List,
    arrowLeft: ArrowLeft,
    arrowRight: ArrowRight,
  };

  const IconCmp = icons[name];

  const handleHover = () => setIsHover(!isHover);

  const classNameList = classNames(
    styles.size,
    size === 'S' && styles.size__s,
    size === 'S_active' && styles.size__s_active,
    size === 'M' && styles.size__m,
    size === 'L' && styles.size__l,
    size === 'XL' && styles.size__xl,
    size === 'ML' && styles.size__ml,
    borderColor === 'black' && styles.size__m_black
  );

  return (
    <div 
      className={classNameList} 
      style={{ backgroundColor: isHover ? hoverBg : bg }}
      onMouseEnter={handleHover} 
      onMouseLeave={handleHover}
      onClick={onClick}
    >
      <IconCmp fill={isHover ? hoverColor : color} />
    </div>
  )
}
