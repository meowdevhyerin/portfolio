import styles from '../Window.module.css'

interface SettingsContentProps {
  theme: 'dark' | 'light'
  onThemeChange: () => void
}

export default function SettingsContent({ theme, onThemeChange }: SettingsContentProps) {
  return (
    <div className={styles.content}>
      <div className={styles.settingsContent}>
        <div className={styles.settingItem}>
          <span>Color Mode</span>
          <select value={theme} onChange={(e) => {
            if (e.target.value !== theme) {
              onThemeChange()
            }
          }}>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </div>
        <div className={styles.settingItem}>
          <span>Blur Effect</span>
          <input type="checkbox" defaultChecked />
        </div>
        <p className={styles.note}>Blur effect setting is currently display only</p>
      </div>
    </div>
  )
}
