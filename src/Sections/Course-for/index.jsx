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
          <List name='arrowLongWhite' text='Для професіоналів, які прагнуть кар’єрного зростання, підвищення доходу та визнання' size='M'/>
          <List name='arrowLongWhite' text='Для амбітних людей, які бажають досягти прориву у своїй кар’єрі' size='M'/>
        </div>
        <div className={styles.course__title}>
          <Title text='Ти - саме та, хто може змінити своє життя!' color='#508696' size='M'/>
        </div>
      </div>
      <div className={styles.course__picture}>
        <img src={about} alt="" />
      </div>
    </div>
  )
}