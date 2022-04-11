import React from 'react'
import { Grid, Paper } from '@mui/material'
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { useSelector } from 'react-redux'

import { Header } from '@/components/blocks/Header'
import Characters from '@/components/pages/Characters'
import Planets from '@/components/pages/Planets'
import Main from '@/components/pages/Main'
import PageNotFound from '@/components/pages/PageNotFound'
import Starships from '@/components/pages/Starships'
import Films from '@/components/pages/Films'
import Planet from '@/components/pages/Planet'
import Character from '@/components/pages/Character'
import Starship from '@/components/pages/Starship'
import Film from '@/components/pages/Film'
import { darkTheme, lightTheme } from '@/theme/theme'
import { LoginPage } from '@/components/pages/LoginPage'
import { RegisterPage } from '@/components/pages/RegisterPage'
import { PrivateRoute } from '@/components/blocks/PrivateRoute'
import { FirebaseError } from '@/components/pages/FirebaseError'
import { PageNotAuthorized } from '@/components/pages/PageNotAuthorized'

import {
  PLANETS_PAGE_PATH,
  CHARACTERS_PAGE_PATH,
  ROOT_PATH,
  STARSHIPS_PAGE_PATH,
  FILMS_PAGE_PATH,
  LOGIN_PAGE_PATH,
  REGISTER_PAGE_PATH,
  FATAL_ERROR_PAGE_PATH,
  NOT_AUTHORIZED_PATH,
} from '@/constants'

import { useInternalizationConnector } from './hooks/useInternalizationConnector'
import './App.css'

export default function App () {
  const { dark } = useSelector(state => state.theme)
  useInternalizationConnector()

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <Paper>
        <Header />
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
          >
            <Switch>
              <Route
                exact
                path={LOGIN_PAGE_PATH}
                component={LoginPage}
              />
              <PrivateRoute
                exact
                path={ROOT_PATH}
                component={Main}
              />
              <PrivateRoute
                exact
                path={PLANETS_PAGE_PATH}
                component={Planets}
              />
              <PrivateRoute
                exact
                path={CHARACTERS_PAGE_PATH}
                component={Characters}
              />
              <PrivateRoute
                exact
                path={STARSHIPS_PAGE_PATH}
                component={Starships}
              />
              <PrivateRoute
                exact
                path={FILMS_PAGE_PATH}
                component={Films}
              />
              <PrivateRoute
                exact
                path={`${PLANETS_PAGE_PATH}/:id`}
                component={Planet}
              />
              <PrivateRoute
                exact
                path={`${CHARACTERS_PAGE_PATH}/:id`}
                component={Character}
              />
              <PrivateRoute
                exact
                path={`${STARSHIPS_PAGE_PATH}/:id`}
                component={Starship}
              />
              <PrivateRoute
                exact
                path={`${FILMS_PAGE_PATH}/:id`}
                component={Film}
              />
              <Route
                exact
                path={FATAL_ERROR_PAGE_PATH}
                component={FirebaseError}
              />
              <Route
                exact
                path={REGISTER_PAGE_PATH}
                component={RegisterPage}
              />
              <Route
                exact
                path={NOT_AUTHORIZED_PATH}
                component={PageNotAuthorized}
              />
              <Route
                path="*"
                component={PageNotFound}
              />
            </Switch>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  )
}
