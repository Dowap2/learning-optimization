import React from "react";
import { SlideHeader } from "./SlideHeader";
import { connect } from "react-redux";
import * as slideActions from "./store/modules/slideState";

export function SlideHeaderContainer(props) {
  return (
    <div>
      <SlideHeader onChange={props.slideState} />
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  slideState: state => dispatch(slideActions.ChangeSlideState(state))
});

SlideHeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SlideHeaderContainer);
