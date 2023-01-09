import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components";
import { Header } from "../../components";
import { Content, StyledMainTemplate } from "./style";

export const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </StyledMainTemplate>
  );
};
