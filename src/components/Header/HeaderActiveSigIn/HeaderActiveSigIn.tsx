import { useNavigate, Link } from 'react-router-dom'
import logoDog from '../../../resources/images/logo_dog.png'
import stylesHeader from '../styles.module.scss'
import { useAppSelector } from '../../../redux/main'

export const HeaderActiveSigIn: React.FC = () => {
  const navigate = useNavigate()
  const productInCart = useAppSelector(store => store.cart)
  const productInFavourites = useAppSelector(store => store.favourites)

  const profileFormHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate('profile')
  }

  const cartHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate('cart')
  }

  const favouritesHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate('favourites')
  }

  return (
    <div className="d-flex justify-content-between align-items-center">
      <Link to="/" className="d-flex align-items-center text-decoration-none text-dark">
        <img src={logoDog} className="mh-100" width={72} alt="logo_dog" />
        <h3 className={`${stylesHeader.caption} ms-1`}>DogFood</h3>
      </Link>

      <div className="d-flex justify-content-between align-items-center gap-3">

        <button onClick={favouritesHandler} type="button" className="d-flex flex-column align-items-center">
          <i className={`${stylesHeader.icon} fa-regular fa-heart`}>
            {productInFavourites.length > 0 ? (
              <span className={stylesHeader.stickerAddProducts}>
                {productInFavourites.length}
              </span>
            ) : null}
          </i>
          <span className={stylesHeader.textUnderIcon}>Избранное</span>
        </button>

        <button onClick={cartHandler} type="button" className="d-flex flex-column align-items-center">
          <i className={`${stylesHeader.icon} fa-solid fa-basket-shopping`}>
            {productInCart.length > 0 ? (
              <span className={stylesHeader.stickerAddProducts}>
                {productInCart.length}
              </span>
            ) : null}
          </i>
          <span className={stylesHeader.textUnderIcon}>Корзина</span>
        </button>

        <button onClick={profileFormHandler} type="button" className="d-flex flex-column align-items-center">
          <i className={`${stylesHeader.icon} fa-solid fa-user`} />
          <span className={stylesHeader.textUnderIcon}>Профиль</span>
        </button>

      </div>
    </div>
  )
}
