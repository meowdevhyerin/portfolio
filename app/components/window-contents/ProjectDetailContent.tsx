import styles from "../Window.module.css";
import { FaGithub } from "react-icons/fa";

interface ProjectDetailContentProps {
  projectId: string;
  onOpenWindow?: (id: string) => void;
}

const techStackIcons: { [key: string]: string } = {
  React: "/images/TackStackIcons/React.png",
  TypeScript: "/images/TackStackIcons/Typescript.png",
  Zustand: "/images/TackStackIcons/Zustand.svg",
  "TanStack Query": "/images/TackStackIcons/TanStack.png",
  "Tailwind Css": "/images/TackStackIcons/Tailwind.png",
  "React Router": "/images/TackStackIcons/ReactRouter.png",
  Vite: "/images/TackStackIcons/Vite.png",
  "D3.js": "/images/TackStackIcons/D3.png",
  ReactFlow: "/images/TackStackIcons/ReactFlow.png",
};

const projectData = {
  "project-loglens": {
    title: "LogLens",
    description:
      "마이크로서비스 환경에서 발생하는 대규모 로그·트랜잭션 데이터를 실시간으로 분석·시각화하여 운영자가 빠르게 문제를 파악할 수 있도록 지원하는 모니터링 플랫폼",
    githubUrl: "#",
    images: [],
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Zustand",
      "TanStack Query",
      "React Router",
      "D3.js",
      "ReactFlow",
      "Tailwind Css",
    ],
    achievements: [
      "실시간 스트리밍 처리 구축 | SSE 기반 로그·알림 스트림, 중복 제거·자동 재연결·토큰 인증 구조 설계",
      "요청 흐름 & 의존성 시각화 | D3.js forceSimulation + ReactFlow 기반 트랜잭션·서비스 구조 시각화",
      "AI 기반 분석 기능 | 스트리밍 LLM 응답 + PDF/Markdown 자동 문서화 기능 제작",
      "운영 대시보드 설계 | 로그 추이, 에러 TOP10, 트래픽·히트맵 등 운영 관점 UI 구성",
      "대량 데이터 처리 최적화 | 무한 스크롤, 캐싱·리패치 전략, D3 렌더링 최적화",
    ],
    details: [
      {
        title: "실시간 로그·알림 스트림 처리",
        content:
          "SSE(EventSource)를 사용해 서버의 로그·알림 데이터를 실시간으로 수신하는 구조를 설계했습니다. 중복 로그 필터링, 네트워크 단절 시 자동 재연결, 토큰 기반 인증 흐름, 에러 임계값 초과 시 즉각 알림 처리 등 실시간 데이터가 많은 운영 환경에서도 안정적으로 동작하도록 구성했습니다.",
      },
      {
        title: "요청 흐름·의존성 시각화",
        content:
          "D3.js 기반의 트랜잭션 흐름 그래프를 구현했습니다. forceSimulation으로 노드 배치, BFS 기반 계층 레이아웃, 링크·입자 애니메이션으로 호출 흐름을 직관적으로 표현했습니다. 또한 ReactFlow 기반 의존성 그래프를 제작하여 Upstream/Downstream 구조, 호출량/에러량을 한눈에 파악할 수 있도록 했습니다.",
      },
      {
        title: "AI 로그 분석 & 리포트 생성",
        content:
          "LLM 응답을 스트리밍 형태로 단계적으로 렌더링하며, React Markdown, 코드 하이라이팅, PDF 자동 변환(html2canvas + jsPDF)을 통해 분석 결과를 문서 형태로 바로 다운로드할 수 있게 구성했습니다. 운영자가 로그를 기반으로 빠르게 분석 결과를 공유할 수 있도록 지원하는 기능입니다.",
      },
      {
        title: "운영자 중심 대시보드 구성",
        content:
          "운영 환경에서 실제로 필요한 정보를 빠르게 찾을 수 있도록 로그 추이, 에러 TOP10, 시간·요일 히트맵, 서비스별 트래픽, TraceId 딥링크, CSV 다운로드 등을 중심으로 대시보드를 구성했습니다. 실제 모니터링·문제 분석 흐름을 고려하여 UI 구조를 설계했습니다.",
      },
      {
        title: "고성능 UI 최적화",
        content:
          "대량 로그 데이터 기반 시스템의 특성을 고려해 무한 스크롤, React Query 캐싱·리패치 전략, D3 렌더링 최적화, 번들 스플리팅(Vite 기반)을 적용하여 전체 서비스가 부드럽게 동작하도록 최적화했습니다.",
      },
    ],
  },
  "project-saviing": {
    title: "Saviing",
    description:
      "금융 적금 관리와 게임 요소를 결합해 사용자가 저축을 지속할 수 있도록 돕는 하이브리드 웹 서비스",
    githubUrl: "https://github.com/oing-oink/saviing",
    images: [
      {
        src: "/images/saviing/가챠뽑기.gif",
        caption: "가챠 시스템을 통한 아이템 획득",
      },
      {
        src: "/images/saviing/계좌이체내역왁인.gif",
        caption: "실시간 계좌 이체 내역 확인",
      },
      {
        src: "/images/saviing/방배치.gif",
        caption: "드래그 앤 드롭으로 아이템 배치",
      },
      {
        src: "/images/saviing/방배치2.gif",
        caption: "격자 기반 충돌 검증 시스템",
      },
      {
        src: "/images/saviing/방배치3.gif",
        caption: "다양한 아이템 조합 및 배치",
      },
      { src: "/images/saviing/상점.gif", caption: "인게임 상점 UI" },
      {
        src: "/images/saviing/적금주기변경.gif",
        caption: "적금 주기 변경 Funnel",
      },
      { src: "/images/saviing/펫클릭.gif", caption: "펫 인터랙션 애니메이션" },
    ],
    tags: [
      "React",
      "TypeScript",
      "Zustand",
      "TanStack Query",
      "Tailwind Css",
      "React Router",
      "Vite",
    ],
    achievements: [
      "방 꾸미기 인터랙션 구현 | 격자 기반 배치·충돌 검증·프리뷰 등 배치 기능 설계",
      "제스처 시스템 구성 | 핀치 줌·패닝 중심의 모바일 제스처 흐름 구성",
      "금융 Funnel 아키텍처 | 적금 가입·해지 등 8단계 프로세스를 URL 기반 단계 구조로 설계",
      "도메인 분리 구조 설계 | Savings/Game 기능을 독립적으로 운영할 수 있는 Feature-Driven 구조 정립",
      "게임·금융 UI 통합 | 서로 성격이 다른 두 인터페이스를 하나의 서비스 흐름으로 자연스럽게 연결",
    ],
    details: [
      {
        title: "방 꾸미기(Deco) 인터랙션 구현",
        content:
          "사용자가 아이템을 방 안에 자유롭게 배치할 수 있도록 격자 기반의 드래그 앤 드롭 구조를 설계했습니다. 아이템의 크기, 배치 가능 영역, 다른 아이템과의 충돌 여부 등을 검증하여 배치 과정이 자연스럽게 이어지도록 구성했습니다.",
      },
      {
        title: "모바일 중심 제스처 시스템",
        content:
          "핀치 줌과 패닝을 함께 사용하는 화면 조작을 구성했습니다. 확대된 상태에서도 매끄럽게 이동·조작할 수 있도록 터치 기반 인터랙션의 흐름을 정리하고, 요소 간 이벤트 충돌을 최소화하는 방식으로 설계했습니다.",
      },
      {
        title: "적금 가입 Funnel 설계",
        content:
          "적금 가입·조건 변경·해지와 같은 금융 절차를 URL 기반 단계 구조(Funnel)로 구현했습니다. 각 단계는 독립적으로 동작하며, 뒤로가기·새로고침·재진입 같은 상황에서도 흐름이 어긋나지 않도록 상태와 라우팅을 함께 설계했습니다.",
      },
      {
        title: "Savings / Game 도메인 분리 구조",
        content:
          "금융 기능과 게임 기능이 서로 영향을 주지 않도록 도메인 단위로 폴더 구조와 API 사용 방식을 분리했습니다. 이 구조 덕분에 기능 확장이나 UI 변경에도 서로의 영역을 침범하지 않고 유지보수가 쉬운 형태로 정리할 수 있었습니다.",
      },
      {
        title: "UI 흐름 통합",
        content:
          "금융 화면과 게임 화면은 시각적 성격이 다르기 때문에, 두 인터페이스가 끊김 없이 이어질 수 있도록 레이아웃, 전환 방식, 색상 사용 등을 조정했습니다. 사용자가 서비스 안에서 자연스럽게 오갈 수 있는 흐름을 만드는 데 초점을 맞췄습니다.",
      },
    ],
  },
  "project-kkulddip": {
    title: "Kkulddip 꿀띱",
    description:
      "사업자 재고 관리와 고객 편익 증대를 위한 마감임박 음식 할인 플랫폼",
    githubUrl: "#",
    images: [
      {
        src: "/images/Kkulddip/표지.png",
        caption: "서비스 소개",
      },
      {
        src: "/images/Kkulddip/자유로운알림발송.png",
        caption: "기능 소개 - 알림 발송",
      },
      {
        src: "/images/Kkulddip/AI매출예측.png",
        caption: "기능 소개 - AI 매출 예측",
      },
      {
        src: "/images/Kkulddip/라이브광고송출.png",
        caption: "기능 소개 - OpenVidu 라이브 광고 송출",
      },
      {
        src: "/images/Kkulddip/매출대시보드.png",
        caption: "기능 소개 - 매출 대시보드",
      },
    ],
    tags: [
      "React",
      "TypeScript",
      "Zustand",
      "TanStack Query",
      "Tailwind Css",
      "React Router",
      "Vite",
    ],
    achievements: [
      "주문 플로우 구축 | Funnel 패턴 기반 장바구니 → 결제 → 처리 → 완료 프로세스 구현",
      "상태 관리 아키텍처 | Zustand Persist + TanStack Query로 클라이언트·서버 상태 분리",
      "UI 컴포넌트 시스템 | Atomic Design 기반 UI 컴포넌트 개발 & Storybook 문서화",
      "결제·로그인 연동 | 토스페이먼츠 결제 및 Google OAuth 소셜 로그인 구현",
      "모노레포 구축 | 앱 구조 통합 및 공통 모듈 공유로 개발 효율성과 코드 일관성 향상",
    ],
    details: [
      {
        title: "주문 플로우(Funnel 패턴) 구현",
        content:
          "Cart → Payment → Pending → Complete로 이어지는 단계형 주문 흐름을 Funnel 패턴으로 설계했습니다. Zustand Persist(SessionStorage)로 새로고침·재진입 상황에서도 상태가 유지되도록 했으며, 뒤로가기 시 단계가 꼬이지 않도록 라우팅과 상태 로직을 결합했습니다.",
      },
      {
        title: "클라이언트/서버 상태 분리 아키텍처",
        content:
          "Zustand로 UI/로컬 상태를 관리하고 TanStack Query(React Query)로 서버 데이터의 캐싱·리패칭을 전담하여 클라이언트·서버 상태의 책임을 명확하게 분리했습니다. 이 과정에서 Custom Hook을 구현하여 API 호출 로직, 캐싱 정책, 데이터 정제를 모듈화했습니다.",
      },
      {
        title: "Atomic Design 기반 UI 개발",
        content:
          "프로젝트 초기 구조를 Atomic Design에 맞추어 설계했습니다. 계층적 UI 구조 위에서 100개 이상의 컴포넌트를 구현했으며, Storybook을 활용한 스토리 문서화로 컴포넌트 주도 개발(CDD)을 실천했습니다.",
      },
      {
        title: "결제 및 OAuth 연동",
        content:
          "토스페이먼츠 SDK로 카드 결제 플로우를 구현했습니다. 결제 주문 ID 재요청(retry) 로직을 넣어 네트워크 지연·실패 상황을 안정적으로 처리했습니다. 또한 Google OAuth 2.0 로그인을 연동하여 인증 흐름을 단순화했습니다.",
      },
      {
        title: "모노레포 환경 구축",
        content:
          "고객용/사장님용 앱을 하나의 레포지토리에서 통합 관리하는 Monorepo 구조(Vite + Bun 기반)를 직접 구축했습니다.",
      },
    ],
  },
};

