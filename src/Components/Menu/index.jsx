import React from 'react';
import styles from './styles.module.scss';

export const Menu = () => {
  const list = [
    {id: '#about', label: 'Про курс'},
    {id: '#authors', label: 'Авторки курсу'},
    {id: '#details', label: 'Деталі програми'},
    {id: '#registation', label: 'Реєстрація'},
    {id: '#contacts', label: 'Ми в Instagram', href: 'https://www.instagram.com/prosebeua'}
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
      {list.map(({ id, label, href }) => (
        <li key={id} className={styles.menu__item} onClick={() => !href && handleScrollToElement(id)}>
          {href ? <a href={href} target="_blank" rel="no noreferrer">{label}</a> : <span>{label}</span>}
        </li>
      ))}
    </ul>
  );
}