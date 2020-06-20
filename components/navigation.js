import React from 'react'
import NavigationButton from './navigation-button'
import TextTitle from './text-title'
import * as Icons from './icons'
import styles from './navigation.module.css'

const MENU = [
  {
    key: 'twitter',
    title: '',
    icon: <Icons.Twitter />,
    notify: 0
  },
  {
    key: 'home',
    title: 'Home',
    icon: <Icons.Home />,
    iconSelected: <Icons.HomeFill />,
    notify: 0
  },
  {
    key: 'explore',
    title: 'Explore',
    icon: <Icons.Explore />,
    iconSelected: <Icons.ExplorerFill />,
    notify: 0
  },
  {
    key: 'notifications',
    title: 'Notifications',
    icon: <Icons.Notification />,
    iconSelected: <Icons.NotificationFill />,
    notify: 17
  },
  {
    key: 'messages',
    title: 'Messages',
    icon: <Icons.Messages />,
    iconSelected: <Icons.MessagesFill />,
    notify: 0
  },
  {
    key: 'bookmarks',
    title: 'Bookmarks',
    icon: <Icons.Bookmark />,
    iconSelected: <Icons.BookmarkFill />,
    notify: 0
  },
  {
    key: 'lists',
    title: 'Lists',
    icon: <Icons.Lists />,
    iconSelected: <Icons.ListsFill />,
    notify: 0
  },
  {
    key: 'profile',
    title: 'Profile',
    icon: <Icons.Profile />,
    iconSelected: <Icons.ProfileFill />,
    notify: 0
  },
  {
    key: 'more',
    title: 'More',
    icon: <Icons.More />,
    iconSelected: <Icons.More />,
    notify: 0
  }
]

const Navigation = ({ flat = false, selectedKey = 'home' }) => (
  <nav className={styles.nav}>
    {MENU.map((menu) => {
      const showTitle = !flat && menu.title.length > 0
      const selected = selectedKey === menu.key
      return (
        <NavigationButton
          key={menu.key}
          selected={selected}
          notify={menu.notify}
        >
          {selected ? menu.iconSelected : menu.icon}
          {showTitle > 0 && <TextTitle>{menu.title} </TextTitle>}
        </NavigationButton>
      )
    })}
  </nav>
)

export default Navigation
