import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import withLayout from "../../shared/components/layout";
import { Helmet } from "react-helmet";
import ErrorBoundary from "src/shared/components/errorBound";
import withTranslate from "src/shared/components/hoc/withTranslate";
import { Styled } from "./profile.styled";

interface IProps {
  translate: any;
}

const enhance = (WrappedComponent: any) => (props: IProps) => {
  const { helmet } = props.translate.profile;
  return (
    <ErrorBoundary>
      <Helmet title={helmet} />
      <Styled className="profile">
        <WrappedComponent {...props} />
      </Styled>
    </ErrorBoundary>
  );
};

export default compose<any, any>(
  connect(state => ({}), {}),
  withTranslate,
  enhance,
  withLayout
);
