import Image from 'next/image'
import styles from '../Window.module.css'

interface ProjectsContentProps {
  onOpenWindow: (id: string) => void
}

export default function ProjectsContent({ onOpenWindow }: ProjectsContentProps) {
  return (
    <div className={styles.content}>
      <div className={styles.folderGrid}>
        <div className={styles.folder} onDoubleClick={() => onOpenWindow('project-loglens')}>
          <div className={styles.folderIconContainer}>
            <Image
              src="/images/projectIcon.png"
              alt="LogLens"
              width={68}
              height={68}
              className={styles.folderIcon}
            />
          </div>
          <span className={styles.folderLabel}>LogLens</span>
        </div>
        <div className={styles.folder} onDoubleClick={() => onOpenWindow('project-saviing')}>
          <div className={styles.folderIconContainer}>
            <Image
              src="/images/projectIcon.png"
              alt="Saviing"
              width={68}
              height={68}
              className={styles.folderIcon}
            />
          </div>
          <span className={styles.folderLabel}>Saviing</span>
        </div>
        <div className={styles.folder} onDoubleClick={() => onOpenWindow('project-kkulddip')}>
          <div className={styles.folderIconContainer}>
            <Image
              src="/images/projectIcon.png"
              alt="Kkulddip"
              width={68}
              height={68}
              className={styles.folderIcon}
            />
          </div>
          <span className={styles.folderLabel}>Kkulddip</span>
        </div>
      </div>
    </div>
  )
}
