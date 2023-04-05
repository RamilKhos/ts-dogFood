import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'

function App() {

  return (
        <div className='appStyles'>
            <Header />
            <Routes>
                <Route path='/' element={<Main />}/> 
                <Route path='*' element={<Main />} />
            </Routes>
            <Footer />
            <ToastContainer />
        </div>
    )
}

export default App
