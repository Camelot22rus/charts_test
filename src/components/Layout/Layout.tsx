import React from "react";
import { Outlet } from "react-router-dom";
import { ContentContainer, Navigator } from "components";
import { LayoutWrapper, Main } from "./style";

export const Layout = () => {
  return (
    <LayoutWrapper>
      <Navigator />
      <Main>
        <ContentContainer>
          <Outlet />
        </ContentContainer>
      </Main>
    </LayoutWrapper>
  );
};
