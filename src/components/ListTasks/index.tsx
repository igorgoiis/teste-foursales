import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { ITask } from "../../store/modules/tasks/types";
import { List } from "./styles";

function ListTasks() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    api.get('tasks').then(response => {
      setTasks(response.data);
    })
  }, []);

  return (
    <List>
      {
        tasks.map(task => (
          <article key={task.id}>
            <strong>{task.title}</strong>{"  -  "}
            <span>{task.description}</span>{"  -  "}
            <span>{task.category}</span>
          </article>
        ))
      }
    </List>
  )
}

export default ListTasks;