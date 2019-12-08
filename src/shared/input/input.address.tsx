import React from "react";
import styled from "styled-components";
import InputText from "./input.text";

interface IProps {
  labelInput: string;
}

const Styled = styled.div``;

const InputAddress = (props: IProps) => {
  const { labelInput } = props;
  return (
    <Styled className="input-address">
      <InputText labelInput={labelInput} name="address" value=""/>
    </Styled>
  );
};

export default InputAddress;
