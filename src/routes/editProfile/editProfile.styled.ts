import styled from "styled-components";
import { xl, breakpoints } from "src/shared/utils/styled";

export const Styled = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  width: 60%;
  height: 80%;
  border-radius: 5px;
  overflow-x: hidden;
  overflow-y: auto;
  min-width: ${breakpoints.xl};
  .block-title {
    display: flex;
    align-items: center;
    padding: 10px 20px;
  }
  .block-title .icon {
    width: 32px;
    height: 32px;
    cursor: pointer;
    :last-child {
      width: 16px;
      height: 16px;
    }
  }
  .block-title h2.title {
    text-transform: uppercase;
    color: #000;
    font-family: MavenPro-Bold;
    font-size: 16px;
    line-height: 20px;
    padding-left: 20px;
    margin-right: auto;
  }
  .break {
    margin: 20px 0;
    height: 2px;
    background: rgba(170, 170, 170, 0.2);
  }
  .main {
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }
  h4.title {
    color: #000;
    font-family: MavenPro-Bold;
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  @media screen and (max-width: ${breakpoints.ex}) {
    min-width: unset;
    width: 100%;
  }
`;
