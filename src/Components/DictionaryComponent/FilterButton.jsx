import React from "react";
import styled from "styled-components";

const FilterBtn = styled.button`
  width: 30px;
  height: 30px;
  background: #666;
  border: 0;
`;

export function FilterButton() {
  return (
    <div>
      <FilterBtn></FilterBtn>
    </div>
  );
}
