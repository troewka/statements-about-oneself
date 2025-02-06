import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

export const ButtonToMail = ({ label, theme }) => {
  const className = classNames(styles.button, theme === 'footer' && styles.button__footer);

  const onClick = event => {
    event.preventDefault();
    window.location.href ='mailto:example@email.com';
  }

  return (
    <div className={className} onClick={onClick}>
      {label}
    </div>
  );
};