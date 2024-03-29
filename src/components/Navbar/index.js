import classNames from 'classnames'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import styles from './Navbar.module.scss'
import {
  RiShoppingCart2Line,
  RiShoppingCartFill
} from 'react-icons/ri'
import Busca from 'components/Busca'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const iconeProps = {
  color: 'white',
  size: 24
}

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <nav className={styles.nav}>
      <Logo className={styles.logo} onClick={() => navigate('/')} />
      <div className={styles.link}>
        <Link 
          to="/" 
          className={classNames(styles.link, {
            [styles.selected]: location.pathname === '/'
          })}
        >Pagina Inicial</Link>
      </div>
      <div className={styles.busca}>
          <Busca />
      </div>
      <div className={styles.icones}>
        <Link to="/carrinho">
          {window.location.pathname === '/carrinho' 
            ? <RiShoppingCartFill {...iconeProps} /> 
            : <RiShoppingCart2Line {...iconeProps} />
          }
        </Link>
      </div>
    </nav>
  )
}