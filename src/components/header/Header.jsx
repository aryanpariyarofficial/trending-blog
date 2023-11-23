import React from 'react'
import '../../pages/home/Home.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
     <header>
    <h1>Latest Trending Blog</h1>
  </header>

  <nav>
    <Link to="/">Home</Link>
    <Link to="/addblog">Add Blog +</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
  </nav>
    </>
  )
}

export default Header