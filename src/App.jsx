import React from 'react'
import { Box } from '@mui/material'

import { Header } from '@/components/blocks/Header'
import Characters from './components/pages/Characters'

export default function App () {
  return (
    <Box>
      <Header />
      <Characters/>
      <div>Контент</div>
    </Box>
  )
}
