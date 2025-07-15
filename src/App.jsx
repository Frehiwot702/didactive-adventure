import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Index from './Pages/Index'
import Practice from './Pages/practice'
import HerosectionBg from './Components/P5/HerosectionBg'
import GradeReport from './Components/Index/GradeReport'

function App() {
   const router = createBrowserRouter(createRoutesFromElements(
      <>
      <Route path='/' element={ <Index/> } /> 
    </>
   ))

  return (
     <RouterProvider router={router} />
  )
}

export default App
