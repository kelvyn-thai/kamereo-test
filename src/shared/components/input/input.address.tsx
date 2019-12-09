import React from "react";
import styled from "styled-components";
import InputText from "./input.text";
import DropdownCity from "../dropdown/dropdown.city";
import { DropdonwDistrict } from "../dropdown";

interface IProps {
  labelInput: string | "";
  name: string | "";
  value: string | "";
  onChange: (e: any) => void;
}

const Styled = styled.div`
  &.input-address {
    .hook {
      display: flex;
      justify-content: space-between;
    }
    .input-wrapper {
      width: 50%;
    }
    .hook .dropdown-menu {
      position: relative;
      min-width: 100px;
      width: 20%;
    }
    .hook .dropdown-menu .dropdown-item-selected {
      position: absolute;
      text-transform: capitalize;
      top: 50%;
      left: 0;
      right: 0;
      transform: translateY(-50%);
      height: 50px;
      line-height: 50px;
      border: solid 1px #aaa;
      border-radius: 4px;
      min-width: 100px;
      padding-left: 5px;
      font-family: MavenPro-Regular;
      color: #aaa;
      min-width: unset;
    }
  }
`;

const InputAddress = (props: IProps & any) => {
  const {
    labelInput,
    name,
    value,
    onChange,
    onChangeCity,
    onChangeDistrict
  } = props;
  return (
    <Styled className="input-address">
      <label className="label-input">{labelInput}</label>
      <div className="hook">
        <InputText
          onChange={onChange}
          labelInput={""}
          name={name}
          value={value}
        />
        <DropdonwDistrict onChangeDistrict={onChangeDistrict} />
        <DropdownCity onChangeCity={onChangeCity} />
      </div>
    </Styled>
  );
};

export default InputAddress;
