import React from "react";

export const enhanceProfile = (Comp: any) => (props: any) => {
  const { fetchProfile, profile } = props;
  React.useEffect(() => {
    if (!profile.isFetched) {
      fetchProfile();
    }
  }, []);
  return <Comp {...props} />;
};
