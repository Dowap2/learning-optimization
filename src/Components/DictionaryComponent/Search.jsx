import React, { useMemo } from "react";
import { useSelector } from "react-redux";

export function Search() {
  const value = useSelector(state => state.dictionaryState.filterState);
  const htmlTag = [];
  const createTag = useMemo(() => {
    for (let i = 0; i < value.length; i++) {
      htmlTag.push([
        <div>
          {value[i]}
          <button>x</button>
        </div>
      ]);
    }
  }, [value.length]);
  return <div>{htmlTag}</div>;
}
