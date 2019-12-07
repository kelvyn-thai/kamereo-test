import React from "react";
import withProfile from './profile.enhance';

interface IProps {}

const Profile = (props: IProps) => {
  return <div className="profile"></div>;
};

export default withProfile(Profile);
