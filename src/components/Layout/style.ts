import { styled } from '@mui/system';

export const LayoutWrapper = styled('section')(({theme}) => ({
  display: "grid",
  gridTemplateColumns: 'minmax(auto, 200px) auto',
  maxWidth: "100vw",
  height: '100vh',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    display: 'block',
    overflow: 'auto',
  }
}));

export const Main = styled('main')({
  width: '100%',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
})