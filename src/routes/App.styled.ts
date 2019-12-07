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
`;
