import React from 'react'
import styles from './avatar.module.css'
import cn from 'classnames'

const Avatar = ({
  src = 'https://pbs.twimg.com/profile_images/1204050560254717957/ILe194Q1_400x400.jpg',
  alt = 'Fatih Can',
  size = 47
}) => (
  <div className={cn([styles.avatar])} style={{ width: size, height: size }}>
    <img src={src} alt={alt} className={styles.img} />
  </div>
)

export default Avatar
