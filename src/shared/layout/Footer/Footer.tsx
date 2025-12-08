import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.root}>
      <div className={styles.inner}>
        <small className={styles.text}>© 2025 LogiQuest 10</small>
      </div>
    </footer>
  )
}

export default Footer
