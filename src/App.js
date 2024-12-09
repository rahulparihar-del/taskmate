import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AddTask from "./components/Tasklist/AddTask";
import ShowTask from "./components/Tasklist/ShowTask";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

function App() {
  const [taskList, setTaskList] = useState(() =>
    getLocalStorage("taskList", [])
  );
  const [task, setTask] = useState({});

  useEffect(() => {
    setLocalStorage("taskList", taskList);
  }, [taskList]);

  return (
    <div className="App">
      <Header />
      <AddTask
        taskList={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      />
      <ShowTask
        taskList={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      />
    </div>
  );
}

export default App;
