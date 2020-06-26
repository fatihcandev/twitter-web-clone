import React from 'react'
import * as Icon from '../components/icons'

export default {
  TABLET_SIZE: 980,
  DESKTOP_SIZE: 1270
}

export const MENU = [
  {
    key: 'twitter',
    path: '/',
    title: '',
    icon: <Icon.Twitter style={{ fontSize: 30, color: 'white' }} />,
    iconSelected: <Icon.Twitter style={{ fontSize: 30, color: 'white' }} />,
    notify: 0
  },
  {
    key: 'home',
    path: '/',
    title: 'Home',
    icon: <Icon.Home />,
    iconSelected: <Icon.HomeFill />,
    notify: 0
  },
  {
    key: 'explore',
    path: '/explore',
    title: 'Explore',
    icon: <Icon.Explore />,
    iconSelected: <Icon.ExplorerFill />,
    notify: 0
  },
  {
    key: 'notifications',
    path: '/notifications',
    title: 'Notifications',
    icon: <Icon.Notification />,
    iconSelected: <Icon.NotificationFill />,
    notify: 17
  },
  {
    key: 'messages',
    path: '/messages',
    title: 'Messages',
    icon: <Icon.Messages />,
    iconSelected: <Icon.MessagesFill />,
    notify: 0
  },
  {
    key: 'bookmarks',
    path: '/bookmarks',
    title: 'Bookmarks',
    icon: <Icon.Bookmark />,
    iconSelected: <Icon.BookmarkFill />,
    notify: 0
  },
  {
    key: 'lists',
    path: '/lists',
    title: 'Lists',
    icon: <Icon.Lists />,
    iconSelected: <Icon.ListsFill />,
    notify: 0
  },
  {
    key: 'profile',
    path: '/profile',
    title: 'Profile',
    icon: <Icon.Profile />,
    iconSelected: <Icon.ProfileFill />,
    notify: 0
  },
  {
    key: 'more',
    path: '/more',
    title: 'More',
    icon: <Icon.More />,
    iconSelected: <Icon.More />,
    notify: 0
  }
]
