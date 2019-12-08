import React from "react";
import styled from "styled-components";
import { compose } from "recompose";
import { connect } from "react-redux";
import withTranslate from "src/shared/components/hoc/withTranslate";

interface IProps {
  profile: any;
  translate: any;
  handleChangeInput: (e: any) => void;
  preview: string;
  handleRemoveImagePreview: () => void;
}

const Styled = styled.div`
  &.avatar {
    width: 30%;
    .cover-image {
      margin: 20px 0;
      width: 100%;
      height: 30%;
      > img {
        border-radius: 16px;
      }
    }
    .group-btn {
      display: flex;
      justify-content: space-between;
    }
    .group-btn .btn {
      width: 45%;
    }
    .group-btn .btn-upload-image {
      position: relative;
    }
    .group-btn .btn-upload-image > input {
      background: transparent;
      border: none;
      opacity: 0;
      max-width: 100%;
      cursor: pointer;
    }
  }
`;

const Avatar = (props: IProps) => {
  const {
    title,
    btnRemove,
    btnUpload
  } = props.translate.editProfile.storeImage;
  const { logoUrl } = props.profile.data;
  const uploadedPreview = !!props.preview;
  return (
    <Styled className="avatar">
      <h4 className="title">{title}</h4>
      <div className="cover-image">
        {uploadedPreview ? (
          <img src={props.preview} alt="" />
        ) : (
          <img src={!!logoUrl ? logoUrl : "images/logo.png"} alt="" />
        )}
      </div>
      <div className="group-btn">
        <button
          onClick={() =>
            uploadedPreview ? props.handleRemoveImagePreview() : false
          }
          className={`btn ${
            uploadedPreview ? "btn-enabled" : "btn-disabled"
          }  `}
        >
          {btnRemove}
        </button>
        <button className="btn btn-upload-image">
          {btnUpload}
          <input
            type="file"
            name=""
            id=""
            className="image-background"
            onChange={props.handleChangeInput}
          />
        </button>
      </div>
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
)(Avatar);
