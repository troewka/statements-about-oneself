import React from "react";
import classNames from "classnames";
import styles from './styles.module.scss'

export const Title = ({ text, color, size }) => {
  return (
    <div>
      <h3 className={classNames(styles.size, size === 'XS' && styles.size__xs, size === 'S' && styles.size__s, size === 'M' && styles.size__m, size === 'L' && styles.size_l, size === 'XL' && styles.size__xl, size === 'XXL' && styles.size__xxl)} style={{ color }}>{text}</h3>
    </div>
  )
}