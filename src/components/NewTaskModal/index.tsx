import Modal from 'react-modal';
import { Container } from './styles';

interface NewTaskModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

function NewTaskModal({ isOpen, onRequestClose }: NewTaskModalProps) {
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>Cadastrar Tarefa</h2>
        <input
          type="text"
          placeholder="Título"
        />
        
        <input placeholder="Descrição" maxLength={100} />

        <input placeholder="Categoria" />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}

export default NewTaskModal;
