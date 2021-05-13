import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const SearchBar = styled.div`
  width: 800px;
  height: 40px;
  border: 1px solid #000;
`;
const Tag = styled.div`
  width: 80px;
  height: 20px;
  float: left;
  text-align: center;
`;

export function Search(props) {
  const value = useSelector(state => state.filterState);
  const [isTrueArray, setIsTrueArray] = useState([]);
  const [htmlTag, setHtmlTag] = useState([]);
  useEffect(() => {
    let isTrue = [];
    for (const key in value) {
      if (value[key] === true) {
        isTrue = isTrue.concat([key]);
      }
    }
    setIsTrueArray(isTrue);
  }, [value]);

  useEffect(() => {
    setHtmlTag([]);
    for (let i = 0; i < isTrueArray.length; i++) {
      setHtmlTag(htmlTag.concat([<Tag>{isTrueArray[i]}</Tag>]));
    }
  }, [isTrueArray]);

  return <SearchBar>{htmlTag}</SearchBar>;
}
