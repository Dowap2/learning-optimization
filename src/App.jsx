import { LazyloadComponent } from "./Components/ImgComponent/LazyloadComponent";
import { UploadImage } from "./Components/ImgComponent/UploadImage";
import React, { useState } from "react";
import { TodoList } from "./Components/TodoListComponent/TodoList";
import { ClockComponent } from "./Components/ClockComponent/ClockComponent";
import { Slider } from "./Components/SlideComponent/Slider";
import { AppHeader } from "./AppHeader";
import { UserInfo } from "./Components/UserComponent/UserInfo";
import { Dictionary } from "./Components/DictionaryComponent/Dictionary";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [id, setId] = useState("");
  return (
    <Router className="App">
      <AppHeader id={id} setId={setId} />
      <Route path="/img">
        <LazyloadComponent />
        <UploadImage />
      </Route>
      <Route path="/todo">
        <TodoList />
      </Route>
      <Route path="/class">
        <ClockComponent />
      </Route>
      <Route path="/slider">
        <Slider />
      </Route>
      <Route path={`/${id}`}>
        <UserInfo info={id} />
      </Route>
      <Route path="/dictionary">
        <Dictionary />
      </Route>
    </Router>
  );
}

export default App;
