import React, { useEffect } from "react";
import { CurrencyMainInfo, Loader } from "components";
import {
  fetchCurrency,
  fetchMarketCharts,
  selectCurrencyLoading,
  selectCurrencyError,
  useAppDispatch,
  useAppSelector,
} from "store";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography/Typography";

export const Cryptocurrency = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectCurrencyLoading);
  const isError = useAppSelector(selectCurrencyError);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchCurrency(id));
      dispatch(fetchMarketCharts({ id }));
    }
  }, [dispatch, id]);

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <Typography>Ошибка загрузки</Typography>;
  }
  return <CurrencyMainInfo />;
};
