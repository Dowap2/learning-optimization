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
  const value = useSelector(state => state.filterState);
  return (
    <div>
      <FilterBox>
        <button onClick={e => console.log(value)}></button>
        <FilterButton
          text={"AD"}
          onChange={props.onChangeAD}
          value={value.ad}
        />
        <FilterButton
          text={"AP"}
          onChange={props.onChangeAP}
          value={value.ap}
        />
        <FilterButton
          text={"HP"}
          onChange={props.onChangeHP}
          value={value.hp}
        />
        <FilterButton
          text={"MANA"}
          onChange={props.onChangeMANA}
          value={value.mana}
        />
        <FilterButton
          text={"CSC"}
          onChange={props.onChangeCSC}
          value={value.csc}
        />
      </FilterBox>
    </div>
  );
}
