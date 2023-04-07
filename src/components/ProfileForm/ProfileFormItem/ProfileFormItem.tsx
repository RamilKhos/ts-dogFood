import { deleteUserInfo } from '../../../redux/slices/userInfoSlice/userInfoSlice'
import styles from './styles.module.scss'
import React from 'react'
import { I_ProfileFormItems } from '../../../types/types'
import { useAppDispatch } from '../../../redux/main'

export const ProfileFormItems: React.FC<I_ProfileFormItems> = ({avatar, name, about, email }) => {
  const dispatch = useAppDispatch()

  const exitOfProfile = () => {
      dispatch(deleteUserInfo())
    }

  return (
    <div className={styles.container}>
      <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
        <div className="card p-4">
          <div className=" image d-flex flex-column justify-content-center align-items-center">

            <div>
              <img src={avatar} height="220" width="220" alt="avatar_images" />
            </div>

            <span className="name mt-3 fs-4">{name}</span>

            <span className="idd fs-7">{email}</span>

            <div className="text mt-3 fs-7">
              <span>{about}</span>
            </div>

            <div className="px-2 rounded mt-4 date">
              <button onClick={exitOfProfile} type="button" className={styles.button_83}>Выйти из профиля</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
