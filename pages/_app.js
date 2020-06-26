import React, { useEffect, useLayoutEffect, useState } from 'react'
import '../styles/app.css'
import StoreContext from '../store'

export default function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('')

  useLayoutEffect(() => {
    const theme = localStorage.getItem('theme') || 'light'
    setTheme(theme)
  }, [])

  const changeTheme = (theme) => {
    setTheme(theme)
    localStorage.setItem('theme', theme)
  }

  useEffect(() => {
    if (!theme) return
    document.querySelector('html').className = theme
  }, [theme])

  return (
    <StoreContext.Provider value={{ theme, changeTheme }}>
      <Component {...pageProps} />
    </StoreContext.Provider>
  )
}
