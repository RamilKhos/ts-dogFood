import { HeaderActiveSigIn } from './HeaderActiveSigIn/HeaderActiveSigIn'
import { HeaderNoActiveSigIn } from './HeaderNoActiveSigIn/HeaderNoActiveSigIn'
import stylesHeader from './styles.module.scss'
import { useAppSelector } from '../../redux/main'

export const Header: React.FC = () => {
  const token = useAppSelector(store => store.userInfo)

  return (
    <header className={`${stylesHeader.header}`}>
      <div className="container">
        {token.token !== null ? <HeaderActiveSigIn /> : <HeaderNoActiveSigIn />}
      </div>
    </header>
  )
}
