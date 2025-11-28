import styles from '../Window.module.css'

export default function ResumeContent() {
  return (
    <div className={styles.content}>
      <div className={styles.resumeContent}>
        <section>
          <h3>💼 Experience</h3>
          <div className={styles.resumeItem}>
            <h4>Frontend Developer</h4>
            <p className={styles.period}>2023 - Present</p>
            <p>회사명 또는 프로젝트 설명</p>
          </div>
        </section>
        <section>
          <h3>🎓 Education</h3>
          <div className={styles.resumeItem}>
            <h4>전공 / 학교명</h4>
            <p className={styles.period}>2019 - 2023</p>
          </div>
        </section>
        <section>
          <h3>🛠 Skills</h3>
          <div className={styles.skills}>
            <span>React</span>
            <span>TypeScript</span>
            <span>Next.js</span>
            <span>JavaScript</span>
            <span>HTML/CSS</span>
            <span>Git</span>
          </div>
        </section>
      </div>
    </div>
  )
}
