import React, { Fragment } from "react";
import classNames from 'classnames';
import { Icon } from "../Icon";
import styles from './styles.module.scss';

export const HeadLine = ({ text, letters, color, colorArrow = '#93BCCC', styles: externalStyles }) => {
  const splitText = text.split('');

  return (
    <div className={classNames(styles.headline, externalStyles)}>
      <div className={styles.headline__icon}>
        <Icon name='arrowSmall' size='M' borderColor='black' color={colorArrow}/>
      </div>
      <h2 className={styles.headline__title}>{splitText.map((char, index) => (
        
        <Fragment key={char + index}> 
          {letters.includes(index) ? <span style={{color}}>{char}</span> : char}
        </Fragment>
        ))}
      </h2>
    </div>
  )
};