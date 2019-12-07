import React from "react";
import withTranslate from "src/shared/components/hoc/withTranslate";
import { Styled } from "./header.styled";
import { languagesSupport } from "src/i18n";
import { DropdownLanguages, DropdownAvatar } from "../dropdown";

interface IProps {
  translate: any;
}

const Header = (props: IProps) => {
  const { brand } = props.translate.header;
  return (
    <Styled className="header">
      <div className="icon">
        <button className="btn-close">
          <img src={`images/icons/close.svg`} alt="" />
        </button>
      </div>
      <h2 className="brand">{brand}</h2>
      <div className="icon">
        <button className="message">
          <img src={`images/icons/message.svg`} alt="" />
        </button>
      </div>
      <div className="icon ">
        <button className="shopping-cart">
          <img src={`images/icons/shopping-cart.svg`} alt="" />
        </button>
      </div>
      <div className="icon">
        <DropdownLanguages data={languagesSupport()} />
      </div>
      <div className="icon">
        <DropdownAvatar />
      </div>
    </Styled>
  );
};

export default withTranslate(Header);
