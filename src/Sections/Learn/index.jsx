import React from "react";
import { HeadLine } from "../../Components/Headline";
import { Icon } from "../../Components/Icon";
import { Description } from "../../Components/Description";
import { Title } from "../../Components/Title";
import rectangle from '../../assets/images/picture/rectangle_green.png'
import styles from './styles.module.scss';

export const Learn = () => {
  return (
    <div className={styles.learn}>
      <div className={styles.learn__headline}>
        <HeadLine text='Що ти навчишся робити?' letters={[7, 18]} color='#86AD47' colorArrow='#B0D283'/>
      </div>
      <div className={styles.learn__info}>
        <img src={rectangle} alt="rectangle" />
        <div className={styles.learn__item}>
          <Icon name='value' size='LG'/>
          <Description texts={['Усвідомлювати свою цінність і експертність']} size='M'/>
        </div>
        <div className={styles.learn__item}>
          <Icon name='reputation' size='LG'/>
          <Description texts={['Будувати особистий бренд і репутацію']} size='M'/>
        </div>
        <div className={styles.learn__item}>
          <Icon name='confidently' size='LG'/>
          <Description texts={['Говорити про себе впевнено']} size='M'/>
        </div>
        <div className={styles.learn__item}>
          <Icon name='barriers' size='LG'/>
          <Description texts={['Долати внутрішні бар’єри']} size='M'/>
        </div>
      </div>
      <div className={styles.learn__title}>
        <Title text='Зроби наступні кроки до кар’єрного зростання!' color='#86AD47' size='XLB'/>
      </div>
    </div>
  )
}