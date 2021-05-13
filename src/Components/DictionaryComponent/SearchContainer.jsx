import React from "react";
import { Search } from "./Search";
import { connect } from "react-redux";
import * as filterActions from "../../store/modules/filterState";

export function SearchContainer(props) {
  return <Search value={props.state} />;
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  ad: state => dispatch(filterActions.ChangeAD(state))
});

SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
