import classNames from 'classnames'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import styles from './Navbar.module.scss'
import {
  RiShoppingCart2Line,
  RiShoppingCartFill
} from 'react-icons/ri'

const iconeProps = {
  color: 'white',
  size: 24
}

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Logo className={styles.logo} />
      <div className={styles.link}>
        <a 
          href="/" 
          className={classNames(styles.link, {
            [styles.selected]: window.location.pathname === '/'
          })}
        >Pagina Inicial</a>
      </div>
      <div className={styles.busca}>

      </div>
      <div className={styles.icones}>
        <a href="/carrinho">
          {window.location.pathname === '/carrinho' 
            ? <RiShoppingCartFill {...iconeProps} /> 
            : <RiShoppingCart2Line {...iconeProps} />
          }
        </a>
      </div>
    </nav>
  )
}