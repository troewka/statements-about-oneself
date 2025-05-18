import React, {Fragment} from "react";
import classNames from "classnames/bind";
import styles from './style.module.scss';

export const Description = ( {texts, size} ) => {
  const className = classNames(
    styles.description, 
    size === 'S' && styles.description__text_s,
    size === 'M' && styles.description__text_m,
  );
  return (
    <div className={styles.description}>
      {texts.map((descr, index) => {
        return <Fragment key={descr + index}>
         <p 
          className={className}>
          {descr}
        </p>
        </Fragment>
      })}
    </div>
  )
}
