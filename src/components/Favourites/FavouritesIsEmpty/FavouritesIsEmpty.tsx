import { useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'
import logo from '../../../resources/images/favouritesIsEmpty.png'
import React from 'react'

export const FavouritesIsEmpty: React.FC = () => {
  const navigate = useNavigate()

  const btnInCatalog = () => {
    navigate('/')
  }

  return (
    <div className={styles.container}>
      <img className={styles.images} src={logo} alt="favouritesIsEmpty" />
      <h2 className={styles.text_header}> В списке пока нет ни одного избранного товара </h2>
      <p className={styles.text}>
        Выберите нужный Вам товар из каталога интернет-магазина и добавьте его в список избранных.
      </p>
      <div>
        <button onClick={btnInCatalog} type="button" className={styles.button_42}>В каталог</button>
      </div>
    </div>
  )
}
