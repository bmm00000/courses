import React, { useCallback, useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

function App() {
  const { isLoading, error, sendRequest } = useHttp({
    method: "GET",
    url: "https://react-http-6b4a6.firebaseio.com/tasks.json",
  });
  const [tasks, setTasks] = useState([]);

  const getRequest = useCallback(async () => {
    const data = await sendRequest();
    const loadedTasks = [];
    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    }
    setTasks(loadedTasks);
  }, [sendRequest]);

  useEffect(() => {
    getRequest();
  }, [getRequest]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={sendRequest}
      />
    </React.Fragment>
  );
}

export default App;
