import { useState } from "react";
import { useDispatch } from "react-redux";
import Checkbox from "@material-ui/core/Checkbox";

import { addTaskPersonal, checkUncheckPersonalTask, deleteTaskPersonal, editTaskPersonal } from "../../store/modules/tasksPersonal/actions";
import { addTaskWork, checkUncheckWorkTask, deleteTaskWork, editTaskWork } from "../../store/modules/tasksWork/actions";
import { ITask } from "../../store/modules/tasksPersonal/types";
import {
  Actions,
  ButtonTrash,
  ButtonEdit,
  Container,
  Content,
  TrashIcon,
  SaveIcon,
  Input,
  TextArea,
  EditIcon,
  TaskCategoryContainer,
  RadioBox
} from './styles';

interface TaskItemProps {
  task: ITask;
}

function TaskItem({ task }: TaskItemProps) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(task.done);
  const [toogle, setToogle] = useState(true);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [category, setCategory] = useState(task.category);

  const handleEditMode = () => {
    !checked && setToogle(false);
  };
  
  const handleEditTask = () => {
    if (task.category === category) {
      if (task.category === 'work') {
        dispatch(editTaskWork({
          id: task.id,
          title,
          description,
          category,
          done: checked
        }));
      } else {
        dispatch(editTaskPersonal({
          id: task.id,
          title,
          description,
          category,
          done: checked
        }));
      }
      setToogle(true);
    } else {
      if (task.category === 'work') {
        dispatch(addTaskPersonal({
          id: task.id,
          title,
          description,
          category,
          done: checked
        }));
        dispatch(deleteTaskWork(task));
      } else {
        dispatch(addTaskWork({
          id: task.id,
          title,
          description,
          category,
          done: checked
        }));
        dispatch(deleteTaskPersonal(task));
      }
      setToogle(true);
    }
  };

  const handleDoneTask = () => {
    if (task.category === 'personal') {
      dispatch(checkUncheckPersonalTask(task));
    } else {
      dispatch(checkUncheckWorkTask(task));
    }
    setChecked(!checked);
  }

  const handleDeleteTask = () => {
    category === 'personal'
      ? dispatch(deleteTaskPersonal(task))
      : dispatch(deleteTaskWork(task));
  }

  return (
    <>
    {
      toogle ? (
        <Container key={task.id} onDoubleClick={handleEditMode} checked={checked}>
          <Checkbox checked={checked} onChange={handleDoneTask} />
          <Content>
            <h3 className="title" >{task.title}</h3>
            <span className="description" >{task.description}</span>
            <span className="category" >{task.category === 'personal' ? 'Pessoal' : 'Trabalho'}</span>
          </Content>
          <Actions>
            <ButtonEdit disabled={checked} onClick={handleEditMode}>
              <EditIcon />
            </ButtonEdit>
            <ButtonTrash disabled={checked} onClick={handleDeleteTask} >
              <TrashIcon />
            </ButtonTrash>
          </Actions>
        </Container>
      ) :(
        <Container key={task.id} checked={checked} >
          <Content>
            <Input 
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === 'Escape')
                  handleEditTask();
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
                  handleEditTask();
              }}
              disabled={checked}
            />
            <span>Caracteres:  {description.length}/100</span>

            <TaskCategoryContainer>
              <RadioBox
                type="button"
                isActive={category === 'personal'}
                onClick={() => { setCategory('personal') }}
              >
                <span>Pessoal</span>
              </RadioBox>
              <RadioBox
                type="button"
                isActive={category === 'work'}
                onClick={() => { setCategory('work') }}
              >
                <span>Trabalho</span>
              </RadioBox>
            </TaskCategoryContainer>
          </Content>
          <Actions>
            <ButtonTrash onClick={handleEditTask}>
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
