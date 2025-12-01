import styles from "../Window.module.css";

export default function ResumeContent() {
  return (
    <div className={styles.content}>
      <div className={styles.resumeContent}>
        <section>
          <h3>💼 Experience / 활동내역</h3>
          <div className={styles.resumeItem}>
            <h4>삼성 SW · AI 아카데미 (SSAFY)</h4>
            <p className={styles.period}>2025.01 ~ 2025.12</p>
            <p>Vue, Python, Django, JavaScript 강의 수강</p>
            <p>4개의 협업 프로젝트 중 3개 프로젝트에서 수상</p>
          </div>
        </section>

        <section>
          <h3>🎓 Education / 교육내역</h3>
          <div className={styles.resumeItem}>
            <h4>국민대학교 경영학부 (본)</h4>
            <h4>소프트웨어융합학부 (부)</h4>
            <p className={styles.period}>2021.03 ~ 2025.02</p>
            <p>학점: 3.9/4.5</p>
          </div>
          <div className={styles.resumeItem}>
            <h4>추가 교육</h4>
            <p>삼성 SW · AI 아카데미 (2025.01~2025.12)</p>
          </div>
        </section>

        <section>
          <h3>📜 Certifications / 자격사항</h3>
          <div className={styles.resumeItem}>
            <h4>정보처리기사</h4>
            <p className={styles.period}>한국산업인력공단 (2025)</p>
          </div>
          <div className={styles.resumeItem}>
            <h4>SQLD</h4>
            <p className={styles.period}>한국데이터산업진흥원 (2025)</p>
          </div>
          <div className={styles.resumeItem}>
            <h4>투자자산운용사</h4>
            <p className={styles.period}>금융투자협회 (2023)</p>
          </div>
        </section>

        <section>
          <h3>🏆 Awards / 수상내역</h3>
          <div className={styles.resumeItem}>
            <h4>SSAFY 관통 프로젝트</h4>
            <p className={styles.period}>최우수상 (1등)</p>
          </div>
          <div className={styles.resumeItem}>
            <h4>SSAFY 특화 프로젝트 (Saviing)</h4>
            <p className={styles.period}>우수상 (3등)</p>
          </div>
          <div className={styles.resumeItem}>
            <h4>SSAFY 자율 프로젝트 (LogLens)</h4>
            <p className={styles.period}>우수상 (2등)</p>
          </div>
        </section>
      </div>
    </div>
  );
}
