import React from "react";
import styled from "styled-components";
import { compose } from "recompose";
import { connect } from "react-redux";
import { actionTogglePopup as togglePopup } from "src/shared/popup/popup.actions";
import withTranslate from "src/shared/components/hoc/withTranslate";
import InputText from "src/shared/components/input/input.text";
import InputPhone from "src/shared/components/input/input.phone";
import InputAddress from "src/shared/components/input/input.address";
import { EditProfileContext } from ".";

interface IProps {
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
  const { state, setState }: any = React.useContext(EditProfileContext);
  const {
    infoDetails,
    redInvoiceInfo,
    btnSave,
    btnCancel
  } = props.translate.editProfile.form;
  const handleInputChange = (e: any) => {
    setState({
      ...state,
      form: {
        ...state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  return (
    <Styled className="form">
      <form onSubmit={e => e.preventDefault()}>
        <div className="extra">
          <h4 className="title">{infoDetails.title}</h4>
          <InputText
            labelInput={infoDetails.name}
            name="name"
            value={state.form.name}
            onChange={handleInputChange}
          />
          <InputAddress
            labelInput={infoDetails.address}
            name="address"
            value={state.form.address}
            onChange={handleInputChange}
          />
          <InputPhone
            labelInput={infoDetails.phone}
            name="phone"
            value={state.form.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="extra">
          <h4 className="title">{redInvoiceInfo.title}</h4>
          <InputText
            labelInput={redInvoiceInfo.companyName}
            name="redInvoice_name"
            value={state.form.redInvoice_name}
            onChange={handleInputChange}
          />
          <InputAddress
            labelInput={redInvoiceInfo.address}
            name="redInvoice_address"
            value={state.form.redInvoice_address}
            onChange={handleInputChange}
          />
          <InputText
            labelInput={redInvoiceInfo.mst}
            name="redInvoice_taxCode"
            value={state.form.redInvoice_taxCode}
            onChange={handleInputChange}
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
  connect((state: any) => ({}), {
    togglePopup
  }),
  withTranslate
)(Form);
