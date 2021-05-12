import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const SearchBar = styled.div`
  width: 800px;
  height: 40px;
  border: 1px solid #000;
`;
const Tag = styled.div`
  float: left;
`;

export function Search(props) {
  const value = useSelector(state => state.dictionaryState.filterState);
  const [htmlTag, setHtmlTag] = useState([]);
  const clickFunc = index => {
    value.splice(index, 1);
    props.onChange(value);
  };
  useEffect(() => {
    setHtmlTag([]);
    for (let i = 0; i < value.length; i++) {
      setHtmlTag(
        htmlTag.concat([
          <Tag>
            {value[i]}
            <button onClick={e => clickFunc(i)}>x</button>
          </Tag>
        ])
      );
    }
  }, [value.length]);
  return <SearchBar>{htmlTag}</SearchBar>;
}
