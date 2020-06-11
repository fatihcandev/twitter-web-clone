import React from 'react'
import styles from './profile-box.module.css'
import cn from 'classnames'
import Avatar from './avatar'
import Button from './button'
import { ArrowBottom } from './icons'
import TextBody from './text-body'

const ProfileBox = ({ name = 'Fatih Can', slug = '@fatihcandev' }) => (
  <Button className={cn([styles.box])} >
    <Avatar />
    <div className={styles.body}>
      <TextBody bold> {name} </TextBody>
      <TextBody className={styles.slug}> {slug} </TextBody>
    </div>
    <ArrowBottom className={styles.icon} />
  </Button>
)

export default ProfileBox