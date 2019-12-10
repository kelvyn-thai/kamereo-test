import styled from "styled-components";

export const HookStyled = styled.div`
  &.hook {
    .title {
      font-family: MavenPro-Bold;
      text-transform: capitalize;
      color: #000;
      font-size: 16px;
      line-height: 20px;
    }
    .item {
      display: flex;
      align-items: center;
      padding: 25px 0;
    }
    .item .icon {
      width: 32px;
      height: 32px;
    }
    .item .des {
      font-family: MavenPro-Bold;
      text-transform: capitalize;
      color: #aaa;
      font-size: 14px;
      line-height: 18px;
      padding-left: 20px;
      :hover {
        color: #2f904f;
      }
    }
  }
`;

export const Styled = styled.div`
  &.sidebar {
    position: fixed;
    top: 70px;
    left: 0;
    width: 300px;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background: #fff;
    border-right: solid 1px #aaa;
    transition: all 0.25s ease 0s;
    .child {
      padding: 30px 20px;
      border-bottom: solid 1px #aaa;
    }
    .first-child .hook {
      display: flex;
    }
    .first-child .hook .logo {
      width: 48px;
      height: 48px;
      > img {
        border-radius: 50%;
        border: solid 1px #2f904f;
      }
    }
    .first-child .hook .info {
      padding-left: 15px;
    }
    .first-child .hook .info .brand {
      font-family: MavenPro-Bold;
      font-size: 16px;
      line-height: 20px;
      text-transform: uppercase;
      color: #000;
    }
    .first-child .hook .info .addr {
      font-family: MavenPro-Bold;
      color: #aaa;
      font-size: 12px;
      line-height: 16px;
    }
    .first-child .change-store {
      display: block;
      font-family: MavenPro-Bold;
      color: #10a9e8;
      font-size: 12px;
      line-height: 16px;
      text-transform: uppercase;
      margin-top: 20px;
    }
    .second-child {
      display: flex;
      align-items: center;
    }
    .second-child .icon {
      width: 32px;
      height: 32px;
    }
    .second-child .title {
      text-transform: uppercase;
      font-size: 16px;
      line-height: 20px;
      padding-left: 30px;
      color: #f40000;
      font-family: MavenPro-Bold;
    }
    .third-child {
      padding-bottom: 60px;
    }
  }
`;
