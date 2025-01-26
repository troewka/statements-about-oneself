import React from "react";
import { HeadLine } from "../../Components/Head-line";
import { Title } from "../../Components/Title";
import { List } from "../../Components/List";
import { Icon } from "../../Components/Icon";
import picture1 from '../../assets/images/picture/program1_bg.png'
import picture2 from '../../assets/images/picture/program2_bg.png'
import styles from './styles.module.scss';

export const Details = () => {
  return(
    <div className={styles.details}>
      <div className={styles.details__headline}>
        <HeadLine text='Деталі програми' letters={['е', 'а']}/>
      </div>
      <div className={styles.details__info}>
        <div className={styles.details__descriptions}>
          <div className={styles.details__title}>
            <Title text='4 модулі для досягнення цілей' color='#0e2129' size='M'/>
          </div>
          <List name='arrowLongGreen' text='Самооцінка та постановка цілей; подолання обмежуючих переконань.' title='Модуль 1:'/>
          <List name='arrowLongGreen' text='Визначення своєї ніші та експертності; навчання чіткому формулюванню своєї цінності.' title='Модуль 2:'/>
          <List name='arrowLongGreen' text='Побудова репутації через різні платформи.' title='Модуль 3:'/>
          <List name='arrowLongGreen' text='Створення сталих кроків для довгострокового успіху; конструктивна робота з критикою.' title='Модуль 4:'/>
        </div>
        <div className={styles.details__picture}>
          <img src={picture1} alt="" />
        </div>
      </div>
      <div className={styles.details__buttons}>
        <button>
          <Icon name='arrowLeft' size='S' color='#000' hoverColor='#fff'/>
        </button>
        <button className={styles.details__buttons_active}>
        <Icon name='arrowRight' size='S' isHover/>
        </button>
      </div>
    </div>
  )
}