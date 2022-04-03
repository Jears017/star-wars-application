import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'

import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
  Typography,
} from '@mui/material'

import {
  Language as LanguageIcon,
  LightMode as LightModeIcon,
  Menu as MenuIcon,
} from '@mui/icons-material/'

import { ROOT_PATH, ENGLISH, RUSSIAN } from '@/constants'
import { setTheme } from '@/actions'

const pages = ['planets', 'characters', 'starships', 'films']
const useStyles = makeStyles(theme => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoLg: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
  logoSm: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
  icons: {
    alignItems: 'center',
    display: 'flex',
  },
  navMenu: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  menu: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
  menuItemResponsive: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
  navLink: {
    marginRight: theme.spacing(10),
    color: theme.palette.text.primary,
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontFamily: theme.typography.fontFamily,
  },
}))

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null)
  const classes = useStyles({ open })

  const dispatch = useDispatch()
  const { dark } = useSelector(state => state.theme)

  const { t, i18n } = useTranslation()

  const changeLanguageHandler = () => {
    i18n.changeLanguage(i18n.language === ENGLISH ? RUSSIAN : ENGLISH)
  }

  const changeThemeHandler = () => {
    dispatch(setTheme(!dark))
  }

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Box className={classes.logoContainer}>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              className={classes.menu}
            >
              {pages.map(page => (
                <Link
                  className={classes.menuItemResponsive}
                  to={`/${page}`}
                  key={page}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      {t(`header.${page}`)}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Link className={classes.logoLg} to={ROOT_PATH}>
            <Typography variant="h6">Star Wars</Typography>
          </Link>
          <Link className={classes.logoSm} to={ROOT_PATH}>
            <Typography variant="h6">SW</Typography>
          </Link>
        </Box>
        <Box className={classes.navMenu}>
          {pages.map(page => (
            <Link key={page}
              className={classes.navLink}
              to={`/${page}`}
            >
              {t(`header.${page}`)}
            </Link>
          ))}
        </Box>
        <Box className={classes.icons}>
          <IconButton onClick={changeThemeHandler}>
            <LightModeIcon />
          </IconButton>
          <IconButton onClick={changeLanguageHandler}>
            <LanguageIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
