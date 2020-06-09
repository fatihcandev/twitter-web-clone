import React from 'react'
import styles from './button.module.css'
import cn from 'classnames'

const Button = ({ children, className, ...props }) => (
  <button type="button" className={cn(styles.button, className)} {...props}>
    {children}
  </button>
)

export default Button
