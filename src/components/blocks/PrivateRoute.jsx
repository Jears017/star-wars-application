import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'

import auth from '@/firebase'
import { LOGIN_PAGE_PATH, NOT_FOUND_PATH } from '@/constants'

export const PrivateRoute = () => {
  try {
    const [user] = useAuthState(auth)
    return user ? <Outlet/> : <Navigate to={LOGIN_PAGE_PATH}/>
  } catch (e) {
    return <Navigate to={NOT_FOUND_PATH}/>
  }
}
