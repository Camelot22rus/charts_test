import React, { FC } from "react";
import { Grid } from "@mui/material";
import { PriceChange } from "components/PriceChange";
import { formatStringToCurrency } from "utils";
import { PriceWrapper } from "./style";

interface ICurrencyPrice {
  value: number;
  priceChange: number;
}

export const CurrencyPrice: FC<ICurrencyPrice> = ({ value, priceChange }) => {
  return (
    <Grid container gap={1} alignItems="center" mb={2}>
      <PriceWrapper variant="h3">{formatStringToCurrency(value)}</PriceWrapper>
      <PriceChange value={priceChange} />
    </Grid>
  );
};
