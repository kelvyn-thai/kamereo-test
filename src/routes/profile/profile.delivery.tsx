import React from "react";
import styled from "styled-components";
import withTranslate from "src/shared/components/hoc/withTranslate";
import { compose } from "recompose";
import { connect } from "react-redux";
import { actionTogglePopup as togglePopup } from "src/shared/popup/popup.actions";
interface IProps {
  translate: any;
  profile: any;
  togglePopup: (payload: {
    toggle: boolean;
    data: any;
  }) => { type: string; payload: any };
}

const Styled = styled.div`
  &.profile-delivery {
    width: 65%;
    max-width: 70%;
    border: solid 2px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    padding: 20px;
    h4.title {
      color: #000;
      font-size: 16px;
      line-height: 20px;
    }
    .btn {
      max-width: 150px;
    }
  }
`;

const ProfileDelivery = (props: IProps) => {
  const { title, btnUpdate } = props.translate.profile.delivery;
  return (
    <Styled className="profile-delivery">
      <h4 className="title">{title}</h4>
      <button
        className="btn"
        onClick={() =>
          props.togglePopup({
            toggle: true,
            data: {
              comp: "src/profile/profile.popup.tsx"
            }
          })
        }
      >
        {btnUpdate}
      </button>
    </Styled>
  );
};

export default compose<IProps, any>(
  connect(
    (state: any) => ({
      profile: state.profile
    }),
    {}
  ),
  withTranslate
)(ProfileDelivery);
