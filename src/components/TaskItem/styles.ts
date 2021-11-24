import styled from "styled-components";
import { FiTrash2, FiCheckCircle } from "react-icons/fi";

export const Container = styled.li`
  display: flex;
  justify-content: center;
  border: 1px solid var(--border);
  border-radius: 10px;
  box-shadow: 0px 0px 33px 5px var(--shadow);
  min-width: 560px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 85%;
  padding: 1rem 2rem;

  .title, .description, .category {
    color: var(--text-title);
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-basis: 15%;
  padding: 1rem 2rem;
`;

export const ButtonTrash = styled.button`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;

  &:hover {
    opacity: .8;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: .4rem .8rem;
  margin-bottom: 6px;
  background-color: var(--background);
  color: var(--text-title);

  &:focus, &:focus-visible {
    outline: 0.8px solid var(--text-title);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: .4rem .8rem;
  margin-bottom: 6px;
  background-color: var(--background);
  color: var(--text-title);

  &:focus, &:focus-visible {
    outline: 0.8px solid var(--text-title);
  }
`;

export const Select = styled.select`
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: .4rem .8rem;
  margin-bottom: 6px;
  background-color: var(--background);
  color: var(--text-title);

  &:focus, &:focus-visible {
    outline: 0.8px solid var(--text-title);
  }
`;

export const TrashIcon = styled(FiTrash2)`
  font-size: 25px;
  color: var(--text-title);
`;

export const SaveIcon = styled(FiCheckCircle)`
  font-size: 25px;
  color: var(--text-title);
`;