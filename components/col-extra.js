import React from 'react'
import styles from './col-extra.module.css'
import cn from 'classnames'

const Extra = ({ children }) => (
  <div className={cn(styles.extra)}>{children}</div>
)

export default Extra
