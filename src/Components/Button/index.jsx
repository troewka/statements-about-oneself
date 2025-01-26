import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

export const Button = ({ label, theme }) => {
   return (
      <button 
        className={classNames(styles.buttons, theme === 'transparent' && styles.buttons__transparent, theme === 'green' && styles.buttons__green, theme === 'blue' && styles.buttons__blue)}
      >
        {label}
      </button>
   )
}