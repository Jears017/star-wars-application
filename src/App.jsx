import React from 'react'
import { Grid, Paper } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
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

import {
  PLANETS_PAGE_PATH,
  CHARACTERS_PAGE_PATH,
  ROOT_PATH,
  STARSHIPS_PAGE_PATH,
  FILMS_PAGE_PATH,
  LOGIN_PAGE_PATH,
  REGISTER_PAGE_PATH,
} from '@/constants'

import './App.css'

export default function App () {
  const { dark } = useSelector(state => state.theme)

  return (
    <ThemeProvider theme={ dark ? darkTheme : lightTheme }>
      <Paper>
        <Header />
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
          >
            <Routes>
              <Route path={ROOT_PATH} element={<Main />} />
              <Route path={PLANETS_PAGE_PATH} element={<Planets />} />
              <Route path={CHARACTERS_PAGE_PATH} element={<Characters />} />
              <Route path={STARSHIPS_PAGE_PATH} element={<Starships />} />
              <Route path={FILMS_PAGE_PATH} element={<Films />} />
              <Route path={`${PLANETS_PAGE_PATH}/:id`} element={<Planet />} />
              <Route
                path={`${CHARACTERS_PAGE_PATH}/:id`}
                element={<Character />}
              />
              <Route
                path={`${STARSHIPS_PAGE_PATH}/:id`}
                element={<Starship />}
              />
              <Route path={`${FILMS_PAGE_PATH}/:id`} element={<Film />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path={LOGIN_PAGE_PATH} element={<LoginPage/>}/>
              <Route path={REGISTER_PAGE_PATH} element={<RegisterPage/>}/>
            </Routes>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  )
}
