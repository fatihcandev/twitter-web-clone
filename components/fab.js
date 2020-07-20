import React from 'react'
import * as Icon from './icons'
import { useRouter } from 'next/router'
import styles from './fab.module.css'

const FAB = () => {
  const router = useRouter()

  return (
    <div className={styles.wrapper}>
      {router.pathname === '/messages' ? <Icon.Messages /> : <Icon.Tweet />}
    </div>
  )
}

export default FAB
