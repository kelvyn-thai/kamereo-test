import React from "react";
import styled from "styled-components";
import { StyledInput } from "./input.styled";

interface IProps {
  labelInput: string | "";
  name: string | "";
  value: string | "";
}

const Styled = styled(StyledInput)``;

const InputText = (props: IProps & any) => {
  const { labelInput, ...rest } = props;
  return (
    <Styled className="input-wrapper">
      {!!labelInput && (
        <label htmlFor="" className="label-input">
          {labelInput}
        </label>
      )}
      <input
        type="text"
        className="input input-text"
        maxLength="50"
        {...rest}
      />
    </Styled>
  );
};

export default InputText;
