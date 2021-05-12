import React from "react";
import styled from "styled-components";
import { FilterButton } from "./FilterButton";

const FilterBox = styled.div`
  width: 50px;
  height: 800px;
  background: #f5f5f5;
  border: 1px solid #000;
`;

export function Filter() {
  return (
    <div>
      <FilterBox>
        <FilterButton></FilterButton>
      </FilterBox>
    </div>
  );
}
