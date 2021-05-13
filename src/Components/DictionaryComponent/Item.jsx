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
      <ItemList
        text={"몰락한 왕의 검"}
        src={"https://ddragon.leagueoflegends.com/cdn/11.8.1/img/item/3153.png"}
        cost={3200}
        tag={["AD"]}
      />
      {/* <ItemList />
      <ItemList />
      <ItemList />
      <ItemList />
      <ItemList />
      <ItemList /> */}
    </ItemBox>
  );
}
