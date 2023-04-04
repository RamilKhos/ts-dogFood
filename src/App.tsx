import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'

function App() {
  return (
    <BrowserRouter>
        <div className='appStyles'>
            <Header />

            <Routes>
                <Route path='/' Component={Main}/>
                {/* <Route path='/login' Component={SignForms}/> */}
                {/* <Route path='/signup' Component={SignForms}/> */}
                {/* <Route path='/profile' Component={ProfileForm}/> */}
                {/* <Route path='/product/:id' Component={ProductDetailPage}/> */}
                {/* <Route path='/cart' Component={Cart}/> */}
                {/* <Route path='/favourites' Component={Favourites}/> */}
                {/* <Route path='/add_product' Component={AddProduct}/> */}
            </Routes>
            
            <Footer />

            <ToastContainer />
        </div>
    </BrowserRouter>
  )
}

export default App
