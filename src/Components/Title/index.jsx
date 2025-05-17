import React from "react";
import classNames from "classnames";
import styles from './styles.module.scss';

export const Title = ({ text, color, size }) => {

  const classNameList = classNames(
    styles.size, 
    size === 'XX' && styles.size__xx,
    size === 'XS' && styles.size__xs,
    size === 'XSS' && styles.size__xss,
    size === 'S' && styles.size__s,
    size === 'M' && styles.size__m,
    size === 'L' && styles.size__l,
    size === 'XL' && styles.size__xl,
    size === 'XLL' && styles.size__xll,
    size === 'XXL' && styles.size__xxl)

  return (
    <div>
      <h3 className={classNameList} style={{ color }}>
        {text}
      </h3>
    </div>
  )
}