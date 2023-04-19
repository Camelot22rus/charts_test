import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { Loader, Table } from "components";
import { currenciesColumns } from "./columns";
import {
  useAppDispatch,
  useAppSelector,
  selectCurrencies,
  fetchAllCurrencies,
  selectCurrencyLoading,
  selectCurrencyError,
} from "store";

export const Cryptocurrencies = () => {
  const dispatch = useAppDispatch();
  const currencies = useAppSelector(selectCurrencies);
  const isLoading = useAppSelector(selectCurrencyLoading);
  const isError = useAppSelector(selectCurrencyError);

  useEffect(() => {
    dispatch(fetchAllCurrencies());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <Typography>Ошибка загрузки</Typography>;
  }
  return currencies && <Table columns={currenciesColumns} data={currencies} />;
};
