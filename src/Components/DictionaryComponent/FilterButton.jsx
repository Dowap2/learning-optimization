import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const FilterBtn = styled.button`
  margin: 10px 5px 5px 10px;
  width: 30px;
  height: 30px;
  background: ${props => `${props.color || "#D9556d"}`};
  border: 0;
`;

export function FilterButton(props) {
  const value = useSelector(state => state.dictionaryState.filterState);
  const [color, setColor] = useState("#D9556d");
  const isInArray = element => element === props.text;
  const clickFunc = () => {
    const index = value.findIndex(isInArray);
    if (index === -1) {
      const result = value.concat([props.text]);
      props.onChange(result);
    } else {
      value.splice(index, 1);
      props.onChange(value);
    }
  };
  const isSelect = useMemo(() => {
    const index = value.findIndex(isInArray);
    if (index !== -1) {
      setColor("#A63247");
    } else {
      setColor("#D9556d");
    }
    console.log("tlfgod");
  }, [value.length]);
  return (
    <FilterBtn title={props.text} onClick={e => clickFunc()} color={color}>
      {props.text}
    </FilterBtn>
  );
}
