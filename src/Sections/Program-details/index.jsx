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
          <div className={styles.details__list}>
            <List name='arrowLongGreen' text='Самооцінка та постановка цілей; подолання обмежуючих переконань.' title='Модуль 1:'/>
            <List name='arrowLongGreen' text='Визначення своєї ніші та експертності; навчання чіткому формулюванню своєї цінності.' title='Модуль 2:'/>
            <List name='arrowLongGreen' text='Побудова репутації через різні платформи.' title='Модуль 3:'/>
            <List name='arrowLongGreen' text='Створення сталих кроків для довгострокового успіху; конструктивна робота з критикою.' title='Модуль 4:'/>
          </div>
        </div>
        <div className={styles.details__picture}>
          <img src={picture1} alt="" />
        </div>
      </div>
      <div className={styles.details__buttons}>
          <Icon 
            name='arrowLeft' 
            size='S' 
            color='#508696' 
            hoverColor='#fff'
            hoverBg='#b0d283'
          />
          <Icon 
            name='arrowRight' 
            size='S' 
            color='#508696' 
            hoverColor='#fff'
            bg='#fff'
            hoverBg='#b0d283'
          />
      </div>
      <div className={styles.details__info}>
        <div className={styles.details__descriptions}>
          <div className={styles.details__title}>
            <Title text='додаткові активності' color='#0e2129' size='M'/>
          </div>
          <div className={styles.details__list}>
            <List name='arrowLongGreen' text='Поставте свої запитання Алесі та Юлії, отримайте персональні рекомендації та ідеї для розвитку.' title='Q&A сесії з експертами:'/>
            <List name='arrowLongGreen' text='Інтерактивні зустрічі з психологом для саморефлексії та секретною гостею, чий досвід надихне вас.' title='Зустрічі з професіоналами:'/>
            <List name='arrowLongGreen' text='Інструменти для самостійної роботи, щоб закріпити отримані знання та навички.' title='Тести та практичні завдання:'/>
            <List name='arrowLongGreen' text='Можливість отримати ексклюзивну live-підтримку від однодумниць та побудувати міцні зв’язки.' title='Нетворкінг:'/>
          </div>
        </div>
        <div className={styles.details__picture}>
          <img src={picture2} alt="" />
        </div>
      </div>
      <div className={styles.details__buttons}>
          <Icon 
            name='arrowLeft' 
            size='S' 
            color='#508696' 
            hoverColor='#fff'
            hoverBg='#b0d283'
          />
          <Icon 
            name='arrowRight' 
            size='S' 
            color='#508696' 
            hoverColor='#fff'
            bg='#fff'
            hoverBg='#b0d283'
          />
      </div>
      
    </div>
  )
}