import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

export const ButtonToMail = ({ label, theme }) => {
  const className = classNames(styles.button, theme === 'footer' && styles.button__footer);

  return (
    <a href="mailto:prosebeua@gmail.com" className={className}>
      {label}
    </a>
  );
};