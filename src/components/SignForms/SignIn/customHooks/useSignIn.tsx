import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../../../API'
import { addUserInfo } from '../../../../redux/slices/userInfoSlice/userInfoSlice'
import { FormPayload, ResponceSignIn } from '../../../../types/typeSignsForm'
import { useAppDispatch } from '../../../../redux/main'

export function useSignIn() {
  const navigate = useNavigate()
  const [isError, setIsError] = useState<boolean>(false)
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  const queryClient = useQueryClient()

  const { mutate } = useMutation<ResponceSignIn, string, FormPayload, ResponceSignIn>({
    mutationFn: (formPayload) => api.sigIn(
      formPayload.email,
      formPayload.password,
    ).then((response) => {
      if (response.status === 200) return response.json()
      throw response
    }),

    onSuccess: (data) => {
      dispatch(addUserInfo({ token: data.token, userID: data.data._id, group: data.data.group }))
      queryClient.invalidateQueries({ queryKey: ['signIn'] })
      return navigate('/')
    },

    onError: () => {
      setIsError(true)
    },
  })

  return {
    isError,
    setIsError,
    mutate,
    isShowPassword,
    setIsShowPassword,
  }
}
