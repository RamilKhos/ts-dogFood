import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { SignForms } from './components/SignForms/SignForms'

function App() {

  return (
        <div className='appStyles'>
            <Header />
            <Routes>
                <Route path='/' element={<Main />}/> 
                <Route path='/login' element={<SignForms />}/> 
                <Route path='/signup' element={<SignForms />}/> 
                <Route path='*' element={<Main />} />
            </Routes>
            <Footer />
            <ToastContainer />
        </div>
    )
}

export default App
