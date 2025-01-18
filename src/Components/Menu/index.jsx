import styles from './styles.module.scss';

export const Menu = () => {

   const list = [
      {id: 'about', label: 'Про курс'},
      {id: 'autors', label: 'Авторки курсу'},
      {id: 'details', label: 'Деталі програми'},
      {id: 'registation', label: 'Реєстрація'},
      {id: 'contacts', label: 'Контакти'},
    ]

  return (
    <ul className={styles.wrapper}>
      {list.map(({ id, label }) => (
        <li key={id} className={styles.li}>
          <a href={id}>{label}</a>
        </li>
      ))}
    </ul>
  );
}