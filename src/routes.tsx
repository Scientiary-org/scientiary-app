import {createBrowserRouter} from 'react-router-dom'
import MainPage from './pages/MainPage'
import Home from './pages/HomePage'
import MyWorksPage from './pages/MyWorksPage'

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
        element: <MyWorksPage/>
    }
  ])