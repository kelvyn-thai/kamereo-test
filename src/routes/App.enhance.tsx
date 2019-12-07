import React from "react";
import { IProps } from "./App";

export const enhanceProfile = (Comp: any) => (props: IProps) => {
  const { fetchProfile, profile } = props;
  React.useEffect(() => {
    if (!profile.isFetched) {
      fetchProfile();
    }
  }, []);
  return <Comp {...props} />;
};
