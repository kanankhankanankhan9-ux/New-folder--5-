import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-56 border-r bg-white p-4 space-y-1">
        <Link to="/product" className="block px-4 py-2 rounded text-gray-700 hover:bg-amber-200">
          Products
        </Link>
        <Link to="/categories" className="block px-4 py-2 rounded text-gray-700 hover:bg-amber-200">
          Categories
        </Link>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout