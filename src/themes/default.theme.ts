import { createTheme } from '@mui/material';

declare module '@mui/material' {
  interface TypeBackground {
    main: string;
    lightGray: string;
  }

  interface TypeText {
    lightGray: string;
  }

  interface Palette {
    positiveGreen: string;
    negativeRed: string;
  }

  interface PaletteOptions {
    positiveGreen?: string;
    negativeRed?: string;
  }
}

let theme = createTheme({
  components: {
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: 'separate',
          borderSpacing: '0 0.5em',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          gap: '1.5em',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          '& td:first-of-type, & th:first-of-type': {
            borderTopLeftRadius: '10px',
            borderBottomLeftRadius: '10px',
          },
          '& td:last-of-type, & th:last-of-type': {
            borderTopRightRadius: '10px',
            borderBottomRightRadius: '10px',
          },
          '&:hover': {
            cursor: 'pointer',
          },
        },
        head: {
          backgroundColor: '#E8E9ED',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontSize: '1em',
          color: '#5D6A7E',
          whiteSpace: 'nowrap',
        },
        sizeMedium: {
          padding: '1.5em',
          whiteSpace: 'nowrap',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          borderRadius: 8,
          padding: '0.875em 1em',
          gap: '0.875em',
          color: 'white',
          margin: '0.875em 0',
          '&.Mui-selected': {
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
            },
          },
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 'unset',
          width: 'auto',
          color: 'white',
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: '0.875em',
        },
      },
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: ['Rubik', 'sans-serif'].join(','),
    h1: {
      fontSize: '2.625em',
    },
    h2: {
      fontSize: '1.5em',
    },
    subtitle1: {
      fontSize: '1.125em',
    },
    button: {
      fontSize: '1.125em',
    },
  },
  palette: {
    primary: {
      main: '#235EE7',
    },
    text: {
      primary: '#1C2026',
      secondary: '#5D6A7E',
      lightGray: '#929EAF',
    },
    background: {
      main: '#141B29',
      lightGray: '#F6F7F9',
    },
    divider: '#E8E9ED',
    positiveGreen: '#4eaf0a',
    negativeRed: '#e15241',
  },
});

theme = createTheme(theme, {
  components: {
    
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          [theme.breakpoints.down('md')]: {
            display: 'none',
          }
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        sizeMedium: {
          [theme.breakpoints.down('md')]: {
            padding: '0.3em 0.4em',
            fontSize: '0.7em',
          }
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          [theme.breakpoints.down('md')]: {
            padding: '0.4em',
          }
        },
      },
    },
  }
});

export default theme;