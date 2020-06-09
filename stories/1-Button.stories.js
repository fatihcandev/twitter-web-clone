import React from 'react'
import Button from '../components/button'
import NavigationButton from '../components/navigation-button'
import Navigation from '../components/navigation'
import TitleBold from '../components/title-bold'
import * as Icons from '../components/icons'

export default {
  title: 'Buttons',
  component: Button
}

export const Normal = () => <Button>Save</Button>

export const NavButton = () => (
  <NavigationButton>
    <Icons.Home />
    <TitleBold>Home</TitleBold>
  </NavigationButton>
)

export const Nav = () => <Navigation selectedKey="Home" />
