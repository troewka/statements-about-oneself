import React from "react";
import { SliderCarouser } from "../../Components/SliderCarousel";
import { HeadLine } from "../../Components/Headline";
import { Title } from "../../Components/Title";
import { List } from "../../Components/List";
import picture1 from '../../assets/images/picture/program1_bg.png';
import picture2 from '../../assets/images/picture/program2_bg.png';
import styles from './styles.module.scss';

export const Details = () => {
  const items = [
    <div className={styles.details__info}>
      <div className={styles.details__descriptions}>
        <div className={styles.details__title}>
          <Title text='4 модулі для досягнення цілей' color='#0e2129' size='M'/>
        </div>
        <div className={styles.details__list}>
          <List name='arrowLongGreen' text='Самооцінка та постановка цілей; подолання обмежуючих переконань.' title='Модуль 1:' size='M'/>
          <List name='arrowLongGreen' text='Визначення своєї ніші та експертності; навчання чіткому формулюванню своєї цінності.' title='Модуль 2:' size='M'/>
          <List name='arrowLongGreen' text='Побудова репутації через різні платформи.' title='Модуль 3:' size='M'/>
          <List name='arrowLongGreen' text='Створення сталих кроків для довгострокового успіху; конструктивна робота з критикою.' title='Модуль 4:' size='M'/>
        </div>
      </div>
      <div className={styles.details__picture}>
        <img src={picture1} alt="" />
      </div>
    </div>,
    <div className={styles.details__info}>
      <div className={styles.details__descriptions}>
        <div className={styles.details__title}>
          <Title text='додаткові активності' color='#0e2129' size='M'/>
        </div>
        <div className={styles.details__list}>
          <List name='arrowLongGreen' text='Поставте свої запитання Алесі та Юлії, отримайте персональні рекомендації та ідеї для розвитку.' title='Q&A сесії з експертами:' size='S'/>
          <List name='arrowLongGreen' text='Інтерактивні зустрічі з психологом для саморефлексії та секретною гостею, чий досвід надихне вас.' title='Зустрічі з професіоналами:' size='S'/>
          <List name='arrowLongGreen' text='Інструменти для самостійної роботи, щоб закріпити отримані знання та навички.' title='Тести та практичні завдання:' size='S'/>
          <List name='arrowLongGreen' text='Можливість отримати ексклюзивну live-підтримку від однодумниць та побудувати міцні зв’язки.' title='Нетворкінг:' size='S'/>
        </div>
      </div>
      <div className={styles.details__picture}>
        <img src={picture2} alt="" />
      </div>
    </div>
  ]

  return(
    <div id="details" className={styles.details}>
      <div className={styles.details__headline}>
        <HeadLine text='Деталі програми' letters={['е', 'а']}/>
      </div>
      <SliderCarouser items={items} />
    </div>
  )
}