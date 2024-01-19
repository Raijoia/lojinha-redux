import { ReactComponent as Logo } from '../../assets/logo.svg'
import styles from './Navbar.module.scss'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Logo className={styles.logo} />
    </nav>
  )
}