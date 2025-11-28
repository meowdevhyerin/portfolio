import styles from '../Window.module.css'

export default function ProfileContent() {
  return (
    <div className={styles.content}>
      <div className={styles.profileContent}>
        <h1>홍혜린</h1>
        <p className={styles.jobTitle}>Frontend Developer</p>
        <div className={styles.bio}>
          <p>사용자 경험을 중시하는 프론트엔드 개발자입니다.</p>
          <p>깔끔하고 효율적인 코드 작성을 추구합니다.</p>
        </div>
      </div>
    </div>
  )
}
