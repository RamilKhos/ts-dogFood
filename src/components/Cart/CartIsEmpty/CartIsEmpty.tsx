import { useNavigate } from 'react-router-dom'
import styles from './cartEmprtyStyles.module.scss'
import React from 'react'

export const CartIsEmpty: React.FC = () => {
  const navigate = useNavigate()

  const btnHandler = () => {
    navigate('/')
  }

  return (
    <div className={styles.container}>
      <img className={styles.images} src="https://st.aliexpress.ru/mixer-storage/shopcart/empty.png" alt="12313" />
      <h2 className={styles.text_header}> Ваша корзина пуста </h2>
      <p className={styles.text}>
        Выберите нужный Вам товар из каталога интернет-магазина
        и добавьте его в корзину.
      </p>
      <div>
        <button onClick={btnHandler} type="button" className={styles.button_42}>В каталог</button>
      </div>
    </div>
  )
}
