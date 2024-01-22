import Header from 'components/Header'
import styles from './Home.module.scss'
import relogio from 'assets/inicial.png'

export default function Home() {
  return (
    <div>
      <Header 
        titulo='Classificados teach'
        descricao='Compre diversos produtos no melhor site do Brasil'
        imagem={relogio}
        className={styles.header}
      />
    </div>
  )
}