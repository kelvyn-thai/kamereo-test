import React from "react";
import Profile from "./profile";
import Popup from "src/shared/popup";
import { Styled } from "./App.styled";
import { compose } from "recompose";
import { connect } from "react-redux";
import { enhanceProfile } from "./App.enhance";
import { ACTION_FETCH_PROFILE } from "./profile/profile.constant";
import { Switch, Route } from "react-router-dom";
export interface IProps {
  profile: any;
  fetchProfile: () => void;
}

const App = (props: IProps) => {
  return (
    <Styled className="app">
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
      profile: state.profile
    }),
    {
      fetchProfile: () => ({ type: ACTION_FETCH_PROFILE })
    }
  ),
  enhanceProfile
)(App);
