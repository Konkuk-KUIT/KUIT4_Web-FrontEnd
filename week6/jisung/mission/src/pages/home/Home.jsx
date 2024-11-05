import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Link to="/">
            <button type="button"> Go to home page</button>
        </Link>
        <Link to="/cart">
            <button type="button"> Go to cart page</button>
        </Link>
        <Link to="/store">
            <button type="button"> Go to store page</button>
        </Link>
        <Link to="/stores">
            <button type="button"> Go to stores page</button>
        </Link>
    </div>
  )
}

export default Home
