import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AddProduct, EmployeeLogin } from '../pages/admin'
import AdminProtected from '../pages/admin/AdminProtected'
import Dashboard from '../pages/admin/Dashboard'
import ProductDetails from '../pages/admin/ProductDetails'
import UserInfo from '../pages/admin/UserInfo'
import AdminLayout from './layout/AdminLayout'

export default function AdminRoutes() {
  return <Routes>
    <Route path='/admin' element={<AdminLayout />}>
      <Route index element={<EmployeeLogin />} ></Route>
      <Route path='dashboard' element={< AdminProtected element={<Dashboard />} />} ></Route>
      <Route path='ProductDetails' element={< AdminProtected element={<ProductDetails />} />} ></Route>
      <Route path='add-product' element={<AdminProtected element={<AddProduct/>} />} ></Route>
      <Route path='UserInfo' element={< AdminProtected element={<UserInfo />} />} ></Route>
    </Route>
  </Routes> 
}
