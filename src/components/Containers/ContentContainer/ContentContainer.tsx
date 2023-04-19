import { Grid } from "@mui/material";
import { styled } from "@mui/system";

export const ContentContainer = styled(Grid)(({ theme }) => ({
  height: "100%",
  overflow: "auto",
  backgroundColor: theme.palette.background.lightGray,
  margin: theme.spacing(5),
  padding: theme.spacing(5),
  [theme.breakpoints.down("md")]: {
    margin: 0,
    padding: theme.spacing(1),
  },
}));
