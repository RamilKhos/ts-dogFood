import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { api } from '../../../API'
import 'react-toastify/dist/ReactToastify.css'
import { notifySuccess } from '../../toastify/toastify'
import { AddProduct } from '../../../types/types'

export const useAddProduct = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: (formPayload: AddProduct) => api.addProduct(
      formPayload.pictures,
      formPayload.name,
      formPayload.price,
      formPayload.discount,
      formPayload.stock,
      formPayload.wight += ' г',
      formPayload.description
    ),
    onSuccess: () => {
      notifySuccess('Товар успешно добавлен!')
      queryClient.invalidateQueries({ queryKey: ['addProduct'] })
      navigate('/')
    }
  })

  return {
    mutate
  }
}
