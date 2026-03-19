import * as React from 'react'
import {
  AppBar,
  Box,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { navItems, type NavItem } from '../navigation/navItems'

const drawerWidth = 280

type OpenSectionState = Record<string, boolean>

function hasActiveChild(item: NavItem, pathname: string): boolean {
  if (item.to === pathname) {
    return true
  }

  return item.children?.some((child) => hasActiveChild(child, pathname)) ?? false
}

export default function AppLayout() {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const location = useLocation()

  const [openSections, setOpenSections] = React.useState<OpenSectionState>(() => {
    const initialState: OpenSectionState = {}

    navItems.forEach((item) => {
      if (item.children?.length) {
        initialState[item.label] = hasActiveChild(item, location.pathname)
      }
    })

    return initialState
  })

  React.useEffect(() => {
    setOpenSections((current) => {
      const nextState = { ...current }

      navItems.forEach((item) => {
        if (item.children?.length && hasActiveChild(item, location.pathname)) {
          nextState[item.label] = true
        }
      })

      return nextState
    })
  }, [location.pathname])

  const handleDrawerToggle = () => {
    setMobileOpen((open) => !open)
  }

  const handleSectionToggle = (label: string) => {
    setOpenSections((current) => ({
      ...current,
      [label]: !current[label],
    }))
  }

  const handleLeafClick = () => {
    setMobileOpen(false)
  }

  const renderNavItem = (item: NavItem, level = 0) => {
    const isExpandable = Boolean(item.children?.length)
    const isOpen = openSections[item.label] ?? false
    const isSelected = item.to === location.pathname
    const isParentSelected = !item.to && hasActiveChild(item, location.pathname)

    const commonSx = {
      mb: 0.5,
      mx: 1,
      borderRadius: 2,
      pl: level === 0 ? 2 : 5,
      pr: 2,
    }

    return (
      <React.Fragment key={`${level}-${item.label}`}>
        <ListItemButton
          component={item.to ? Link : 'button'}
          to={item.to}
          onClick={() => {
            if (isExpandable) {
              handleSectionToggle(item.label)
              return
            }

            handleLeafClick()
          }}
          selected={isSelected || isParentSelected}
          sx={commonSx}
        >
          <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
          <ListItemText primary={item.label} />
          {isExpandable ? (isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />) : null}
        </ListItemButton>

        {isExpandable ? (
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <List disablePadding>
              {item.children?.map((child) => renderNavItem(child, level + 1))}
            </List>
          </Collapse>
        ) : null}
      </React.Fragment>
    )
  }

  const drawer = (
    <Box>
      <Toolbar>
        <Typography variant="h6" noWrap>
          My Site
        </Typography>
      </Toolbar>
      <Divider />
      <List sx={{ px: 1, py: 1 }}>{navItems.map((item) => renderNavItem(item))}</List>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          borderBottom: 1,
          borderColor: 'divider',
          bgcolor: 'background.paper',
          color: 'text.primary',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Documentation
          </Typography>
        </Toolbar>
      </AppBar>

      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          open
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              borderRight: 1,
              borderColor: 'divider',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          p: 3,
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  )
}
