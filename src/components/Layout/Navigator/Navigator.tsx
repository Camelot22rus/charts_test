import React from "react";
import { Grid, Divider } from "@mui/material";
import { LinkedLogo, NavigatorMenu } from "components";
import { NavigatorWrapper } from "./style";

export const Navigator = () => {
  return (
    <NavigatorWrapper>
      <Grid>
        <LinkedLogo to="/" />
        <Divider light />
      </Grid>
      <Grid px={1.5} overflow="auto">
        <NavigatorMenu />
      </Grid>
    </NavigatorWrapper>
  );
};
