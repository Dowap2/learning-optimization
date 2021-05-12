// import { LazyloadComponent } from "./LazyloadComponent";
// import { UploadImage } from "./UploadImage";
import React, { useState } from "react";
import { TodoList } from "./TodoList";
// import { ClockComponent } from "./ClockComponent";
import { ClassComponent } from "./ClassComponent";
import { Slider } from "./Slider";
import { AppHeader } from "./AppHeader";
import { UserInfo } from "./UserInfo";
import { Dictionary } from "./Dictionary";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [id, setId] = useState("");
  return (
    <Router className="App">
      {/* <LazyloadComponent /> */}
      <AppHeader id={id} setId={setId} />
      <Route path="/todo">
        <TodoList />
      </Route>
      {/* <ClockComponent date={new Date()} />
      <button onClick={e => console.log(new Date())}></button> */}
      <Route path="/class">
        <ClassComponent />
      </Route>
      {/* <UploadImage /> */}
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
