import { СartWithGoods } from './СartWithGoods/СartWithGoods'
import styles from './cartStyles.module.scss'
import { CartIsEmpty } from './CartIsEmpty/CartIsEmpty'
import React from 'react'
import { useAppSelector } from '../../redux/main'

export const Cart: React.FC = () => {
  const cart = useAppSelector((store) => store.cart)

  return (
    <div className={`${styles.cart_page_new}`}>
      {cart.length > 0 ? <СartWithGoods /> : <CartIsEmpty />}
    </div>
  )
}
