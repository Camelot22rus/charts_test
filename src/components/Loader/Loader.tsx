import React from "react";
import { Grid, CircularProgress } from "@mui/material";

export const Loader = () => {
  return (
    <Grid
      sx={{ height: "100%" }}
      container
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress />
    </Grid>
  );
};
