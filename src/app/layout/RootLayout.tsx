import { Outlet } from 'react-router-dom'
import Header from '../../shared/layout/Header/Header'
import Footer from '../../shared/layout/Footer/Footer'
import styles from './RootLayout.module.css'

function RootLayout() {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.main}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default RootLayout
