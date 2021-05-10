// import { LazyloadComponent } from "./LazyloadComponent";
// import { UploadImage } from "./UploadImage";
import { TodoList } from "./TodoList";
// import { ClockComponent } from "./ClockComponent";
import { ClassComponent } from "./ClassComponent";
import { Slider } from "./Slider";
import { AppHeader } from "./AppHeader";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router className="App">
      {/* <LazyloadComponent /> */}
      <AppHeader />
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
    </Router>
  );
}

export default App;
