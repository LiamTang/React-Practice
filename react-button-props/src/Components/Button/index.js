import React from 'react';
import styles from './style.module.css';
import classNames from 'classnames';

export default function Button({ children, color, type, size }) {
  return (
    <button
      className={classNames(styles.button, {
        [styles.primary]: color === 'primary',
        [styles.secondary]: color === 'secondary',
        [styles.disabled]: color === 'disabled',
        [styles.outlined]: type === 'outlined',
        [styles.contained]: type === 'contained',
        [styles.small]: size === 'small',
        [styles.large]: size === 'large',
        [styles.medium]: size === 'medium',
      })}
    >
      {children}
    </button>
  );
}
