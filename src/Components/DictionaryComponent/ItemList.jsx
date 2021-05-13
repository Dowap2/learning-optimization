import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const ItemBox = styled.div`
  display: ${props => props.display};
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

export function ItemList(props) {
  const filter = useSelector(state => state.filterState);
  const [seen, setSeen] = useState("block");
  useEffect(() => {
    for (const key in filter) {
      if (
        filter[key] === true &&
        props.tag.findIndex(element => element === key) >= 0
      ) {
        setSeen("block");
      } else if (
        filter[key] === true &&
        props.tag.findIndex(element => element === key) === -1
      ) {
        setSeen("none");
      }
    }
  }, [filter]);

  return (
    <ItemBox display={seen}>
      <ItemImg src={props.src} title={props.text}></ItemImg>
      <ItemPrice>{props.cost}</ItemPrice>
    </ItemBox>
  );
}
