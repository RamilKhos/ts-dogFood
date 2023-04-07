import { createContext, useContext, useMemo } from 'react'
import { useFilter } from './useFilter'
import { I_FilterContext, I_FilterContextMethods } from '../../types/types'

const FilterContext = createContext<I_FilterContext>(null!)
const FilterContextMethods = createContext<I_FilterContextMethods>(null!)

export function FilterContextProvider({ children }: any) {
  const { search, setSearch } = useFilter()

  const filterContextData = useMemo(() => ({
    search,
  }), [search])

  const filterContextMethods = useMemo(() => ({
    setSearch,
  }), [setSearch])

  return (
    <FilterContext.Provider value={filterContextData}>
      <FilterContextMethods.Provider value={filterContextMethods}>
        {children}
      </FilterContextMethods.Provider>
    </FilterContext.Provider>
  )
}

export const useFilterContextData = () => useContext(FilterContext)
export const useFilterContextMethods = () => useContext(FilterContextMethods)
