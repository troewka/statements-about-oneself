import React from "react";
import { Title } from "../../Components/Title";
import { List } from "../../Components/List";
import about from '../../assets/images/picture/about_bg.png'
import styles from './styles.module.scss';

export const CourseFor = () => {
  return (
    <div className={styles.course}>
      <div className={styles.course__descriptions}>
        <div className={styles.course__title}>
          <Title text='Для кого цей курс?' color='#0e2129' size='M'/>
        </div>
        <div className={styles.course__list}>
          <List name='arrowLongWhite' text='Тих, хто хоче більшого: підвищення, вищої зарплати, визнання'/>
          <List name='arrowLongWhite' text='Якщо ти працюєш у команді і мрієш про кар’єрний прорив'/>
        </div>
        <div className={styles.course__title}>
          <Title text='Ти — саме та, хто готова змінити своє життя!' color='#508696' size='M'/>
        </div>
      </div>
      <div className={styles.course__picture}>
        <img src={about} alt="" />
      </div>
    </div>
  )

}