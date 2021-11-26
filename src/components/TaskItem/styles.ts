import styled, { css } from "styled-components";
import { darken, transparentize } from 'polished';
import { FiTrash2, FiCheckCircle, FiEdit2 } from "react-icons/fi";

interface CheckProps {
  checked: boolean;
}

interface RadioBoxProps {
  isActive: boolean;
}

export const Container = styled.li<CheckProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 560px;
  padding: 1rem 2rem;
  border: 1px solid var(--border);
  border-radius: 10px;
  box-shadow: 0px 0px 33px 5px var(--shadow);
  column-gap: 20px;

  ${props => props.checked && css`
    opacity: .5;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    .title, .description, .category {
      opacity: .5;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      text-decoration: line-through;
    }
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 85%;

  .title, .description, .category {
    color: var(--text-title);
    word-break: break-all;
    word-wrap: break-word;
  }

  textarea + span {
    font-size: .8rem;
    color: var(--text-body);
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 10px;
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

export const ButtonEdit = styled.button`
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
  padding: 0 1.5rem;
  height: 4rem;

  font-weight: 400;
  font-size: 1rem;
  color: var(--text-title);

  border-radius: 0.25rem;
  border: 1px solid #d7d7d7;

  background-color: #e7e9ee;

  &::placeholder {
      color: var(--text-body);
  }

  & + input {
      margin-top: 1rem;
  }

  &:focus, &:focus-visible {
    outline: 0.8px solid var(--text-title);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem 1.5rem;
  margin: 1rem 0 0 !important;
  height: 4rem;

  font-weight: 400;
  font-size: 1rem;
  color: var(--text-title);

  border-radius: 0.25rem;
  border: 1px solid #d7d7d7;

  background-color: #e7e9ee;

  &::placeholder {
      color: var(--text-body);
  }

  textarea + span {
    font-size: .8rem;
    color: var(--text-body);
  }

  &:focus, &:focus-visible {
    outline: 0.8px solid var(--text-title);
  }
`;

export const TrashIcon = styled(FiTrash2)`
  font-size: 25px;
  color: var(--text-title);
`;

export const EditIcon = styled(FiEdit2)`
  font-size: 25px;
  color: var(--text-title);
`;

export const SaveIcon = styled(FiCheckCircle)`
  font-size: 25px;
  color: var(--text-title);
`;

export const TaskCategoryContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: .5rem;
`;

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: ${({ isActive }) => isActive ? '1px solid var(--blue)' : '1px solid #d7d7d7'};
    border-radius: .25rem;
    background-color: ${({ isActive }) => isActive ? transparentize(.9, '#2356AD') : 'transparent'};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color ease-in-out .2s;

    &:hover {
        border-color: ${({isActive}) => isActive ? 'var(--blue)' : darken(0.1, '#d7d7d7')} 
    }
    
    span {
        display: inline-block;
        font-size: 1rem;
        color:var(--text-title);
    }
`;