import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { Container, TaskCategoryContainer, RadioBox } from './styles';
import { FiPlus } from "react-icons/fi";

interface NewTaskModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

function NewTaskModal({ isOpen, onRequestClose }: NewTaskModalProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('personal');

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    console.log({
      title,
      description,
      category
    });
  }

  return (
    <Modal 
      isOpen={isOpen}   
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <FiPlus />
      </button>
      <Container  onSubmit={handleCreateNewTask}>
        <h2>Cadastrar Tarefa</h2>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <textarea
          placeholder="Descrição"
          maxLength={100}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />



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

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}

export default NewTaskModal;
