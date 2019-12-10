import React from "react";
import styled from "styled-components";
import Sidebar from "../sidebar";
import Header from "../header";
import { useReponsive } from "src/shared/hooks";
import { ex } from "src/shared/utils/styled";

export const LayoutContext = React.createContext({});

interface IProps {}

const Styled = styled.div`
  padding-left: 300px;
  padding-top: 70px;
  overflow: hidden;
  &.no-sidebar {
    padding-left: 0;
    .sidebar {
      width: 0;
      transition: all 0.3s ease-out;
    }
  }
`;

const enhance = (WrappedComponent: any) => (props: IProps) => {
  const [reponsive] = useReponsive();
  const isReponsive = reponsive < ex;
  const [state, setState] = React.useState({
    hasSidebar: true,
    hasHeader: true
  });
  return (
    <LayoutContext.Provider
      value={{
        state,
        setState
      }}
    >
      <Styled className={`layout ${!state.hasSidebar ? "no-sidebar" : ""}`}>
        <Header />
        {!isReponsive && <Sidebar />}
        <WrappedComponent {...props} />
      </Styled>
    </LayoutContext.Provider>
  );
};

export default enhance;
