import React from 'react'
import Avatar from './avatar'
import TextBody from './text-body'
import * as Icon from './icons'
import NavigationButton from './navigation-button'
import styles from './top-navbar.module.css'
import useWindowSize from '../hooks/useWindowSize'
import CONST from '../constants'

const TopNavbar = () => {
  const size = useWindowSize()

  return (
    <div className={styles.wrapper}>
      {size.width < CONST.MOBILE_SIZE && (
        <div className={styles.avatar}>
          <Avatar size={30} />
        </div>
      )}
      <TextBody className={styles.text}>Latest Tweets</TextBody>
      <NavigationButton className={styles.sparkles}>
        <Icon.Sparkles />
      </NavigationButton>
    </div>
  )
}

export default TopNavbar
