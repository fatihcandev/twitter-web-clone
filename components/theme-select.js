import styles from './theme-select.module.css'
import { useContext, useState } from 'react'
import StoreContext from '../store'

const ThemeSelect = () => {
  const store = useContext(StoreContext)

  const THEME = {
    light: 'Light',
    dim: 'Dim',
    dark: 'Dark'
  }

  return (
    <div className={styles.container}>
      {['light', 'dim', 'dark'].map((theme) => (
        <label key={theme}>
          <input
            type="radio"
            value={theme}
            name={theme}
            checked={theme === store.theme}
            onChange={(e) => store.changeTheme(e.target.value)}
          />
          {THEME[theme]}
        </label>
      ))}
    </div>
  )
}

export default ThemeSelect
