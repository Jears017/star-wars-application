import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'
import { useAuthState } from 'react-firebase-hooks/auth'

import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
  Typography,
  Tooltip,
} from '@mui/material'

import {
  Language as LanguageIcon,
  LightMode as LightModeIcon,
  Menu as MenuIcon,
  AccountCircle as AccountCircleIcon,
  Login as LoginIcon,
} from '@mui/icons-material/'

import { ROOT_PATH, ENGLISH, RUSSIAN, LOGIN_PAGE_PATH } from '@/constants'
import { setTheme } from '@/actions'
import auth, { logout } from '@/firebase'

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
    color: theme.palette.common.white,
  },
  logoSm: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    textDecoration: 'none',
    color: theme.palette.common.white,
  },
  icons: {
    alignItems: 'center',
    display: 'flex',
    color: theme.palette.common.white,
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
    color: theme.palette.common.white,
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontFamily: theme.typography.fontFamily,
  },
  loginLink: {
    display: 'flex',
    color: theme.palette.common.white,
  },
  navButton: {
    color: theme.palette.common.white,
  },
}))

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)
  const [user] = useAuthState(auth)
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

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
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
                    <Typography variant="body2" textAlign="center">
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
            <LightModeIcon className={classes.navButton} />
          </IconButton>
          <IconButton onClick={changeLanguageHandler}>
            <LanguageIcon className={classes.navButton} />
          </IconButton>
          {user
            ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu}>
                  <AccountCircleIcon className={classes.navButton} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography onClick={logout} textAlign="center">
                    Logout
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
              )
            : (
            <IconButton>
              <Link className={classes.loginLink} to={LOGIN_PAGE_PATH}>
                <LoginIcon className={classes.navButton} />
              </Link>
            </IconButton>
              )}
        </Box>
      </Toolbar>
    </AppBar>
  )
}
