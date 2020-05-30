import {createMuiTheme} from '@material-ui/core'

export default createMuiTheme({
  palette: {
    primary: {
      light: '#ffe14e',
      main: '#ECB10B',
      dark: '#b68000',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ffffff',
      main: '#ffffff',
      dark: '#cccccc',
      contrastText: '#000000',
    },
  },
  typography: {
    body1: {
      fontWeight: 300,
    }
  },
  overrides: {
    MuiSelect: {
      select: {
        "&:focus": {
          backgroundColor: "$labelcolor"
        }
      }
    }
  }
})
