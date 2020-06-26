import React from 'react'
import NavigationButton from './navigation-button'
import TextTitle from './text-title'
import styles from './navigation.module.css'
import { MENU } from '../constants'
import { useRouter } from 'next/router'

const Navigation = ({ flat = false }) => {
  const router = useRouter()

  return (
    <nav className={styles.nav}>
      {MENU.map((menu) => {
        const showTitle = !flat && menu.title.length > 0
        const selected = router.pathname === menu.path
        return (
          <NavigationButton
            key={menu.key}
            selected={selected}
            notify={menu.notify}
            href={menu.path}
            className={styles.navButton}
          >
            {selected ? menu.iconSelected : menu.icon}
            {showTitle > 0 && <TextTitle>{menu.title} </TextTitle>}
          </NavigationButton>
        )
      })}
    </nav>
  )
}

export default Navigation
