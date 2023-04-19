import { ReactElement } from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CurrencyBitcoinOutlinedIcon from '@mui/icons-material/CurrencyBitcoinOutlined';

export interface IMenuLinks {
  id: string;
  title: string;
  link?: string;
  icon: ReactElement;
  Component?: ReactElement;
}

export const menuLinks: IMenuLinks[] = [
  {
    id: 'home',
    icon: <HomeOutlinedIcon fontSize="small" />,
    title: 'Главная',
  },
  {
    id: 'cryptocurrencies',
    icon: <CurrencyBitcoinOutlinedIcon fontSize="small" />,
    title: 'Криптовалюта',
  },
];
