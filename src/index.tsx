import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import App from './App'
import store from './redux/store'
import { FilterContextProvider } from './components/FilterContext/FilterContextProvider'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <FilterContextProvider>
            <App />
        </FilterContextProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)
