import React, { useCallback, useState, useMemo } from "react";

export function TodoList() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  const [htmlList, setHtmlList] = useState([]);
  const [listLength, setListLength] = useState(0);

  const setListFunc = useCallback(todo => {
    setList(list => list.concat(todo));
    setTodo("");
  }, []);

  const addHtmlToList = useMemo(() => {
    for (const item in list) {
      console.log(list[item]);
      setHtmlList(htmlList.concat(<div>{list[item]}</div>));
    }
  }, [list]);

  const checkListLength = useMemo(() => {
    setListLength(list.length);
  }, [list]);

  return (
    <div>
      <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
      <button onClick={e => setListFunc(todo)}></button>
      <div>{htmlList}</div>
      <div>{"todo수 :" + listLength}</div>
      <button onClick={e => console.log(list)}></button>
    </div>
  );
}
