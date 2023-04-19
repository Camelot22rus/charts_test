import React, { FC } from "react";
import { Typography, Grid } from "@mui/material";
import { formatStringToCurrency } from "utils";

interface IColumn {
  accessor: string;
  text: string;
}

interface IInfoLinks {
  columns: IColumn[];
  marketData: Record<string, Record<string, number> & string>;
}

export const MarketInfo: FC<IInfoLinks> = ({ columns, marketData }) => {
  return (
    <Grid>
      <Typography variant="h4" mb={2}>
        Рынок
      </Typography>
      {columns &&
        columns.map((column) => {
          return (
            marketData[column.accessor] && (
              <Grid
                container
                justifyContent="space-between"
                sx={{ borderBottom: "1px solid black" }}
                py={2}
                gap={1}
              >
                <Typography>{column.text}</Typography>
                <Typography>
                  <>
                    {marketData[column?.accessor]?.usd
                      ? formatStringToCurrency(
                          marketData[column?.accessor]?.usd
                        )
                      : marketData[column?.accessor]}
                  </>
                </Typography>
              </Grid>
            )
          );
        })}
    </Grid>
  );
};
