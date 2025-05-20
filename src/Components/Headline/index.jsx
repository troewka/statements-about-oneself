import React from "react";
import classNames from 'classnames';
import { Icon } from "../Icon";
import styles from './styles.module.scss';

export const HeadLine = ({ text, letters, color, colorArrow = '#93BCCC', styles: externalStyles }) => {
  const splitText = text.split(' ');

  return (
    <div className={classNames(styles.headline, externalStyles)}>
      <div className={styles.headline__icon}>
        <Icon name='arrowSmall' size='M' borderColor='black' hoverColor={colorArrow} color={colorArrow}/>
      </div>
      <h2 className={styles.headline__title}>{
        splitText.map((word, wordIndex) => (
          <span>{word.split('').map((letter, letterIndex) => letters?.[`${wordIndex}${letterIndex}`] ? <span style={{ color }}>{letter}</span> : letter)} </span>
        ),
      )}
      </h2>
    </div>
  )
};