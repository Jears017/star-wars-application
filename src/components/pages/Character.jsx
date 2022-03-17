import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import { charactersDetailsRequest } from '@/actions'
import { CHARACTERS_IMAGE_URL } from '@/constants'

const useStyles = makeStyles(theme => ({
  characterContainer: { display: 'flex', justifyContent: 'center' },
  characterContent: { display: 'flex' },
  characterImageContainer: { marginRight: 25 },
  characterImage: { borderRadius: '5%', width: 400, height: 400 },
}))

export default function Character () {
  const classes = useStyles()

  const { id } = useParams()
  const { data } = useSelector(state => state.charactersDetails)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(charactersDetailsRequest(id))
  }, [])

  return (
    <Box className={classes.characterContainer}>
      <Box>
        <Box className={classes.characterContent}>
          <Box className={classes.characterImageContainer}>
            <img
              src={`${CHARACTERS_IMAGE_URL}${id}.jpg`}
              alt={data.name}
              className={classes.characterImage}
            />
          </Box>
          <Box>
            <Typography variant="h2">{data.name || 'uknown'}</Typography>
            <Typography variant="h6">Birth Year: {data.birth_year || 'uknown'}</Typography>
            <Typography variant="h6">
              Species: {data.species || 'uknown'}
            </Typography>
            <Typography variant="h6">
              Height: {data.height || 'uknown'}cm
            </Typography>
            <Typography variant="h6">Mass: {data.mass || 'uknown'}kg</Typography>
            <Typography variant="h6">Gender: {data.gender || 'uknown'}</Typography>
            <Typography variant="h6">Hair Color: {data.hair_color || 'uknown'}</Typography>
            <Typography variant="h6">
              Skin Color: {data.skin_color || 'uknown'}
            </Typography>
            <Typography variant="h6">Homeworld: {data.homeworld || 'uknown'}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
