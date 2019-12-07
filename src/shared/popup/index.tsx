import React from "react";
import styled from "styled-components";
import withPopup, { IProps } from "./popup.enhance";

const Styled = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  overflow: hidden;
  &.open-popup {
    display: block;
  }
`;

const Popup = (props: IProps) => {
  const { popup } = props;
  const { data, toggle } = popup;
  const renderPopupContent = () => {
    try {
      return import(data);
    } catch (error) {
      return <div className="error">Something went wrong</div>;
    }
  };
  return (
    <Styled className={`popup ${toggle ? "open-popup" : ""}`}>
      {toggle && renderPopupContent()}
    </Styled>
  );
};

export default withPopup(Popup);
