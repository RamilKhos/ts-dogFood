import { useQuery } from '@tanstack/react-query'
import { api } from '../../../API'
import { PRODUCTS_IS_FAVOURITE } from '../../../tools/const_variables/const_variables'
import { useAppSelector } from '../../../redux/main'
import { Product } from '../../../types/types'

const getQueryKeyProduct = (id: string[]) => PRODUCTS_IS_FAVOURITE.concat(id)

export const useFavouritesGoods = () => {
  const favourites = useAppSelector((store) => store.favourites)

  const {
    data: products, isError, isLoading, isFetching } = useQuery <Product[]> ({
    queryKey: getQueryKeyProduct(favourites.map((product) => product.id)),
    queryFn: () => api.getProductsById(favourites)
      .then((response) => Promise.all(response.map((product) => product.json()))),
  })

  return {
    products,
    isError,
    isLoading,
    isFetching,
  }
}
