import React from "react";
import styled from "styled-components";

const SearchBar = styled.input`
  width: 800px;
  height: 40px;
  border: 1px solid #000;
`;

export function Search(props) {
  return <SearchBar placeholder="아이템 검색"></SearchBar>;
}
