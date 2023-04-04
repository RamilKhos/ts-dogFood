import { createContext, useContext, useMemo, ReactNode } from 'react'
import { useFilter } from './useFilter'

type FilterContextProviderProps = {
    children: ReactNode;
}

type FilterContextData = {
    search: string;
}
type FilterContextMethods = {
    setSearch: (search: string) => void;
}

const FilterContext = createContext <FilterContextData | undefined> (undefined)
const FilterContextMethods = createContext <FilterContextMethods | undefined> (undefined)

export function FilterContextProvider({ children }: FilterContextProviderProps) {
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
