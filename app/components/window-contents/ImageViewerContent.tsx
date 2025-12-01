import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "../Window.module.css";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { IoMdRefresh } from "react-icons/io";

interface ImageViewerContentProps {
  images: { src: string; caption: string }[];
  initialIndex: number;
}

const gifDurations: { [key: string]: number } = {
  "/images/saviing/가챠뽑기.gif": 14000,
  "/images/saviing/계좌이체내역왁인.gif": 5000,
  "/images/saviing/방배치.gif": 14000,
  "/images/saviing/방배치2.gif": 6000,
  "/images/saviing/방배치3.gif": 6000,
  "/images/saviing/상점.gif": 9000,
  "/images/saviing/적금주기변경.gif": 9000,
  "/images/saviing/펫클릭.gif": 10000,
  "/images/LogLens/AI분석보고서.gif": 17600,
  "/images/LogLens/AI챗봇.gif": 26400,
  "/images/LogLens/대시보드.gif": 7520,
  "/images/LogLens/로그내역1.gif": 14720,
  "/images/LogLens/사용자가이드.gif": 21280,
  "/images/LogLens/요청흐름그래프.gif": 29920,
};

export default function ImageViewerContent({
  images,
  initialIndex,
}: ImageViewerContentProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [imageKey, setImageKey] = useState(0);
  const [showRefreshIcon, setShowRefreshIcon] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setImageKey((prev) => prev + 1);
    setIsLoading(true);
  }, [initialIndex]);

  useEffect(() => {
    setShowRefreshIcon(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    const currentSrc = images[currentIndex].src;
    const duration = gifDurations[currentSrc];

    if (duration) {
      timerRef.current = setTimeout(() => {
        setShowRefreshIcon(true);
      }, duration);
    }
  }, [currentIndex, imageKey, images]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setImageKey((prev) => prev + 1);
    setIsLoading(true);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setImageKey((prev) => prev + 1);
    setIsLoading(true);
  };

  const handleImageClick = () => {
    setImageKey((prev) => prev + 1);
    setShowRefreshIcon(false);
    setIsLoading(true);
  };

  return (
    <div className={styles.content}>
      <div className={styles.imageViewer}>
        <button
          className={styles.carouselButton}
          onClick={goToPrevious}
          aria-label="Previous image"
        >
          <IoChevronBack />
        </button>

        <div className={styles.imageContainer}>
          <div
            style={{ position: "relative", cursor: showRefreshIcon ? "pointer" : "default" }}
            onClick={showRefreshIcon ? handleImageClick : undefined}
          >
            {isLoading && (
              <div className={styles.imageLoadingSpinner}>
                <div className={styles.spinner}></div>
              </div>
            )}
            <Image
              src={`${images[currentIndex].src}?t=${imageKey}`}
              alt={images[currentIndex].caption}
              className={styles.viewerImage}
              width={800}
              height={600}
              unoptimized
              priority={currentIndex === initialIndex}
              onLoad={() => setIsLoading(false)}
              style={{
                opacity: isLoading ? 0 : 1,
                transition: 'opacity 0.3s ease'
              }}
            />
            {showRefreshIcon && (
              <div className={styles.refreshOverlay}>
                <IoMdRefresh className={styles.refreshIcon} />
              </div>
            )}
          </div>
          <p className={styles.viewerCaption}>{images[currentIndex].caption}</p>
          <p className={styles.imageCounter}>
            {currentIndex + 1} / {images.length}
          </p>
        </div>

        <button
          className={styles.carouselButton}
          onClick={goToNext}
          aria-label="Next image"
        >
          <IoChevronForward />
        </button>
      </div>
    </div>
  );
}
