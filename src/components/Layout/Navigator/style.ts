import { styled } from '@mui/system';

export const NavigatorWrapper = styled('aside')(({ theme }) => ({
  backgroundColor: theme.palette.background.main,
  height: '100vh',
  display: 'grid',
  gridTemplateRows: 'min-content auto min-content',
  [theme.breakpoints.down('md')]: {
    height: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.8em',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  }
}));