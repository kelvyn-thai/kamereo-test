import React from "react";
import styled from "styled-components";
import { useMouseDown } from "./dropdown.utils";

interface IProps {
  data: any[];
}

export const Styled = styled.div`
  &.dropdown-menu {
    .dropdown-item-selected {
      padding-right: 50px;
      position: relative;
      min-width: 150px;
      cursor: pointer;
      ::after {
        position: absolute;
        content: "";
        right: 5px;
        top: 0;
        bottom: 0;
        width: 12px;
        background: url(images/icons/sort-down.svg) no-repeat;
        background-size: contain;
        background-position: center;
      }
    }
    .extra {
      position: absolute;
      overflow-x: hidden;
      overflow-y: scroll;
      background: #fff;
      height: 200px;
      top: 70px;
      right: 0;
      width: 250px;
      padding: 0 20px;
      box-shadow: 4px 4px 8px 4px #000;
    }
    .dropdown-item {
      color: #000;
      font-family: MavenPro-Bold;
      font-size: 14px;
      line-height: 18px;
      text-transform: uppercase;
      height: 40px;
      line-height: 40px;
      cursor: pointer;
      :hover {
        color: #2f904f;
      }
    }
  }
`;

const Dropdown = (props: IProps) => {
  const { data } = props;
  const notEmpty = data.length > 0;
  const [state, setState] = React.useState({
    selected: notEmpty ? data[0] : "",
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
  const []: any = useMouseDown({
    fn: handleClickOutside
  });
  return (
    <Styled className="dropdown-menu">
      <div
        className="dropdown-item dropdown-item-selected ellipsis"
        onClick={() =>
          setState({
            ...state,
            toggle: !state.toggle
          })
        }
      >
        {state.selected.nativeName}
      </div>
      {state.toggle && (
        <div className="extra" ref={ref}>
          {data.map(item => (
            <div
              className="dropdown-item"
              key={item.code}
              onClick={() =>
                setState({ ...state, toggle: !state.toggle, selected: item })
              }
            >
              {item.nativeName}
            </div>
          ))}
        </div>
      )}
    </Styled>
  );
};

export default Dropdown;
