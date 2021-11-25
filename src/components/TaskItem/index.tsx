<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/modules/tasks/actions";
>>>>>>> fb03070449a50db764a4557eaa81e42e3a3d770c
import { ITask } from "../../store/modules/tasks/types";
import Checkbox from "@material-ui/core/Checkbox";
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
<<<<<<< HEAD
  const [checked, setChecked] = useState(task.done);
=======
  const dispatch = useDispatch();
>>>>>>> fb03070449a50db764a4557eaa81e42e3a3d770c
  const [toogle, setToogle] = useState(true);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [category, setCategory] = useState(task.category);

<<<<<<< HEAD
  const handleEditMode = () => {
    !checked && setToogle(false);
  };

  useEffect(() => {
    console.log(checked);
  }, [checked]);
  
=======
  const handleAddTask = useCallback((task: ITask) => {
    dispatch(addTask(task));
  }, [dispatch]);

>>>>>>> fb03070449a50db764a4557eaa81e42e3a3d770c
  return (
    <>
    {
      toogle ? (
        <Container key={task.id} onDoubleClick={handleEditMode} checked={checked}>
          <Checkbox checked={checked} onChange={() => {
            setChecked(!checked);
          }} />
          <Content>
            <h3 className="title" >{task.title}</h3>
            <span className="description" >{task.description}</span>
            <span className="category" >{task.category}</span>
          </Content>
          <Actions>
            <ButtonTrash disabled={checked}>
              <TrashIcon />
            </ButtonTrash>
          </Actions>
        </Container>
<<<<<<< HEAD
      ) :(
        <Container key={task.id} checked={checked} >
=======
      ):(
        <Container key={task.id} >
>>>>>>> fb03070449a50db764a4557eaa81e42e3a3d770c
          <Content>
            <Input 
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === 'Escape')
                  setToogle(true);
              }}
              disabled={checked}
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
              disabled={checked}
            />

            <Select 
              name={`task${task.id}-category`} 
              id={`task${task.id}-category`} 
              onChange={e => {
                console.log(e.target.value);
              }} 
              disabled={checked}
            >
              <option value="personal">Pessoal</option>
              <option value="work">Trabalho</option>
            </Select>
          </Content>
          <Actions>
            <ButtonTrash onClick={() => handleAddTask(task)}>
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
