import React from "react";
import { FilterContainer } from "./FilterContainer";
import { SearchContainer } from "./SearchContainer";
import { Item } from "./Item";
import { View } from "./View";
import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
`;

export function Dictionary() {
  return (
    <FlexBox>
      <FilterContainer />
      <div>
        <SearchContainer />
        <Item />
      </div>
      <View />
    </FlexBox>
  );
}
