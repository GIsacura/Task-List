import CreateTask from "./components/CreateTask";
import Header from "./components/Header";
import SearchTask from "./components/SearchTask";
import TaskList from "./components/TaskList";
import UpdateTask from "./components/UpdateTask";
const Api = 'http://localhost:8000/'

function App() {
  return (
    <div>
      <Header Api={Api}/>
      <CreateTask Api={Api}/>
      <UpdateTask Api={Api}/>
      <SearchTask Api={Api}/>
      <TaskList Api={Api}/>
    </div>
  );
}

export default App;
