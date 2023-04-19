import React, { FC } from "react";
import { Grid } from "@mui/material";
import { CurrencyIcon, CurrencyShort } from "./style";

interface ICurrencyTitle {
  imageSrc?: string;
  title: string;
  symbol?: string;
}

export const CurrencyTitle: FC<ICurrencyTitle> = ({
  imageSrc,
  title,
  symbol,
}) => {
  return (
    <Grid container gap={1} alignItems="center">
      {imageSrc && <CurrencyIcon src={imageSrc} />}
      <b>{title}</b>
      {symbol && <CurrencyShort>{symbol}</CurrencyShort>}
    </Grid>
  );
};
