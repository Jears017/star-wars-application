import * as React from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from '@mui/material'
import { makeStyles, createStyles } from '@mui/styles'
import LanguageIcon from '@mui/icons-material/Language'
import LightModeIcon from '@mui/icons-material/LightMode'
import { Link } from 'react-router-dom'

const pages = ['planets', 'characters', 'starships', 'films']

const useStyles = makeStyles(theme =>
  createStyles({
    logoMD: {
      mr: 2,
      [theme.breakpoints.only('md')]: {
        display: 'flex',
      },
    },
    navBar: { flexGrow: 1, display: 'flex' },
    navBarItem: { my: 2, color: 'white', display: 'block' },
    navLink: { textDecoration: 'none', color: 'white' },
    switcherContainer: { flexGrow: 0 },
  }),
)

export function Header () {
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const classes = useStyles()

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className={classes.logoMD}
          >
            STAR WARS
          </Typography>
          <Box className={classes.navBar}>
            {pages.map(page => (
              <Link key={page} className={classes.navLink}
                to={`/${page}`}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  className={classes.navBarItem}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

          <Box className={classes.switcherContainer}>
            <IconButton>
              <LightModeIcon />
            </IconButton>
            <IconButton>
              <LanguageIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
