import { Content, Page } from './styles'

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
    <Content>
      <Page onClick={handlePersonalList} isActive={personalActive}>Pessoal</Page>
      <Page onClick={handleProfessionalList} isActive={professionalActive}>Trabalho</Page>
    </Content>
  )
}

export default ListPages
