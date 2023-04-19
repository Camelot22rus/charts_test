import { Typography } from '@mui/material';
import { styled } from '@mui/system';

export const PriceWrapper = styled(Typography)(({theme}) => ({
  fontWeight: 'bold',
  [theme.breakpoints.down('md')]: {
    fontSize: '2em',
  }
}))

export const CurrencyPriceTitle = styled('h3')({
  width: 20,
  height: 20,
});

export const CurrencyShort = styled('span')({
  textTransform: 'uppercase',
  opacity: 0.8,
});
    