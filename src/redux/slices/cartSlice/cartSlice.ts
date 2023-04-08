import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PRODUCTS_IN_CART } from '../../../tools/const_variables/const_variables'

type ProductInCart = {
    id: string,
    isSelected: boolean,
    count: number,
}

type CheckCartInLS = () => ProductInCart[]

const checkCartInLS: CheckCartInLS = () => {
  const check = localStorage.getItem(PRODUCTS_IN_CART)
  if (check) {
    return JSON.parse(check)
  }
  return []
}

const initialState: ProductInCart[] = checkCartInLS()

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    addItem: {
      reducer: (state, action: PayloadAction <ProductInCart> ) => {
        state.push(action.payload)
      },
      prepare: (id: string) => ({
        payload: {
          id,
          isSelected: true,
          count: 1,
        },
      }),
    },

    incrementCountProduct: (state, action: PayloadAction <string>) => {
      state.map((product) => {
        product.id === action.payload ? product.count += 1 : product
      })
    },

    decrementCountProduct: (state, action: PayloadAction <string>) => {
      state.map((product) => {
        product.id === action.payload ? product.count -= 1 : product
      })
    },

    selectedProductInCart: (state, action: PayloadAction <string>) => {
      state.map((product) => {
        product.id === action.payload ? product.isSelected = !product.isSelected : product
      })
    },

    selectedProductsInCart: (state, action: PayloadAction <boolean>) => {
      state.forEach((product) => { product.isSelected = action.payload })
    },

    deleteProductFromCart: (state, action: PayloadAction <string>) => {
      return state.filter((product) => product.id !== action.payload)
    },

    deleteSelectedProductFromCart: (state) => state.filter((product) => !product.isSelected),
  },
})

export const {
  incrementCountProduct, decrementCountProduct,
  addItem, deleteProductFromCart, deleteSelectedProductFromCart, selectedProductInCart,
  selectedProductsInCart,
} = cartSlice.actions

export const cartReducer = cartSlice.reducer
