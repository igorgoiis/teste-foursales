import { ITask } from "../../store/modules/tasks/types";
import { Actions, Container, Content } from './styles';

interface TaskItemProps {
  task: ITask;
}

function TaskItem({ task }: TaskItemProps) {
  return (
    <Container key={task.id}>
      <Content>
        <h3>{task.title}</h3>
        <span>{task.description}</span>
        <span>{task.category}</span>
      </Content>
      <Actions>
        <h1>t</h1>
      </Actions>
    </Container>
  )
}

export default TaskItem
