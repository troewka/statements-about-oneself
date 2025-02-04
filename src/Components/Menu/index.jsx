import React from 'react';
import styles from './styles.module.scss';

export const Menu = () => {
  const list = [
    {id: '#about', label: 'Про курс'},
    {id: '#authors', label: 'Авторки курсу'},
    {id: '#details', label: 'Деталі програми'},
    {id: '#registation', label: 'Реєстрація'},
    {id: '#contacts', label: 'Контакти'}
  ];

  const handleScrollToElement = id => {
    const element = document.querySelector(id);
    const topElementPosition = element?.getBoundingClientRect().top + window.pageYOffset;

    window.scroll({
      top: topElementPosition,
      behavior: 'smooth',
    })
  }
  
  return (
    <ul className={styles.menu}>
      {list.map(({ id, label }) => (
        <li key={id} className={styles.menu__item} onClick={() => handleScrollToElement(id)}>
          <span>{label}</span>
        </li>
      ))}
    </ul>
  );
}