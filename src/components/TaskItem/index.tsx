import { useState } from "react";
import { ITask } from "../../store/modules/tasks/types";
import {
  Actions,
  ButtonTrash,
  Container,
  Content,
  TrashIcon,
  SaveIcon,
  Input,
  Select,
  TextArea
} from './styles';

interface TaskItemProps {
  task: ITask;
}

function TaskItem({ task }: TaskItemProps) {
  const [toogle, setToogle] = useState(true);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [category, setCategory] = useState(task.category);

  return (
    <>
    {
      toogle ? (
        <Container key={task.id} onDoubleClick={() => setToogle(false)}>
          <Content>
            <h3 className="title" >{task.title}</h3>
            <span className="description" >{task.description}</span>
            <span className="category" >{task.category}</span>
          </Content>
          <Actions>
            <ButtonTrash>
              <TrashIcon />
            </ButtonTrash>
          </Actions>
        </Container>
      ) :(
        <Container key={task.id} >
          <Content>
            <Input 
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === 'Escape')
                  setToogle(true);
              }}
            />

            <TextArea 
              name={`task${task.id}-description`} 
              id={`task${task.id}-description`}
              maxLength={100}
              value={description}
              onChange={e => setDescription(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === 'Escape')
                  setToogle(true);
              }}
            />

            <Select name={`task${task.id}-category`} id={`task${task.id}-category`} onChange={e => {
              console.log(e.target.value);
            }} >
                <option value="personal">Pessoal</option>
                <option value="work">Trabalho</option>
            </Select>
          </Content>
          <Actions>
            <ButtonTrash onClick={e => setToogle(true)}>
              <SaveIcon />
            </ButtonTrash>
          </Actions>
        </Container>
      )
    }
    </>
    
  )
}

export default TaskItem
