import React from "react";
import { config } from "../../config";
import { HeadLine } from "../../Components/Headline";
import { Title } from "../../Components/Title";
import { SocialIcon } from "../../Components/SocialIcon";
import { Description } from "../../Components/Description";
import author_1 from '../../assets/images/picture/author1_bg.png';
import author_2 from '../../assets/images/picture/author2_bg.png';
import styles from './styles.module.scss';

export const Autors = () => {
  return(
    <div id="authors" className={styles.autors}>
      <div className={styles.autors__headline}>
        <HeadLine text='Авторки курсу' letters={['и', 'у']}/>
      </div>
      <div className={styles.autors__descriptions}>
        <div className={styles.autors__one}>
          <div className={styles.autors__info}>
          <div className={styles.autors__title}>
            <Title text='Юлія Маліч' color='#93bccc' size='XXL'/>
          </div>
            <div className={styles.autors__social_blue}>
              <SocialIcon name='instagramBlue' link={config.authors[0].instagram} />
              <SocialIcon name='facebookBlue' link={config.authors[0].facebook} />
              <SocialIcon name='linkedinBlue' link={config.authors[0].linkedin} />
            </div>
            <Description 
              texts={[
                'Керівниця напрямку співпраці з державними органами в Bolt в Україні та Центрально-Західній Азії, експертка по стейкголдер-менеджменту.', 
                'Більше 14 років досвіду у зовнішніх комунікаціях. Отримала підвищення під час декрету.'
              ]}
            />
          </div>
          <div className={styles.autors__photo_1}>
            <img src={author_1} alt="" />
          </div>
        </div>
        <div className={styles.autors__two}>
          <div className={styles.autors__photo_2}>
            <img src={author_2} alt="" />
          </div>
          <div className={styles.autors__info}>
            <div className={styles.autors__title}>
              <Title text='Алеся Стоковська' color='#b0d283' size='XXL'/>
            </div>
            <div className={styles.autors__social_green}>
            <SocialIcon name='instagramGreen' link={config.authors[1].instagram} />
              <SocialIcon name='facebookGreen' link={config.authors[1].facebook} />
              <SocialIcon name='linkedinGreen' link={config.authors[1].linkedin} />
            </div>
            <Description 
              texts={[
                'Експертка з управління репутацією та social impact комунікацій.', 
                'Маючи понад 15 років досвіду, зараз займає посади CEO комунікаціної агенції OII Meaningful Communication та НГО Impact Force .'
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}