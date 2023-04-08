import { useQuery } from '@tanstack/react-query'
import { api } from '../../../../API'
import { deleteSelectedProductFromCart, selectedProductsInCart } from '../../../../redux/slices/cartSlice/cartSlice'
import { PRODUCTS_TO_CART } from '../../../../tools/const_variables/const_variables'
import { useAppDispatch, useAppSelector } from '../../../../redux/main'
import React from 'react'
import { Product } from '../../../../types/types'

const getQueryKeyProduct = (id: string[]) => PRODUCTS_TO_CART.concat(id)

export const useCartWithGoods = () => {
  const dispatch = useAppDispatch()
  const cart = useAppSelector((store) => store.cart)

  const checkboxAllSelectedHandler = (checked: boolean) => dispatch(selectedProductsInCart(checked))
  const deleteSelectedProducts = () => dispatch(deleteSelectedProductFromCart())

  const checkSelectedProducts = cart.every((elem) => elem.isSelected)
  const checkSelectedProduct = cart.some((elem) => elem.isSelected)

  const { data: products, isError, isLoading, isFetching } = useQuery <Product[]> ({
    queryKey: getQueryKeyProduct(cart.map((product) => product.id)),
    queryFn: () => api.getProductsById(cart)
      .then((response) => Promise.all(response.map((product) => product.json()))),
  })

  const checkboxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    checkboxAllSelectedHandler(e.target.checked)
  }
  
  return {
    products,
    isError,
    isLoading,
    isFetching,
    checkboxAllSelectedHandler,
    checkSelectedProducts,
    checkSelectedProduct,
    deleteSelectedProducts,
    checkboxHandler,
  }
}
