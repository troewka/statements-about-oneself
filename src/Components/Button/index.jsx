import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

export const Button = ({ label, theme, href = '' }) => {
  const className = classNames(
    styles.button, 
    theme === 'header' && styles.button__header,
    theme === 'main' && styles.button__main,
    theme === 'registration' && styles.button__registration,
    theme === 'buyGren' && styles.button__buy_green,
    theme === 'buyBlue' && styles.button__buy_blue,
  );

  return (
    <a href={href} target="_blank" className={className} rel="noreferrer">
      {label}
    </a>
  );
};