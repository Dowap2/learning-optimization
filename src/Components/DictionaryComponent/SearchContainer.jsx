import React from "react";
import { Search } from "./Search";
import { connect } from "react-redux";
import * as filterActions from "../../store/modules/filterState";

export function SearchContainer(props) {
  return <Search />;
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({});

SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
