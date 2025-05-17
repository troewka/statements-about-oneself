import React from "react";
import { HeadLine } from "../../Components/Headline";
import { Title } from "../../Components/Title";
import { CardReviews } from "../../Components/CardReviews";
import bg from '../../assets/images/picture/rectangle.png'
import styles from './styles.module.scss';


export const Reviews = () => {
  return (
    <div className={styles.reviews}>
      <div className={styles.reviews__header}>
        <img src={bg} alt="rectangle" />
        <div className={styles.reviews__headline}>
          <HeadLine text='Відгуки' letters={['и']}/>
        </div>
        <div className={styles.reviews__title}>
          <Title text='Що кажуть ті, хто вже пройшов цей шлях?' color='#0E2129' size='M'/>
        </div>
      </div>
      <div className={styles.reviews__card}>
        <CardReviews number='01' name='Ганна:' descr={<>Високий рівень підготовки! Високий рівень підтримки одна одної під час воркшопів. <br/><br/> Я б хотіла щоб на наступному курсі у вас було ще більше учасниць, тому що це реально круто!</>}/>
        <CardReviews number='02' name='Ольга:' descr={<>Інформація подана дуже структуровано і відповідає потребі. Ну і звісно ДЗ, його багато, але методика ефективна) <br/><br/> Ще я хочу подякувати, за класне поширення вашої «експертності». Навіть через екран ви можете поширювати свою енергію і заряджати!</>}/>
        <CardReviews number='03' name='Марія:' descr={<>Вся інформація нібито створена саме для мене. <br/><br/> Багато нових методик, класно що ви ділились власним досвідом. Мені більш за все сподобався темплейт в Notion.</>}/>
        <CardReviews number='04' name='Ольга:' descr={<>Я радію результатам. Дві години кожного ранку, проходили дуже швидко, але при цьому отримала результат довготривалої дії. <br/><br/> Я повертаюсь у дискусію з вами під час сумніву або під час задоволення від досягнутого результату.</>}/>
      </div>
    </div>
  )
}









