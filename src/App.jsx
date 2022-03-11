import React from 'react'
import { Box } from '@mui/material'
import { Routes, Route } from 'react-router-dom'

import { Header } from '@/components/blocks/Header'
import Characters from '@/components/pages/Characters'
import Planets from '@/components/pages/Planets'
import Main from '@/components/pages/Main'
import PageNotFound from '@/components/pages/PageNotFound'
import Starships from '@/components/pages/Starships'
import Films from '@/components/pages/Films'

import {
  PLANETS_PAGE_PATH,
  CHARACTERS_PAGE_PATH,
  ROOT_PATH,
  STARSHIPS_PAGE_PATH,
  FILMS_PAGE_PATH,
} from '@/constants'

export default function App () {
  return (
    <Box>
      <Header />
      <Routes>
        <Route path={ROOT_PATH} element={<Main />} />
        <Route path={PLANETS_PAGE_PATH} element={<Planets />} />
        <Route path={CHARACTERS_PAGE_PATH} element={<Characters />} />
        <Route path={STARSHIPS_PAGE_PATH} element={<Starships />} />
        <Route path={FILMS_PAGE_PATH} element={<Films />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Box>
  )
}
