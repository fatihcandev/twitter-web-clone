import React from 'react'
import styles from './button.module.css'
import cn from 'classnames'

const Button = ({ fullW = false, children, className, ...props }) => (
  <button
    type="button"
    className={cn(styles.button, fullW && styles.fullW, className)}
    {...props}
  >
    {children}
  </button>
)

export default Button
