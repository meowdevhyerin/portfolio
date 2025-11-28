"use client";

import { useState } from "react";
import styles from "./Desktop.module.css";
import MenuBar from "./MenuBar";
import Shortcut from "./Shortcut";
import Window from "./Window";

export default function Desktop() {
  const [windows, setWindows] = useState<string[]>([]);
  const [activeWindow, setActiveWindow] = useState<string | null>(null);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [imageViewerIndex, setImageViewerIndex] = useState<number>(0);

  const openWindow = (id: string) => {
    // 이미지 뷰어 윈도우인 경우
    if (id.startsWith("image-")) {
      const parts = id.split('-');
      const imageIndex = parseInt(parts[3]);
      const projectId = `${parts[1]}-${parts[2]}`;
      const existingImageWindow = windows.find(w => w.startsWith(`image-${projectId}-`));

      if (existingImageWindow) {
        // 이미 열려있는 이미지 뷰어가 있으면 인덱스만 업데이트
        setImageViewerIndex(imageIndex);
        setActiveWindow(existingImageWindow);
        return;
      } else {
        // 새로 열 때는 인덱스 설정
        setImageViewerIndex(imageIndex);
      }
    }

    if (windows.includes(id)) {
      setActiveWindow(id);
      return;
    }

    setWindows([...windows, id]);
    setActiveWindow(id);
  };

  const closeWindow = (id: string) => {
    setWindows(windows.filter((w) => w !== id));
    if (activeWindow === id) {
      setActiveWindow(null);
    }
  };

  const focusWindow = (id: string) => {
    setActiveWindow(id);
    setWindows((prev) => [...prev.filter((w) => w !== id), id]);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const getWindowTitle = (id: string) => {
    if (id.startsWith("image-")) {
      return "Image Viewer";
    }
    const titles: { [key: string]: string } = {
      profile: "Profile",
      projects: "Projects",
      resume: "Resume",
      settings: "Settings",
      "project-loglens": "LogLens",
      "project-saviing": "Saviing",
      "project-kkulddip": "Kkulddip",
    };
    return titles[id] || id.charAt(0).toUpperCase() + id.slice(1);
  };

  const getWindowPosition = (id: string) => {
    if (id.startsWith("image-")) {
      return { x: 900, y: 100 };
    }
    const positions: { [key: string]: { x: number; y: number } } = {
      profile: { x: 200, y: 100 },
      projects: { x: 230, y: 130 },
      resume: { x: 260, y: 160 },
      settings: { x: 290, y: 190 },
      "project-loglens": { x: 250, y: 120 },
      "project-saviing": { x: 280, y: 150 },
      "project-kkulddip": { x: 310, y: 180 },
    };
    return positions[id] || { x: 200, y: 100 };
  };

  return (
    <div
      className={`${styles.desktop} ${theme === "light" ? styles.light : ""}`}
    >
      <div className={styles.wallpaper} />

      <MenuBar theme={theme} />

      <div className={styles.shortcuts}>
        <Shortcut
          icon="profile"
          label="Profile"
          x={24}
          y={40}
          onDoubleClick={() => openWindow("profile")}
        />
        <Shortcut
          icon="projects"
          label="Projects"
          x={24}
          y={160}
          onDoubleClick={() => openWindow("projects")}
        />
        <Shortcut
          icon="resume"
          label="Resume"
          x={24}
          y={280}
          onDoubleClick={() => openWindow("resume")}
        />
        <Shortcut
          icon="settings"
          label="Settings"
          x={24}
          y={400}
          onDoubleClick={() => openWindow("settings")}
        />
      </div>

      {windows.map((id, index) => {
        const baseZIndex = 10;
        const zIndex = baseZIndex + index;
        const isActive = id === activeWindow;
        const initialPosition = getWindowPosition(id);

        return (
          <Window
            key={id}
            id={id}
            title={getWindowTitle(id)}
            zIndex={zIndex}
            isActive={isActive}
            onFocus={() => focusWindow(id)}
            onClose={() => closeWindow(id)}
            onOpenWindow={openWindow}
            theme={theme}
            onThemeChange={toggleTheme}
            initialPosition={initialPosition}
            imageViewerIndex={id.startsWith("image-") ? imageViewerIndex : undefined}
          />
        );
      })}
    </div>
  );
}
