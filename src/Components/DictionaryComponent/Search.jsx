import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const SearchBar = styled.div`
  width: 800px;
  height: 40px;
  border: 1px solid #000;
`;
const Tag = styled.div`
  float: left;
`;

export function Search(props) {
  const value = useSelector(state => state.filterState);
  const htmlTag = [];

  return (
    <SearchBar>
      {props.value}
      {htmlTag}
      {value}
    </SearchBar>
  );
}
