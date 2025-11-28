'use client'

import { useState } from 'react'
import styles from './page.module.css'
import LockScreen from './components/LockScreen'
import Desktop from './components/Desktop'

export default function Home() {
  const [isLocked, setIsLocked] = useState(true)
  const [isUnlocking, setIsUnlocking] = useState(false)

  const handleUnlock = () => {
    setIsUnlocking(true)
    setTimeout(() => {
      setIsLocked(false)
      setIsUnlocking(false)
    }, 250)
  }

  return (
    <div className={styles.container}>
      {isLocked && (
        <LockScreen onUnlock={handleUnlock} isUnlocking={isUnlocking} />
      )}
      {!isLocked && <Desktop />}
    </div>
  )
}
