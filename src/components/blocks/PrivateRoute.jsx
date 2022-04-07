import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'

import auth from '@/firebase'
import { NOT_AUTHORIZED_PATH, NOT_FOUND_PATH } from '@/constants'

export const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  try {
    const [user] = useAuthState(auth)
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
    return <Redirect to={NOT_FOUND_PATH} />
  }
}
