import React from "react";
import styled from "styled-components";
import { useMouseDown } from "./dropdown.utils";
import { compose } from "recompose";
import { connect } from "react-redux";
import { StyledDropdown } from "./dropdown.styled";

interface IProps {
  profile: any;
}

const Styled = styled(StyledDropdown)`
  .dropdown-item-selected {
    display: flex;
  }
  .avatar {
    height: 100%;
    width: 40px;
    min-width: 40px;
    > img {
      border-radius: 50%;
    }
  }
  .hook {
    padding-left: 20px;
    padding-top: 4px;
  }
  .hook .name {
    text-transform: capitalize;
    font-family: MavenPro-Bold;
    color: #000;
    font-size: 14px;
    line-height: 18px;
  }
  .hook .role {
    color: #aaa;
    font-size: 12px;
    line-height: 16px;
    text-transform: capitalize;
    font-family: MavenPro-Bold;
  }
`;

const DropdownAvatar = (props: IProps) => {
  const { profile } = props;
  const [state, setState] = React.useState({
    toggle: false
  });
  const ref: any = React.useRef(null);
  const handleClickOutside = (e: any) => {
    if (state.toggle && ref.current && !ref.current.contains(e.target)) {
      setState({
        ...state,
        toggle: false
      });
    }
  };
  const [] = useMouseDown({
    fn: handleClickOutside
  });
  return (
    <Styled className="dropdown-menu">
      <div className="dropdown-item dropdown-item-selected">
        <div className="avatar">
          <img src={profile.data.avatar_url} alt="" />
        </div>
        <div className="hook">
          <p className="name">{profile.data.full_name}</p>
          <p className="role">{profile.data.role}</p>
        </div>
      </div>
      {state.toggle && <div className="extra" ref={ref}></div>}
    </Styled>
  );
};

export default compose<IProps, any>(
  connect(
    (state: any) => ({
      profile: state.profile
    }),
    {}
  )
)(DropdownAvatar);
