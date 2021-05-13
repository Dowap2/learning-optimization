import React from "react";
import styled from "styled-components";
import { ItemList } from "./ItemList";
const ItemBox = styled.div`
  width: 760px;
  height: 1000px;
  border: 1px solid #000;
  display: flex;
  padding: 20px;
`;

export function Item() {
  return (
    <ItemBox>
      <ItemList />
      <ItemList />
      <ItemList />
      <ItemList />
      <ItemList />
      <ItemList />
      <ItemList />
    </ItemBox>
  );
}
