import { useState } from 'react'

export const useFilter = () => {
  const [search, setSearch] = useState<string>('')

  return { search, setSearch }
}
