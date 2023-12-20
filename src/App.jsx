import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { NavBar } from './components/NavBar/NavBar'
import './styles/styles.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
        <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>



        {/* <Route path='/not-found' element={<h1>Página no encontrada</h1>}/>
        <Route path='/*' element={'/not-found'}/> */}
        
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
