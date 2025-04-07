import React from "react";
import { HeadLine } from "../../Components/Headline";
import { Title } from "../../Components/Title";
import { Button } from "../../Components/Button";
import { Icon } from "../../Components/Icon";
import registration from '../../assets/images/picture/registration_bg.png';
import { config } from "../../config";
import styles from './styles.module.scss';

export const Registration = () => {
  return(
    <div id="registation" className={styles.registration}>
      <div className={styles.registration__headline}>
        <HeadLine
          text='Реєстрація на модуль 1'
          letters={['є', 'я', '1']}
          styles={styles.registrationHeadline} 
        />
      </div>
      <div className={styles.registration__info}>
        <div className={styles.registration__description}>
          <h3 className={styles.registration__subtitle}>Перший модуль - безкоштовно для всіх!<br/>Повна вартість курсу <b>3799 грн!</b></h3>
          <div className={styles.registration__title}>
            <Title text='Заповнюй заявку вже зараз!' color='#508696' size='S'/>
          </div>
          <div className={styles.registration__button}>
            <Button label='Реєстрація на модуль 1' theme='registration' href={config.registration} />
          </div>
          <div className={styles.registration__date}>
            <Icon name='list' size='M'/>
            <Title text='ПОЧАТОК 24 ТРАВНЯ 2025' color='#93bccc' size='XS'/>
          </div>
        </div>
        <div className={styles.registration__picture}>
          <img src={registration} alt="" />
        </div>
      </div>
    </div>
  )
}
