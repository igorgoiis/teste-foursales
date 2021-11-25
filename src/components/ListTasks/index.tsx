import { useEffect, useState } from "react";
import api from "../../services/api";
import { ITask } from "../../store/modules/tasks/types";
import ListPages from "../ListPages";
import TaskItem from "../TaskItem";
import { Content, List } from "./styles";

interface ListTaslProps {
  onOpenNewTaskModal: () => void
}

function ListTasks({ onOpenNewTaskModal }: ListTaslProps) {
  const [personalTasks, setPersonalTasks] = useState<ITask[]>([]);
  const [professionalTasks, setProfessionalTasks] = useState<ITask[]>([]);
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

  useEffect(() => {
    api.get('tasks').then(response => {
      let personalTasks = response.data.filter((task: ITask) => task.category === 'personal');
      let professionalTasks = response.data.filter((task: ITask) => task.category === 'work');
      setPersonalTasks(personalTasks);
      setProfessionalTasks(professionalTasks);
    })
  }, []);

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
              ? personalTasks.map(task => <TaskItem key={task.id} task={task} />)
              : professionalTasks.map(task => <TaskItem key={task.id} task={task} />)
          }
        </List>
        
      </Content>
    </>
  )
}

export default ListTasks;