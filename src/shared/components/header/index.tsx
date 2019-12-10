import React from "react";
import withTranslate from "src/shared/components/hoc/withTranslate";
import { Styled } from "./header.styled";
import { languagesSupport } from "src/i18n";
import { DropdownLanguages, DropdownAvatar } from "../dropdown";
import { LayoutContext } from "../layout";

interface IProps {
  translate: any;
}

const Header = (props: IProps) => {
  const { brand } = props.translate.header;
  const { state, setState }: any = React.useContext(LayoutContext);
  return (
    <Styled className="header">
      <div className="icon">
        <button
          className="btn-close"
          onClick={() => setState({ ...state, hasSidebar: !state.hasSidebar })}
        >
          <img
            src={`images/icons/${state.hasSidebar ? "close" : "sidebar"}.svg`}
            alt=""
          />
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
