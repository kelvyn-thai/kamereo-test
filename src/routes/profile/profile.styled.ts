import styled from "styled-components";

export const Styled = styled.div`
  &.profile-wrapper {
    position: relative;
    overflow-x: hidden;
    overflow-y: scroll;
    .profile {
      padding: 40px 20px;
    }

    .profile h2.title {
      font-size: 30px;
      line-height: 38px;
      text-transform: capitalize;
    }
    .profile .break {
      height: 2px;
      border-radius: 4px;
      background: #2f904f;
      margin: 20px 0;
      width: 4%;
    }

    .profile > .extra {
      display: flex;
      justify-content: space-between;
    }
  }
`;
