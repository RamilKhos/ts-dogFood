import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useCallback, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../../../API'
import { notifySuccess } from '../../../toastify/toastify'
import { AddReview, Reviews } from '../../../../types/types'

export const useReview = () => {
  const { id } = useParams()
  const queryClient = useQueryClient()

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  // Получить отзывы к товару
  const { data: review, isLoading } = useQuery <Reviews[]> ({
    queryKey: ['REVIEWS_PRODUCT'].concat(id!),
    queryFn: () => api.getReviewProductById(id!).then((res) => res.json()),
  })

  // Добавить отзыв
  const { mutate } = useMutation({
    mutationFn: (formPayload: AddReview) => api.addReview(
        id!,
        +formPayload.rating,
        formPayload.text,
    ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['REVIEWS_PRODUCT'] })
      notifySuccess('Отзыв добавлен')
      closeModal()
    },
  })

  return {
    id,
    isModalOpen,
    setIsModalOpen,
    mutate,
    isLoading,
    review,
    openModal,
    closeModal,
  }
}
