import { Container, Content, Page } from './styles'

interface ListPageProps {
  handlePersonalList: () => void;
  handleProfessionalList: () => void;
  personalActive: boolean;
  professionalActive: boolean;
}

function ListPages({
  handlePersonalList,
  handleProfessionalList,
  personalActive,
  professionalActive
}: ListPageProps) {
  return (
    <Container>
      <Content>
        <Page onClick={handlePersonalList} isActive={personalActive}>Pessoal</Page>
        <Page onClick={handleProfessionalList} isActive={professionalActive}>Trabalho</Page>
      </Content>
    </Container>
  )
}

export default ListPages
