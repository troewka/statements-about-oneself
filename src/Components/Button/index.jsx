import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

export const Button = ({ label, theme }) => {
   return (
      <button 
        className={classNames(
          styles.buttons, 
          theme === 'header' && styles.buttons__header,
          theme === 'main' && styles.buttons__main,
          theme === 'registration' && styles.buttons__registration,
          theme === 'footer' && styles.buttons__footer)}
      >
        {label}
      </button>
   )
}