// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Ubuntu', 'Helvetica Neue', 'sans-serif'],
  },
  palette: {
    primary: {
      main: '#009999',
      light: '#5CCCCC',
      dark: '#1D7373',
    },
    secondary: {
      main: '#FF9640',
      dark: '#FF7400',
    },
    background: {
      default: '#fff',
      paper: '#5CCCCC',
    },
    error: {
      main: '#FF5300',
    },
    text: {
      primary: '#0D0C0E',
      secondary: '#fff',
    },
  },
  spacing: 8,
  shadows: [],
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 8,
        textTransform: 'none',
        fontSize: 16,
        height: 40,
        fontWeight: 500,
      },
      textPrimary: {
        paddingLeft: 20,
        paddingRight: 20,
      },
      outlinedPrimary: {
        borderColor: '#009999',
      },
    },
    MuiFilledInput: {
      underline: {
        '&:after': {
          borderBottomWidth: '2px',
        },
        '&:before': {
          borderColor: '#0D0C0E',
          borderBottomWidth: '2px',
        },
      },
      input: {
        backgroundColor: '#E3E3E3',
      },
    },
    MuiDialog: {
      paper: {
        borderRadius: 16,
      },
    },
    MuiDialogActions: {
      root: {
        marginBottom: 8,
      },
    },
    MuiDialogTitle: {
      root: {
        borderBottom: '1px solid #0D0C0E',
        marginBottom: 10,
        padding: '10px 15px',
        '& h2': {
          display: 'flex',
          alignItems: 'center',
          fontWeight: 700,
        },
        '& button': {
          padding: 8,
          marginRight: 20,
        },
      },
    },
  },
});

export default theme;
