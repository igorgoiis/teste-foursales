import { ButtonAddTask, Container, Content, Page } from './styles'

interface ListPageProps {
  onPersonalList: () => void;
  onProfessionalList: () => void;
  onOpenNewTaskModal: () => void;
  personalActive: boolean;
  professionalActive: boolean;
}

function ListPages({
  onPersonalList,
  onProfessionalList,
  onOpenNewTaskModal,
  personalActive,
  professionalActive
}: ListPageProps) {
  return (
    <Container>
      <Content>
        <div>
          <Page onClick={onPersonalList} isActive={personalActive}>Pessoal</Page>
          <Page onClick={onProfessionalList} isActive={professionalActive}>Trabalho</Page>
        </div>
        <ButtonAddTask onClick={onOpenNewTaskModal}>
          <span>Nova Tarefa</span>
        </ButtonAddTask>

        
      </Content>
    </Container>
  )
}

export default ListPages
