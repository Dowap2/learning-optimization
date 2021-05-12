import React from "react";
import { Filter } from "./Filter";
import { Search } from "./Search";
import { Item } from "./Item";
import { View } from "./View";

export function Dictionary() {
  return (
    <div>
      <Filter />
      <Search />
      <Item />
      <View />
    </div>
  );
}
