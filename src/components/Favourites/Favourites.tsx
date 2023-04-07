import { FavouritesGoods } from './FavouritesGoods/FavouritesGoods'
import { FavouritesIsEmpty } from './FavouritesIsEmpty/FavouritesIsEmpty'
import { useAppSelector } from '../../redux/main'

export const Favourites: React.FC = () => {
  const favourites = useAppSelector((store) => store.favourites)

  return (
    <div className="container d-flex flex-grow-1 justify-content-center align-items-center">
      {favourites.length > 0
        ? <FavouritesGoods />
        : <FavouritesIsEmpty />}
    </div>
  )
}