export default function ProjectDetailContent({
  projectId,
  onOpenWindow,
}: ProjectDetailContentProps) {
  const project = projectData[projectId as keyof typeof projectData];

  if (!project) {
    return <div className={styles.content}>Project not found</div>;
  }

  return (
    <div className={styles.content}>
      <div className={styles.projectDetail}>
        <div className={styles.projectHeader}>
          <h2>{project.title}</h2>
          <div className={styles.projectActions}>
            {"githubUrl" in project && project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubLink}
              >
                <FaGithub className={styles.githubIcon} />
                GitHub
              </a>
            )}
          </div>
        </div>
        <p className={styles.projectDescription}>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.techTag}>
              {techStackIcons[tag] && (
                <img
                  src={techStackIcons[tag]}
                  alt={tag}
                  className={styles.techIcon}
                />
              )}
              {tag}
            </span>
          ))}
        </div>

        {"images" in project && project.images && (
          <div className={styles.projectImages}>
            <h3>프로젝트 이미지</h3>
            <div className={styles.imageGrid}>
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className={styles.imageItem}
                  onClick={() =>
                    onOpenWindow && onOpenWindow(`image-${projectId}-${index}`)
                  }
                >
                  <img
                    src={image.src}
                    alt={image.caption}
                    className={styles.thumbnailImage}
                  />
                  <p className={styles.imageCaption}>{image.caption}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {"achievements" in project && project.achievements && (
          <div className={styles.achievements}>
            <h3>주요 성과</h3>
            <div className={styles.achievementList}>
              {project.achievements.map((achievement, index) => (
                <div key={index} className={styles.achievementItem}>
                  {achievement}
                </div>
              ))}
            </div>
          </div>
        )}

        {"details" in project && project.details && (
          <div className={styles.projectDetails}>
            <h3>세부 내용</h3>
            {project.details.map((detail, index) => (
              <div key={index} className={styles.detailSection}>
                <h4>
                  {index + 1}. {detail.title}
                </h4>
                <p>{detail.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
