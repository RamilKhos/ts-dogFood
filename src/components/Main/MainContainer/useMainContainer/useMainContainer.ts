import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { PRODUCTS_SEARCH_QUERY_KEY, BASE_URL_GET_PRODUCTS } from '../../../../tools/const_variables/const_variables'
import { useFilterContextData, useFilterContextMethods } from '../../../FilterContext/FilterContextProvider'
import { useDebounce } from '../useDebounce/useDebounce'
import { useAppSelector } from '../../../../redux/main'
import { I_FilterContext, Product, Query } from '../../../../types/types'

export const useMainContainer = () => {
  const { token } = useAppSelector((store) => store.userInfo)
  const navigate = useNavigate()

  const [searchParams, setSearchParams] = useSearchParams()
  const [input, setInput] = useState<string>(() => searchParams.get('q') ?? '')
  const [sort, setSort] = useState<string>(() => searchParams.get('sort') ?? 'POPULAR')

  const { setSearch } = useFilterContextMethods()
  const debounceValue = useDebounce(input, 500)

  useEffect(() => {
    setSearchParams({ q: input, sort })
  }, [input, sort])

  useEffect(() => {
    setSearch(debounceValue)
  }, [debounceValue])

  const filters = useFilterContextData()

  const getProductsQueryKey = (filters: I_FilterContext) => PRODUCTS_SEARCH_QUERY_KEY.concat(Object.values(filters))

  const getAllProducts = (query: Query) => fetch(`${BASE_URL_GET_PRODUCTS}${new URLSearchParams(query).toString()}`,
    { headers: { authorization: `Bearer ${token}` } },
  ).then((res) => res.json())


  const { data, isLoading, isError, isFetching } = useQuery <Product[]> ({
    queryKey: getProductsQueryKey(filters),
    queryFn: () => getAllProducts({ query: filters.search }),
  })

  const btnAddHandler = () => {
    navigate('add_product')
  }

  return {
    data,
    isLoading,
    isFetching,
    isError,
    input,
    setInput,
    btnAddHandler,
    sort,
    setSort,
  }
}
