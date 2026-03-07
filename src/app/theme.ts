import { createTheme } from '@mui/material/styles'

export const appTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1565c0',
    },
    background: {
      default: '#f7f9fc',
    },
  },
  shape: {
    borderRadius: 12,
  },
})
