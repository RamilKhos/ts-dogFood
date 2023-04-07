import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MainContainer } from './MainContainer/MainContainer'
import styles from './MainContainer/styles.module.scss'
import { useAppSelector } from '../../redux/main'

export function Main() {
  return (
    <div className={styles.cont_graw}>
      <MainContainer />
    </div>
  )
}
