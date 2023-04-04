import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MainContainer } from './MainContainer/MainContainer'
import styles from './MainContainer/styles.module.scss'
import { useAppSelector } from '../../redux/main'

export function Main() {
  const token = useAppSelector((store) => store.userInfo)
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate('login')
    }
  }, [])

  return (
    <div className={styles.cont_graw}>
      <MainContainer />
    </div>
  )
}
