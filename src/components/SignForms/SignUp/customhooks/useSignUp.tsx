import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../../../API'
import { SIGN_UP_DATA_KEY_IN_LS } from '../../../../tools/const_variables/const_variables'
import { FormPayload, ResponceSignUp } from '../../../../types/typeSignsForm'

export function useSignUp() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false)

  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const openModal = useCallback(() => {
    setIsModalOpen(true)
  }, [])

  const { mutate } = useMutation<ResponceSignUp, string, FormPayload, ResponceSignUp>({
    mutationFn: (formPayload) => api.signUp(
      formPayload.email,
      formPayload.password,
    ).then((response) => {
      if (response.status === 201) return response.json()
      throw response
    }),
    onSuccess: (data) => {
      openModal()
      localStorage.setItem(SIGN_UP_DATA_KEY_IN_LS, JSON.stringify(data))
      queryClient.invalidateQueries({ queryKey: ['signUp'] })
      setTimeout(() => navigate('/'), 3000)
    },
    onError: () => {
      setIsError(true)
    },
  })

  return {
    isModalOpen,
    mutate,
    isError,
    setIsError,
    isShowPassword,
    setIsShowPassword,
  }
}
