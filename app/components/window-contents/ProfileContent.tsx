import styles from "../Window.module.css";

export default function ProfileContent() {
  return (
    <div className={styles.content}>
      <div className={styles.profileContent}>
        <img
          src="/images/ProfileImage.png"
          alt="Profile"
          className={styles.profileImage}
        />
        <h1>홍혜린</h1>
        <p className={styles.jobTitle}>
          재능은 꽃피우는 것, 센스는 갈고 닦는 것
        </p>
        <div className={styles.bio}>
          <p>
            노코드로 웹사이트 제작에 참여했던 현장실습 경험은 웹에 대한 흥미의
            출발점이었습니다.
          </p>
          <p>
            하지만 도구의 한계로 원하는 방식으로 구현하지 못하는 아쉬움이
            남았고, 이를 계기로 처음부터 직접 만드는 기술에 관심이 생겼습니다.
          </p>
          <p>
            이후 소프트웨어학부 부전공을 통해 개발의 기초를 다졌으며, 사용자
            경험과 인터랙션을 직접 설계하고 구현하는 과정에 매력을 느껴
            프론트엔드 개발자로 성장해 왔습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
