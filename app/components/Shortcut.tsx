'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './Shortcut.module.css'

interface ShortcutProps {
  icon: string
  label: string
  x: number
  y: number
  onDoubleClick: () => void
}

export default function Shortcut({ icon, label, x, y, onDoubleClick }: ShortcutProps) {
  const [isSelected, setIsSelected] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const [clickTimer, setClickTimer] = useState<NodeJS.Timeout | null>(null)
  const [position, setPosition] = useState({ x, y })
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const shortcutRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (shortcutRef.current && !shortcutRef.current.contains(event.target as Node)) {
        setIsSelected(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y
        })
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, dragOffset])

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    const startX = e.clientX - position.x
    const startY = e.clientY - position.y

    setDragOffset({ x: startX, y: startY })
    setIsDragging(true)
    setIsSelected(true)
  }

  const handleClick = (e: React.MouseEvent) => {
    if (isDragging) return

    e.stopPropagation()
    setIsSelected(true)
    setClickCount(prev => prev + 1)

    if (clickTimer) {
      clearTimeout(clickTimer)
    }

    const timer = setTimeout(() => {
      if (clickCount + 1 === 2) {
        onDoubleClick()
        setIsSelected(false)
      }
      setClickCount(0)
    }, 300)

    setClickTimer(timer)
  }

  const getIconPath = () => {
    switch (icon) {
      case 'profile':
        return '/images/ProfileIcon.png'
      case 'projects':
        return '/images/projectIcon.png'
      case 'resume':
        return '/images/paperIcon.png'
      case 'settings':
        return '/images/settings.png'
      default:
        return '/images/ProfileIcon.png'
    }
  }

  return (
    <div
      ref={shortcutRef}
      className={`${styles.shortcut} ${isSelected ? styles.selected : ''} ${isDragging ? styles.dragging : ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
    >
      <div className={styles.iconContainer}>
        <Image
          src={getIconPath()}
          alt={label}
          width={68}
          height={68}
          className={styles.iconImage}
        />
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  )
}
