import { ListItem } from '@mui/material';
import { styled } from '@mui/system';

export const NavigatorItemWrapper = styled(ListItem)(({ theme }) => ({
  backgroundColor: theme.palette.background.main,
}));