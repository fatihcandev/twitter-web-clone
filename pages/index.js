import React from 'react'
import Layout from '../components/layout'
import useWindowSize from '../hooks/useWindowSize'
import CONST from '../constants'
import Sidebar from '../components/col-sidebar'
import Main from '../components/col-main'
import Extra from '../components/col-extra'

const Home = () => {
  const windowSize = useWindowSize()

  return (
    <Layout>
      <Sidebar flat={windowSize.width < CONST.DESKTOP_SIZE}>sidebar</Sidebar>
      <Main>{JSON.stringify(windowSize)}</Main>
      {windowSize.width > CONST.TABLET_SIZE && <Extra>extra</Extra>}
    </Layout>
  )
}
export default Home
