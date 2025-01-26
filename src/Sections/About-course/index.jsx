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
        <div className={styles.about__headline}>
          <HeadLine text='Про курс' letters={['у']}/>
        </div>
        <Title text='Що ти отримаєш?' color='#93bccc' size='M'/>
      </div>
      <div className={styles.about__info}>
        <div className={styles.about__item}>
          <Icon name='like' size='L'/>
          <Description texts={['Впевненість у власних досягненнях']}/>
        </div>
        <div className={styles.about__item}>
          <Icon name='messages' size='L'/>
          <Description texts={['Техніки ефективної комунікації на роботі']}/>
        </div>
        <div className={styles.about__item}>
          <Icon name='top' size='L'/>
          <Description texts={['Інструменти для побудови сильного бренду']}/>
        </div>
        <div className={styles.about__item}>
          <Icon name='recommendations' size='L'/>
          <Description texts={['Рекомендації з кар’єрного росту']}/>
        </div>
      </div>
    </div>


  )
}