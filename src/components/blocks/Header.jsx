import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import LanguageIcon from '@mui/icons-material/Language'
import LightModeIcon from '@mui/icons-material/LightMode'
import { useTranslation } from 'react-i18next'

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
} from '@mui/material'

import { ROOT_PATH, ENGLISH, RUSSIAN } from '@/constants'

const pages = ['planets', 'characters', 'starships', 'films']

const useStyles = makeStyles(theme => ({
  logoMD: {
    mr: 2,
    [theme.breakpoints.only('md')]: {
      display: 'flex',
    },
    textDecoration: 'none',
    color: theme.palette.common.white,
  },
  navBar: { flexGrow: 1, display: 'flex' },
  navBarItem: { my: 2, color: theme.palette.common.white, display: 'block' },
  navLink: { textDecoration: 'none', color: theme.palette.common.white },
  switcherContainer: { flexGrow: 0 },
}))

export function Header () {
  const classes = useStyles()
  const { t, i18n } = useTranslation()

  const changeLanguageHandler = () => {
    i18n.changeLanguage(i18n.language === ENGLISH ? RUSSIAN : ENGLISH)
  }
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link className={classes.logoMD} to={ROOT_PATH}>
            <Typography
              variant="h6"
              noWrap
              component="div"
            >
              STAR WARS
            </Typography>
          </Link>
          <Box className={classes.navBar}>
            {pages.map(page => (
              <Link key={page} className={classes.navLink}
                to={`/${page}/?page=1&search=`}
              >
                <Button className={classes.navBarItem}>{t(`header.${page}`)}</Button>
              </Link>
            ))}
          </Box>

          <Box className={classes.switcherContainer}>
            <IconButton>
              <LightModeIcon />
            </IconButton>
            <IconButton onClick={ changeLanguageHandler }>
              <LanguageIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
