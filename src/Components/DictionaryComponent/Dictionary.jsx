import React from "react";
import { FilterContainer } from "./FilterContainer";
import { Search } from "./Search";
import { Item } from "./Item";
import { View } from "./View";

export function Dictionary() {
  return (
    <div>
      <FilterContainer />
      <Search />
      <Item />
      <View />
    </div>
  );
}
