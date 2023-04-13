import logoDog from '../../../resources/images/logo_dog.png'
import stylesHeader from '../styles.module.scss'

export const HeaderNoActiveSigIn: React.FC = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="d-flex align-items-center">
        <img src={logoDog} width={70} alt="logo_dog" />
        <h3 className={`${stylesHeader.caption} ms-2 `}>DogFoot</h3>
      </div>
    </div>
  )
}
