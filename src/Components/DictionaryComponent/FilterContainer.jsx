import React from "react";
import { Filter } from "./Filter";
import { connect } from "react-redux";
import * as filterActions from "../../store/modules/dictionaryState";

export function FilterContainer(props) {
  return <Filter onChange={props.filter} />;
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  filter: state => dispatch(filterActions.ChangeFilterState(state))
});

FilterContainer = connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
