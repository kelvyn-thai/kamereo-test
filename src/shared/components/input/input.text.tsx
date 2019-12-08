import React from "react";
import styled from "styled-components";
import { StyledInput } from "./input.styled";

interface IProps {
  labelInput: string | "";
  name: string | "";
  value: string | "";
  onChange: (e: any) => void;
}

const Styled = styled(StyledInput)``;

const InputText = (props: IProps) => {
  const { labelInput, value, onChange, ...rest } = props;
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
        {...{ ...rest, value, onChange }}
      />
    </Styled>
  );
};

export default InputText;
