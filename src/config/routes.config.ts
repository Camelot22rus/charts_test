import { Cryptocurrencies, Cryptocurrency, Home } from 'pages';

export const routes: IRouteList = [
  {
    element: Home,
    path: '/home',
  },
  {
    element: Cryptocurrencies,
    path: '/cryptocurrencies',
  },
  {
    element: Cryptocurrency,
    path: '/cryptocurrencies/:id',
  },
];
