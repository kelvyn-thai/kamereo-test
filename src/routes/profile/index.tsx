import React from "react";
import withProfile from "./profile.enhance";
import ProfileDetails from "./profile.details";
import ProfileDelivery from "./profile.delivery";

interface IProps {
  translate: any;
}

const Profile = (props: IProps) => {
  const { storeInfo } = props.translate.profile;
  return (
    <div className="profile">
      <h2 className="title">{storeInfo}</h2>
      <div className="break"></div>
      <div className="extra">
        <ProfileDetails />
        <ProfileDelivery />
      </div>
    </div>
  );
};

export default withProfile(Profile);
