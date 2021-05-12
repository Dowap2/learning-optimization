import React from "react";
import { ContentButtonComponent } from "./ContentButtonComponent";
import { connect } from "react-redux";
import * as slideActions from "../../store/modules/slideState";

export function ContentButtonContainer(props) {
  return (
    <div>
      <ContentButtonComponent
        prevFunc={props.prevFunc}
        nextFunc={props.nextFunc}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  prevFunc: state => dispatch(slideActions.ChangeSlideState(state)),
  nextFunc: state => dispatch(slideActions.ChangeSlideState(state))
});

ContentButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentButtonContainer);
