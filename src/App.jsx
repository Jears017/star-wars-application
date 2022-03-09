import React from 'react'
import { Box } from '@mui/material'

import { Header } from '@/components/blocks/Header'
import Planets from './components/pages/Planets'

export default function App () {
  return (
    <Box>
      <Header />
      <Planets/>
      <div>Контент</div>
    </Box>
  )
}
