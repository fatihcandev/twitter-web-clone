import React from 'react'
import styles from './bottom-navbar.module.css'
import NavigationButton from './navigation-button'
import { BOTTOM_MENU } from '../constants'
import { useRouter } from 'next/router'

const BottomNavbar = () => {
  const router = useRouter()
  return (
    <div className={styles.wrapper}>
      {BOTTOM_MENU.map((menu) => {
        const selected = router.pathname === menu.path
        return (
          <div>
            <span>
              <NavigationButton className={!selected && styles.button} selected>
                {selected ? menu.iconSelected : menu.icon}
              </NavigationButton>
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default BottomNavbar
