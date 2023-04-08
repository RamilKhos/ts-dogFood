import { ProductInFavoutire } from './redux/slices/favouritesSlice/favouritesSlice'
import {
  BASE_URL, CONTENT_TYPE, GROUP_ID, USER_INFO_KEY_IN_LS,
} from './tools/const_variables/const_variables'
import { Product } from './types/types'

class API {
  BASE_URL: string
  CONTENT_TYPE: string
  GROUP_ID: string

  constructor(BASE_URL: string, CONTENT_TYPE: string, GROUP_ID: string) {
    this.BASE_URL = BASE_URL
    this.CONTENT_TYPE = CONTENT_TYPE
    this.GROUP_ID = GROUP_ID
  }

  //   Регистрация
  signUp(inputEmail: string, inputPassword: string) {
    return fetch(`${this.BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': this.CONTENT_TYPE,
      },
      body: JSON.stringify({
        email: inputEmail,
        group: 'sm8',
        password: inputPassword,
      }),
    })
  }

  //   Авторизация
  sigIn(inputEmail: string, inputPassword: string) {
    return fetch(`${this.BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': CONTENT_TYPE,
      },
      body: JSON.stringify({
        email: inputEmail,
        password: inputPassword,
      }),
    })
  }

  //   Информация о пользователе
  getInfoAboutUser() {
    const userInfo = localStorage.getItem(USER_INFO_KEY_IN_LS)
    return fetch(`${this.BASE_URL}/v2/${GROUP_ID}/users/me`, {
      headers: {
        authorization: `Bearer ${JSON.parse(userInfo || '').token}`,
      },
    })
  }

  showAllProduct() {
    const userInfo = localStorage.getItem(USER_INFO_KEY_IN_LS)
    if (userInfo) {
      return fetch(
        `${this.BASE_URL}/products`,
        { headers: { authorization: `Bearer ${JSON.parse(userInfo).token}` } },
      )
    }
    return null
  }

  // Получить товар по id
  getProductById(id: string) {
    const userInfo = localStorage.getItem(USER_INFO_KEY_IN_LS)
    return fetch(
      `${this.BASE_URL}/products/${id}`,
      { headers: { authorization: `Bearer ${JSON.parse(userInfo || '').token}` } },
    )
  }

  // Удалить товар по id
  deleteProductById(id: string) {
    const userInfo = localStorage.getItem(USER_INFO_KEY_IN_LS)
    return fetch(
      `${this.BASE_URL}/products/${id}`,
      {
        method: 'DELETE',
        headers: { authorization: `Bearer ${JSON.parse(userInfo || '').token}` },
      },
    )
  }

  // Получить выбранные товары по id в корзине
  getProductsById(array: ProductInFavoutire[]){
    const userInfo = localStorage.getItem(USER_INFO_KEY_IN_LS)
    const requests = array.map((obj: { id: string }) => fetch(`${this.BASE_URL}/products/${obj.id}`,
      { headers: { authorization: `Bearer ${JSON.parse(userInfo || '').token}` } }))
    return Promise.all(requests)
  }

  like(id: string) {
    const userInfo = localStorage.getItem(USER_INFO_KEY_IN_LS)
    return fetch(`${this.BASE_URL}/products/likes/${id}`, {
      method: 'PUT',
      headers: { authorization: `Bearer ${JSON.parse(userInfo || '').token}` },
    })
  }

  deleteLike(id: string) {
    const userInfo = localStorage.getItem(USER_INFO_KEY_IN_LS)
    return fetch(`${this.BASE_URL}/products/likes/${id}`, {
      method: 'DELETE',
      headers: { authorization: `Bearer ${JSON.parse(userInfo || '').token}` },
    })
  }

  // Добавить продукт
  addProduct(
    pictures: string, 
    name: string, 
    price: string, 
    discount: string, 
    stock: string, 
    wight: string, 
    description: string,
    ) {
    const userInfo = localStorage.getItem(USER_INFO_KEY_IN_LS)
    return fetch('https://api.react-learning.ru/products', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${JSON.parse(userInfo || '').token}`,
        'Content-Type': CONTENT_TYPE,
      },
      body: JSON.stringify({
        available: true,
        pictures,
        name,
        price,
        discount,
        stock,
        wight,
        description,
      }),
    })
  }

  // Получить отзывы к товару по id
  getReviewProductById(id: string) {
    const userInfo = localStorage.getItem(USER_INFO_KEY_IN_LS)
    return fetch(
      `${this.BASE_URL}/products/review/${id}`,
      { headers: { authorization: `Bearer ${JSON.parse(userInfo || '').token}` } },
    )
  }

  // Добавить отзыв
  addReview(id: string, rating: number, text: string) {
    const userInfo = localStorage.getItem(USER_INFO_KEY_IN_LS)
    return fetch(`${this.BASE_URL}/products/review/${id}`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${JSON.parse(userInfo || '').token}`,
        'Content-Type': CONTENT_TYPE,
      },
      body: JSON.stringify({
        rating,
        text,
      }),
    })
  }

  // Удалить отзыв
  deleteRewiew(idProduct: string, idReview: string) {
    const userInfo = localStorage.getItem(USER_INFO_KEY_IN_LS)
    return fetch(`${this.BASE_URL}/products/review/${idProduct}/${idReview}`, {
      method: 'DELETE',
      headers: { authorization: `Bearer ${JSON.parse(userInfo || '').token}` },
    })
  }
}

export const api = new API(BASE_URL, CONTENT_TYPE, GROUP_ID)
