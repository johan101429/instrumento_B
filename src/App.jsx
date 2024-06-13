import { Route, Routes } from 'react-router'
import './App.css'
import { Paint } from './components/Layouts/Paint/Paint'
import { Welcome } from './components/Layouts/Welcome/Welcome'


function App() {
  // se utiliza la funcion router para la creacdion de las routes
  return (
    <>
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/paint' element={<Paint />} />
    </Routes>
    

     
     
         
    </>
  )
}

export default App
