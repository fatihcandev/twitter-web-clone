import React from 'react'
import NavigationButton from './navigation-button'
import TextTitle from './text-title'
import * as Icons from './icons'
import styles from './navigation.module.css'

const navigationButtonContent = [
  {
    "name": "Home",
    "icon": <Icons.Home />,
  },
  {
    "name": "Explore",
    "icon": <Icons.Explore />,
  },
  {
    "name": "Notifications",
    "icon": <Icons.Notification />,
  },
  {
    "name": "Messages",
    "icon": <Icons.Messages />,
  },
  {
    "name": "Bookmarks",
    "icon": <Icons.Bookmark />,
  },
  {
    "name": "Lists",
    "icon": <Icons.Lists />,
  },
  {
    "name": "Profile",
    "icon": <Icons.Profile />,
  },
  {
    "name": "More",
    "icon": <Icons.More />,
  },
];

const Navigation = ({ selectedKey }) => (

  <nav className={styles.nav}>
    <NavigationButton>
      <Icons.Twitter />
    </NavigationButton>
    {
      navigationButtonContent.map((navigationButton) => (
        <NavigationButton
          selected={selectedKey === navigationButton.name}
          notify={navigationButton.name === "Notifications" && 17}
        >
          {navigationButton.icon}
          <TextTitle>{navigationButton.name} </TextTitle>
        </NavigationButton>
      ))
    }
  </nav>
)

export default Navigation
