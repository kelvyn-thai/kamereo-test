import styled from "styled-components";

export const StyledFonts = styled.div`
  @font-face {
    font-family: MavenPro-Black;
    src: url(fonts/maven-pro/MavenPro-Black.ttf);
  }
  @font-face {
    font-family: MavenPro-Regular;
    src: url(fonts/maven-pro/MavenPro-Regular.ttf);
  }
  @font-face {
    font-family: MavenPro-Bold;
    src: url(fonts/maven-pro/MavenPro-Bold.ttf);
  }
`;

export const Styled = styled(StyledFonts)`
  &.open-popup {
    overflow: hidden;
    max-height: 100vh;
    height: 100vh;
  }
  * {
    font-family: MavenPro-Regular;
    color: #2f904f;
    box-sizing: border-box;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .btn {
    background: rgba(170, 170, 170, 0.3);
    text-align: center;
    height: 50px;
    width: 100%;
    font-size: 16px;
    line-height: 20px;
    color: #000;
    border-radius: 4px;
    line-height: 50px;
    font-family: MavenPro-Bold;
    &.btn-disabled {
      background: transparent;
      color: #aaa;
    }
    &.btn-enabled {
      background: #2f904f;
      color: #fff;
    }
  }
`;
