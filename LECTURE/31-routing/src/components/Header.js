import React from 'react'
import { Link } from 'react-router-dom'
import ProductPage from '../pages/ProductPage'

export default function Header() {
  return (
    <header>
      <span>Router Tutorial</span>
      <ul>
        <li>
          <Link to='/'>home</Link>
        </li>
        <li>
          <Link to='/products' element={<ProductPage/>}>product</Link>
        </li>
      </ul>
    </header>
  )
}
