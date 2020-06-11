import React from 'react'
import styles from './stack.module.css'
import cn from 'classnames'

const Stack = ({ gap = 10, column = false, children }) => (
  <div
    className={cn([styles.stack, column && styles.column])}
    style={{ "--gap": `${gap}px` }}
  >
    {children}
  </div>
)

export default Stack