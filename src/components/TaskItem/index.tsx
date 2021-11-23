import { ITask } from "../../store/modules/tasks/types";
import { Actions, ButtonTrash, Container, Content, TrashIcon } from './styles';

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
        <ButtonTrash>
          <TrashIcon />
        </ButtonTrash>
      </Actions>
    </Container>
  )
}

export default TaskItem
