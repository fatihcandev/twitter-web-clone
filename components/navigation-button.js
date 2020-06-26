import React from 'react'
import Button from './button'
import styles from './navigation-button.module.css'
import cn from 'classnames'

const NavigationButton = ({
  href,
  notify,
  selected,
  children,
  className,
  ...props
}) => (
  <Button
    className={cn(
      styles.navButton,
      selected && styles.navButtonSelected,
      className
    )}
    href={href}
    {...props}
  >
    {notify > 0 && <span className={styles.notify}> {notify} </span>}
    {children}
  </Button>
)

export default NavigationButton
