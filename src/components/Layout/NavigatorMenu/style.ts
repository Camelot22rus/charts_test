import { List } from '@mui/material';
import { styled } from '@mui/system';

export const ListWrapper = styled(List)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    gap: theme.spacing(1),
  }
}));
