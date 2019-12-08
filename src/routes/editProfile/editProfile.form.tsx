import React from "react";
import styled from "styled-components";
import { compose } from "recompose";
import { connect } from "react-redux";
import { actionTogglePopup as togglePopup } from "src/shared/popup/popup.actions";
import withTranslate from "src/shared/components/hoc/withTranslate";
import InputText from "src/shared/input/input.text";
import InputPhone from "src/shared/input/input.phone";

interface IProps {
  profile: any;
  togglePopup: (payload: any) => { type: string; payload: any };
  translate: any;
}

const Styled = styled.div`
  &.form {
    width: 60%;
    .group-btn {
      margin-top: 20px;
    }
  }
`;

const Form = (props: IProps) => {
  const {
    infoDetails,
    redInvoiceInfo,
    btnSave,
    btnCancel
  } = props.translate.editProfile.form;
  const { redInvoice, name, address, phone } = props.profile.data;
  return (
    <Styled className="form">
      <form onSubmit={e => e.preventDefault()}>
        <div className="extra">
          <h4 className="title">{infoDetails.title}</h4>
          <InputText
            labelInput={infoDetails.name}
            name="store-name"
            value={name}
          />
          <InputText
            labelInput={infoDetails.address}
            name="store-address"
            value={address}
          />
          <InputPhone
            labelInput={infoDetails.phone}
            name="phone"
            value={phone}
          />
        </div>
        <div className="extra">
          <h4 className="title">{redInvoiceInfo.title}</h4>
          <InputText
            labelInput={redInvoiceInfo.companyName}
            name="company-name"
            value={redInvoice.name}
          />
          <InputText
            labelInput={redInvoiceInfo.address}
            name="company-address"
            value={redInvoice.address}
          />
          <InputText
            labelInput={redInvoiceInfo.mst}
            name="mst"
            value={redInvoice.taxCode}
          />
        </div>
      </form>
      <div className="group-btn">
        <button className="btn btn-enabled">{btnSave}</button>
        <button className="btn btn-disabled">{btnCancel}</button>
      </div>
    </Styled>
  );
};

export default compose<IProps, any>(
  connect(
    (state: any) => ({
      profile: state.profile
    }),
    {
      togglePopup
    }
  ),
  withTranslate
)(Form);
