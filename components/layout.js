import React from 'react'

import styles from './layout.module.css'
import cn from 'classnames'
import useWindowSize from '../hooks/useWindowSize'

import Sidebar from './col-sidebar'
import CONST from '../constants'
import Main from './col-main'
import Extra from './col-extra'
import BottomNavbar from './bottom-navbar'
import TopNavbar from './top-navbar'
import FAB from './fab'

const Layout = ({ children }) => {
  const windowSize = useWindowSize()

  return (
    <div className={cn(styles.layout)}>
      {windowSize.width >= CONST.MOBILE_SIZE && (
        <Sidebar flat={windowSize.width < CONST.DESKTOP_SIZE}>sidebar</Sidebar>
      )}
      <Main>
        <>
          <TopNavbar />
          {children}
        </>
      </Main>
      {windowSize.width < CONST.MOBILE_SIZE && <BottomNavbar />}
      {windowSize.width > CONST.TABLET_SIZE && <Extra>extra</Extra>}
      <FAB />
    </div>
  )
}

export default Layout
