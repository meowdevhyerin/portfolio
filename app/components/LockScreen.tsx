"use client";

import { useState, useEffect } from "react";
import { PiArrowCircleRightThin } from "react-icons/pi";
import styles from "./LockScreen.module.css";

interface LockScreenProps {
  onUnlock: () => void;
  isUnlocking: boolean;
}

export default function LockScreen({ onUnlock, isUnlocking }: LockScreenProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div
      className={`${styles.lockScreen} ${isUnlocking ? styles.unlocking : ""}`}
    >
      <div className={styles.clockSection}>
        <div className={styles.time}>{formatTime(time)}</div>
        <div className={styles.date}>{formatDate(time)}</div>
      </div>

      <div className={styles.loginSection}>
        <div className={styles.profileCircle}>
          <img
            src="/images/ProfileImage2.jpg"
            alt="Profile"
            className={styles.profileImg}
          />
        </div>
        <div className={styles.userName}>홍혜린</div>
        <div className={styles.unlockButton} onClick={onUnlock}>
          <span>Click to unlock</span>
          <PiArrowCircleRightThin className={styles.unlockIcon} />
        </div>
      </div>
    </div>
  );
}
