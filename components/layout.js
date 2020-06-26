import React from 'react'

import styles from './layout.module.css'
import cn from 'classnames'
import useWindowSize from '../hooks/useWindowSize'

import Sidebar from './col-sidebar'
import CONST from '../constants'
import Main from './col-main'
import Extra from './col-extra'

const Layout = ({ children }) => {
  const windowSize = useWindowSize()

  return (
    <div className={cn(styles.layout)}>
      <Sidebar flat={windowSize.width < CONST.DESKTOP_SIZE}>sidebar</Sidebar>
      <Main>{children}</Main>
      {windowSize.width > CONST.TABLET_SIZE && <Extra>extra</Extra>}
    </div>
  )
}

export default Layout
