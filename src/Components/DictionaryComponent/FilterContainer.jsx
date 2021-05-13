import React from "react";
import { Filter } from "./Filter";
import { connect } from "react-redux";
import * as filterActions from "../../store/modules/filterState";

export function FilterContainer(props) {
  return (
    <Filter
      onChangeAD={props.AD}
      onChangeAP={props.AP}
      onChangeHP={props.HP}
      onChangeMANA={props.MANA}
      onChangeCSC={props.CSC}
    />
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  AD: state => dispatch(filterActions.ChangeAD(state)),
  AP: state => dispatch(filterActions.ChangeAP(state)),
  HP: state => dispatch(filterActions.ChangeHP(state)),
  MANA: state => dispatch(filterActions.ChangeMANA(state)),
  CSC: state => dispatch(filterActions.ChangeCSC(state))
});

FilterContainer = connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
