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
          value={value.AD}
        />
        <FilterButton
          text={"AP"}
          onChange={props.onChangeAP}
          value={value.AP}
        />
        <FilterButton
          text={"HP"}
          onChange={props.onChangeHP}
          value={value.HP}
        />
        <FilterButton
          text={"MANA"}
          onChange={props.onChangeMANA}
          value={value.MANA}
        />
        <FilterButton
          text={"CSC"}
          onChange={props.onChangeCSC}
          value={value.CSC}
        />
      </FilterBox>
    </div>
  );
}
