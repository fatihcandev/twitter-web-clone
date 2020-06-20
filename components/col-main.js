import React from 'react'
import styles from './col-main.module.css'
import cn from 'classnames'

const Main = ({ children }) => <div className={cn(styles.main)}>{children}</div>

export default Main
