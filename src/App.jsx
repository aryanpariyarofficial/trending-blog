import Home from './pages/home/Home'
import Header from './components/header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddBlog from './pages/addblog/AddBlog'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import SingleBlog from './pages/singleblog/SingleBlog'

function App() {


  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addblog' element={<AddBlog />} />
          <Route path='/blog/:id' element={<SingleBlog />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
