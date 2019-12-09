import React from "react";
import Profile from "./profile";
import Popup from "src/shared/popup";
import { Styled } from "./App.styled";
import { compose, branch, renderComponent } from "recompose";
import { connect } from "react-redux";
import { enhanceProfile } from "./App.enhance";
import { ACTION_FETCH_PROFILE } from "./profile/profile.constant";
import { Switch, Route } from "react-router-dom";
export interface IProps {
  profile: any;
  fetchProfile: () => void;
  isOpenPopup: boolean;
}

const App = (props: IProps) => {
  return (
    <Styled className={`app ${props.isOpenPopup ? "open-popup" : ""}`}>
      <Switch>
        <Route exact path="/">
          <Profile />
        </Route>
      </Switch>
      <Popup />
    </Styled>
  );
};

export default compose<IProps, any>(
  connect(
    (state: any) => ({
      profile: state.profile,
      isOpenPopup: state.popup.toggle
    }),
    {
      fetchProfile: () => ({ type: ACTION_FETCH_PROFILE })
    }
  ),
  enhanceProfile,
  branch(
    (props: any) => !props.profile.isFetched,
    renderComponent(() => (
      <div>
        <p>Please run 'npm run start:server' to fetch data!</p>
      </div>
    ))
  )
)(App);
