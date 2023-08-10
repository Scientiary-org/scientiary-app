import {createBrowserRouter} from 'react-router-dom'
import MainPage from './pages/MainPage'
import Home from './pages/HomePage'
import MyLib from './pages/MyLib'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>
    },
    {
        path: '/home',
        element: <Home/>
    },
    {
        path: '/mylib',
        element: <MyLib/>
    }
  ])