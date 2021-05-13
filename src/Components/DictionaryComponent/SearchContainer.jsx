import React from "react";
import { Search } from "./Search";
import { connect } from "react-redux";
import * as filterActions from "../../store/modules/filterState";

export function SearchContainer(props) {
  return <Search onChangeAD={props.ad} />;
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  ad: state => dispatch(filterActions.ChangeAD(state)),
  ap: state => dispatch(filterActions.ChangeAP(state)),
  hp: state => dispatch(filterActions.ChangeHP(state)),
  mana: state => dispatch(filterActions.ChangeMANA(state)),
  csc: state => dispatch(filterActions.ChangeCSC(state))
});

SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
