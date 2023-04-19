import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'store';

export interface IData {
    id: string,
    symbol: string,
    name: string,
    image: string,
    current_price: number,
    market_cap: number,
    market_cap_rank: number,
    fully_diluted_valuation: number,
    total_volume: number,
    high_24h: number,
    low_24h: number,
    price_change_24h: number,
    price_change_percentage_24h: number,
    market_cap_change_24h: number,
    market_cap_change_percentage_24h: number,
    circulating_supply: number,
    total_supply: number,
    max_supply: number,
    ath: number,
    ath_change_percentage: number,
    ath_date: string,
    atl: number,
    atl_change_percentage: number,
    atl_date: string,
    roi: number | null,
    last_updated: string,
    price_change_percentage_1h_in_currency: number,
    price_change_percentage_24h_in_currency: number,
    price_change_percentage_7d_in_currency: number,
}

interface ICurrenciesState {
  data: IData[] | null;
  marketChart: [number, number][] | null;
  current: any;
  isError: boolean;
  isLoading: boolean;
}

interface IFetchMarketChart {
  id: string;
  days?: number;
}

const initialState: ICurrenciesState = {
  data: null,
  marketChart: null,
  current: null,
  isError: false,
  isLoading: false,
};

export const fetchAllCurrencies = createAsyncThunk('currencies/fetchAllCurrencies', async () => {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100&page=1&price_change_percentage=1h,24h,7d`);
    const json = await response.json();
    return json;
});

export const fetchCurrency = createAsyncThunk('currencies/fetchCurrency', async (id: string) => {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}?localization=false`);
    const json = await response.json();
    return json;  
});

export const fetchMarketCharts = createAsyncThunk('currencies/fetchMarketCharts', async ({id, days}: IFetchMarketChart) => {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days || 'max'}`);
    const json = await response.json();
    return json;  
});

const currenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCurrencies.pending, (state) => {
          state.isLoading = true;
          state.isError = false;
      })
      .addCase(fetchAllCurrencies.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchAllCurrencies.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(fetchCurrency.pending, (state) => {
        state.current = null;
          state.isLoading = true;
          state.isError = false;
      })
      .addCase(fetchCurrency.fulfilled, (state, { payload }) => {
        state.current = payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchCurrency.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(fetchMarketCharts.pending, (state) => {
          state.isLoading = true;
          state.isError = false;
      })
      .addCase(fetchMarketCharts.fulfilled, (state, { payload }) => {
        state.marketChart = payload.prices;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchMarketCharts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const selectCurrencies = (state: RootState) => state.currencies.data;
export const selectCurrentCurrency = (state: RootState) => state.currencies.current;
export const selectMarketChart = (state: RootState) => state.currencies.marketChart;
export const selectCurrencyLoading = (state: RootState) => state.currencies.isLoading;
export const selectCurrencyError = (state: RootState) => state.currencies.isError;


export const currenciesReducer = currenciesSlice.reducer;
