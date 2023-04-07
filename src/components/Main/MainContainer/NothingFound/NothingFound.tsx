import logoNouthingFound from '../../../../resources/images/Nothing_found.png'
import { NothingFoundProps } from '../../../../types/types'
import { useFilter } from '../../../FilterContext/useFilter'
import styles from './styles.module.scss'

export const NothingFound: React.FC <NothingFoundProps> = ({ setInput }) => {
  const { setSearch } = useFilter()

  const btnHandler = () => {
    setSearch('')
    setInput('')
  }

  return (
    <div className={styles.container}>
      <div className={styles.main}>

        <div>
          <img src={logoNouthingFound} className={styles.img} alt="nothing_found" />
        </div>

        <div className={styles.text}>
          <p>
            Простите, по вашему запросу
            {' '}
            <br />
            {' '}
            товаров не найдено
          </p>
        </div>

        <div>
          <button onClick={btnHandler} className={styles.btn} type="button">На главную</button>
        </div>

      </div>
    </div>
  )
}
