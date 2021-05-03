// import { LazyloadComponent } from "./LazyloadComponent";
// import { UploadImage } from "./UploadImage";
import { TodoList } from "./TodoList";
// import { ClockComponent } from "./ClockComponent";
import { ClassComponent } from "./ClassComponent";
import { Slider } from "./Slider";

function App() {
  return (
    <div className="App">
      {/* <LazyloadComponent /> */}
      <TodoList />
      {/* <ClockComponent date={new Date()} />
      <button onClick={e => console.log(new Date())}></button> */}
      <ClassComponent />
      {/* <UploadImage /> */}
      <Slider />
    </div>
  );
}

export default App;
