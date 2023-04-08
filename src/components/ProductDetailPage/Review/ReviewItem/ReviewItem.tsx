import { useMutation, useQueryClient } from '@tanstack/react-query'
import dateFormat from 'dateformat'
import { api } from '../../../../API'
import { notifyDeleteProduct } from '../../../toastify/toastify'
import styles from '../styles.module.scss'
import { useAppSelector } from '../../../../redux/main'
import React from 'react'
import { Reviews } from '../../../../types/types'

export const ReviewItem: React.FC <Reviews> = ({ rating, text, author, created_at, _id, id }) => {
  const { userID } = useAppSelector((store) => store.userInfo)
  const isMyReview = userID === author._id

  const create = new Date(created_at)
  const date = dateFormat(create)

  const queryClient = useQueryClient()

  // Удалить отзыв
  const { mutate } = useMutation({
    mutationFn: () => api.deleteRewiew(id!, _id),
    onSuccess: (data) => {
      console.log(data)
      queryClient.invalidateQueries({ queryKey: ['REVIEWS_PRODUCT'] })
      notifyDeleteProduct('Отзыв удален!')
    },
  })

  return (
    <div className={styles.comments_container}>
      <div className={styles.comments_list}>
        <div className={styles.comment_main_level}>
          <div className={styles.comment_avatar}>
            <img src={author.avatar} alt="avatar" />
          </div>
          <div className={styles.comment_box}>
            <div className={styles.comment_head}>
              <div>
                <h6 className={`${styles.comment_name}`}>{author.name}</h6>
                <span>{author.email}</span>
              </div>
              <div>
                {[...Array(rating)].map((e, i) => <i className="star fa-solid fa-star text-warning" key={i} />)}
              </div>
              <span>{date}</span>
            </div>
            <div className={styles.comment_content}>
              {text}
            </div>
            {isMyReview ? (
              <button onClick={() => mutate()} type="button" className={styles.icon_delete_review}>
                <i className="fa-regular fa-trash-can text-danger" />
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
