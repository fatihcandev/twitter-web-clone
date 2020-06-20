import React from 'react'
import styles from './layout.module.css'
import cn from 'classnames'

const Layout = ({ children }) => (
  <div className={cn(styles.layout)}>{children}</div>
)

export default Layout
