import React from 'react'
import styles from './text-title.module.css'
import cn from 'classnames'

const TextTitle = ({ bold = true, children }) => (
  <h2 className={cn([styles.title, bold && styles.bold])}> {children} </h2>
)

export default TextTitle