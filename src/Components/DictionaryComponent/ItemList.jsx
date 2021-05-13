import React from "react";
import styled from "styled-components";

const ItemBox = styled.div`
  width: 40px;
  height: 50px;
  padding: 0;
  border: 1px solid #000;
  margin-left: 10px;
`;
const ItemImg = styled.img`
  margin: 0;
  padding: 0;
  width: 40px;
  height: 40px;
  border: 0;
  display: block;
`;
const ItemPrice = styled.div`
  width: 40px;
  height: 10px;
  font-size: 6px;
  border: 0;
  margin: 0;
  padding: 0;
`;

export function ItemList() {
  return (
    <ItemBox>
      <ItemImg
        src={"https://ddragon.leagueoflegends.com/cdn/11.8.1/img/item/3153.png"}
      ></ItemImg>
      <ItemPrice>3200</ItemPrice>
    </ItemBox>
  );
}
