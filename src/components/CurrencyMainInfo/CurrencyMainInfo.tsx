import React from "react";
import { Chip, Grid, Typography } from "@mui/material";
import {
  CurrencyChart,
  CurrencyPrice,
  CurrencyTitle,
  MarketInfo,
} from "components";
import {
  selectCurrentCurrency,
  selectMarketChart,
  useAppSelector,
} from "store";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { columns } from "./columns";
import { BackArrow } from "./style";

export const CurrencyMainInfo = () => {
  const currency = useAppSelector(selectCurrentCurrency);
  const marketChart = useAppSelector(selectMarketChart);
  return (
    currency && (
      <Grid>
        <Grid container gap={1} wrap="nowrap" mb={1} alignItems="center">
          <BackArrow to="/cryptocurrencies">
            <ArrowBackIosNewIcon />
          </BackArrow>
          <CurrencyTitle
            imageSrc={currency.image.thumb}
            title={currency.name}
            symbol={currency.symbol}
          />
        </Grid>
        <Grid container gap={1} mb={2}>
          {currency.categories &&
            currency.categories.map((category: string) => (
              <Chip label={category} variant="outlined" />
            ))}
        </Grid>
        <CurrencyPrice
          value={currency.market_data.current_price.usd}
          priceChange={currency.market_data.price_change_percentage_24h}
        />
        <Grid mb={3}>
          {marketChart && (
            <CurrencyChart prices={marketChart} currencyName={currency.name} />
          )}
        </Grid>
        <Grid container columnSpacing={5}>
          <Grid item xl={8} mb={{ xs: 2, xl: 0 }}>
            <Typography variant="h4" mb={2}>
              Информация
            </Typography>
            <Typography
              variant="body1"
              dangerouslySetInnerHTML={{ __html: currency.description.en }}
            />
          </Grid>
          <Grid item xl={4}>
            <MarketInfo marketData={currency.market_data} columns={columns} />
          </Grid>
        </Grid>
      </Grid>
    )
  );
};
