import styles from './styles.module.scss'
import { UnselectedGoods } from './UnselectedGoods/UnselectedGoods'
import { WithSelectedGoods } from './WithSelectedGoods/WithSelectedGoods'
import { useAppSelector } from '../../../../redux/main'
import { Product } from '../../../../types/types'

type Products = {
    products: Product[]
}

export const CartWithGoodsRightBlock = ({ products }: Products) => {
  const cart = useAppSelector((store) => store.cart)

  let totalDiscountedPrice: number = 0
  let finalPriceWithoutDiscount: number = 0
  let finalCount: number = 0
  const isDiscount: boolean[] = []

  cart.forEach((element) => {
    products.forEach((product) => {
      if (element.id === product._id && element.isSelected) {
        finalPriceWithoutDiscount! += product.price * element.count
        totalDiscountedPrice! += (product.price
            - (product.price * (product.discount / 100))) * element.count
        finalCount! += element.count
        isDiscount.push(Boolean(product.discount))
      }
    })
  })

  return (
    <div className={`${styles.cart_tab_total_amount}`}>
      <div className={`${styles.cart_tab_total_amount__inner}`}>
        <div className={`${styles.total_amount}`}>
          <div className={`${styles.total_amount__content}`}>
            <div className={`${styles.total_amount__title} ${styles.total_amount__title_bottom_border}`}>
              <span className="">Условия заказа</span>
            </div>
            {finalCount ? (
              <WithSelectedGoods
                totalDiscountedPrice={totalDiscountedPrice}
                finalPriceWithoutDiscount={finalPriceWithoutDiscount}
                finalCount={finalCount}
                isDiscount={isDiscount}
              />
            ) : (
              <UnselectedGoods />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
