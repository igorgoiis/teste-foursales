import { useState } from "react";
import { useSelector } from "react-redux";
import { IState } from "../../store";
import { ITask } from "../../store/modules/tasksPersonal/types";
import ListPages from "../ListPages";
import TaskItem from "../TaskItem";
import { Content, List } from "./styles";

interface ListTaslProps {
  onOpenNewTaskModal: () => void
}

function ListTasks({ onOpenNewTaskModal }: ListTaslProps) {
  const personalTasks = useSelector<IState, ITask[]>(state => state.tasksPersonal.tasks);
  const professionalTasks = useSelector<IState, ITask[]>(state => state.tasksWork.tasks);
  const [personalIsCurrentPage, setPersonalIsCurrentPage] = useState(true);
  const [professionalIsCurrentPage, setProfessionalIsCurrentPage] = useState(false);
  
  const handlePersonalIsCurrentPage = () => {
    setProfessionalIsCurrentPage(false);  
    setPersonalIsCurrentPage(true);
  };
  
  const handleProfessionalIsCurrentPage = () => {
    setPersonalIsCurrentPage(false);
    setProfessionalIsCurrentPage(true);  
  };

  return (
    <>
      <ListPages 
        personalActive={personalIsCurrentPage}
        professionalActive={professionalIsCurrentPage}
        onPersonalList={handlePersonalIsCurrentPage}
        onProfessionalList={handleProfessionalIsCurrentPage}
        onOpenNewTaskModal={onOpenNewTaskModal}
      />
      <Content>
        <List>
          { 
            personalIsCurrentPage
              ? (
                personalTasks.length !== 0 
                  ? personalTasks.map(task => <TaskItem key={task.id} task={task} />)
                  : <span>Não há tarefas pessoais cadastradas</span>
              )
              : (
                professionalTasks.length !== 0
                  ? professionalTasks.map(task => <TaskItem key={task.id} task={task} />)
                  : <span>Não há tarefas profissionais cadastradas</span>
              )
          }
        </List>
        
      </Content>
    </>
  )
}

export default ListTasks;