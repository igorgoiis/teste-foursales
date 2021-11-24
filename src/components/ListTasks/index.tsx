import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../../services/api";
import { ITask } from "../../store/modules/tasks/types";
import ListPages from "../ListPages";
import TaskItem from "../TaskItem";
import { Content, List } from "./styles";

function ListTasks() {
  const state = useSelector(state => state);
  const [personalTasks, setPersonalTasks] = useState<ITask[]>([]);
  const [professionalTasks, setProfessionalTasks] = useState<ITask[]>([]);
  const [personalIsCurrentPage, setPersonalIsCurrentPage] = useState(true);
  const [professionalIsCurrentPage, setProfessionalIsCurrentPage] = useState(false);

  console.log(state);
  
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
        handlePersonalList={handlePersonalIsCurrentPage}
        handleProfessionalList={handleProfessionalIsCurrentPage}
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