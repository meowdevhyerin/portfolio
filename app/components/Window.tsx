'use client'

import { useState, useRef, useEffect } from 'react'
import styles from './Window.module.css'
import ProfileContent from './window-contents/ProfileContent'
import ProjectsContent from './window-contents/ProjectsContent'
import ProjectDetailContent from './window-contents/ProjectDetailContent'
import ResumeContent from './window-contents/ResumeContent'
import SettingsContent from './window-contents/SettingsContent'
import ImageViewerContent from './window-contents/ImageViewerContent'

interface WindowProps {
  id: string
  title: string
  zIndex: number
  isActive: boolean
  onFocus: () => void
  onClose: () => void
  onOpenWindow: (id: string) => void
  theme: 'dark' | 'light'
  onThemeChange: () => void
  initialPosition?: { x: number, y: number }
  imageViewerIndex?: number
}

export default function Window({ id, title, zIndex, isActive, onFocus, onClose, onOpenWindow, theme, onThemeChange, initialPosition = { x: 200, y: 100 }, imageViewerIndex }: WindowProps) {
  const [position, setPosition] = useState(initialPosition)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const windowRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    const startX = e.clientX - position.x
    const startY = e.clientY - position.y

    setDragOffset({ x: startX, y: startY })
    setIsDragging(true)
    onFocus()
  }

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

  const getContent = () => {
    // Image viewer window
    if (id.startsWith('image-')) {
      // id format: "image-project-saviing-0"
      const parts = id.split('-')
      const projectId = `${parts[1]}-${parts[2]}` // "project-saviing"
      const imageIndex = parseInt(parts[3])

      const imageData = {
        'project-loglens': [
          { src: "/images/LogLens/아키텍처overview.png", caption: "시스템 아키텍처 구조도" },
          { src: "/images/LogLens/대시보드.gif", caption: "실시간 로그 모니터링 대시보드" },
          { src: "/images/LogLens/요청흐름그래프.gif", caption: "D3.js 기반 트랜잭션 흐름 시각화" },
          { src: "/images/LogLens/의존성그래프.png", caption: "ReactFlow 기반 서비스 의존성 그래프" },
          { src: "/images/LogLens/로그내역1.gif", caption: "SSE 기반 실시간 로그 스트리밍" },
          { src: "/images/LogLens/AI분석보고서.gif", caption: "AI 로그 분석 & PDF 리포트 생성" },
          { src: "/images/LogLens/AI챗봇.gif", caption: "스트리밍 LLM 기반 로그 분석 챗봇" },
          { src: "/images/LogLens/사용자가이드.gif", caption: "사용자 가이드 및 인터페이스" },
        ],
        'project-saviing': [
          { src: "/images/saviing/가챠뽑기.gif", caption: "가챠 시스템을 통한 아이템 획득" },
          { src: "/images/saviing/계좌이체내역왁인.gif", caption: "실시간 계좌 이체 내역 확인" },
          { src: "/images/saviing/방배치.gif", caption: "드래그 앤 드롭으로 아이템 배치" },
          { src: "/images/saviing/방배치2.gif", caption: "격자 기반 충돌 검증 시스템" },
          { src: "/images/saviing/방배치3.gif", caption: "다양한 아이템 조합 및 배치" },
          { src: "/images/saviing/상점.gif", caption: "인게임 상점 UI" },
          { src: "/images/saviing/적금주기변경.gif", caption: "적금 주기 변경 Funnel" },
          { src: "/images/saviing/펫클릭.gif", caption: "펫 인터랙션 애니메이션" },
        ],
        'project-kkulddip': [
          { src: "/images/Kkulddip/표지.png", caption: "서비스 소개" },
          { src: "/images/Kkulddip/자유로운알림발송.png", caption: "기능 소개 - 알림 발송" },
          { src: "/images/Kkulddip/AI매출예측.png", caption: "기능 소개 - AI 매출 예측" },
          { src: "/images/Kkulddip/라이브광고송출.png", caption: "기능 소개 - OpenVidu 라이브 광고 송출" },
          { src: "/images/Kkulddip/매출대시보드.png", caption: "기능 소개 - 매출 대시보드" },
        ]
      }

      const images = imageData[projectId as keyof typeof imageData]
      if (images) {
        return <ImageViewerContent images={images} initialIndex={imageViewerIndex ?? imageIndex} />
      }
    }

    switch (id) {
      case 'profile':
        return <ProfileContent />
      case 'projects':
        return <ProjectsContent onOpenWindow={onOpenWindow} />
      case 'project-loglens':
      case 'project-saviing':
      case 'project-kkulddip':
        return <ProjectDetailContent projectId={id} onOpenWindow={onOpenWindow} />
      case 'resume':
        return <ResumeContent />
      case 'settings':
        return <SettingsContent theme={theme} onThemeChange={onThemeChange} />
      default:
        return <div className={styles.content}>Content</div>
    }
  }

  const isImageViewer = id.startsWith('image-')

  // 프로젝트별 윈도우 높이 설정
  const getMaxHeight = () => {
    if (id === 'project-saviing') return '85vh'
    if (id === 'project-kkulddip' || id === 'project-loglens') return '60vh'
    return '70vh' // 기본값
  }

  return (
    <div
      ref={windowRef}
      className={`${styles.window} ${isActive ? styles.active : ''} ${theme === 'light' ? styles.light : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex,
        ...(isImageViewer ? { width: '950px', maxWidth: '95vw' } : {}),
        ['--content-max-height' as string]: getMaxHeight()
      }}
      onClick={onFocus}
    >
      <div className={`${styles.header} ${isDragging ? styles.dragging : ''}`} onMouseDown={handleMouseDown}>
        <div className={styles.controls}>
          <button className={styles.close} onClick={(e) => { e.stopPropagation(); onClose(); }}>
            ✕
          </button>
          <button className={styles.minimize} disabled>−</button>
          <button className={styles.maximize} disabled>□</button>
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.spacer} />
      </div>
      {getContent()}
    </div>
  )
}
