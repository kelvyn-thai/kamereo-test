import React from "react";
import styled from "styled-components";
import { StyledDropdown } from "./dropdown.styled";
import { useMouseDown } from "./dropdown.utils";
import { citiesFactories } from "src/shared/json";

interface IProps {}

const Styled = styled(StyledDropdown)``;

const DropdownCity = (props: IProps) => {
  const ref: any = React.useRef(null);
  const [state, setState] = React.useState({
    toggle: false,
    selected: {
      city: "City"
    }
  });
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
        {!!state.selected && state.selected.city}
      </div>
      {state.toggle && (
        <div className="extra" ref={ref}>
          {citiesFactories.map((item, index) => (
            <div
              className="dropdown-item"
              key={index}
              onClick={() =>
                setState({ ...state, toggle: !state.toggle, selected: item })
              }
            >
              {item.city}
            </div>
          ))}
        </div>
      )}
    </Styled>
  );
};

export default DropdownCity;
