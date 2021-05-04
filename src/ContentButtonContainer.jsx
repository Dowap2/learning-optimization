import React from "react";
import { ContentButtonComponent } from "./ContentButtonComponent";
import { connect } from "react-redux";
import * as slideActions from "./store/modules/slideState";
import { useSelector } from "react-redux";

export function ContentButtonContainer(props) {
  const index = useSelector(state => state.slideState.slideState);
  return (
    <div>
      <ContentButtonComponent
        prevFunc={props.prevFunc(index - 1)}
        nextFunc={props.nextFunc(index + 1)}
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
