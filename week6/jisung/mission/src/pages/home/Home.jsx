import React from 'react'
import { Link } from 'react-router-dom'
import { useParams, useLocation, useSearchParams } from "react-router-dom"; // path parameter 설정 가능

const Home = () => {
  return (
    <div>
        <Link to="/category">
            <button type="button"> Go to category page</button>
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
