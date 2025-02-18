

import './App.css'
import Home from './components/pages/home/Home'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { AddFlashcard } from './components/pages/addFlashcard/AddFlashcard';
import Login from './components/pages/login/Login';
import AllFlashcard from './components/pages/allFlashcard/AllFlashcard';
import { UpdateFlashcard } from './components/pages/updateFlashcard/UpdateFlashcard';


function App() {


  return (

    <Router>
    <div className='toaster'><Toaster position="top-center"/></div>

    <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/all' element={<AllFlashcard/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/add' element={<AddFlashcard/>}></Route>
      <Route path='/update/:flashcardId' element={<UpdateFlashcard/>}></Route>
     
    </Routes>
    </Router>

  )
}

export default App
