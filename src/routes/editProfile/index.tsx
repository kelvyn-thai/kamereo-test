import React from "react";
import withTranslate from "src/shared/components/hoc/withTranslate";
import { Styled } from "./editProfile.styled";
import Form from "./editProfile.form";
import Avatar from "./editProfile.avatar";
import { readFile, createImage, rotate, empty } from "src/shared/utils";
import { compose } from "recompose";
import { connect } from "react-redux";
import { actionTogglePopup as togglePopup } from "src/shared/popup/popup.actions";

interface IProps {
  translate: any;
  togglePopup: (payload: any) => { type: string; payload: any };
}

const ProfilePopup = (props: IProps) => {
  const { title, storeImage, form } = props.translate.editProfile;
  const [state, setState] = React.useState({
    file: null,
    preview: ""
  });

  const handleChangeInput = (e: any) => {
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
        <Avatar
          handleRemoveImagePreview={handleRemoveImagePreview}
          handleChangeInput={handleChangeInput}
          preview={state.preview}
        />
        <Form />
      </div>
    </Styled>
  );
};

export default compose<IProps, any>(
  withTranslate,
  connect(state => ({}), {
    togglePopup
  })
)(ProfilePopup);
