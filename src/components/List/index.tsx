import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { ITask } from "../../store/modules/tasks/types";

function List() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    api.get('tasks').then(response => {
      setTasks(response.data);
    })
  }, []);

  return (
    <>
      <h1>Header</h1>

      {
        tasks.map(task => (
          <article key={task.id}>
            <strong>{task.title}</strong>{"  -  "}
            <span>{task.description}</span>{"  -  "}
            <span>{task.category}</span>
          </article>
        ))
      }
    </>
  )
}

export default List;