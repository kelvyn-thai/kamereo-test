import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import withTranslate from "src/shared/components/hoc/withTranslate";
import { connect } from "react-redux";
import { actionToggleNotifications as toggleNotifications } from "src/shared/nofitications/notifications.actions";

const Styled = styled.div`
  &.toast {
    position: fixed;
    color: #fff;
    z-index: 1000;
    background: #333;
    border-radius: 5px;
    transition: all 0.3s ease;
    top: 70px;
    right: -300px;
    &.show-toast {
      right: 40px;
      transition: all 0.3s ease;
    }
    .extra {
      .title {
        position: relative;
        color: #fff;
        background: #2f904f;
        font-size: 16px;
        line-height: 20px;
        padding: 15px;
        border-radius: 4px;
        font-family: MavenPro-Bold;
        padding-left: 50px;
        ::before {
          content: "";
          position: absolute;
          width: 16px;
          height: 16px;
          top: 50%;
          left: 15px;
          transform: translateY(-50%);
          background-image: url(images/icons/tick.svg);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
      }
    }
  }
`;

interface IProps {
  translate: any;
  notifications: any;
  toggleNotifications: (payload: any) => { type: string; payload: any };
}

const Toast = (props: IProps) => {
  const { translate, notifications, toggleNotifications } = props;
  const { success } = translate.editProfile.toast;
  React.useEffect(() => {
    setTimeout(() => {
      if (notifications.toggle) {
        toggleNotifications({
          toggle: false
        });
      }
    }, 3000);
  }, [notifications.toggle]);
  return (
    <Styled className={`toast ${notifications.toggle ? "show-toast" : ""}`}>
      <div className="extra">
        <p className="title">{success}</p>
      </div>
    </Styled>
  );
};

Toast.propTypes = {
  translate: PropTypes.object.isRequired,
  notifications: PropTypes.object.isRequired,
  toggleNotifications: PropTypes.func.isRequired
};

export default withTranslate(
  connect(
    (state: any) => ({
      notifications: state.notifications
    }),
    {
      toggleNotifications
    }
  )(Toast)
);
