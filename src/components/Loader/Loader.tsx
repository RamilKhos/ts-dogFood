import styles from './stylesLoader.module.scss'

export const Loader: React.FC = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.load}`}>
        <hr className={`${styles.hr}`} />
        <hr className={`${styles.hr}`} />
        <hr className={`${styles.hr}`} />
        <hr className={`${styles.hr}`} />
      </div>
    </div>
  )
}
