import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const FilterBtn = styled.button`
  margin: 10px 5px 5px 10px;
  width: 30px;
  height: 30px;
  background: ${props => `${props.color === true ? "#A63247" : "#D9556d"}`};
  border: 0;
`;

export function FilterButton(props) {
  const clickFunc = () => {
    props.value === true ? props.onChange(false) : props.onChange(true);
  };
  return (
    <FilterBtn
      title={props.text}
      onClick={e => clickFunc()}
      color={props.value}
    >
      {props.text}
    </FilterBtn>
  );
}
