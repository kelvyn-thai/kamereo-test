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
  &.profile-details {
    width: 30%;
    max-width: 30%;
    padding: 30px 20px;
    border: solid 2px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    .cover-image {
      border-radius: 4px;
    }
    .extra {
      margin-top: 30px;
    }
    .extra h4.title {
      font-size: 16px;
      line-height: 20px;
      color: #000;
      text-transform: uppercase;
      font-family: MavenPro-Bold;
    }
    .extra .hook {
      display: flex;
      padding: 10px 0;
    }
    .extra .hook .title {
      color: #aaa;
      font-size: 16px;
      line-height: 20px;
      width: 50%;
    }
    .extra .hook .description {
      font-size: 16px;
      line-height: 20px;
      color: #000;
      max-width: 30%;
      text-align: left;
    }
    .btn {
      margin-top: 20px;
    }
    .extra .hook .ellipsis {
      overflow-x: scroll;
      text-overflow: unset;
    }
  }
`;

const ProfileDetails = (props: IProps) => {
  const {
    infoDetails,
    redInvoiceInfo,
    btnEditProfile
  } = props.translate.profile;
  const {
    name,
    address,
    phone,
    redInvoice,
    city,
    district
  } = props.profile.data;
  return (
    <Styled className="profile-details">
      <div className="cover-image">
        <img src={`images/logo.png`} alt="" />
      </div>
      <div className="extra store-info">
        <h4 className="title">{infoDetails.title}</h4>
        <div className="hook">
          <p className="title">{infoDetails.name}</p>
          <p className="description ellipsis">{name}</p>
        </div>
        <div className="hook">
          <p className="title">{infoDetails.address}</p>
          <p className="description ellipsis">{`${address} ${district} ${city}`}</p>
        </div>
        <div className="hook">
          <p className="title">{infoDetails.phone}</p>
          <p className="description ellipsis">{phone}</p>
        </div>
      </div>
      <div className="extra red-invoice-info">
        <h4 className="title">{redInvoiceInfo.title}</h4>
        <div className="hook">
          <p className="title">{redInvoiceInfo.companyName}</p>
          <p className="description ellipsis">{redInvoice.name}</p>
        </div>
        <div className="hook">
          <p className="title">{redInvoiceInfo.address}</p>
          <p className="description ellipsis">{`${redInvoice.address} ${redInvoice.district} ${redInvoice.city}`}</p>
        </div>
        <div className="hook">
          <p className="title">{redInvoiceInfo.mst}</p>
          <p className="description ellipsis">{redInvoice.taxCode}</p>
        </div>
      </div>
      <button
        className="btn btn-edit-profile"
        onClick={() =>
          props.togglePopup({
            toggle: true,
            data: {
              comp: "edit-profile"
            }
          })
        }
      >
        {btnEditProfile}
      </button>
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
)(ProfileDetails);
