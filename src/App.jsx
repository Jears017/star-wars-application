import React from 'react'
import { Box } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import { makeStyles } from '@mui/styles'

import { Header } from '@/components/blocks/Header'
import Characters from '@/components/pages/Characters'
import Planets from '@/components/pages/Planets'
import Main from '@/components/pages/Main'
import PageNotFound from '@/components/pages/PageNotFound'
import Starships from '@/components/pages/Starships'
import Films from '@/components/pages/Films'
import Planet from '@/components/pages/Planet'
import Character from '@/components/pages/Character'

import {
  PLANETS_PAGE_PATH,
  CHARACTERS_PAGE_PATH,
  ROOT_PATH,
  STARSHIPS_PAGE_PATH,
  FILMS_PAGE_PATH,
} from '@/constants'

const useStyles = makeStyles(theme => ({
  applicationWrapper: { backgroundColor: theme.palette.grey[700] },
}))

export default function App () {
  const classes = useStyles()
  return (
    <Box className={classes.applicationWrapper}>
      <Header />
      <Routes>
        <Route path={ROOT_PATH} element={<Main />} />
        <Route exact path={PLANETS_PAGE_PATH}
        element={<Planets />}
        />
        <Route path={CHARACTERS_PAGE_PATH} element={<Characters />} />
        <Route path={STARSHIPS_PAGE_PATH} element={<Starships />} />
        <Route path={FILMS_PAGE_PATH} element={<Films />} />
        <Route path={`${PLANETS_PAGE_PATH}/:id`} element={<Planet />} />
        <Route path={`${CHARACTERS_PAGE_PATH}/:id`} element={<Character />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Box>
  )
}
