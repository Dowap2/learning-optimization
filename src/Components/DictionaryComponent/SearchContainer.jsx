import React from "react";
import { Search } from "./Search";
import { connect } from "react-redux";
import * as filterActions from "../../store/modules/dictionaryState";

export function SearchContainer(props) {
  return <Search onChange={props.filter} />;
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  filter: state => dispatch(filterActions.ChangeFilterState(state))
});

SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
