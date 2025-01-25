import React from "react";
import { Icon } from "../../Components/Icon";
import { HeadLine } from "../../Components/Head-line";
import { Title } from "../../Components/Title";
import { Description } from "../../Components/Description";
import styles from './styles.module.scss';

export const AboutCourse = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about__header}>
        <HeadLine text='Про курс' letters={['у']}/>
        <Title text='Що ти отримаєш?' color='#93bccc' size='M'/>
      </div>
      <div className={styles.about__info}>
        <div className={styles.about__item}>
          <Icon name='like' size='middle'/>
          <Description texts={['Впевненість у власних досягненнях']}/>
        </div>
        <div className={styles.about__item}>
          <Icon name='messages' size='middle'/>
          <Description texts={['Техніки ефективної комунікації на роботі']}/>
        </div>
        <div className={styles.about__item}>
          <Icon name='top' size='middle'/>
          <Description texts={['Інструменти для побудови сильного бренду']}/>
        </div>
        <div className={styles.about__item}>
          <Icon name='recommendations' size='middle'/>
          <Description texts={['Рекомендації з кар’єрного росту']}/>
        </div>
      </div>
    </div>


  )
}