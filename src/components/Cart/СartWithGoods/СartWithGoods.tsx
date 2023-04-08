import { Checkbox, FormControlLabel } from '@mui/material'
import { Link } from 'react-router-dom'
import { Loader } from '../../Loader/Loader'
import { MainErrorScreen } from '../../MainErrorScreen/MainErrorScreen'
import styles from '../cartStyles.module.scss'
import { CartWithGoodsLeftBlock } from './CartWithGoodsLeftBlock/CartWithGoodsLeftBlock'
import { CartWithGoodsRightBlock } from './CartWithGoodsRightBlock/CartWithGoodsRightBlock'
import { useCartWithGoods } from './useCartWithGoods/useCartWithGoods'
import React from 'react'

export const СartWithGoods: React.FC = () => {
  const { products, isError, isLoading, checkSelectedProducts,
    checkSelectedProduct, deleteSelectedProducts, isFetching, checkboxHandler,
  } = useCartWithGoods()

  if (isLoading || isFetching) return <Loader />
  if (isError) return <MainErrorScreen />

  return (
    <>
      <div className={styles.breadcrumb}>
        <Link to="/" className={styles.link}>
          <i className="fa-solid fa-arrow-left" />
          <span className={styles.link}>Вернуться к покупкам</span>
        </Link>
      </div>

      <h1 className={`${styles.cart_title}`}>Корзина</h1>
      <div className={`${styles.cart_tab_content}`}>
        <div className={`${styles.cart_items__products}`}>

          <div className={styles.mass_selection}>
            <div className={styles.mass_selection__choose_all}>
              <FormControlLabel
                control={(
                  <Checkbox
                    checked={checkSelectedProducts}
                    onChange={checkboxHandler}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                )}
                label="Выбрать все"
              />
            </div>

            <div className={styles.mass_selection__delete_btn}>
              {checkSelectedProduct
                ? <button onClick={deleteSelectedProducts} type="button" aria-label="delete_selected">Удалить выбранные</button>
                : <button disabled className={styles.btn} type="button" aria-label="delete_selected">Удалить выбранные</button>}
            </div>
          </div>

          <div className={styles.left_block}>
            {products!.map(((product) => (
              <CartWithGoodsLeftBlock key={product._id} product={product} />
            )))}
          </div>

        </div>
        <CartWithGoodsRightBlock products={products!} />
      </div>
    </>
  )
}
