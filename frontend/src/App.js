import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from './components'
import { Home, Login, PageNotFound, ProductDetail, Register } from './pages'
import Account from './pages/Account'
import { AddProduct, EmployeeLogin, EmployeeRegister } from './pages/admin'
import Dashboard from './pages/admin/Dashboard'
import OrderHistory from './pages/OrderHistory'
import Pay from './pages/Pay'
import Protected from './pages/Protected'
import AdminRoutes from './routes/AdminRoutes'
import AdminLayout from './routes/layout/AdminLayout'
import PublicRoutes from './routes/PublicRoutes'
import UserRoutes from './routes/UserRoutes'
import "./style.css"

const App = () => {
  return <>
    <BrowserRouter>
      <AdminRoutes />
      <PublicRoutes />
      <UserRoutes />
    </BrowserRouter>
  </>
}

export default App