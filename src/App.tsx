import { Routes, Route, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { SignForms } from './components/SignForms/SignForms'
import { ProfileForm } from './components/ProfileForm/ProfileForm'
import { useAppSelector } from './redux/main'
import { useEffect } from 'react'
import { Favourites } from './components/Favourites/Favourites'
import { ProductDetailPage } from './components/ProductDetailPage/ProductDetailPage'
import 'react-toastify/dist/ReactToastify.css';
import { Cart } from './components/Cart/Cart'
import { AddProduct } from './components/AddProduct/AddProduct'

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
                <Route path='/product/:id' element={<ProductDetailPage />}/> 
                <Route path='/favourites' element={<Favourites />}/> 
                <Route path='/cart' element={<Cart />}/> 
                <Route path='/add_product' element={<AddProduct />}/> 
                <Route path='*' element={<Main />} />
            </Routes>
            <Footer />
            <ToastContainer />
        </div>
    )
}

export default App
