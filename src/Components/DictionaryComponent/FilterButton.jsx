import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const FilterBtn = styled.button`
  margin: 10px 5px 5px 10px;
  width: 30px;
  height: 30px;
  background: ${props => `${props.color === 1 ? "#A63247" : "#D9556d"}`};
  border: 0;
`;

export function FilterButton(props) {
  const value = useSelector(state => state.dictionaryState.filterState);
  const [isClick, setIsClick] = useState(0);

  const isInArray = element => element === props.text;
  const clickFunc = () => {
    const index = value.findIndex(isInArray);
    if (index === -1) {
      const result = value.concat([props.text]);
      setIsClick(1);
      props.onChange(result);
    } else {
      value.splice(index, 1);
      setIsClick(0);
      props.onChange(value);
    }
  };
  return (
    <FilterBtn title={props.text} onClick={e => clickFunc()} color={isClick}>
      {props.text}
    </FilterBtn>
  );
}
