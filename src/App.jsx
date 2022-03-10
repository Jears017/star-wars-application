import React from 'react'
import { Box } from '@mui/material'
import { Routes, Route } from 'react-router-dom'

import { Header } from '@/components/blocks/Header'
import Characters from '@/components/pages/Characters'
import Planets from '@/components/pages/Planets'
import { PLANETS_PAGE_PATH, CHARACTERS_PAGE_PATH } from '@/constants'

export default function App () {
  return (
    <Box>
      <Header />
      <Routes>
        <Route path={PLANETS_PAGE_PATH} element={<Planets />} />
        <Route path={CHARACTERS_PAGE_PATH} element={<Characters />} />
      </Routes>
      <div>Контент</div>
    </Box>
  )
}
