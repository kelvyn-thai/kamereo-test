import React from "react";
import styled from "styled-components";
import Sidebar from "../sidebar";
import Header from "../header";

interface IProps {}

const Styled = styled.div`
  padding-left: 300px;
  padding-top: 70px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
`;

const Layout = (WrappedComponent: any) => (props: IProps) => {
  return (
    <Styled className="layout">
      <Header />
      <Sidebar />
      <WrappedComponent {...props} />
    </Styled>
  );
};

export default Layout;
