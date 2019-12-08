import styled from "styled-components";

export const StyledDropdown = styled.div`
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
