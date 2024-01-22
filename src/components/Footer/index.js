import styles from './Footer.module.scss'
import {
  FaFacebook,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa'

const iconesProps = {
  size: 24,
  color: '#fff',
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <FaFacebook {...iconesProps} />
        <FaInstagram {...iconesProps} />
        <FaTwitter {...iconesProps} />
      </div>
      <span>Desenvolvido por Raí.</span>
    </footer>
  )
}