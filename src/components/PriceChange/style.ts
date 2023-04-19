import { styled } from '@mui/system';

interface IPriceChangeColor {
  isPositive: boolean;
}
export const PriceChangeColor = styled('div')<IPriceChangeColor>(({ theme, isPositive }) => ({
  color: isPositive ? theme.palette.positiveGreen : theme.palette.negativeRed
}));