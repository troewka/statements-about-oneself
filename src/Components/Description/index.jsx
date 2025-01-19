import React, {Fragment} from "react";

import styles from './style.module.scss'

export const Description = ( {texts} ) => {

  return (
    <div className={styles.wrapper}>
      {texts.map((descr, index) => {
        return <Fragment key={descr + index}>
         <p className={styles.text}>{descr}</p>
        </Fragment>
      })}
    </div>
  )

}
