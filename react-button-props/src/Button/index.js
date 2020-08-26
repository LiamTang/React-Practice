import React from 'react';
import styles from './style.module.css';
import classNames from 'classnames';

export default function Button({ children, color }) {
  return (
    <button
      className={classNames(styles.button, {
        [styles.red]: color === 'red',
        [styles.black]: color === 'black',
      })}
    >
      {children}
    </button>
  );
}
