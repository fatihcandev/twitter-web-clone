import React from 'react'
import Button from './button'
import styles from './theme-button.module.css'
import cn from 'classnames'

const ThemeButton = ({ taller = false, className, children, ...props }) => (
  <Button
    className={cn(styles.button, taller && styles.taller, className)}
    {...props}
  >
    {children}
  </Button>
)

export default ThemeButton
