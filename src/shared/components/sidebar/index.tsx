import React from "react";
import { Link, withRouter } from "react-router-dom";
import withTranslate from "src/shared/components/hoc/withTranslate";
import { compose } from "recompose";
import { Styled, HookStyled } from "./sidebar.styled";
interface IProps {
  translate: any;
}

const Hook = (props: any) => {
  const { title, list } = props;
  return (
    <HookStyled className="hook">
      <p className="title">{title}</p>
      {list.map((item: any, key: number | string) => (
        <Link className="item" to="" key={key}>
          <div className="icon">
            <img src={item.src} alt="" />
          </div>
          <p className="des">{item.des}</p>
        </Link>
      ))}
    </HookStyled>
  );
};

const Sidebar = (props: IProps) => {
  const {
    brand,
    addr,
    changeStore,
    favoriteItems,
    dashboard,
    marketPlace,
    generalSettings
  } = props.translate.sidebar;
  return (
    <Styled className="sidebar">
      <div className="child first-child">
        <div className="hook">
          <div className="logo">
            <img src={`images/logo.png`} alt="" />
          </div>
          <div className="info">
            <p className="brand">{brand}</p>
            <p className="addr">{addr}</p>
            <Link to="" className="change-store">
              {changeStore}
            </Link>
          </div>
        </div>
      </div>
      <Link className="child second-child" to="">
        <div className="icon">
          <img src={`images/icons/like.svg`} alt="" />
        </div>
        <p className="title">{favoriteItems}</p>
      </Link>
      <div className="child third-child">
        <Hook {...dashboard} />
        <Hook {...marketPlace} />
        <Hook {...generalSettings} />
      </div>
    </Styled>
  );
};

export default compose<any, any>(withRouter, withTranslate)(Sidebar);
