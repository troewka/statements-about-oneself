import React from "react";
import { Title } from "../../Components/Title";
import { List } from "../../Components/List";
import about from '../../assets/images/picture/about_bg_update.png'
import styles from './styles.module.scss';

export const CourseFor = () => {
  return (
    <div className={styles.course}>
      <div className={styles.course__descriptions}>
        <div className={styles.course__title}>
          <Title text='Для кого цей курс?' color='#0e2129' size='M'/>
        </div>
        <div className={styles.course__list}>
          <List name='arrowLongWhite' text='Ти вже досягла помітних успіхів, але готова до наступних звершень.' size='SS'/>
          <List name='arrowLongWhite' text='Хочеш більшого — кращу роль, вплив і оплату.' size='SS'/>
          <List name='arrowLongWhite' text='Відчуваєш потребу зупинитись, щоб перезавантажитись і рухатись далі.' size='SS'/>
        </div>
        <div className={styles.course__title}>
          <Title text="Твої наступні кроки до кар'єрного зростання" color='#86AD47' size='XX'/>
        </div>
      </div>
      <div className={styles.course__picture}>
        <img src={about} alt="" />
      </div>
    </div>
  )
}








