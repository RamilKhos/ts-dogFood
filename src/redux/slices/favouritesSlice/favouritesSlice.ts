import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PRODUCTS_IN_FAVOURITE } from '../../../tools/const_variables/const_variables'

export interface ProductInFavoutire {
    id: string,
}

const checkProductsInFavourites = localStorage.getItem(PRODUCTS_IN_FAVOURITE)
const initialState: ProductInFavoutire[] = checkProductsInFavourites ? JSON.parse(checkProductsInFavourites) : []

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {

    addItemToFavourites: (state, action: PayloadAction <ProductInFavoutire>) => {
      state.push(action.payload)
    },

    deleteItemFromFavourites: (state, action: PayloadAction <string>) => {
      return state.filter((elem) => elem.id !== action.payload)
    },
  },
})

export const { addItemToFavourites, deleteItemFromFavourites } = favouritesSlice.actions
export const favouritesReducer = favouritesSlice.reducer
