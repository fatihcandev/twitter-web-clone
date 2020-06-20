import React from 'react'
import styles from './col-sidebar.module.css'
import cn from 'classnames'
import Navigation from './navigation'
import ThemeButton from './theme-button'
import ProfileBox from './profile-box'
import { Tweet } from './icons'

const Sidebar = ({ flat }) => (
  <div className={cn(styles.sidebar)}>
    <Navigation flat={flat} />
    <div className={styles.tweet}>
      <ThemeButton big fullW={!flat}>
        {flat ? <Tweet /> : 'Tweet'}
      </ThemeButton>
    </div>
    <div className={styles.profile}>
      <ProfileBox flat={flat} />
    </div>
  </div>
)

export default Sidebar
