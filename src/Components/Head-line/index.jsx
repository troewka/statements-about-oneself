import React, {Fragment} from "react";
import { Icon } from "../Icon";
import styles from './styles.module.scss'

export const HeadLine = ({ text, letters }) => {
  const splitText = text.split('');
  return (
    <div className={styles.headline}>
      <div className={styles.headline__icon}>
      <Icon name='arrowSmall' size='small'/>
      </div>
      <h2 className={styles.headline__title}>{splitText.map((char, index) => (
          <Fragment key={char + index}> 
            {letters.includes(char) ? <span>{char}</span> : char}
          </Fragment>
        ))}
      </h2>
    </div>
  )
}