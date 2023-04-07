import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { USER_INFO_KEY_IN_LS } from '../../../tools/const_variables/const_variables'

type UserInfo = {
    token: string | null,
    group: string | null,
    userID: string | null,
}

const checkUserInfoInLS = localStorage.getItem(USER_INFO_KEY_IN_LS)

const initialState: UserInfo = checkUserInfoInLS
  ? JSON.parse(checkUserInfoInLS)
  : { token: null, userID: null, group: null }

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    addUserInfo: (state, action: PayloadAction <UserInfo>) => state = action.payload,

    deleteUserInfo: (state) => state = { token: null, userID: null, group: null },
  },
})

export const { addUserInfo, deleteUserInfo } = userInfoSlice.actions

export const userInfoReducer = userInfoSlice.reducer
