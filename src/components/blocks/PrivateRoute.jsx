import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'

import auth from '@/firebase'
import { NOT_AUTHORIZED_PATH, FATAL_ERROR_PAGE_PATH } from '@/constants'

import { Spinner } from './Preloader'

export const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  try {
    const [user, loading] = useAuthState(auth)

    if (loading) {
      return <Spinner/>
    }
    return (
      <Route
        {...rest}
        render={routeProps =>
          user
            ? (
            <RouteComponent {...routeProps} />
              )
            : (
            <Redirect to={NOT_AUTHORIZED_PATH} />
              )
        }
      />
    )
  } catch (e) {
    return <Redirect to={FATAL_ERROR_PAGE_PATH} />
  }
}
