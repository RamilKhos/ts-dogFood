import { Routes, Route, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { SignForms } from './components/SignForms/SignForms'
import { ProfileForm } from './components/ProfileForm/ProfileForm'
import { useAppSelector } from './redux/main'
import { useEffect } from 'react'

function App() {
    const token = useAppSelector((store) => store.userInfo)
    const navigate = useNavigate()
  
    useEffect(() => {
      if (token.token === null) {
        navigate('login')
      }
    }, [token])

  return (
        <div className='appStyles'>
            <Header />
            <Routes>
                <Route path='/' element={<Main />}/> 
                <Route path='/login' element={<SignForms />}/> 
                <Route path='/signup' element={<SignForms />}/> 
                <Route path='/profile' element={<ProfileForm />}/> 
                <Route path='*' element={<Main />} />
            </Routes>
            <Footer />
            <ToastContainer />
        </div>
    )
}

export default App
