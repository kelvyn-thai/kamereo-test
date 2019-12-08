import React from "react";
import styled from "styled-components";
import { StyledInput } from "./input.styled";

interface IProps {
  labelInput: string;
  name: string;
  value: string;
}

const Styled = styled(StyledInput)``;

const InputPhone = (props: IProps) => {
  const { labelInput, ...rest } = props;
  return (
    <Styled className="input-wrapper">
      <label htmlFor="" className="label-input">
        {labelInput}
      </label>
      <input
        type="text"
        className="input input-phone"
        pattern="[0-9]*"
        {...rest}
      />
    </Styled>
  );
};

export default InputPhone;
