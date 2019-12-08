import React from "react";
import withTranslate from "src/shared/components/hoc/withTranslate";
import { Styled } from "./editProfile.styled";
import Form from "./editProfile.form";
import Avatar from "./editProfile.avatar";
import { compose } from "recompose";
import { connect } from "react-redux";
import { actionTogglePopup as togglePopup } from "src/shared/popup/popup.actions";

export const EditProfileContext = React.createContext({});

interface IProps {
  translate: any;
  profile: any;
  togglePopup: (payload: any) => { type: string; payload: any };
}

const ProfilePopup = (props: IProps) => {
  const { title } = props.translate.editProfile;
  const [state, setState] = React.useState({
    file: null,
    preview: "",
    form: {
      name: props.profile.data.name,
      address: props.profile.data.address,
      phone: props.profile.data.phone,
      redInvoice_name: props.profile.data.redInvoice.name,
      redInvoice_address: props.profile.data.redInvoice.address,
      redInvoice_taxCode: props.profile.data.redInvoice.taxCode
    }
  });

  return (
    <EditProfileContext.Provider
      value={{
        state,
        setState
      }}
    >
      <Styled className="profile-popup">
        <div className="block-title">
          <div className="icon">
            <img src="images/icons/pencil.svg" alt="" />
          </div>
          <h2 className="title">{title}</h2>
          <div
            className="icon"
            onClick={() =>
              props.togglePopup({
                toggle: false
              })
            }
          >
            <img src="images/icons/close.svg" alt="" />
          </div>
        </div>
        <div className="break"></div>
        <div className="main">
          <Avatar />
          <Form />
        </div>
      </Styled>
    </EditProfileContext.Provider>
  );
};

export default compose<IProps, any>(
  withTranslate,
  connect(
    (state: any) => ({
      profile: state.profile
    }),
    {
      togglePopup
    }
  )
)(ProfilePopup);
