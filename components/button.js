import React from 'react'
import styles from './button.module.css'
import cn from 'classnames'
import Link from 'next/link'

const LinkButton = ({ href, children, ...props }) => (
  <Link href={href}>
    <a {...props}>{children}</a>
  </Link>
)

const BaseButton = ({ children, ...props }) => (
  <button type="button" {...props}>
    {children}
  </button>
)

const Button = ({ fullW = false, children, className, ...props }) => {
  const Component = props.href ? LinkButton : BaseButton

  return (
    <Component
      className={cn(styles.button, fullW && styles.fullW, className)}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Button
