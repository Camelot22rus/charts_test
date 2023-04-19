import React, { FC } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

interface ICurrencyChart {
  prices: [number, number][];
  currencyName: string;
}

export const CurrencyChart: FC<ICurrencyChart> = ({ prices, currencyName }) => {
  const options = {
    series: [
      {
        name: `${currencyName} price`,
        data: [...prices],
      },
    ],
  };
  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"stockChart"}
      options={options}
    />
  );
};
