import { useState, useRef, useEffect } from "react";
import styles from "../Window.module.css";
import { IoMdRefresh } from "react-icons/io";

interface GalleryContentProps {
  projectId: string;
}

interface GalleryItem {
  image: string;
  caption: string;
  duration?: number;
}

const galleryData: { [key: string]: GalleryItem[] } = {
  saviing: [
    {
      image: "/images/saviing/가챠뽑기.gif",
      caption: "가챠 시스템을 통한 아이템 획득",
      duration: 14000,
    },
    {
      image: "/images/saviing/계좌이체내역왁인.gif",
      caption: "실시간 계좌 이체 내역 확인",
      duration: 5000,
    },
    {
      image: "/images/saviing/방배치.gif",
      caption: "드래그 앤 드롭으로 아이템 배치",
      duration: 14000,
    },
    {
      image: "/images/saviing/방배치2.gif",
      caption: "격자 기반 충돌 검증 시스템",
      duration: 6000,
    },
    {
      image: "/images/saviing/방배치3.gif",
      caption: "다양한 아이템 조합 및 배치",
      duration: 6000,
    },
    {
      image: "/images/saviing/상점.gif",
      caption: "인게임 상점 UI",
      duration: 9000,
    },
    {
      image: "/images/saviing/적금주기변경.gif",
      caption: "적금 주기 변경 Funnel",
      duration: 9000,
    },
    {
      image: "/images/saviing/펫클릭.gif",
      caption: "펫 인터랙션 애니메이션",
      duration: 10000,
    },
  ],
  kkulddip: [
    {
      image: "/images/Kkulddip/표지.png",
      caption: "서비스 소개",
    },
    {
      image: "/images/Kkulddip/자유로운알림발송.png",
      caption: "기능 소개 - 알림 발송",
    },
    {
      image: "/images/Kkulddip/AI매출예측.png",
      caption: "기능 소개 - AI 매출 예측",
    },
    {
      image: "/images/Kkulddip/라이브광고송출.png",
      caption: "기능 소개 - OpenVidu 라이브 광고 송출",
    },
    {
      image: "/images/Kkulddip/매출대시보드.png",
      caption: "기능 소개 - 매출 대시보드",
    },
  ],
};

export default function GalleryContent({ projectId }: GalleryContentProps) {
  const gallery = galleryData[projectId as keyof typeof galleryData];
  const [imageKeys, setImageKeys] = useState<{ [key: number]: number }>(
    gallery ? Object.fromEntries(gallery.map((_, i) => [i, 0])) : {}
  );
  const [showRefreshIcon, setShowRefreshIcon] = useState<{
    [key: number]: boolean;
  }>(gallery ? Object.fromEntries(gallery.map((_, i) => [i, false])) : {});
  const timersRef = useRef<{ [key: number]: NodeJS.Timeout | null }>({});

  if (!gallery) {
    return <div className={styles.content}>Gallery not found</div>;
  }

  useEffect(() => {
    return () => {
      Object.values(timersRef.current).forEach((timer) => {
        if (timer) clearTimeout(timer);
      });
    };
  }, []);

  const handleImageClick = (index: number) => {
    setImageKeys((prev) => ({
      ...prev,
      [index]: (prev[index] || 0) + 1,
    }));
    setShowRefreshIcon((prev) => ({
      ...prev,
      [index]: false,
    }));

    if (timersRef.current[index]) {
      clearTimeout(timersRef.current[index]!);
    }

    const duration = gallery[index].duration;
    if (duration) {
      timersRef.current[index] = setTimeout(() => {
        setShowRefreshIcon((prev) => ({
          ...prev,
          [index]: true,
        }));
      }, duration);
    }
  };

  const handleImageLoad = (index: number) => {
    if (timersRef.current[index]) {
      clearTimeout(timersRef.current[index]!);
    }

    const duration = gallery[index].duration;
    if (duration) {
      timersRef.current[index] = setTimeout(() => {
        setShowRefreshIcon((prev) => ({
          ...prev,
          [index]: true,
        }));
      }, duration);
    }
  };

  return (
    <div className={styles.content}>
      <div className={styles.galleryGrid}>
        {gallery.map((item, index) => (
          <div key={index} className={styles.galleryItem}>
            <div
              className={styles.galleryImageContainer}
              onClick={() => handleImageClick(index)}
            >
              <img
                src={`${item.image}?t=${imageKeys[index] || 0}`}
                alt={item.caption}
                className={styles.galleryImage}
                onLoad={() => handleImageLoad(index)}
              />
              {showRefreshIcon[index] && (
                <div className={styles.refreshOverlay}>
                  <IoMdRefresh className={styles.refreshIcon} />
                </div>
              )}
            </div>
            <p className={styles.galleryCaption}>{item.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
