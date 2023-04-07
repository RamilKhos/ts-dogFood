import { useEffect, useState } from 'react'

type UseDebounce = (value: string, ms: number) => typeof value

export const useDebounce: UseDebounce = (value, ms = 300) => {
  const [debounceValue, setDebounceValue] = useState<string>(value)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounceValue(value)
    }, ms)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [value])

  return debounceValue
}
