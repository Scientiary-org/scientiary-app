import {createBrowserRouter} from 'react-router-dom'
import MainPage from './pages/MainPage'
import Home from './pages/Home'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>
    },
    {
        path: '/home',
        element: <Home/>
    }
  ])