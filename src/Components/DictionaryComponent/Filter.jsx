import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { FilterButton } from "./FilterButton";

const FilterBox = styled.div`
  width: 50px;
  height: 800px;
  background: #f5f5f5;
  border: 1px solid #000;
`;

export function Filter(props) {
  const value = useSelector(state => state.dictionaryState.filterState);
  return (
    <div>
      <FilterBox>
        <FilterButton text={"AD"} onChange={props.onChange} />
        <FilterButton text={"AP"} onChange={props.onChange} />
        <FilterButton text={"HP"} onChange={props.onChange} />
        <FilterButton text={"MANA"} onChange={props.onChange} />
        <FilterButton text={"CSC"} onChange={props.onChange} />
      </FilterBox>
    </div>
  );
}
