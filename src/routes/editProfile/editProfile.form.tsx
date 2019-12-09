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
import { ACTION_UPDATE_PROFILE } from "../profile/profile.constant";
import { actionToggleNotifications as toggleNotifications } from "src/shared/nofitications/notifications.actions";
import Toast from "./editProfile.toast";

interface IProps {
  togglePopup: (payload: any) => { type: string; payload: any };
  updateProfile: (payload: any) => { type: string; payload: any };
  toggleNotifications: (payload: any) => { type: string; payload: any };
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
  const { state, setState, initialState }: any = React.useContext(
    EditProfileContext
  );
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
        [e.target.name]: ["phone"].includes(e.target.name)
          ? e.target.validity.valid
            ? e.target.value
            : state.form[e.target.name]
          : e.target.value
      }
    });
  };
  const handleSubmitForm = async () => {
    try {
      setState({
        ...state,
        isFetching: true
      });
      await props.updateProfile({
        name: state.form.name,
        address: state.form.address,
        phone: state.form.phone,
        district: state.form.district,
        city: state.form.city,
        redInvoice: {
          name: state.form.redInvoice_name,
          address: state.form.redInvoice_address,
          taxCode: state.form.redInvoice_taxCode,
          city: state.form.redInvoice_city,
          district: state.form.redInvoice_district
        }
      });
      await setState({
        ...state,
        isFetching: false,
        isFetched: true
      });
      props.togglePopup({ toggle: false });
      props.toggleNotifications({ toggle: true, data: <Toast /> });
    } catch (error) {
      setState({
        ...state,
        isFetching: false,
        isFetched: false
      });
    }
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
            placeholder="Name"
          />
          <InputAddress
            labelInput={infoDetails.address}
            name="address"
            value={state.form.address}
            onChange={handleInputChange}
            placeholder="Address"
            onChangeDistrict={(district: string) =>
              setState({ ...state, form: { ...state.form, district } })
            }
            onChangeCity={(city: string) =>
              setState({ ...state, form: { ...state.form, city } })
            }
          />
          <InputPhone
            labelInput={infoDetails.phone}
            name="phone"
            value={state.form.phone}
            onChange={handleInputChange}
            placeholder="Phone"
          />
        </div>
        <div className="extra">
          <h4 className="title">{redInvoiceInfo.title}</h4>
          <InputText
            labelInput={redInvoiceInfo.companyName}
            name="redInvoice_name"
            value={state.form.redInvoice_name}
            onChange={handleInputChange}
            placeholder="Company name"
          />
          <InputAddress
            labelInput={redInvoiceInfo.address}
            name="redInvoice_address"
            value={state.form.redInvoice_address}
            onChange={handleInputChange}
            placeholder="Address"
            onChangeDistrict={(redInvoice_district: string) =>
              setState({
                ...state,
                form: { ...state.form, redInvoice_district }
              })
            }
            onChangeCity={(redInvoice_city: string) =>
              setState({ ...state, form: { ...state.form, redInvoice_city } })
            }
          />
          <InputText
            labelInput={redInvoiceInfo.mst}
            name="redInvoice_taxCode"
            value={state.form.redInvoice_taxCode}
            onChange={handleInputChange}
            placeholder="Tax code"
          />
        </div>
      </form>
      <div className="group-btn">
        <button className="btn btn-enabled" onClick={handleSubmitForm}>
          {`${btnSave}${state.isFetching ? "..." : ""}`}
        </button>
        <button
          className="btn btn-disabled"
          onClick={() =>
            setState({
              ...initialState
            })
          }
        >
          {btnCancel}
        </button>
      </div>
    </Styled>
  );
};

export default compose<IProps, any>(
  connect((state: any) => ({}), {
    toggleNotifications,
    togglePopup,
    updateProfile: (payload: any) => ({
      type: ACTION_UPDATE_PROFILE,
      payload
    })
  }),
  withTranslate
)(Form);
