import "./App.css";
// import { LazyloadComponent } from "./LazyloadComponent";
// import { UploadImage } from "./UploadImage";
import { TodoList } from "./TodoList";
// import { ClockComponent } from "./ClockComponent";
import { ClassComponent } from "./ClassComponent";

function App() {
  return (
    <div className="App">
      {/* <LazyloadComponent /> */}
      <TodoList />
      {/* <ClockComponent date={new Date()} />
      <button onClick={e => console.log(new Date())}></button> */}
      <ClassComponent />
      {/* <UploadImage /> */}
    </div>
  );
}

export default App;
