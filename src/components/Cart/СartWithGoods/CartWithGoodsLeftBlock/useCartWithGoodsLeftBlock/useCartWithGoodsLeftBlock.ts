import { useState } from 'react'
import { decrementCountProduct, deleteProductFromCart, incrementCountProduct, selectedProductInCart } from '../../../../../redux/slices/cartSlice/cartSlice'
import { useAppDispatch, useAppSelector } from '../../../../../redux/main'
import { Product } from '../../../../../types/types';

type CartWithGoodsLeftBlockProps = {
    product: Product;
}

export const useCartWithGoodsLeftBlock = ({ product }: CartWithGoodsLeftBlockProps) => {
  const dispatch = useAppDispatch()
  const [btnMinusState, setBtnMinusState] = useState<boolean>(false)
  const [btnPlusState, setBtnPlusState] = useState<boolean>(false)

  const cart = useAppSelector((store) => store.cart)
  const cartItem = cart.find((elem) => elem.id === product._id)

  // Плюс
  const btnPlusHandler = () => {
    if (cartItem!.count === product.stock) {
      setBtnPlusState(true)
      return setBtnMinusState(false)
    }
    setBtnMinusState(false)
    return dispatch(incrementCountProduct(cartItem!.id))
  }

  // Минус
  const btnMinusHandler = () => {
    if (cartItem!.count === 1) {
      return setBtnMinusState(true)
    }
    setBtnPlusState(false)
    return dispatch(decrementCountProduct(cartItem!.id))
  }

  // Удалить
  const btnDeleteProductHandler = () => {
    dispatch(deleteProductFromCart(product._id!))
  }

  // Checkbox
  const checkboxHandler = () => {
    dispatch(selectedProductInCart(product._id!))
  }

  return {
    cartItem,
    btnMinusState,
    btnPlusState,
    btnPlusHandler,
    btnMinusHandler,
    btnDeleteProductHandler,
    checkboxHandler,
  }
}
