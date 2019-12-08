import React from "react";
import styled from "styled-components";
import { compose } from "recompose";
import { connect } from "react-redux";
import withTranslate from "src/shared/components/hoc/withTranslate";
import { readFile, createImage, rotate, empty } from "src/shared/utils";
import { EditProfileContext } from ".";

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
  const { state, setState }: any = React.useContext(EditProfileContext);
  const {
    title,
    btnRemove,
    btnUpload
  } = props.translate.editProfile.storeImage;
  const { logoUrl } = props.profile.data;
  const uploadedPreview = !!state.preview;
  const handleChangeImage = (e: any) => {
    if (!empty(e.target.files)) {
      let file = e.target.files[0];
      readFile(file)
        .then(createImage)
        .then(rotate.bind(undefined, file.type))
        .then((blob: any) => {
          blob.name = file.name.replace(/\.jpg|\.jpeg/i, ".png");
          setState({
            ...state,
            file,
            preview: URL.createObjectURL(blob)
          });
        })
        .catch((e: any) => {
          console.log(e);
        });
    }
  };
  const handleRemoveImagePreview = () => {
    if (!!state.preview) {
      setState({
        ...state,
        file: null,
        preview: ""
      });
    }
  };
  return (
    <Styled className="avatar">
      <h4 className="title">{title}</h4>
      <div className="cover-image">
        {uploadedPreview ? (
          <img src={state.preview} alt="" />
        ) : (
          <img src={!!logoUrl ? logoUrl : "images/logo.png"} alt="" />
        )}
      </div>
      <div className="group-btn">
        <button
          onClick={() => (uploadedPreview ? handleRemoveImagePreview() : false)}
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
            onChange={handleChangeImage}
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
