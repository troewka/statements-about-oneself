import React, {Fragment} from "react";

import { Icon } from "../Icon";

import styles from './styles.module.scss'

export const HeadLine = ({ text, letters }) => {
  const splitText = text.split('');
  return (
    <div className={styles.wrapper}>
      <Icon name='arrowSmall' size='small'/>
        <h2 className={styles.text}>{splitText.map((char, index) => (
          <Fragment key={char + index}> 
            {letters.includes(char) ? <span>{char}</span> : char}
          </Fragment>
        ))}
      </h2>
    </div>
  )
}