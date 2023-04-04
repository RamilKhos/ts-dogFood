import { useSelector } from 'react-redux'
import { HeaderActiveSigIn } from './HeaderActiveSigIn/HeaderActiveSigIn'
import { HeaderNoActiveSigIn } from './HeaderNoActiveSigIn/HeaderNoActiveSigIn'
import stylesHeader from './styles.module.scss'
import { useAppSelector } from '../../redux/main'

export const Header: React.FC = () => {
  const token = useAppSelector(store => store.userInfo)

  return (
    <header className={`${stylesHeader.header}`}>
      <div className="container">
        {token ? <HeaderActiveSigIn /> : <HeaderNoActiveSigIn />}
      </div>
    </header>
  )
}
