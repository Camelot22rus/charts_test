import { FC } from "react";
import { Logo } from "components";
import { LogoLink } from "./style";

interface ILinkedLogo {
  to: string;
}

export const LinkedLogo: FC<ILinkedLogo> = ({ to }) => {
  return (
    <LogoLink to={to}>
      <Logo />
    </LogoLink>
  );
};
