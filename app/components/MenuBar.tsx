"use client";

import { useState, useEffect } from "react";
import { IoBatteryCharging, IoBatteryFull } from "react-icons/io5";
import styles from "./MenuBar.module.css";

interface MenuBarProps {
  theme?: "dark" | "light";
}

export default function MenuBar({ theme = "dark" }: MenuBarProps) {
  const [time, setTime] = useState(new Date());
  const [battery, setBattery] = useState({ level: 100, charging: false });

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if ("getBattery" in navigator) {
      (navigator as any).getBattery().then((bat: any) => {
        setBattery({
          level: Math.floor(bat.level * 100),
          charging: bat.charging,
        });
        bat.addEventListener("levelchange", () => {
          setBattery({
            level: Math.floor(bat.level * 100),
            charging: bat.charging,
          });
        });
        bat.addEventListener("chargingchange", () => {
          setBattery({
            level: Math.floor(bat.level * 100),
            charging: bat.charging,
          });
        });
      });
    }
  }, []);

  const formatTime = (date: Date) => {
    const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
    const month = date.toLocaleDateString("en-US", { month: "short" });
    const day = date.getDate();
    const timeStr = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    return `${weekday} ${month} ${day} ${timeStr}`;
  };

  return (
    <div
      className={`${styles.menuBar} ${theme === "light" ? styles.light : ""}`}
    >
      <div className={styles.leftMenu}>
        <div className={styles.menuItem}>Hyerin Hong</div>
      </div>
      <div className={styles.rightMenu}>
        <div className={styles.menuItem}>
          {battery.level}%
          {battery.charging ? (
            <IoBatteryCharging className={styles.batteryIcon} />
          ) : (
            <IoBatteryFull className={styles.batteryIcon} />
          )}
        </div>
        <div className={styles.menuItem}>{formatTime(time)}</div>
      </div>
    </div>
  );
}
