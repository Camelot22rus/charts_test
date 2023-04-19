import React, { FC } from "react";
import { PriceChangeColor } from "./style";

interface IPriceChange {
  value: number;
}

export const PriceChange: FC<IPriceChange> = ({ value }) => {
  return (
    <PriceChangeColor isPositive={value > 0}>{`${
      value?.toFixed(2) || 0
    }%`}</PriceChangeColor>
  );
};
