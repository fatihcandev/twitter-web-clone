import React from 'react'
import * as Icon from '../components/icons'

export default {
  MOBILE_SIZE: 500,
  TABLET_SIZE: 1005,
  DESKTOP_SIZE: 1282
}

export const MENU = [
  {
    key: 'twitter',
    path: '/',
    title: '',
    icon: <Icon.Twitter style={{ fontSize: 30 }} />,
    iconSelected: <Icon.Twitter style={{ fontSize: 30 }} />,
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

export const BOTTOM_MENU = [
  {
    key: 'home',
    path: '/',
    title: 'Home',
    icon: <Icon.Home />,
    iconSelected: <Icon.HomeFill />,
    notify: 0
  },
  {
    key: 'search',
    path: '/search',
    title: 'Search',
    icon: <Icon.Search />,
    iconSelected: <Icon.Search />,
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
  }
]
