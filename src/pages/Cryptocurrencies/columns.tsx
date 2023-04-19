import { CurrencyTitle, PriceChange } from "components";
import { Column } from "react-table";
import { IData } from "store";
import { formatStringToCurrency } from "utils";

export const currenciesColumns: (Column<IData> & { mobileHidden?: boolean })[] =
  [
    {
      Header: "Монета",
      accessor: "name",
      Cell: ({ value, row }) => {
        return (
          <CurrencyTitle
            imageSrc={row.original.image}
            title={value}
            symbol={row.original.symbol}
          />
        );
      },
    },
    {
      Header: "Цена",
      accessor: "current_price",
      Cell: ({ value }) => <>{formatStringToCurrency(value)}</>,
    },
    {
      Header: "1ч",
      accessor: "price_change_percentage_1h_in_currency",
      Cell: ({ value }) => <PriceChange value={value} />,
    },
    {
      Header: "24ч",
      accessor: "price_change_percentage_24h_in_currency",
      Cell: ({ value }) => <PriceChange value={value} />,
    },
    {
      Header: "7д",
      accessor: "price_change_percentage_7d_in_currency",
      Cell: ({ value }) => <PriceChange value={value} />,
      mobileHidden: true,
    },
    {
      Header: "Объем торгов за 24 часа",
      accessor: "total_volume",
      Cell: ({ value }) => <>{formatStringToCurrency(value)}</>,
      mobileHidden: true,
    },
    {
      Header: "Рыночная кап-ция",
      accessor: "market_cap",
      Cell: ({ value }) => <>{formatStringToCurrency(value)}</>,
      mobileHidden: true,
    },
  ];
