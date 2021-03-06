import React from 'react'
import Button from '../components/button'
import NavigationButton from '../components/navigation-button'
import Navigation from '../components/navigation'
import TextTitle from '../components/text-title'
import * as Icons from '../components/icons'
import ThemeButton from '../components/theme-button'
import Stack from '../components/stack'
import { withKnobs, boolean } from '@storybook/addon-knobs'

export default {
  title: 'Buttons',
  component: Button,
  decorators: [withKnobs]
}

export const Normal = () => <Button>Save</Button>
export const Theme = () => (
  <Stack column>
    <ThemeButton>Tweet</ThemeButton>
    <ThemeButton fullW>Tweet</ThemeButton>
    <ThemeButton fullW taller>
      Tweet Big
    </ThemeButton>
  </Stack>
)

export const NavButton = () => (
  <NavigationButton>
    <Icons.Home />
    <TextTitle>Home</TextTitle>
  </NavigationButton>
)

export const Nav = () => {
  const flat = boolean('Flat', false)
  return <Navigation flat={flat} selectedKey="Home" />
}
