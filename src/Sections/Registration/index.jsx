import React from "react";
import { HeadLine } from "../../Components/Head-line";
import { Title } from "../../Components/Title";
import { Button } from "../../Components/Button";
import { Icon } from "../../Components/Icon";
import registration from '../../assets/images/picture/registration_bg.png'
import styles from './styles.module.scss';

export const Registration = () => {
  return(
    <div className={styles.registration}>
      <div className={styles.registration__headline}>
        <HeadLine text='Реєстрація на модуль 1' letters={['є', 'я', '1']}/>
      </div>
      <div className={styles.registration__info}>
        <div className={styles.registration__description}>
          <h3 className={styles.registration__subtitle}>Перші 30 - безкоштовно,<br/>з 31 заявки - вартість <b>2899 грн!</b></h3>
          <div className={styles.registration__title}>
            <Title text='Заповнюй заявку вже зараз!' color='#508696' size='S'/>
          </div>
          <div className={styles.registration__button}>
            <Button label='Реєстрація на 1 модуль' theme='blue'/>
          </div>
          <div className={styles.registration__date}>
            <Icon name='list' size='M'/>
            <Title text='Початок ХХ лютого 2025' color='#93bccc' size='XS'/>
          </div>
        </div>
        <div className={styles.registration__picture}>
          <img src={registration} alt="" />
        </div>
      </div>
    </div>
  )
}
