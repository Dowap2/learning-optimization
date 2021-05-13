import React from "react";
import styled from "styled-components";

const ItemBox = styled.div`
  width: 800px;
  height: 1000px;
  border: 1px solid #000;
`;

export function Item() {
  return <ItemBox>Item</ItemBox>;
}
