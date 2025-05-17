import React from "react";
import { HeadLine } from "../../Components/Headline";
import { Title } from "../../Components/Title";
import { Button } from "../../Components/Button";
import { Icon } from "../../Components/Icon";
import registration from '../../assets/images/picture/registration_bg_update.png';
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
          <div className={styles.registration__title}>
            <Title text='Заповнюй заявку на безкоштовний модуль 1' color='#508696' size='XLL'/>
          </div>
          <div className={styles.registration__button}>
            <Button label='Реєстрація' theme='registration' href={config.registration} />
          </div>
          <div className={styles.registration__date}>
            <Icon name='list' size='M'/>
            <Title text='ПОЧАТОК 31 ТРАВНЯ 2025' color='#93bccc' size='XS'/>
          </div>
        </div>
        <div className={styles.registration__picture}>
          <img src={registration} alt="" />
        </div>
      </div>
    </div>
  )
}
