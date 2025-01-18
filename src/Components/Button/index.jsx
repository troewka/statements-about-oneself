import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss'


export const Buttons = ({ label, theme }) => {
   const click = () => {
      console.log('Click');
   }

   return (
      <button 
        className={classNames(styles.buttons, theme === 'green' && styles.buttonGreen)} 
        onClick={click}
      >
        {label}
      </button>
   )
}