import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.root}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          LogiQuest 10
        </Link>
        <nav className={styles.nav}>
          {/* TODO: テーマ切り替えトグルや前回スコアバッジを配置予定 */}
        </nav>
      </div>
    </header>
  )
}

export default Header
