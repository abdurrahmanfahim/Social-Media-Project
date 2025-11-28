import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const NotLoggedIn = () => {
    const { userInfo } = useSelector((state) => state.registration)
  
  console.log(userInfo)
  return userInfo ? <Navigate to={'/'} /> : <Outlet />
}

export default NotLoggedIn