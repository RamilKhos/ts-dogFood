import stylesForm from './style.module.scss'
import checkMark from '../../../../resources/images/check_mark.png'

export const SuccessfulRegistration: React.FC = () => {
  return (
    <div className={`${stylesForm.container}`}>
      <div className={`${stylesForm.card}`}>
        <div className={`${stylesForm.upper_side}`}>
          <img className={`${stylesForm.checkMark}`} src={checkMark} alt="check_mark" />
        </div>
        <div className={`${stylesForm.lower_side}`}>
          <p className={`${stylesForm.message}`}>РЕГИСТРАЦИЯ ПРОШЛА УСПЕШНО</p>
          <p className={`${stylesForm.p} fw-light`}>Через 3 секунды вы перейдете на страницу авторизации</p>
        </div>
      </div>
    </div>
  )
}
