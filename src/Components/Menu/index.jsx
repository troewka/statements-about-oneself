import React, {useState} from 'react';
import {ReactComponent as Icon} from '../../assets/images/icons/burger_menu.svg'
import styles from './styles.module.scss';

export const Menu = () => {

  const [isOpen, setOpen] = useState();

  const list = [
    {id: 'about', label: 'Про курс'},
    {id: 'autors', label: 'Авторки курсу'},
    {id: 'details', label: 'Деталі програми'},
    {id: 'registation', label: 'Реєстрація'},
    {id: 'contacts', label: 'Контакти'}
  ]
  
  return (
    <div className={styles.wrap}>
      <ul className={styles.menu}>
        {list.map(({ id, label }) => (
          <li key={id} className={styles.menu__item}>
            <a href={id}>{label}</a>
          </li>
        ))}
      </ul>
      <button className={styles.menu__burger} onClick={() => setOpen(!isOpen)}>
        <Icon/>
      </button>
    </div>

  );
}